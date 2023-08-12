'use client'
import React from 'react';

const MyComp =({ title, icon, desc, showBorder })=> {
    const hasBorder = showBorder ? "border-b border-solid border-main-light-gray" : "";
    return (
      <div className="flex items-center pt-3">
        <div className="ml-3">
          <span className="mr-2 w-8 h-8 bg-main-light-grayish-white rounded flex items-center justify-center text-sm">
            {icon}
          </span>
        </div>
        <div className={hasBorder}>
          <span className="block font-bold text-[14px] text-main-deep-teal mb-2">{title}</span>
          <p className="text-[10px] font-light text-main-deep-teal mb-3">{desc}</p>
        </div>
      </div>
    );
  }
export default MyComp;