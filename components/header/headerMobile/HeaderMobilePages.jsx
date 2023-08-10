'use client'
import React, {useState, useEffect} from 'react';
import styles from "./HeaderMobilePages.module.css";

const HeaderMobilePages = ({title}) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sm:block lg:hidden bg-main-white z-50 fixed inset-0 py-[14px] h-fit text-center ${scrolled ? `${styles.scroll}` : ''}`}>
            <h2 className="font-medium text-base text-main-black">{title}</h2>
        </div>
    );
};

export default HeaderMobilePages;