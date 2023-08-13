import React from 'react';
import Link from "next/link";

const SearchItem = ({name}) => {
    return (
        <Link href="/stays" className="border border-main-gainsboro rounded-[20px] w-fit py-3 px-5 font-medium text-xs h-fit hover:bg-main-light-gray">
            {name}
        </Link>
    );
};

export default SearchItem;