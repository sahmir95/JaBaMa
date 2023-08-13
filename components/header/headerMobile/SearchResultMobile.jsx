import React from 'react';
import Link from "next/link";

const SearchResultMobile = ({icon, text}) => {

    return (
        <Link href="/stays" className="flex items-center justify-start mb-4">
            <div className="w-12 h-12">
                <img className="w-full" src={icon} alt="location"/>
            </div>
            <div className="flex items-center justify-start">
                <span className="font-medium text-main-slate-gray text-xs mr-4">{text}</span>
            </div>
        </Link>
    );
};

export default SearchResultMobile;