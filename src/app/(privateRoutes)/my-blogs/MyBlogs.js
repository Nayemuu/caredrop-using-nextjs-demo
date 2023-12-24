import ArticleCard from "@/Components/Articles/ArticleCard";
import { cookies } from "next/headers";

async function getData(access_token) {
  // console.log('access_token = ', access_token);
  if (access_token) {
    const res = await fetch(
      "https://caredrop.api-care-box.click/care-drop/v1/blog/my-blog-list/?limit=6&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
      //{ cache: "no-store" }
      // { next: { revalidate: 10 } }
      { next: { tags: ["MyBlogList"] } }
    ); // { next: { revalidate: value in second} }
    if (!res.ok) {
      // console.log("res = ", res);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    // console.log("data = ", data);
    //console.log("Article page api called");

    return data;
  } else return {};
}

const MyBlogs = async () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  // console.log("access_token = ", access_token);
  // console.log("access_token = ", access_token.value);

  const data = await getData(access_token?.value ? access_token.value : "");

  // console.log("A request is made in articles route");

  // const contact = await getContacts();

  return access_token?.value && data?.results ? (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-y-[20px] gap-x-[30px] main-article-section">
        {data.results.map((cardItem) => (
          <ArticleCard key={cardItem.id} cardDetails={cardItem} />
        ))}
      </div>
    </>
  ) : null;
};

export default MyBlogs;
