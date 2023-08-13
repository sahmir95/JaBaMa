import React from "react";
import toFarsiNumber from "@/utils/toFaNumber";
export const DiscountCondition = ({data}) => {
    return (
        <div>
            {data.discount && (<div
                className="px-[8px] py-[4px] rounded-[16px] bg-main-dark-red mt-[8px] font-medium text-[0.65rem] text-main-white lg:font-bold lg:text-[0.7rem] lg:px-[10px] lg:mt-0">%
                تا {data.discount && toFarsiNumber(data.discount)} درصد تخفیف
            </div>)}
            {}
        </div>
    );
};
