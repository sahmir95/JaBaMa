'use client'
import React, {useState, useEffect} from 'react';
import styles from "./HeaderMobilePages.module.css";
import {FaRegHeart} from "react-icons/fa";
import {BiShareAlt} from "react-icons/bi";
import {RiArrowRightLine} from "react-icons/ri";

const HeaderSinglePage = () => {

    const [isScroll, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sm:flex lg:hidden items-center justify-between bg-main-white z-50 fixed inset-0 px-[15px] h-[60px] text-center ${isScroll ? `${styles.scroll}` : ''}`}>
            <div className="">
                <div className="py-[13px] px-[14px]">
                    <RiArrowRightLine className="text-[26px]"/>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="py-[13px] px-[14px]">
                    <BiShareAlt className="text-lg"/>
                </div>
                <div className="py-[13px] px-[14px]">
                    <FaRegHeart className="text-base"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderSinglePage;