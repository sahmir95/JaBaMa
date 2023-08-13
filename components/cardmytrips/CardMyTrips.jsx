import React from 'react';
import { Icon } from '@iconify/react';
const data = {
  date: {
    from: "1402/05/28",
    to: "1402/06/03"
  },
  price: 0,
  overall: 101010101,
  person: 0,
  province: "البرز",
  city: "کردان",
  title: "اجاره ویلا دوخوابه استخردار آبگرم سروستان کردان",
  image: "https://cdn.jabama.com/image/890x492/jabama-images/1737810/9e7aa908-13af-4708-84a4-0442400b0ebb.jpg",
  host: {
    avatar: "https://cdn.jabama.com/image/jabama-images/image_500d6b88-93c4-4ff8-b55c-823300064bee.jpg",
    name: "مهرداد چهری"
  },
  rooms: 0,
};

const CardMyTrips = ({ tripData }) => {
  let data = tripData;

  return (
  <div className="w-full h-full">
    <div className="">
      <img className="" src={data.image} alt={data.title} />
    </div>
    <div>
      <div className='flex'>
      <Icon icon="gridicons:location" />
      <p>{data.province},{data.city}</p>
      </div>
      <div>
      <p className= 'block text-main-dark-red text-[50px]'>{data.title}</p>
      </div>
      <div>
        <div className='flex'>
        <Icon icon="streamline:interface-calendar-check-approve-calendar-check-date-day-month-success" />
        <p>تاریخ سفر</p>
        </div>
        <div className='flex justify-between w-[200px]'>
        <span>{data.date.from}</span>
        <span>{data.date.to} </span>
        </div>
      </div>
    </div>
    <p>قیمت: {data.price}</p>
    <div>
      <p>میزبانی: {data.host.name}</p>
      <img src={data.host.avatar} alt={data.title} />
    </div>
  </div>
  );
};

export default CardMyTrips;


// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [myData, setMyData] = useState({
//     title: "عنوان",
//     description: "توضیحات",
//     imageUrl: "https://example.com/image.jpg",
//   });

 
// };