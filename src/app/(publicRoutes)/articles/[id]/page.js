import React from "react";
import ArticlesDetailsTitleSection from "./ArticlesDetailsTitleSection";
import Image from "next/image";

async function getData(blogId) {
  const res = await fetch(
    `https://caredrop.api-care-box.click/care-drop/v1/blog/blog-details/${blogId}/`,
    { cache: "no-store" }
    // { next: { revalidate: 60 * 24 } }
  ); // { next: { revalidate: value in second} }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  //   console.log("data = ", data);

  return data;
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);

  return {
    title: data.title,
    description: "This is Article Details page",
  };
}

const ArticlesDetailsPage = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="container">
      <div>blog id - {params.id}</div>
      <ArticlesDetailsTitleSection data={data} />
      <div className="w-full bg-[#F3EBF3] rounded-xl aspect-[700/408] relative mt-[20px] sm:mt-[24px]">
        <Image
          fill
          src={data.post_image}
          alt="captionImage"
          className="object-cover rounded-xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8/OVYPQAH/QL+9KZjmgAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export default ArticlesDetailsPage;
