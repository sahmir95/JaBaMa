"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useState } from "react";
import "./lastSection.css";

const LastSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-full mt-7 flex flex-col gap-4 lg:mt-10">
        <p className="w-full px-4 lg:px-20 font-medium text-base">
          اجاره ویلا از جاباما
        </p>
        <p
          className={clsx(
            { "text-box": !isOpen },
            "text-main-slate-gray px-4 lg:px-20",
            { "w-full font-medium text-[0.875rem]": isOpen }
          )}
        >
          سفر همیشه با خودش یک "حالِ خوش" دارد، یا لبریز از انرژی هستی و دل به
          جاده می‌زنی ‌یا سفر می‌کنی تا این "حالِ خوش" را در جایی دورتر و زیر
          آسمانی آبی‌تر پیدا کنی. اگر اینجایی، یعنی به دنبال همین "حالِ خوشِ
          سفر" آمده‌ای! اینجا دستت برای اجاره ویلا در هر جای ایران و با هر
          امکاناتی باز است؛ به فکر اجاره ویلا در شمال برای خوشگذرانی لب دریا
          هستی؟ یک کلبه جنگلی دنج یا ویلا استخردار برای سفر با دوستان می‌خواهی؟
          شاید هم یک سوئیت در کیش برای سفر خانوادگی؟ از بین صدها اقامتگاه‌ها در
          جاباما با دیدن تصاویر، خواندن نظرات مهمان‌های قبلی و مقایسه قیمت‌ها و
          امکانات، بهترینش را انتخاب کن. حالا که خیالت از یک جای عالی با یک
          میزبان مهمان‌نواز و پشتیبانی کامل جاباما از لحظه رزرو تا پایان سفر
          راحت است، می‌توانی برای هر ثانیه حالِ خوش در سفر برنامه‌ریزی کنی!
        </p>
      </div>
      <div className="w-full flex justify-start pt-4 px-4 lg:px-20 relative z-10">
        <button
          onClick={triggerText}
          className="font-medium text-xs flex items-center gap-1"
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

export default LastSection;
