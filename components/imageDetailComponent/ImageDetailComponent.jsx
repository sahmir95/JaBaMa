'use client'
import React, {useState} from "react";
import clsx from "clsx";

export const ImageDetailComponent = ({data}) => {

    const [activeMouse, setActiveMouse] = useState(null)
    const [isHover, setIsHover] = useState("")
    const handleMouseEnter = (index) => {
        setIsHover(index)
    };

    const handleMouseLeave = () => {
        setIsHover("")
    };

    return (
        <div
            className="w-full h-[410px] flex gap-x-[10px] mt-[20px] m-2 transition duration-300 ease-in-out cursor-pointer"
        >
            <div className="w-[52%] h-full"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave()}
            >
                <img className={clsx(
                    "w-full h-full rounded-r-[10px] hover:rounded-[10px]",
                    {"opacity-100 duration-700 ease-in-out": 4 === isHover && isHover !== ""},
                    {"opacity-50 duration-900 ease-in-out": 4 !== isHover && isHover !== ""},
                    {"opacity-100 duration-700 ease-in-out": isHover === ""},
                )}
                     src={data.images[0]} alt="image-0"/>
            </div>
            <div className="w-[48%] h-full flex flex-wrap gap-[10px]">
                {data.images.filter((item, index) => index > 0 && index < 5).map((item, index) => {
                    return (
                        <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} className="w-[49%] h-[200px]">
                            <img className={clsx(
                                "w-full h-[200px] cursor-pointer",
                                {"opacity-100 duration-700 ease-in-out": index == isHover && isHover !== ""},
                                {"opacity-50 duration-700 ease-in-out": index !== isHover && isHover !== ""},
                                {"opacity-100 duration-700 ease-in-out": isHover === ""},
                            )}
                                 src={item} alt={`image ${index + 1}`}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

