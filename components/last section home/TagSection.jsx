"use client";
import {Icon} from "@iconify/react";
import clsx from "clsx";
import {useState} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {
    setCityKish,
    setCityMasal,
    setCityQeshm,
    setCityRamsar,
    setCityRasht, setTypeCottage, setTypeEcoTourism, setTypeHotel,
    setTypeVilla
} from "@/redux/featchers/filterSlice";


const TagSection = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const setTypeOnViewing = (type, city) => {
        if (type || city) {
            switch (type) {
                case "ویلا":
                    if (city == "قشم") {
                        dispatch(setTypeVilla());
                        dispatch(setCityQeshm());
                    }
                    if (city == "رامسر") {
                        dispatch(setTypeVilla());
                        dispatch(setCityRamsar());
                    }
                    if (city == "کیش") {
                        dispatch(setTypeVilla());
                        dispatch(setCityKish());
                    }
                    if (city == "ماسال") {
                        dispatch(setTypeVilla());
                        dispatch(setCityMasal());
                    }
                    if (city == "رشت") {
                        dispatch(setTypeVilla());
                        dispatch(setCityRasht());
                    }
                    break;
                default:
                    break;
            }
        }
        switch (type) {
            case "ویلا":
                dispatch(setTypeVilla());
                break;
            case "کلبه":
                dispatch(setTypeCottage());
                break;
            case "هتل":
                dispatch(setTypeHotel());
                break;
            case "بوگردی":
                dispatch(setTypeEcoTourism());
                break;
            default:
                break;
        }
        switch (city) {
            case "ماسال":
                dispatch(setCityMasal());
                break;
            case "قشم":
                dispatch(setCityQeshm());
                break;
            case "رشت":
                dispatch(setCityRasht());
                break;
            case "رامسر":
                dispatch(setCityRamsar());
                break;
            case "کیش":
                dispatch(setCityKish());
                break;
            default:
                break;
        }
    };
    const triggerText = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full   sm:px-5 lg:px-20 flex flex-col gap-5 mt-7 sm:mb-[124px] lg:mb-0 lg:pb-0">
            <p className="font-bold">از شمال تا جنوب ایران، جاباما جوره</p>
            <div
                className={clsx("w-full flex gap-2 flex-wrap  overflow-hidden", {
                    "sm:h-[64px] md:[80px]": !isOpen,
                })}
            >
                {data.map((item, index) => {
                    return (
                        <Link href="/stays"
                              onClick={() => setTypeOnViewing("ویلا", item.city)}
                              key={index}
                              className="lg:h-[28px] lg:flex lg:items-center rounded-2xl font-medium text-xs text-main-steel-gray py-1 lg:py-0 px-2 text-center bg-main-light-silver"
                        >
                            اجاره ویلا در {item.city}
                        </Link>
                    );
                })}
            </div>
            <div className="w-full flex justify-start relative z-10 lg:px-20 ">
                <button
                    onClick={triggerText}
                    className="font-medium text-xs flex items-center gap-1 md:hidden"
                >
                    {isOpen ? "بستن" : "مشاهده همه"}
                    <Icon
                        icon="icon-park-outline:up"
                        width="16"
                        rotate={isOpen ? 0 : 2}
                    />
                </button>
            </div>
        </div>
    );
};

export default TagSection;
