"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function FavCard({ name, image }) {
  return (
    <div className="maskhare">
      {/* <div className="w-full rounded">
        <img className="h-[180px]  rounded w-[200px]" src={image} alt={name} />
      </div> */}

      <div className="w-full">
        <p className="">{`اجاره ویلا در  ${name}`}</p>
      </div>
    </div>
  );
}
