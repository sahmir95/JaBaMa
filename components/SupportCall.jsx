"use client"

import { useEffect, useState } from "react"


const SupportCall = () => {

  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 15000)
  }, [])

  return (
    <div className={`mt-[2px] p-[8px] self-center border transition-all duration-200 ease-in-out border-main-border-gray ${isActive ? "customPhoneRounded" : "rounded-full" }`}>
      <a className={`flex items-center transition-all duration-200 ease-in-out ${isActive && "gap-x-2"}`} href="tel:02143900900">
        <img className="w-[14px] h-[14px] fill-main-orange" src="/images/phone-call.png" alt="phone"/>
        <span className={`font-medium whitespace-nowrap text-xs transition-all overflow-hidden duration-200 ease-in-out ${isActive ? "w-[95px]" : "w-0" }`}>
                تماس با پشتیبانی
        </span>
      </a>
    </div>
  )
}

export default SupportCall