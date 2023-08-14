'use client'
import clsx from "clsx";
import React from "react";

export const WindowComment = ({comments,onClose}) => {
    return (
        <div className="fixed top-0 left-0 w-full lg:h-full flex justify-center bg-main-white items-center lg:bg-main-silver lg:bg-opacity-50 lg:z-20 z-[60]">
            <div className="lg:w-[500px] lg:h-[500px] w-full bg-main-white p-6 rounded-[8px] shadow-lg overflow-auto">
                <div onClick={onClose} className="w-[50px] text-[20px] cursor-pointer ">
                    <img className="sm:w-5 h-6 cursor-pointer"
                         src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
                </div>
                <div className="w-full mt-[20px]">
                    <div className="w-full flex justify-start items-center ">
                        <div className="w-[200px] font-bold text-[1.2rem]">دیدگاه کاربران</div>
                        <div className="w-full font-light text-[0.9]"> ({comments && comments.length} دیدگاه)</div>
                    </div>
                    <div className="w-full mt-[16px]">
                        {comments && comments.map((item) => {
                            return (
                                <div
                                    className="w-full h-[100px] flex justify-between items-start mt-[16px] flex-col border-[1px] border-main-light-silver border-solid p-[16px] rounded-[10px]">
                                    <div className="w-full flex justify-start items-start">
                                        <div className="w-[60px]">
                                            <img className="w-[40px] h-[40px] rounded-[50%]"
                                                 src="https://cdn.jabama.com/original/jabama-images/12345/52acb96f-472e-413e-9204-9a02bab95a94.svg"
                                                 alt="unknown"/>
                                        </div>
                                        <div className="w-full flex justify-start items-start flex-col">
                                            <div className="w-full font-medium text-[0.75rem]">{item?.commenter}</div>
                                            <div className="w-full font-light text-[0.6rem]">{item?.dateComment}</div>
                                        </div>
                                    </div>
                                    <div className="w-full text-[0.75rem] font-light ">{item?.comment}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};

