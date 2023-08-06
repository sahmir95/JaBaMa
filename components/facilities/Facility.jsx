'use client'
import {WindowFacility} from "@/components/windowFacility/WindowFacility";
import {useState} from "react";
import clsx from "clsx";


export const Facility = ({facility,type,}) => {
    const [otherFacilities, setOtherFacility] = useState(false);

    const handleClick = () => {
        setOtherFacility(true);
    };
    return (
        <div className="w-full">
            {!otherFacilities ? (
                <div className="w-full">
                    <div className="w-full h-[300px]  ">
                        <h2 className="w-full font-bold text-[0.9rem]">امکانات رفاهی {type}</h2>
                        <ul className="w-full h-[250px] flex justify-between items-start flex-col mt-[20px] ">
                            {facility.sort((a,b) => Number(b.exist) - Number(a.exist)).map((item) => {
                                return (
                                    <li key={item.name} className={clsx("w-full flex justify-start items-center",
                                        {"line-through": !item.exist},
                                        {"text-main-light-silver": !item.exist}
                                    )}>
                                        <span className="w-[40px]"><img className="w-[24px] h-[24px]" src={item.icon} alt={item.alt}/></span>
                                        <span className="font-bold text-sm">{item.name}</span>
                                    </li>
                                )
                            })}



                        </ul>

                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full px-[20px] py-[8px] mt-[20px] cursor-pointer shadow-none border-solid border-[1px] rounded-[10px] text-sm text-center font-light px-[]">
                             مشاهده همه امکانات (8 مورد)
                        </button>
                    </div>

                </div>
            ) : (
                <WindowFacility facility={facility} type={type} onClose={() => setOtherFacility(false)}/>
            )
            }
        </div>

    );
};


