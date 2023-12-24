import ArticleCardLoader from "@/Components/Articles/ArticleCardLoader";
import React from "react";

function loading() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-y-[20px] gap-x-[30px] main-article-section">
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
      </div>
    </div>
  );
}

export default loading;
