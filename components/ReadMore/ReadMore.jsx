'use client'
import {useState} from "react";
import {WindowContent} from "@/components/windowContent/WindowContent";

export const ReadMoreLink = ({text,type}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
     <div>
         <p className="font-light text-[0.75rem] overflow-hidden lg:font-medium lg:text-[0.8rem]">{text.substring(0, 150)}...</p>
         <button onClick={handleClick} className="flex justify-between items-center mt-[20px]">
             <div className="font-medium text-[0.75rem] lg:text-[0.8rem] lg:font-bold">توضیحات بیشتر</div>
             <div>
                 <img className="w-[10px] h-[10px]" src="https://img.icons8.com/material-rounded/24/chevron-left.png" alt="chevron-left"/>
             </div>
         </button>
          <WindowContent text={text} type={type} onClose={handleClick} isOpen={isOpen}/>
     </div>
    );
};


