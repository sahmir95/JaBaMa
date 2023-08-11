'use client'
import React, {useState} from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "./date-picker-container.css"


export const ReservationBox = ({data}) => {
    const [valueEnter, setValueEnter] = useState([])
    const [valueExit, setValueExit] = useState([])
    const [person, setPerson] = useState(0)


    const handleChangeEnter = (newEnter) => {
        setValueEnter(newEnter)
    }

    const handleChangeExit = (newExit) => {
        setValueExit(newExit)
    }

    const handleAddPerson = () => {
        setPerson(person + 1);
    }

    const handleRemovePerson = () => {
        if (person > 0)
            setPerson(person - 1);
    };

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full flex items-center justify-between">
                <div className="w-[70%] flex justify-start items-center gap-x-[4px]">
                    <div className="  text-[0.7rem] font-medium">شروع از:</div>
                    <div className=" text-[0.8rem] font-medium">{data.price.base}</div>
                    <div className="  text-[0.55rem] font-light">تومان</div>
                    <div className="  text-[0.65rem] font-light text-main-silver">/ هرشب</div>
                </div>
                <div className="w-[30%] flex justify-end items-center gap-x-[4px]">
                    <img className="w-4 h-4"
                         src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png"
                         alt="star--v1"/>
                    <div className="font-medium text-[1rem]">{data.rate}</div>
                    <div className="text-[0.9rem] font-light">({data.comments})</div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col mt-[20px]">
                <div className="w-full flex justify-center items-center">
                    <div
                        className="w-full flex justify-start items-center px-[20px] py-[10px] border-[1px] border-l-0 border-main-light-gray rounded-tr-[6px]">
                        <div className="w-[40px]">
                            <img className="w-[16px] h-[16px]"
                                 src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-Calendar-cenima-flatart-icons-outline-flatarticons.png"
                                 alt="Calendar"/>
                        </div>
                        <div className="w-full flex justify-start items-start flex-col">
                            <div className="w-full font-light text-[0.7rem]">تاریخ ورود</div>
                            <DatePicker
                                value={valueEnter}
                                onChange={handleChangeEnter}
                                inputClass="custom-input"
                                calendar={persian}
                                locale={persian_fa}
                                animations={[
                                    transition({
                                        from: 35,
                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                    }),
                                ]}
                                calendarPosition="top-right"
                            />
                        </div>
                    </div>
                    <div
                        className="w-full flex justify-start items-center px-[20px] py-[10px] border-[1px] border-main-light-gray rounded-tl-[6px]">
                        <div className="w-[50px]">
                            <img className="w-[16px] h-[16px]"
                                 src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-Calendar-cenima-flatart-icons-outline-flatarticons.png"
                                 alt="Calendar"/>
                        </div>
                        <div className="flex justify-start items-start flex-col">
                            <div className="font-light text-[0.7rem]">تاریخ خروج</div>
                            <DatePicker
                                value={valueExit}
                                onChange={handleChangeExit}
                                inputClass="custom-input"
                                calendar={persian}
                                locale={persian_fa}
                                animations={[
                                    transition({
                                        from: 35,
                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                    }),
                                ]}
                                calendarPosition="top-right"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center rounded-b-[6px] border-[1px] border-t-0 border-main-light-gray px-[20px] py-[12px]">
                    <div className="w-full flex justify-start items-start">
                        <div className="w-[40px]">
                            <img className="w-[16px] h-[16px]" src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/external-group-ui-essentials-kmg-design-basic-outline-kmg-design.png" alt="group"/>
                        </div>
                        <div className="w-full">
                            <div className="w-full font-medium text-[0.6rem]">تعداد مسافران</div>
                            <div className="font-bold text-[0.7rem]"> {person} نفر</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center gap-x-[10px]">
                        <button className="border-[1px] px-[6px] rounded-[8px]" onClick={handleAddPerson}>
                            +
                        </button>
                        {person}
                        <button className="border-[1px] px-[8px] rounded-[8px]" onClick={handleRemovePerson}>
                            -
                        </button>
                    </div>
                </div>
                <button className="w-full text-center text-main-white text-[0.8rem] mt-[20px] font-medium bg-main-deep-teal rounded-[6px] px-[4px] py-[12px]">
                    ثبت رزرو
                </button>
                <div className="w-full text-center text-[0.6rem] font-medium mt-[12px] text-main-silver">
                    ارسال درخواست رزرو برای شما هزینه‌ای ندارد!
                </div>
                <div className="w-full flex justify-between items-center mt-[12px] ">
                    <div className="text-center text-[0.7rem] font-medium text-main-silver">1 شب اقامت</div>
                    <div className="text-center text-[0.7rem] font-medium text-main-silver"> {data.price.base} تومان</div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[12px]"></div>
                <div className="w-full flex justify-between items-center mt-[20px]">
                    <div className="text-center text-[0.7rem] font-medium">جمع مبلغ قابل پرداخت</div>
                    <div className="text-center text-[0.7rem] font-medium"> {data.price.base} تومان</div>
                </div>
            </div>
        </div>
    );
};

