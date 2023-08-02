import React from 'react';
import Header from "@/components/header/Header";
import {getLocalData} from "@/lib/localdata";

const data = await getLocalData();
const city = data.cities;

const HeaderLanding = ({display}) => {

    return (
        <div className={display}>
            <div className="px-5 pt-[15px]">
                <img className="h-[20px]" src="/images/color-logo.svg" alt="logo"/>
                <h5 className="text-[.63rem] font-light mt-2">اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران</h5>
            </div>
            <Header data={city}/>
        </div>
    );
};

export default HeaderLanding;