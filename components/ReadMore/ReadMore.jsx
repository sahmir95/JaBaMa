'use client'
import {useState} from "react";
import {WindowContent} from "@/components/windowContent/WindowContent";

export const ReadMoreLink = ({text}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
     <div>
         {!isOpen ? (
                 <div>
                     <p className="md:max-w-0 font-light text-[1rem] overflow-hidden">{text.substring(0, 20)}...</p>
                     <button onClick={handleClick}>توضیحات بیشتر</button>
                 </div>
              ) : (
             <WindowContent text={text} onClose={() => setIsOpen(false)}/>
         )
         }
     </div>
    );
};


