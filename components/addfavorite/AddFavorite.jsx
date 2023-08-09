'use client'
import React from 'react';
import { Icon } from "@iconify/react";

const AddFavorite = ({ icon, text }) => {
  const handleAddToList = () => {
    
  };

  return (
    <>
        <button className='w-10 h-10 flex lg:text-lg justify-center items-center lg:w-fit lg:h-fit lg:px-[12px] lg:py-[8px] lg:bg-main-white border border-main-light-gray rounded-[10px] shadow-10xl'>
            <div onClick={handleAddToList}>
                <Icon icon={icon} />
            </div>
            <span className='hidden lg:block lg:text-main-light-gray lg:mr-2 lg:ml-2' >|</span>
            <a href=""><p className='hidden lg:block text-main-deep-teal text-sm font-medium'>{text}</p></a>
        </button>
    </>
  );
};

export default AddFavorite;
