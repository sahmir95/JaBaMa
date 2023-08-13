'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { removeTravelData } from '@/redux/featchers/travelSlice';
import toFarsiNumber from "@/utils/toFaNumber";

const CardMyTrips = ({
  item,
  city,
  title,
  image,
  province,
  price,
  person,
  overall,
  host={
    avatar,
    name
  },
  date={
    from,
    to
  },
  rooms

}) => {
  const dispatch = useDispatch();

  const removeCard = (id) => {
    dispatch(removeTravelData(id));
  };

  return (
    <div className="w-full h-full px-[20px] py-[20px] mx-auto overflow-hidden bg-main-white rounded-lg shadow-10xl">
      <div className="">
         <a className='cursor-pointer' href="#"><Icon color='gray' width="20" icon="ic:baseline-delete" onClick={() => removeCard(item.id)} /></a>
        <img className="w-full h-[200px] rounded-lg overflow-hidden" src={image} alt={title} />
      </div>
      <div className="pt-[50px]">
        <div className="">
          <div className="flex">
            <Icon icon="gridicons:location" />
            <p className="text-[14px] text-main-slate-gray font-medium mr-2">
              {province} , {city}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-medium text-main-dark-charcoal">{title}</p>
          </div>
        </div>
        <div className="flex flex-col pt-[10px]">
          <div className="flex">
            <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
            <p className="text-[14px] text-main-slate-gray font-medium mr-2">تاریخ سفر</p>
          </div>
          <div className="flex justify-between w-[200px] pt-1">
            <span>{date.from}</span>
            <span>{date.to} </span>
          </div>
        </div>
        <div className="flex justify-between pt-[20px] ">
          <div className="flex-col">
            <div className="flex">
              <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
              <p className="text-[14px] text-main-slate-gray font-medium mr-1">مشخصات</p>
            </div>
            <div><p>تعداد اتاق:{toFarsiNumber(rooms)}</p></div>
          </div>
          <div className="flex flex-col pb-[10px]">
            <div className="flex">
              <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
              <p className="text-[14px] text-main-slate-gray font-medium mr-1">میزبان شما</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-[12px]">{host?.name}</p>
              <img className="w-[30px] h-[30px] rounded-[50%] mr-2" src={host?.avatar} alt={title} />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[10px] bg-main-button-gray w-full rounded-lg'>
        <p className='text-center font-bold bg'>قیمت: {toFarsiNumber(price)}</p>
      </div>
    </div>
  );
};

export default CardMyTrips;
