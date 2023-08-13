import React from "react";

export const ImmediateReservation = ({data}) => {
    return (
            <div className="mt-[20px] flex justify-start ">
                {data.HasImmediateReserve && (
                    <div className="w-full flex justify-start flex-col">
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="flex justify-start items-start gap-x-[10px] mt-[30px]">
                            <div className=" mt-[8px] ">
                                <img
                                    className="w-[25px] h-[25px]"
                                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/1A1A1A/external-flash-multimedia-tanah-basah-basic-outline-tanah-basah.png"
                                    alt="thunder"
                                />
                            </div>
                            <div className="w-full">
                                <p className="w-full font-bold text-[0.9rem]">
                                    رزرو آنی و قطعی جاباما
                                </p>
                                <p className="w-full font-light text-[0.75rem]">
                                    برای رزرو نهایی این آپارتمان نیازی به تأیید از سمت میزبان نخواهید
                                    داشت و رزرو شما قطعی خواهد بود.
                                </p>
                            </div>
                        </div>
                    </div>

                )}
            </div>
    );
};

