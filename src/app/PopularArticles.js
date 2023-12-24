"use client";

import ArticleCard from "@/Components/Articles/ArticleCard";
import ArticleCardLoader from "@/Components/Articles/ArticleCardLoader";
import { useArticlesPagePopularArticlesQuery } from "@/Redux/features/ArticlesPage/ArticlesPageApi";

const PopularArticles = () => {
  const { isLoading, isSuccess, data } = useArticlesPagePopularArticlesQuery(
    { limit: 6, offset: 0 },
    { refetchOnMountOrArgChange: true }
  );

  //console.log(isLoading, isSuccess, data);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-y-[20px] gap-x-[30px] main-article-section">
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-y-[20px] gap-x-[30px] main-article-section">
        {data.results.map((cardItem) => (
          <ArticleCard key={cardItem.id} cardDetails={cardItem} />
        ))}
      </div>
    );
  }
};

export default PopularArticles;
