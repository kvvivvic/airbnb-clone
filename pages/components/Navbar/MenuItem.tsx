"use client";
import React, { FC } from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className="px-4 py-4 hover:bg-neutral-100 transition font-semibold hover:cursor-pointer">
      {label}
    </div>
  );
};

export default MenuItem;
