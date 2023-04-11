"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/pages/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const togglOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className=" relative">
      <div className="flex items-center gap-3">
        <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          당신의 공간을 에어비엔비하세요
        </div>
        <div onClick={togglOpen} className="p-4 md:py-1 md:px-2 border-gray-300 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col curosr-pointer">
            <>
              <MenuItem onClick={registerModal.onOpen} label="회원가입" />
              <MenuItem onClick={() => {}} label="로그인" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
