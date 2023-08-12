'use client'
import React from 'react';
import { Icon } from "@iconify/react";
import AddFavorite from '../addfavorite/AddFavorite';

const ButtonFav = () => {
  return (
    <div className='flex lg:flex-row-reverse lg:gap-x-[16px]'>
      <AddFavorite icon="mdi:heart-outline" text=" افزودن به مورد علاقه ها" />
      <AddFavorite icon="solar:share-linear" text=" اشتراک گذاری"/>
    </div>
  );
};

export default ButtonFav;