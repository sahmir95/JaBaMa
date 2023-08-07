'use client'
import React from 'react';

export const WindowFacility = ({faci,onClose,type}) => {
    return (
        <div className="w-full h-[100%] p-[20px] shadow-[0 4px 8px rgb(0, 0, 0, 0.1)] z-[999] fixed top-0 left-0 bg-main-white ">
            <div onClick={onClose} className=" text-[20px] cursor-pointer ">
                <img className="sm:w-5 h-6 cursor-pointer" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>
            <div className=" w-full mt-[50px] flex flex-col justify-center items-start">
                <div className="w-full h-[400px]  ">
                    <h2 className="w-full font-bold text-[0.9rem]">امکانات رفاهی {type}</h2>
                    <ul className="w-full h-[300px] flex justify-between items-start flex-col mt-[20px] ">
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
                        <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasElectricity ? "none" : "line-through"}}>
                            <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-electric-plug-bolt-energy-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="electricity"/></span>
                            <span className="font-bold text-sm">برق</span>
                        </li>
                        <li className="w-full flex justify-start items-center" style={{textDecoration: faci.hasGas ? "none" : "line-through"}}>
                            <span className="w-[40px]"><img className="w-[24px] h-[24px]" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-gas-camping-xnimrodx-lineal-xnimrodx.png" alt="gas"/></span>
                            <span className="font-bold text-sm">گاز</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

