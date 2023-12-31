'use client'
import {useState} from "react";
import {WindowComment} from "@/components/windowComment/WindowComment";
import toFarsiNumber from "@/utils/toFaNumber";
export const CommentsComponent = ({comments}) => {

    const [openComment, setOpenComment] = useState(false);

    const handleOpen = () => {
        setOpenComment(true);
    };

    const handleClose = () => {
        setOpenComment(false);
    };

    return (
        <div className="w-full mt-[32px]">
                <div className="w-full">
                    <div className="w-full flex justify-start items-center">
                        <div className="w-[200px] font-bold text-[1.2rem] lg:w-[140px]">دیدگاه کاربران</div>
                        <div className="w-full font-light text-[0.9]"> ({comments && toFarsiNumber(comments.length)} دیدگاه)</div>
                    </div>
                    <div className="w-full mt-[16px] lg:flex lg:justify-between lg:items-center lg:flex-wrap">
                        {comments && comments.map((item) => {
                            return (
                                <div key={item.commenter}
                                    className="w-full h-[100px] flex justify-between items-start mt-[16px] flex-col border-[1px]
                                    border-main-light-silver border-solid p-[16px] rounded-[10px] lg:w-[45%] lg:h-[150px] lg:justify-start lg:gap-y-[20px]">
                                    <div className="w-full flex justify-start items-start">
                                        <div className="w-[60px]">
                                            <img className="w-[40px] h-[40px] rounded-[50%]"
                                                 src="https://cdn.jabama.com/original/jabama-images/12345/52acb96f-472e-413e-9204-9a02bab95a94.svg"
                                                 alt="unknown"/>
                                        </div>
                                        <div className="w-full flex justify-start items-start flex-col">
                                            <div className="w-full font-medium text-[0.75rem]">{item.commenter}</div>
                                            <div className="w-full font-light text-[0.6rem]">{item.dateComment}</div>
                                        </div>
                                    </div>
                                    <div className="w-full text-[0.75rem] font-light ">{item.comment}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full">
                        <button onClick={handleOpen}
                                className="w-full px-[20px] py-[8px] mt-[20px] flex justify-center items-center cursor-pointer shadow-none
                                border-solid border-[1px] rounded-[8px] text-sm text-center font-light lg:w-[250px]">
                            <div className="w-[150px] font-bold text-[0.9rem] lg:text-[0.7rem] lg:w-[116px]">مشاهده همه بازخوردها</div>
                            <div className="font-light text-[0.9] lg:text-[0.7rem]"> ({comments && toFarsiNumber(comments.length)} مورد)</div>
                        </button>
                    </div>
                </div>
            {openComment && <WindowComment  comments={comments} onClose={handleClose}/>}
        </div>


    );
};


