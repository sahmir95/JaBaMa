'use client'
import {WindowFacility} from "@/components/windowFacility/WindowFacility";
import {useState} from "react";


export const Facility = ({faci,type,}) => {
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
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasCooling ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/sf-ultralight/25/air-conditioner.png" alt="air-conditioner"/></span>
                                <span className="font-bold text-sm">سیستم سرمایشی</span>
                            </li>
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasHeating ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-heater-electronics-xnimrodx-lineal-xnimrodx.png" alt="heater"/></span>
                                <span className="font-bold text-sm">سیستم گرمایشی</span>
                            </li>
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasFurniture ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/ios/50/three-seater-sofa.png" alt="sofa"/></span>
                                <span className="font-bold text-sm">مبلمان</span>
                            </li>
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-tv-furniture-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="TV"/></span>
                                <span className="font-bold text-sm">تلویزیون</span>
                            </li>
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasWifi ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/windows/32/wifi--v1.png" alt="wifi"/></span>
                                <span className="font-bold text-sm">وای فای</span>
                            </li>
                            <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasWater ? "none" : "line-through"}}>
                                <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-outline-berkahicon/64/external-drop-smart-home-outline-berkahicon.png" alt="faucet"/></span>
                                <span className="font-bold text-sm">آب</span>
                            </li>

                        </ul>

                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full px-[20px] py-[8px] mt-[20px] cursor-pointer shadow-none border-solid border-[1px] rounded-[10px] text-sm text-center font-light px-[]">
                             مشاهده همه امکانات (8 مورد)
                        </button>
                    </div>

                </div>
            ) : (
                <WindowFacility faci={faci} type={type} onClose={() => setOtherFacility(false)}/>
            )
            }
        </div>

    );
};


