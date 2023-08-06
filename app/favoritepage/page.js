
    
'use client'
import React, { useState } from 'react';
import Sidbar from '@/components/sidebar/Sidbar';
import TitlePage from '@/components/titlepage/TiTlePage';
import { Icon } from "@iconify/react";

const FavoritePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleAddList = () => {

    // console.log('افزودن لیست جدید:', newListName);

    setNewListName('');
  
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    
    setIsModalOpen(false);
  };

  return (
    <div>
      {false ? (
        <div>
          <div className='flex items-center justify-center'>
            <TitlePage title="مورد علاقه ها" />
          </div>
          <div className='flex mt-12'>
            <div className='w-8 h-8 border rounded flex items-center justify-center  mr-5' onClick={() => setIsModalOpen(true)}>
              <Icon icon="ep:plus" />
            </div>
            <p className='mr-3 text-sm text-main-deep-teal font-medium'>اضافه کردن لیست جدید</p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <Sidbar />
          </div>
          <div className="w-full lg:w-3/4 p-4">
            <TitlePage title="مورد علاقه ها" />
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-3/4 lg:w-1/3 md:w-1/3 mb-4 lg:mr-4"
                src="https://cdn.jabama.com/original/statics/mobile/img/favorites-empty-state.5eacc43.svg"
                alt=""
              />
              <div className="lg:w-2/3 text-center">
                <p className="font-light text-base text-main-slate-gray mt-2">
                  لیست اقامتگاه‌های{" "}
                  <strong className="text-main-deep-teal font-bold">مورد علاقه شما</strong> خالی است.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

{isModalOpen && (
  <div className=" w-full bottom-0 left-0 right-0 flex items-center justify-center bg-opacity-50 z-1000">
    <div className="bg-main-slate-gray rounded-t-lg p-8">
      <input
        type="text"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="نام لیست جدید"
      />
      <div className="flex justify-between">
        <button className="bg-main-button-gray text-main-deep-teal px-4 py-2 rounded" onClick={handleModalClose}>
          بستن
        </button>
        <button className="bg-main-deep-teal text-main-white px-4 py-2 rounded mr-2" onClick={handleAddList}>
          ایجاد لیست
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default FavoritePage;

