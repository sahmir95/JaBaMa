import React from 'react';
import { Icon } from "@iconify/react";
import AddFavorite from '../addfavorite/AddFavorite';

const ButtonFav = () => {
  return (
    <div className='flex'>
      <AddFavorite icon="mdi:heart-outline" text=" افزودن به مورد علاقه ها" />
      <AddFavorite icon="solar:share-linear" text=" اشتراک گذاری"/>
    </div>
  );
};

export default ButtonFav;