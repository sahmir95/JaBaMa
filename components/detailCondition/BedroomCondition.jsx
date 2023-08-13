import React from "react";

export const BedroomCondition = ({data}) => {
    return (
            <div className="w-full ">
                <p className=" font-bold text-[0.9rem]">سرویس‌های خواب</p>
                    <div className="w-full flex justify-start items-start flex-wrap font-light text-[0.75rem]">
                        <p>
                            {data.bedroom.rooms} اتاق .
                        </p>
                        {data.bedroom.double !== 0 ? <p>
                            {data.bedroom.double} تخت دو نفره
                        </p> : <p>تخت دو نفره وجود ندارد</p>}
                        {data.bedroom.single !== 0 ? <p>
                            . {data.bedroom.single} تخت یک نفره .
                        </p> : <p>تخت یک نفره وجود ندارد</p>}
                        {data.bedroom.traditional !== 0 ? <p>
                            {data.bedroom.traditional} رخت خواب سنتی
                        </p> : <p>رخت خواب سنتی وجود ندارد</p>}

                </div>
            </div>
    );
};

