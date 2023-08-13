'use client'
import React, {useState, useEffect} from 'react';
import styles from "./headerSinglePage.module.css";
import {FaRegHeart} from "react-icons/fa";
import {BiShareAlt} from "react-icons/bi";
import {RiArrowRightLine} from "react-icons/ri";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import {useDispatch, useSelector} from "react-redux";
import { addFavoritePlace } from '@/redux/featchers/favoriteSlice';

const HeaderSinglePage = () => {

    const detailData = useSelector((state) => state.detailSlice.detailData)
    const [isScroll, setIsScrolled] = useState(false);
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSend = () => {
        dispatch(addFavoritePlace(detailData))
        router.push("/favorites")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sm:flex lg:hidden items-center justify-between bg-main-transparent z-50 fixed inset-0 px-[15px] h-[60px] text-center ${isScroll ? `${styles.scroll}` : ''}`}>
            <div className="">
                <Link href="/" className="py-[13px] px-[12px] rounded-md bg-main-white">
                    <RiArrowRightLine className="text-lg text-main-black"/>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <Link href="#" className="py-[13px] px-[12px] rounded-md bg-main-white">
                    <BiShareAlt className="text-lg text-main-black"/>
                </Link>
                <Link href="/favorites" onClick={handleSend} className="py-[13px] px-[12px] rounded-md bg-main-white mr-2">
                    <FaRegHeart className="text-lg text-main-black"/>
                </Link>
            </div>
        </div>
    );
};

export default HeaderSinglePage;