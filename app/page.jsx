
import React from 'react';
import HeaderPop from '@/components/header/headerPop/HeaderPop';
import HeaderLanding from '@/components/header/HeaderLanding';

const Page = () => {
    return (
        <div>
            <HeaderPop display="lg:hidden" img="/images/notifBanner.jpg"/>
            <HeaderPopDesktop display="lg:block" img="/images/notifBannerDesktop.jpg"/>
            <HeaderLanding display="lg:hidden"/>
            <HeaderDesktop/>
            
        </div>
    );
};

export default Page;
