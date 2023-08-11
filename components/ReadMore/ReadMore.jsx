'use client'
import {useState} from "react";
import {WindowContent} from "@/components/windowContent/WindowContent";

export const ReadMoreLink = ({text,type}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
     <div>
         {!isOpen ? (
                 <div>
                     <p className="sm: font-light text-[0.75rem] overflow-hidden">{text.substring(0, 100)}...</p>
                     <button onClick={handleClick} className="flex justify-between items-center mt-[20px]">
                         <div className="font-medium text-[0.75rem]">توضیحات بیشتر</div>
                         <div><img className="w-[10px] h-[10px]" src="https://img.icons8.com/material-rounded/24/chevron-left.png" alt="chevron-left"/></div>
                     </button>
                 </div>
              ) : (
             <WindowContent text={text} type={type} onClose={() => setIsOpen(false)}/>
         )
         }
     </div>
    );
};


