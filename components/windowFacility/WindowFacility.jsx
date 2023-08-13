'use client'
import React from 'react';
import clsx from "clsx";

export const WindowFacility = ({facility,onClose,type,isOpen}) => {
    return (
        <div className={clsx(
            " fixed top-0 left-0 w-full lg:h-full flex justify-center bg-main-white items-center lg:bg-main-silver lg:bg-opacity-50 lg:z-20 z-[60]",
            {"hidden" : !isOpen},
            {"block h-[100%] top-0 bg-main-white" : isOpen}
        )}>
            <div className="lg:w-[500px] lg:h-[500px] w-full bg-main-white p-6 rounded-[8px] lg:shadow-lg overflow-auto">
                <div onClick={onClose} className=" text-[20px] cursor-pointer ">
                    <img className="sm:w-5 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
                </div>

                <div className=" w-full mt-[50px] flex flex-col justify-center items-start">
                    <div className="w-full h-[300px]">
                        <h2 className="w-full font-bold text-[0.9rem]">امکانات رفاهی {type}</h2>
                        <ul className="w-full h-[250px] flex justify-between items-start flex-col mt-[20px] lg:items-center ">
                            {facility && [...facility].sort((a,b) => b.exist - a.exist).map((item) => {
                                return (
                                    <li
                                        key={item?.name}
                                        className={clsx(
                                            "w-full flex justify-start items-center lg:justify-between flex-col",
                                            { "line-through": !item.exist },
                                            { "text-main-light-silver": !item.exist }
                                        )}
                                    >
                                        <div className="w-full flex justify-start items-center ">
                                            <span className="w-[40px]">
                      <img
                          className="w-[25px] h-[25px]"
                          src={item?.icon}
                          alt={item?.alt}
                      />
                    </span>
                                            <span className="font-bold text-sm">{item?.name}</span>
                                        </div>

                                        <div className="w-full h-[1px] bg-main-light-gray my-[10px]"></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

