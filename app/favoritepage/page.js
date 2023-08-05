

import Sidbar from '@/components/sidebar/Sidbar';
import React from 'react';

const FavoritePage = () => {
  return (
    <div className="flex flex-col md:h-screen sm:h-screen">
      <div className='flex lg:flex-row flex-col'>
        <div className="hidden lg:block">
          <Sidbar/>
        </div>
        <div className='flex flex-col items-center justify-center lg:max-w-[50rem] mx-auto '>
          <div className='fle'>
          <p className="sm:w-28 md:w-40 lg:w-60 font-medium text-base text-main-deep-teal mr-5 mt-5 ">
            مورد علاقه‌ها
          </p>
          </div>
          <div className='flex justify-center items-center'>
            <img className='mx-auto sm:w-full md:w-80 lg:w-96' src="https://cdn.jabama.com/original/statics/mobile/img/favorites-empty-state.5eacc43.svg" alt="" />
          </div>
          <div className='md:w-80 lg:w-96 m-4 md:flex items-center justify-center'>
            <p className='font-light text-base text-main-slate-gray text-center'>
              لیست اقامتگاه‌های <strong className='text-main-deep-teal font-bold'>
                مورد علاقه شما </strong>
              خالی است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;