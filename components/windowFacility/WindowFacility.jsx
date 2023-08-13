'use client'
import React from 'react';
import clsx from "clsx";

export const WindowFacility = ({facility,onClose,type}) => {
    return (
        <div className="w-full h-[100%] p-[20px] shadow-[0 4px 8px rgb(0, 0, 0, 0.1)] z-[999] fixed top-0 left-0 bg-main-white ">
            <div onClick={onClose} className=" text-[20px] cursor-pointer ">
                <img className="sm:w-5 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>

            <div className=" w-full mt-[50px] flex flex-col justify-center items-start">

                <div className="w-full h-[300px]  ">
                    <h2 className="w-full font-bold text-[0.9rem]">امکانات رفاهی {type}</h2>
                    <ul className="w-full h-[250px] flex justify-between items-start flex-col mt-[20px] ">
                        {facility.map((item) => {
                            return (
                                <li key={item.name} className={clsx("w-full flex justify-start items-center",
                                    {"line-through": !item.exist},
                                    {"text-main-light-silver": !item.exist}
                                )}>
                                    <span className="w-[40px]"><img className="w-[24px] h-[24px]" src={item.icon} alt={item.alt}/></span>
                                    <span className="font-bold text-sm">{item.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

