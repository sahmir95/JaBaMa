'use client'
import React, {useState} from 'react';
import {FaXmark} from "react-icons/fa6";

const AppBanner = ({display}) => {

    const [show, setShow] = useState(true)

    const closeNotify = () => {
        setShow(false)
    }

    return (
        <>
            {show && (
                <div className={`${display} flex items-center justify-between w-full h-12 bg-main-banner-app px-5 z-40 fixed bottom-[60px]`}>
                    <div className="flex items-center justify-center">
                        <img className="w-7" src="/images/smile-logo.png" alt="logo"/>
                        <div className="font-medium text-xs text-main-dark-charcoal mr-3">
                            دانلود جدیدترین نسخه
                            <span className="font-bold text-xs text-main-orange"> اپلیکشین جاباما</span>
                        </div>
                    </div>
                    <div>
                        <FaXmark onClick={closeNotify} className="text-xs text-main-deep-teal"/>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppBanner;