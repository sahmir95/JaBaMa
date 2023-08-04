'use client'
import React from 'react';

export const WindowContent = ({text,onClose}) => {
    return (
        <div className="w-full h-[100%] p-[20px] shadow-[0 4px 8px rgb(0, 0, 0, 0.1)] z-[999] fixed top-0 left-0 bg-main-slate-gray ">
            <div onClick={onClose} className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer">
                <img className="sm:6 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
};

