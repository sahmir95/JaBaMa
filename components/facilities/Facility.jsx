"use client";
import { WindowFacility } from "@/components/windowFacility/WindowFacility";
import { useState } from "react";
import clsx from "clsx";

export const Facility = ({ facility, type }) => {
  const [otherFacilities, setOtherFacility] = useState(false);

  const handleOpen = () => {
    setOtherFacility(true);
  };

  const handleClose = () => {
    setOtherFacility(false);
  };


  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full h-[300px] lg:h-auto  ">
          <h2 className="w-full font-bold text-[0.9rem]">
            امکانات رفاهی {type}
          </h2>
          <ul className="w-full h-[250px] flex justify-between items-start flex-col mt-[20px]
            lg:w-[60%] lg:flex-row lg:flex-wrap lg:h-[180px]">
            {facility && [...facility].sort((a,b) => b.exist - a.exist).map((item) => {
              return (
                  <li
                      key={item.name}
                      className={clsx(
                          "w-full flex justify-start items-center lg:justify-between" +
                          " lg:w-[48%] lg:flex-row-reverse",
                          { "line-through ": !item.exist },
                          { "text-main-light-silver": !item.exist }
                      )}
                  >
                    <span className="w-[40px]">
                      <img
                          className="w-[25px] h-[25px]"
                          src={item.icon}
                          alt={item.alt}
                      />
                    </span>
                    <span className="font-bold text-sm">{item.name}</span>
                  </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full flex justify-center items-center lg:justify-start">
          <button
              onClick={handleOpen}
              className="w-full px-[20px] py-[8px] mt-[20px] cursor-pointer shadow-none border-solid border-[1px]
              rounded-[10px] lg:w-[200px] lg:text-[0.7rem] lg:font-bold flex justify-center items-center gap-x-[4px]"
          >
            <div className="text-sm text-center font-light lg:text-[0.7rem] lg:font-bold">مشاهده همه امکانات</div>
            <div className="text-sm text-center font-light lg:text-[0.7rem]">(8 مورد)</div>
          </button>
        </div>
      </div>
      {otherFacilities && <WindowFacility facility={facility} type={type} onClose={handleClose} isOpen={handleOpen}/>}
    </div>
  );
};
