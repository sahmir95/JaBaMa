'use client'
import React from 'react';

export const WindowContent = ({text,onClose,type}) => {
    return (
        <div className="w-full h-[100%] p-[20px] shadow-[0 4px 8px rgb(0, 0, 0, 0.1)] z-[999] fixed top-0 left-0 bg-main-white ">
            <div onClick={onClose} className=" text-[20px] cursor-pointer">
                <img className="sm:w-5 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>
            <div className=" w-full mt-[50px] flex flex-col justify-center items-start">
                <div className="w-full font-bold text-[1.1rem]">توضیحات {type} </div>
                <div className="w-fit mt-[10px] font-light text-[0.6] ">{text}</div>
            </div>
        </div>
    );
};

