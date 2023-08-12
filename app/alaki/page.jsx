"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useState } from "react";

const Alaki = () => {
  const arr = [1, 2, 3, 4, 5];
  const [isHover, setIsFavor] = useState();
  const triggerHover = (item) => {
    setIsFavor(item);
  };
  const backToDefault = () => {
    setIsFavor("");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center gap-3">
      <div
        onMouseEnter={() => triggerHover(1)}
        onMouseLeave={backToDefault}
        className={clsx(
          "w-[160px] h-[160px] bg-main-blue flex justify-center items-center ",
          {
            "opacity-100 duration-700 ease-in-out":
              isHover == 1 && isHover != "",
          },
          {
            "opacity-50 duration-700 ease-in-out":
              isHover !== 1 && isHover != "",
          },
          { "opacity-100 duration-700 ease-in-out": isHover == "" }
        )}
      >
        {1}
      </div>
      {arr
        .filter((item, index) => index !== 0)
        .map((item) => {
          return (
            <div
              onMouseEnter={() => triggerHover(item)}
              onMouseLeave={backToDefault}
              className={clsx(
                "w-12 h-12 bg-main-blue flex justify-center items-center ",
                {
                  "opacity-100 duration-700 ease-in-out":
                    isHover == item && isHover != "",
                },
                {
                  "opacity-50 duration-700 ease-in-out":
                    isHover !== item && isHover != "",
                },
                { "opacity-100 duration-700 ease-in-out": isHover == "" }
              )}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default Alaki;
