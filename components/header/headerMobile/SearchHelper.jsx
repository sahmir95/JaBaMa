import React from 'react';
import SearchItem from "@/components/header/headerMobile/SearchItem";
import styles from "./searchHelper.module.css";

const SearchHelper = ({data, title}) => {

    return (
        <div className="mt-6">
            <h2 className="font-medium text-main-slate-gray text-xs mb-4">
                {title}
            </h2>
            <div className={`flex gap-2 ${styles.scrollHorizontal}`}>

                {data.map(({id, name}) =>
                    <SearchItem
                        key={id}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
};

export default SearchHelper;