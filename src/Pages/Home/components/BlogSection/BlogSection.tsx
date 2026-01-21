import React from "react";
import CardBlog from "../../../../Components/CardBlog";

const BlogSection = () => {
  return (
    <div className="py-20">
      <div className="mt-15">
        <div>
          <div className="bg-[#3BD4F21A] rounded-[20px] w-[122.68px] md:w-[128.73px] mx-auto">
            <div className="py-2 px-4 text-center bg-inherit border border-[#FFFFFF29] rounded-[20px] text-white text-[15px] md:text-base font-semibold leading-[1.4em]">
              Our Blog
            </div>
          </div>
        </div>
        <div className="pt-10 mb-[50px] max-w-[767px] w-full mx-auto">
          <h2 className="text-[26px] md:text-[42px] lg:text-[48px] text-center text-white leading-[1.3em] font-[krona_one] font-semibold">
            Read The Latest Trends in Cybersecurity
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
        <CardBlog />
      </div>
    </div>
  );
};

export default BlogSection;
