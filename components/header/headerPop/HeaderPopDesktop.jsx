import React from 'react';
import Link from "next/link";

const HeaderPopDesktop = () => {
    return (
        <Link className="hidden lg:block" href="https://annualreport1401.jabama.com/">
            <div className="bg-main-black h-[60px] w-full">
                <div className="flex items-center justify-center h-full">
                    <img className="w-full object-contain" src="/images/notifBannerDesktop.jpg" alt="banner"/>
                </div>
            </div>
        </Link>
    );
};

export default HeaderPopDesktop;