
import React from 'react';
import HeaderPop from '@/components/header/headerPop/HeaderPop';
import HeaderLanding from '@/components/header/HeaderLanding';

const Page = () => {
    return (
        <div>
            <HeaderPop/>
            <HeaderLanding display="lg:hidden"/>
        </div>
    );
};

export default Page;
