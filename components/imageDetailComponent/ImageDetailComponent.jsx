'use client'
import React, {useState} from "react";
import clsx from "clsx";

export const ImageDetailComponent = ({data}) => {

    const [activeMouse, setActiveMouse] = useState(null)

    const handleMouseEnter = (index) => {
        setActiveMouse(index)
    };

    const handleMouseLeave = () => {
        setActiveMouse(null)
    };

    return (
        <div className="w-full h-[410px] flex gap-x-[10px] mt-[20px] m-2 transition duration-300 ease-in-out cursor-pointer hover:brightness-50"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <div className={clsx(
                "w-[52%] h-full",
                {"filter" : true},
                {"brightness-100": activeMouse !== null && activeMouse !== data.images[0]},
            )}>
                <img className="w-full h-full rounded-r-[10px] hover:rounded-[10px]"
                     src={data.images[0]} alt="image-0"/>
            </div>
            <div className="w-[48%] h-full flex flex-wrap gap-[10px]">
                {data.images.filter((item, index) => index > 0 && index < 5).map((item, index) => {
                    return (
                        <div key={index} className="w-[49%] h-[200px]">
                            <img className={clsx(
                                "w-full h-[200px] cursor-pointer hover:rounded-[10px]",
                                {"rounded-tl-[10px]": index === 1},
                                {"rounded-bl-[10px]": index === 3},
                            )}
                                 src={item} alt={`image ${index + 1}`}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

