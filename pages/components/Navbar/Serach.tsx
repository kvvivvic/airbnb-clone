"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Serach = () => {
  return (
    <div
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:sha
    transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className=" text-sm font-medium px-6">어디든지</div>
        <div className="hidden sm:block text-sm font-medium px-6 border-x-[1px] flex-1 text-center">언제든 일주일</div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">게스트 추가</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serach;
