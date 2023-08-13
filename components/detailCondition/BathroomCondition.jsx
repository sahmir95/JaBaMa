import toFarsiNumber from "@/utils/toFaNumber";
export const BathroomCondition = ({data}) => {
    return (
            <div className="w-full flex justify-start items-center gap-x-[10px]">
                <div>
                    <img
                        className="w-[25px] h-[25px]"
                        src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Toilet-Paper-halloween-those-icons-lineal-those-icons.png"
                        alt="paper"
                    />
                </div>
                <div className="w-full">
                    <p className="font-bold text-[0.9rem]">سرویس‌های بهداشتی</p>
                        <div className="flex justify-start items-start font-light text-[0.75rem] lg:gap-x-[4px]">
                            {data.bathroom.persianWC !== 0 ? <p>
                                {toFarsiNumber(data.bathroom.persianWC)} سرویس ایرانی .{" "}
                            </p> : <p>سرویس ایرانی وجود ندارد</p>}
                            {data.bathroom.foreignWC !== 0 ? <p>{toFarsiNumber(data.bathroom.foreignWC)} سرویس فرنگی . </p> : <p>سرویس فرنگی وجود ندارد.</p>}
                            {data.bathroom.shower !== 0 ? <p>{toFarsiNumber(data.bathroom.shower)} حمام</p> : <p>حمام وجود ندارد</p>}
                        </div>

                </div>
            </div>
    );
};

