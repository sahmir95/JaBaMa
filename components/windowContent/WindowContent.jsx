'use client'
import React from 'react';
import clsx from "clsx";

export const WindowContent = ({text,onClose,type,isOpen}) => {
    return (
        <div className={clsx(
            " fixed top-0 left-0 w-full h-full flex justify-center bg-main-white items-center lg:bg-main-silver lg:bg-opacity-50 z-20",
            {"hidden" : !isOpen},
            {"block h-[100%] top-0 bg-main-white" : isOpen}
        )}>
            <div className="w-[500px] h-[500px] lg:bg-main-white p-6 rounded-[8px] shadow-lg scroll">
                <div onClick={onClose} className=" text-[20px] cursor-pointer">
                    <img className="sm:w-5 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
                </div>
                <div className=" w-full mt-[50px] flex flex-col justify-center items-start lg:mt-0">
                    <div className="w-full font-bold text-[1.1rem]">توضیحات {type} </div>
                    <div className="w-fit mt-[10px] font-light text-[0.6]">{text}</div>
                </div>
            </div>
        </div>
    );
};

