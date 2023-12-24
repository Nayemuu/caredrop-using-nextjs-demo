"use client";

import moment from "moment";

function ArticlesDetailsTitleSection({ data }) {
  return (
    <>
      <div className="flex flex-wrap gap-x-3 md:gap-x-[20px] gap-y-[8px] items-center">
        <div className="text-primary text-base md:text-lg lg:text-xl font-semibold lg:leading-[23.87px]">
          Topics -{" "}
        </div>
        {data.category.map((categoryItem, index) => (
          <div
            className="bg-primary inline-block px-[8px] md:px-[12px] py-[4px] md:py-[6px] rounded-[5px]  text-white text-xs sm:text-sm md:text-base lg:text-xl font-normal lg:leading-[23.87px] topicShadow"
            key={index}
          >
            {categoryItem.name}
          </div>
        ))}

        <div className="text-[#757575] text-xs sm:text-sm md:text-base xl:text-lg font-normal leading-[21.48px]">
          {data?.published_at
            ? moment(data.published_at).fromNow()
            : "In Review"}
        </div>
      </div>

      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-[2.188rem] font-semibold leading-[21.48px] lg:leading-[32px] xl:leading-[38px] xxl:leading-[41.77px] mt-[18px] sm:mt-[22px]">
        {data?.title ? data.title : "title"}
      </div>
    </>
  );
}

export default ArticlesDetailsTitleSection;
