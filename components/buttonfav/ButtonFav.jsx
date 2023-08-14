'use client'
import React from 'react';
import { Icon } from "@iconify/react";
import AddFavorite from '../addfavorite/AddFavorite';
import {useRouter} from 'next/navigation'
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import { addFavoritePlace } from '@/redux/featchers/favoriteSlice';

const ButtonFav = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const detailData = useSelector((state) => state.detailSlice.detailData)

  const handleSend = () => {
    dispatch(addFavoritePlace(detailData))
    router.push("/favorites")
}

  return (
    <Link href="/favorites" onClick={handleSend} className='flex lg:flex-row-reverse lg:gap-x-[16px]'>
      <AddFavorite icon="mdi:heart-outline" text=" افزودن به مورد علاقه ها" />
      <AddFavorite icon="solar:share-linear" text=" اشتراک گذاری"/>
    </Link>
  );
};

export default ButtonFav;