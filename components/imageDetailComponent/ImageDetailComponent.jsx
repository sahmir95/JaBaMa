'use client'
// import React, {useState} from "react";
import clsx from "clsx";

export const ImageDetailComponent = ({data}) => {
    // const arr = Object.entries(data);


    // const [activeMouse,setActiveMouse]=useState(-1)
    //
    // const handleMouseEnter = (index) => {
    //     setActiveMouse(index)
    // };
    //
    // const handleMouseLeave = () => {
    //     setActiveMouse(-1)
    // };

    return (
        <div className="w-full h-full flex items-center gap-x-[10px] mt-[20px]">
            <div className="w-[52%]">
                <img className="w-full " src={data.images[0]} alt="image-0"/>
            </div>
            <div className="w-[50%] h-full flex flex-wrap items-center gap-[10px]">
        {data.images.filter((item,index) => index > 0 && index < 5).map((item,index) => {
                return (
                        <div key={index} className="w-[45%] h-full">
                            <img className="w-full" src={item} alt="image-0"/>
                        </div>
                )

            })}
            </div>
        </div>
    );
}

