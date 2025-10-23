import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function FilterArticle() {
  return (
    <div>
      <div className="flex flex-col px-25 gap-5">
        <h1 className="text-8xl text-[#647403] font-[synebold] pt-15 uppercase">
          Pasta
        </h1>
        <div className="flex items-center gap-10 justify-center">
          <div className="w-full  h-[1.5px] bg-[#647403]"></div>
        </div>
        <div className="flex justify-between text-[28px] font-[syneregular] ">
          <h3 className="">Filter article</h3>
          <h3>8 items</h3>
        </div>

        <div className="flex gap-10">
          <select className="w-full max-w-md px-2 bg-[#FFFEF6] hover:bg-[#647403] hover:text-white  text-lg font-[synebold]  py-3 rounded-full ">
            <div className="">
              <option>Popular</option>
              <option>Latest</option>
              <option>Trending</option>
            </div>
          </select>

          <select className="w-full max-w-md px-2 bg-[#FFFEF6] hover:bg-[#647403] hover:text-white  text-lg font-[synebold]  py-3 rounded-full">
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterArticle;
