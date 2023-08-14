"use client";
import React from "react";
import Link from "next/link";

const LandingSearchResult = ({ icon, searchCity, type }) => {
  return (
    <Link href="/stays" className="flex items-center justify-start">
      <div className="w-12 h-12">
        <img className="w-full" src={icon} alt="location" />
      </div>
      <div className="flex items-center justify-start">
        {type && (
          <span className="font-medium text-main-slate-gray text-xs mr-4">
            {type}
          </span>
        )}
        {searchCity && (
          <span className="font-medium text-main-slate-gray text-xs mr-4">
            {type}
          </span>
        )}
      </div>
    </Link>
  );
};

export default LandingSearchResult;
