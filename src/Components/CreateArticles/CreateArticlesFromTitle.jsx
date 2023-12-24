import React from 'react';

function CreateArticlesFromTitle({ children }) {
  return (
    <div className="text-base md:text-xl lg:text-[1.563rem] font-semibold leading-[29.83px] mb-[10px]  md:mb-[15px] lg:mb-[20px] xl:mb-[25px] xxl:mb-[30px]">
      {children}
    </div>
  );
}

export default CreateArticlesFromTitle;
