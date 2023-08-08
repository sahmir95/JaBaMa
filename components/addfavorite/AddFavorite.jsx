import React from 'react';
import { Icon } from "@iconify/react";

const AddFavorite = ({ icon, text }) => {
  const handleAddToList = () => {
    
  };

  return (
    <div className='w-10 h-10 flex lg:text-lg justify-center items-center lg:w-52 lg:h-11 lg:bg-main-white border border-main-light-gray rounded-lg shadow-md'>
      <button className=' cursor-pointer' onClick={handleAddToList}>
        <Icon icon={icon} />
      </button>
      <span className='hidden lg:text-main-light-gray lg:mr-2 lg:ml-2' >|</span>
      <a href=""><p className='hidden lg:block text-main-deep-teal text-sm font-medium'>{text}</p></a>
    </div>
  );
};

export default AddFavorite;
