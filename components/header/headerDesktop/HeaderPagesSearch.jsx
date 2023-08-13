'use client'
import React, {useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import styles from "./headerPages.module.css";
import LandingSearchBoxResult from "@/components/landingPage/LandingSearchBoxResult";

const HeaderPagesSearch = ({city}) => {

    const searchBoxRef = useRef(null);
    const [showBox, setShowBox] = useState(false);
    const boxRef = useRef(null);
    const [value, setValue] = useState("");

    const handleBoxBlur = (event) => {
        const newFocusedElement = event.relatedTarget;
        if (newFocusedElement && boxRef.current && boxRef.current.contains(newFocusedElement)) {
            return;
        }
        setShowBox(false);
    };

    const handleDivClick = () => {
        setShowBox(!showBox);
    };

    return (
        <div
            ref={searchBoxRef}
            onClick={handleDivClick}
            onBlur={handleBoxBlur}
            className={`flex items-center justify-center border border-[#ddd] rounded-[10px] py-[14px] px-5 mr-[200px] ${styles.searchShadow}`}>
            <RiSearchLine className="text-main-light-orange ml-2"/>
            <input
                className="font-medium text-sm w-[260px] outline-none border-none"
                type="text"
                placeholder="جستجو شهر، استان یا اقامتگاه"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {showBox && (
                <div ref={boxRef}
                     className="absolute p-4 bg-main-white w-[410px] mx-auto rounded-lg mt-4 left-1/2 top-[70px] transform translate-x-[-50%]">
                    <LandingSearchBoxResult
                        city={city}
                    />
                </div>
            )}
        </div>
    );
};

export default HeaderPagesSearch;