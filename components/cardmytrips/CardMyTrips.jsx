import React from 'react';
import { Icon } from '@iconify/react';

const CardMyTrips = ({ 
  obj,
  city,
  title,
  image,
  province,
  price,
  person,
  overall,
  host,
  avatar,
  name,
  date,
  rooms,
  from,
  to
 }) => {
  

  return (
  <div className="w-[280px]  px-[20px] py-[20px] mx-auto overflow-hidden bg-main-white rounded-lg shadow-10xl">
    {/* <div className=""> */}
      <img className="w-full rounded-lg overflow-hidden" src={image} alt={title} />
    {/* </div> */}
   <div className='pt-[50px]'>
   <div className=''>
      <div className='flex'>
      <Icon icon="gridicons:location" />
      <p className='text-[14px] text-main-slate-gray font-medium mr-2'>{province} , {city}</p>
      </div>
      <div>
      <p className= ''>{title}</p>
      </div>
    </div>
    <div className='flex flex-col pt-[10px]'>
        <div className='flex'>
        <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
        <p className='text-[14px] text-main-slate-gray   font-medium mr-2'>تاریخ سفر</p>
        </div>
        <div className='flex justify-between w-[200px] pt-1'>
        <span>{date.from}</span>
        <span>{date.to} </span>
        </div>
    </div>
    <div className='flex justify-between pt-[20px] '>
      <div className='flex-col'>
        <div className='flex'>
        <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
        <p className='text-[14px] text-main-slate-gray  font-medium mr-1'>مشخصات</p>
        </div>
        <div> اتاق{rooms}</div>
      </div>
      <div className='flex-col'>
        <div className='flex'>
        <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
        <p className='text-[14px] text-main-slate-gray   font-medium mr-2'>میزبان شما</p>
        </div>
        <div className='flex '> 
          <p>{host.name}</p>
           <img className='w-[30px] h-[30px] rounded-[50%] mr-2 ' src={host.avatar} alt={title} />
        </div>
      </div>
    </div>
   </div>
    <p>قیمت: {price}</p>
  </div>
  
  );
};

export default CardMyTrips;
