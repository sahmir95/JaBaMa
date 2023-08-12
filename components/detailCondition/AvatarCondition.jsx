import React from "react";

export const AvatarCondition = ({data}) => {
    return (
        <div className=" w-[30%] flex justify-end">
                {data.host.avatar ? (
                    <img
                        src={data.host.avatar}
                        className="w-[50px] h-[50px] rounded-[50%] border-main-black border-[2px]"
                        alt="avatar"
                    />
                ) : (
                    <div className="w-[50px] h-[50px] bg-main-slate-gray rounded-[50%]">
                        <img className="w-[50px] h-[50px] rounded-[50%] border-main-black border-[2px]" src="/images/userIcon.svg" alt="avatar"/>
                    </div>
                )}
        </div>
    );
};

