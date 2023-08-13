import React from 'react';

const MenuPrice = ({price}) => {

    return (
        <div className="lg:hidden flex items-center justify-between fixed bottom-0 left-0 right-0 bg-main-white z-[60] h-[105px] px-5 py-[15px] border-t border-t-[#e1e1e1]">
            <div className="">
                <h3 className="font-light text-xs leading-[21px]">شروع از: <span className="font-medium text-sm">200000</span><span className="font-light text-[10px]"> تومان</span><span className="text-[#84939a] text-xs mr-[1px]">/ هرشب</span></h3>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-main-deep-teal font-medium text-main-white rounded-lg text-base min-h-[48px] w-[118px] pb-[3px] px-2">انتخاب تاریخ</button>
            </div>
        </div>
    );
};

export default MenuPrice;