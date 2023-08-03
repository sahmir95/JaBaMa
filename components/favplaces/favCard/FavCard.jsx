'use client'
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const FavCard = ({ name, image }) => {
  return (
    <div className=''>
      <Link href={'https://www.jabama.com/city-ramsar'}>
        <img className='rounded h-[118px]' src={image} alt={name} />
      </Link>
      <div className="">
        <p className="">{`اجاره ویلا در  ${name}`}</p>
      </div>
    </div>
  );
};

export default FavCard;