'use client'
import React, {useRef, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";
import {FaCircleXmark} from "react-icons/fa6";
import SearchHelper from "@/components/header/SearchHelper";

const Header = ({data}) => {

    const [searchMenu, setSearchMenu] = useState(false);
    const [value, setValue] = useState("");
    const refInput = useRef(null);

    const deleteInputValue = () => {
        setValue("")
        refInput.current.focus();
    }

    return (
        <div className="p-5 sticky top-1">
            <div onClick={() => setSearchMenu(true)}
                 className="flex items-center justify-start border border-b-4 shadow-md border-b-main-light-orange border-main-gainsboro rounded-lg p-4">
                <FaSearch className="text-main-slate-gray ml-4"/>
                <span className="font-medium text-sm text-main-slate-gray">
                    جستجو شهر، استان یا اقامتگاه
                </span>
            </div>
            {searchMenu &&
                <div className="fixed w-full h-full bg-main-white top-0 left-0 z-50">
                    <div className="flex items-center justify-center border-b border-main-gainsboro px-5 py-6">
                        <div onClick={() => setSearchMenu(false)} className="text-lg">
                            <FaArrowRight/>
                        </div>
                        <form className="flex items-center justify-center px-6 w-full">
                            <input
                                type="text"
                                placeholder="جستجو شهر، استان یا اقامتگاه"
                                className="outline-none border-none bg-main-transparent font-medium text-sm w-full"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                ref={refInput}
                            />
                        </form>
                        <div>
                            {value && (
                                <FaCircleXmark onClick={deleteInputValue} className="text-main-slate-gray text-lg"/>
                                )
                            }
                        </div>
                    </div>
                    <div className="px-4">
                        <h2 className="font-medium text-main-slate-gray text-xs mb-4 mt-6">
                            آخرین جستوجوها
                        </h2>
                        <div
                            className="border border-main-gainsboro rounded-[20px] w-fit py-3 px-5 font-medium text-xs">
                            کردان
                        </div>
                        <SearchHelper
                            title="محبوب‌ترین مقصدها"
                            data={data}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;