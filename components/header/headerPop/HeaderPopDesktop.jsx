import React from 'react';
import Link from "next/link";

const HeaderPopDesktop = ({display}) => {
    return (
        <Link className={`hidden ${display}`} href="https://annualreport1401.jabama.com/">
            <div className="bg-main-black h-[60px] w-full">
                <div className="flex items-center justify-center h-full">
                    <img className="w-full object-contain" src="/images/notifBannerDesktop.jpg" alt="banner"/>
                </div>
            </div>
        </Link>
    );
};

export default HeaderPopDesktop;