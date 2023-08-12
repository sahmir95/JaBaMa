
export const BathroomCondition = ({data}) => {
    return (
            <div className="w-full flex justify-start items-center">
                <div className="w-[50px] ">
                    <img
                        className="w-[28px] h-[30px]"
                        src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Toilet-Paper-halloween-those-icons-lineal-those-icons.png"
                        alt="paper"
                    />
                </div>
                <div className="w-full">
                    <p className="font-bold text-[0.9rem]">سرویس‌های بهداشتی</p>
                        <div className="flex justify-start items-start font-light text-[0.75rem]">
                            {data.bathroom.persianWC !== 0 ? <p>
                                {data.bathroom.persianWC} سرویس ایرانی .{" "}
                            </p> : <p>سرویس ایرانی وجود ندارد</p>}
                            {data.bathroom.foreignWC !== 0 ? <p>{data.bathroom.foreignWC} سرویس فرنگی . </p> : <p>سرویس فرنگی وجود ندارد.</p>}
                            {data.bathroom.shower !== 0 ? <p>{data.bathroom.shower}
                                حمام</p> : <p>حمام وجود ندارد</p>}
                        </div>

                </div>
            </div>
    );
};

