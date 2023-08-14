"use client";
import React, {useEffect, useRef, useState} from "react";
import {HiOutlineSearch} from "react-icons/hi";
import {IoCloseCircleSharp} from "react-icons/io5";
import styles from "./landingPage.module.css";
import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import HeaderPagesSearch from "@/components/header/headerDesktop/HeaderPagesSearch";
import LandingSearchBoxResult from "@/components/landingPage/LandingSearchBoxResult";
import {useDispatch} from "react-redux";
import {
    setTypeCottage,
    setTypeEcoTourism,
    setTypeHotel,
    setTypeVilla,
} from "@/redux/featchers/filterSlice";
import Link from "next/link";
import {reset} from "@/redux/featchers/filterSlice";

const LandingPage = ({city, data}) => {
    const searchBoxRef = useRef(null);
    const [isHeaderVisible, setHeaderVisible] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const boxRef = useRef(null);
    const [value, setValue] = useState("");
    const refInput = useRef(null);
    const [type, setType] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const ourData = [...data];
    const ourCities = [...city];

    useEffect(() => {
        const observerOptions = {
            rootMargin: "-100px 0px 0px 0px",
        };

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            setHeaderVisible(entry.isIntersecting);
        }, observerOptions);

        const searchBox = searchBoxRef.current;
        const searchBoxElement = searchBoxRef.current;

        if (searchBox) {
            intersectionObserver.observe(searchBox);
        }

        return () => {
            intersectionObserver.disconnect();
        };
    }, []);

    const closeHandler = () => {
        setValue("");
        refInput.current.focus();
    };

    const handleBoxBlur = (event) => {
        const newFocusedElement = event.relatedTarget;
        if (
            newFocusedElement &&
            boxRef.current &&
            boxRef.current.contains(newFocusedElement)
        ) {
            return;
        }
        setShowBox(false);
    };

    const handleDivClick = () => {
        setShowBox(!showBox);
    };

    const handleSetValue = (name) => {
        setValue(cityType);
    };

    useEffect(() => {
        const type = ourData.find((items) => {
            let typ = "";
            switch (items.type) {
                case "villa":
                    typ = "ویلا";
                    break;
                case "cottage":
                    typ = "کلبه";
                    break;
                case "hotel":
                    typ = "هتل";
                    break;
                case "ecoTourism":
                    typ = "بومگردی";
                    break;
                default:
                    break;
            }
            if (value.includes(typ)) {
                return typ;
            }
        });
        if (type) {
            switch (type.type) {
                case "villa":
                    setType("ویلا");
                    break;
                case "cottage":
                    setType("کلبه");
                    break;
                case "hotel":
                    setType("هتل");
                    break;
                case "ecoTourism":
                    setType("بومگردی");
                    break;
                default:
                    break;
            }
        } else {
            setType("");
        }
        const city = ourCities.find((items) => {
            if (value.includes(items.name)) {
                return items.name;
            }
        });
        if (city) {
            setSearchCity(city.name);
        } else {
            setSearchCity("");
        }
    }, [value]);

    const dispatch = useDispatch();
    const setTypeOnViewing = (type) => {
        switch (type) {
            case "villa":
                dispatch(setTypeVilla());
                break;
            case "cottage":
                dispatch(setTypeCottage());
                break;
            case "hotel":
                dispatch(setTypeHotel());
                break;
            case "ecoTourism":
                dispatch(setTypeEcoTourism());
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <HeaderPages
                city={city}
                data={data}
                display={isHeaderVisible ? "hidden" : "block"}
                loc="inset-0"
                border="border-b border-b-main-light-gray"
                compFilter=""
                compSearch={<HeaderPagesSearch city={city} data={data} isHome={true}/>}
                position="fixed"
                background="bg-main-white"
            />
            <section className="hidden lg:block relative">
                <div className={styles.shadowHeader}>
                    <img
                        className={`w-full h-[760px] ${styles.imageRendering} object-cover`}
                        src="/images/backgroundhouse.jpg"
                        alt="bg"
                    />
                </div>
                <div className="absolute inset-0 max-w-[1400px] mx-auto pt-[120px] px-4">
                    <div ref={searchBoxRef}
                         onClick={handleDivClick}
                         onBlur={handleBoxBlur}
                         className="flex items-center justify-between pl-4 border border-main-white rounded-lg w-fit mx-auto bg-main-white">
                        <label className="flex items-center justify-center p-4 cursor-pointer" htmlFor="search">
                            <div className="flex items-start justify-center flex-col pl-20">
                                <span className="font-medium text-xs">جستجو شهر، استان یا اقامتگاه</span>
                                <input
                                    className="border-none outline-none font-medium text-sm mt-3"
                                    type="text"
                                    placeholder="انتخاب مقصد"
                                    id="search"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    ref={refInput}
                                />
                            </div>
                            <div className="flex items-center justify-center w-[40px] h-[40px]">
                                {value && (
                                    <div className="p-2">
                                        <IoCloseCircleSharp
                                            onClick={closeHandler}
                                            className="text-xl text-main-silver hover:text-main-slate-gray"
                                        />
                                    </div>
                                )}
                            </div>
                        </label>
                        <span className="bg-main-light-gray h-9 w-[1px] ml-6"></span>
                        <button className="bg-main-black rounded-lg p-3">
                            <HiOutlineSearch className="text-main-white text-2xl"/>
                        </button>
                    </div>
                    {showBox && (
                        <div ref={boxRef}
                             className="absolute p-4 bg-main-white w-[410px] mx-auto rounded-lg mt-4 left-1/2 top-[190px] transform translate-x-[-50%]">
                            <LandingSearchBoxResult
                                city={city}
                                value={value}
                                type={type}
                                searchCity={searchCity}
                            />
                        </div>
                    )}
                    <div className="flex items-start justify-center flex-col h-full mt-5 pb-[130px]">
                        <h5 className="font-medium text-sm text-main-black mb-2">
                            اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران
                        </h5>
                        <h4 className="font-medium text-[24px] text-main-black mb-10">
                            سفر تابستونی از تو، جاباما
                        </h4>
                        <div className="flex items-center justify-center bg-main-white rounded-lg px-4 py-2 mt-3 w-fit">
                            <Link className="font-medium text-sm text-main-black" onClick={() => dispatch(reset())}
                                  href="/stays">
                                مشاهده اقامتگاه‌ها
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sm:hidden md:hidden lg:block relative">
                <div
                    className={`absolute top-1/2 right-1/2 ${styles.transformIcon} flex items-center justify-center gap-[40px] w-[720px] rounded-lg mx-auto py-5 px-20 bg-main-white ${styles.shadowBox}`}
                >
                    <Link
                        onClick={() => setTypeOnViewing("villa")}
                        href={"/stays"}
                        className="flex items-center justify-center flex-col px-4">
                        <img className="w-[72px]" src="/images/Vila.png" alt="ویلا"/>
                        <span className="font-medium text-lg">ویلا</span>
                    </Link>
                    <Link
                        onClick={() => setTypeOnViewing("cottage")}
                        href={"/stays"}
                        className="flex items-center justify-center flex-col px-4"
                    >
                        <img className="w-[72px]" src="/images/Kolbe.png" alt="کلبه"/>
                        <span className="font-medium text-lg">کلبه</span>
                    </Link>
                    <Link
                        onClick={() => setTypeOnViewing("ecoTourism")}
                        href={"/stays"}
                        className="flex items-center justify-center flex-col px-4"
                    >
                        <img
                            className="w-[72px]"
                            src="/images/Bumgardi.png"
                            alt="بومگردی"
                        />
                        <span className="font-medium text-lg">بومگردی</span>
                    </Link>
                    <Link
                        onClick={() => setTypeOnViewing("hotel")}
                        href={"/stays"}
                        className="flex items-center justify-center flex-col px-4"
                    >
                        <img className="w-[72px]" src="/images/Hotel.png" alt="هتل"/>
                        <span className="font-medium text-lg">هتل</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
