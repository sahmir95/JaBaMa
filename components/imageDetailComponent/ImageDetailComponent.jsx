'use client'
import React, {useState} from "react";
export const ImageDetailComponent = ({images}) => {

    const [activeMouse,setActiveMouse]=useState(-1)

    const handleMouseLeave = () => {
        setActiveMouse(-1)
    }
    return (
        <>
            {images.map((item,index) => {
              return(
                      <div key={index} className="w-full">
                          <div className="w-full">
                              <img className="aspect-[5/4] w-full " src={item[0]} alt="image-0"/>
                          </div>
                          <div className="w-full">
                              <div>
                                  <img className="aspect-[5/4] w-full " src={item[1]} alt="image-1"/>
                              </div>
                              <div>
                                  <img className="aspect-[5/4] w-full " src={item[2]} alt="image-2"/>
                              </div>
                              <div>
                                  <img className="aspect-[5/4] w-full " src={item[3]} alt="image-3"/>
                              </div>
                              <div>
                                  <img className="aspect-[5/4] w-full " src={item[4]} alt="image-4"/>
                              </div>
                          </div>
                      </div>
                  )

            })}
        </>
    );
};

