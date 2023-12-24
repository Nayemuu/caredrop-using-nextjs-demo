import Articles from "./Articles";

export const metadata = {
  title: "Articles",
  description: "This is Articles page",
};

export default function Home() {
  return (
    <>
      <div className="container">
        <div>This is articles page</div>
        <Articles />
      </div>
    </>
  );
}
