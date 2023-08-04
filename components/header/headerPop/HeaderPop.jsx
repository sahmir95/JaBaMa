import React from 'react';
import Link from "next/link";

const HeaderPop = ({display}) => {
    return (
        <Link className={display} href="https://annualreport1401.jabama.com/">
            <div className="bg-main-black h-12 w-full">
                <div className="flex items-center justify-center h-full max-w-[520px] lg:max-w-full mx-auto">
                    <img className="w-full object-contain" src="/images/notifBanner.jpg" alt="banner"/>
                </div>
            </div>
        </Link>
    );
};

export default HeaderPop;