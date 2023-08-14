'use client'
import React from 'react';
import toFarsiNumber from "@/utils/toFaNumber";




const MenuPrice = ({data}) => {
    const priceDiscount = (price,discount) => {
        if (price, discount) {
            return ((price - (price * discount) / 100))
        } else if (!data.discount) {
            return price
        }
    }

    return (
        <div className="lg:hidden flex items-center justify-between fixed bottom-0 left-0 right-0 bg-main-white z-[50] h-[105px] px-5 py-[15px] border-t border-t-[#e1e1e1]">
            <div className="h-full flex items-center justify-start flex-col">
                {data.discount &&
                    (
                        <div className="w-full flex justify-start items-center gap-x-[4px]">
                            <div className=" font-bold text-[0.8rem] text-main-silver line-through">
                                {data?.price && toFarsiNumber(data.price.base)}
                            </div>
                            <div
                                className=" py-[2px] px-[6px] rounded-[14px] bg-main-dark-red text-main-white font-bold text-[0.8rem]">
                                % {data?.discount && toFarsiNumber(data.discount)}
                            </div>
                        </div>
                    )}
                <div className="max-w-[200px] flex justify-start items-center flex-wrap gap-x-[4px] mt-[4px]">
                    <div className="text-[0.75rem] font-medium">شروع از:</div>
                    <div className="text-[0.85rem] font-medium">{data?.price && toFarsiNumber(priceDiscount(data.price.base,data.discount))}</div>
                    <div className="text-[0.6rem] font-medium lg:font-light"> تومان</div>
                    <div className="text-[0.8rem] font-light text-main-silver">/ هرشب</div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <button className="bg-main-deep-teal font-medium text-main-white rounded-lg text-base min-h-[48px] w-[118px] pb-[3px] px-2">انتخاب تاریخ</button>
            </div>
        </div>
    );
};

export default MenuPrice;