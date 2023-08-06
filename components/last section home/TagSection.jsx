"use client";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useState } from "react";

const TagSection = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full   sm:px-5 lg:px-20 flex flex-col gap-5 mt-7 sm:mb-[106px] lg:mb-0 lg:pb-0">
      <p className="font-bold">از شمال تا جنوب ایران، جاباما جوره</p>
      <div
        className={clsx("w-full flex gap-2 flex-wrap  overflow-hidden", {
          "sm:h-[64px]": !isOpen,
        })}
      >
        {data && data.map((item) => {
          return (
            <p className="lg:h-[28px] lg:flex lg:items-center rounded-2xl font-medium text-xs text-main-steel-gray py-1 lg:py-0 px-2 text-center bg-main-light-silver">
              اجاره ویلا در {item.city}
            </p>
          );
        })}
      </div>
      <div className="w-full flex justify-start  lg:px-20 ">
        <button
          onClick={triggerText}
          className="font-medium text-xs flex items-center gap-1 lg:hidden"
        >
          {isOpen ? "بستن" : "مشاهده همه"}
          <Icon
            icon="icon-park-outline:up"
            width="16"
            rotate={isOpen ? 0 : 2}
          />
        </button>
      </div>
    </div>
  );
};

export default TagSection;
