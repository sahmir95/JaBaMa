import React from 'react';
import SearchHelper from "@/components/header/headerMobile/SearchHelper";
import SearchResultMobile from "@/components/header/headerMobile/SearchResultMobile";

const LandingSearchBoxResult = ({city}) => {
    return (
        <>
            <SearchHelper
                title="محبوب‌ترین مقصدها"
                data={city}
            />
            <SearchResultMobile
                icon="/images/location.png"
                text="کیش"
            />
            <SearchResultMobile
                icon="/images/apartment.png"
                text="ویلا"
            />
        </>
    );
};

export default LandingSearchBoxResult;