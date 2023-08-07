import "../globals.css"
import {ReadMoreLink} from "@/components/ReadMore/ReadMore";
import {Facility} from "@/components/facilities/Facility";
import "../../public/images/clock.png"
import "./page.css"
import {RulesComponent} from "@/components/rulesComponent/RulesComponent";
import {CommentsComponent} from "@/components/commentsComponent/CommentsComponent";
import SwiperDetailPage from "../../components/swiperDetailPageComponent/SwiperDetailPage";
import React from "react";
const data = {
        "id": 1,
        "title": "اجاره ویلا دوخوابه استخردار آبگرم سروستان کردان",
        "type": "ویلا",
        "discount": 10,
        "rate": 4.2,
        "HasImmediateReserve": true,
        "province": "البرز",
        "city": "کردان",
        "images": [
            "https://cdn.jabama.com/image/890x492/jabama-images/1737810/9e7aa908-13af-4708-84a4-0442400b0ebb.jpg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/ace8fc11-97c4-443d-a259-5e6d317dc955.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/2887048f-20a3-4a82-83c8-82e839bc1727.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/def2c0f1-74a8-42bc-ad29-5bdc5813223d.jpeg",
            "https://cdn.jabama.com/image/383x240/jabama-images/1479506/09c679dd-6ca1-4b14-9744-ce813b5bec72.jpeg"
        ],
        "host": {
            "avatar": "https://cdn.jabama.com/image/jabama-images/image_500d6b88-93c4-4ff8-b55c-823300064bee.jpg",
            "name": "مهرداد چهری"
        },
        "summary": "150 متر زیربنا",
        "description": "با سلام و احترام خدمت حضار گرامی و شاد باش میگم 4 کیلومتر استخر رو بسته",
        "capacity": {
            "base": 4,
            "extra": 3
        },
        "price": {
            "base": 2100000,
            "extra": 200
        },
        "bedroom": {
            "rooms": 2,
            "single": 0,
            "double": 2,
            "traditional": 4
        },
        "bathroom": {
            "persianWC": 1,
            "foreignWC": 0,
            "shower": 1
        },
        "facility":[{"exist": false, name:"سیستم سرمایشی" , icon: "https://img.icons8.com/sf-ultralight/25/air-conditioner.png", alt:"cooling-system"},
            {"exist": true, name:"سیستم گرمایشی" , icon: "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-heater-electronics-xnimrodx-lineal-xnimrodx.png", alt:"heating-system"},
            {"exist": true,name: "مبلمان" , icon: "https://img.icons8.com/ios/50/three-seater-sofa.png", alt:"furniture"},
            {"exist": true, name: "تلویزیون" , icon: "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-tv-furniture-royyan-wijaya-detailed-outline-royyan-wijaya.png", alt:"TV" },
            {"exist": false, name:"وای فای" , icon: "https://img.icons8.com/external-outline-berkahicon/64/external-drop-smart-home-outline-berkahicon.png", alt:"wifi"},
            {"exist": true, name:"آب" , icon: "https://img.icons8.com/external-outline-berkahicon/64/external-drop-smart-home-outline-berkahicon.png", alt:"water"},
            {"exist": true, name:"برق" , icon: "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-electric-plug-bolt-energy-royyan-wijaya-detailed-outline-royyan-wijaya.png", alt:"electricity"},
            {"exist": true, name:"گاز" , icon: "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-gas-camping-xnimrodx-lineal-xnimrodx.png", alt:"gas"}],

    "rules":[
        {statement:"همراه داشتن کارت ملی الزامی می‌باشد.", permission:true},
        {statement:"استعمال دخانیات مجاز نمی‌باشد.", permission:false},
        {statement:"ورود حیوانات خانگی مجاز نمی‌باشد.", permission:false},
        {statement:"برگزاری مراسم مجاز نمی‌باشد", permission:false},
        {statement:"پذیرش 24 ساعته مهمان ممنوع", permission:false},
        {statement:"امکان پذیرش گروه‌های مجردی فراهم نمی‌باشد.", permission:false},
    ],
    "reviews": [
        {commenter:"سید مصطفی",dateComment: "مرداد 1402"  ,comment:"خیلی خوب بود"},
        {commenter:"سید علی",dateComment: "تیر 1402"  ,comment:"مزخرف"},
        {commenter:"سید احمد",dateComment: "شهریور 1402"  ,comment:"پیدات می کنم"},
        {commenter:"سید نوید",dateComment: "اردیبهشت 1402"  ,comment:"تمیز نبود"},
    ],
    }



export default function Detail() {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full relative">
                <SwiperDetailPage images={data.images}/>
                <img className="sm:6 h-6 absolute top-0 z-10" src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>

            </div>
            <div className="w-full px-[20px] mt-[20px] flex justify-center items-center flex-col">
                <h1 className="sm:text-center font-medium text-lg ">{data.title}</h1>
                <div className=" font-light flex justify-center items-center mt-5 text-xs gap-1">
                    <div className=" flex justify-center items-center gap-x-1 ">
                        <img className="sm:3 h-3" src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png" alt="star--v1"/>
                        <div className="font-medium">{data.rate}</div>
                        <a className="underline">(17 نظر ثبت شده)</a>
                    </div>
                    <p className="text-lg">.</p>
                    <div className="flex justify-center items-center gap-1">
                        <img className="sm:3 h-3" src="https://img.icons8.com/fluency-systems-filled/48/FAB005/marker.png" alt="marker"/>
                        <a className="underline">{data.province},{data.city}</a>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full mt-[20px]">
                    <div className="font-bold">{data.type}</div>
                    <div className="flex justify-between items-center">
                        <div className="w-[70%] font-bold text-[0.9rem] text-main-slate-gray ">اجاره {data.type} در {data.city} به میزبانی {data.host.name}</div>
                        <div className=" w-[30%] flex justify-end">
                            <img src={data.host.avatar} className="w-[50px] rounded-[50%] border-main-black border-[2px]" alt="avatar"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="mt-[20px] flex justify-start items-start">
                    <div className="w-[50px] mt-[8px] "> <img className="w-[36px] h-[25px]" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/1A1A1A/external-flash-multimedia-tanah-basah-basic-outline-tanah-basah.png" alt="thunder"/></div>
                    <div className="w-full">
                        <p className="w-full font-bold text-[0.9rem]">رزرو آنی و قطعی جاباما</p>
                        <p className="w-full font-light text-[0.75rem]">برای رزرو نهایی این آپارتمان نیازی به تأیید از سمت میزبان نخواهید داشت و رزرو شما قطعی خواهد بود.</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full flex justify-start items-start flex-col mt-[20px]">
                    <div>
                        <h2 className="font-bold text-[1rem]">مشخصات کلی {data.type}</h2>
                    </div>
                    <div className="mt-[20px] flex flex-col justify-around items-center gap-y-[20px]">
                        <div className="w-full flex justify-start items-center">
                            <div className="w-[50px] "> <img className="w-[28px] h-[30px]" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-line-wedding-tanah-basah-basic-outline-tanah-basah-27.png" alt="thunder"/></div>
                            <div className="w-full">
                                <p className="font-bold text-[0.9rem]">درباره {data.type}</p>
                                <p className="font-light text-[0.75rem]">{data.summary}</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div className="w-[50px] "> <img className="w-[28px] h-[30px]" src="https://img.icons8.com/ios/50/user-group-man-man.png" alt="capacity"/> </div>
                            <div className="w-full">
                                <p className="font-bold text-[0.9rem]">ظرفیت</p>
                                <p className="font-light text-[0.75rem]">ظرفیت تا {data.capacity.base + data.capacity.extra} ({data.capacity.base} نفر پایه + تا {data.capacity.extra} نفر اضافه)</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center ">
                            <div className="w-[50px] "> <img className="w-[28px] h-[30px]" src="https://img.icons8.com/pastel-glyph/64/single-bed--v5.png" alt="bed"/></div>
                            <div className="w-full">
                                <p className="font-bold text-[0.9rem]">سرویس‌های خواب</p>
                                <p className=" font-light text-[0.75rem]">{data.bedroom.rooms} اتاق . {data.bedroom.double} تخت دو نفره . {data.bedroom.single} تخت یک نفره . {data.bedroom.traditional} رخت خواب سنتی</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <div className="w-[50px] "> <img className="w-[28px] h-[30px]" src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Toilet-Paper-halloween-those-icons-lineal-those-icons.png" alt="paper"/></div>
                            <div className="w-full">
                                <p className="font-bold text-[0.9rem]">سرویس‌های بهداشتی</p>
                                <p className="font-light text-[0.75rem]">{data.bathroom.persianWC} سرویس ایرانی . {data.bathroom.foreignWC} سرویس فرنگی . {data.bathroom.shower} حمام</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full">
                    <h2 className="mt-[20px] font-bold">توضیحات {data.type}</h2>
                    <div className="w-full mt-[20px]">
                        <ReadMoreLink text={data.description} type={data.type}/>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div  className="w-full mt-[20px] flex flex-col justify-start items-start gap-y-[20px]">
                    <Facility facility={data.facility} type={data.type} />
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full flex justify-start items-center flex justify-start items-center flex-col">
                    <div className="w-full mt-[20px] font-bold ">
                        محاسبه قیمت {data.type}
                    </div>
                    <div className="w-full flex justify-start items-start mt-[20px]">
                        <div className="w-[50px] mt-[8px]">
                            <img className="w-[28px] h-[28px]" src="https://img.icons8.com/ios/50/check-in-desk.png" alt="extra-person"/>
                        </div>
                        <div className="w-full flex justify-start items-start flex-col">
                            <p className="font-medium text-[0.9rem]">نفر اضافه</p>
                            <p className="font-light text-[0.75rem]">هزینه‌ای که برای نفرات بیش از استاندارد (سرویس خواب و ... ) به میلغ رزرو اضافه می‌شود.</p>
                            <p className="font-light text-[0.75rem]">قیمت برای هر نفر اضافه به ازای هر شب :
                            <strong className="font-bold text-[0.75rem]">{data.price.extra} هزار تومان</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                <div className="w-full mt-[20px]">
                    <div className="w-full font-bold">قوانین و مقررات {data.type}</div>
                    <div className="w-full h-[140px] flex justify-between items-center">
                        <div className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[10px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]">
                            <img className="w-[25px] h-[25px]" src="/images/clock.png" alt="clock"/>
                            <p className="font-bold text-[1rem]">ساعت ورود</p>
                            <p className="font-light text-[0.8rem]">02:00 (بعد از ظهر)</p>
                        </div>
                        <div className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[10px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]">
                            <img className="w-[25px] h-[25px]" src="/images/clock.png" alt="clock"/>
                            <p className="font-bold text-[1rem]">ساعت خروج</p>
                            <p className="font-light text-[0.8rem]">12:00 (ظهر)</p>
                        </div>
                    </div>
                </div>
                <hr className="dashed-2"/>
                <RulesComponent rules={data.rules} type={data.type} />
                <div className="w-full h-[1px] bg-main-light-gray mt-[8px]"></div>
                <CommentsComponent comments={data.reviews}/>


                <div className="w-full h-[600px]">1</div>

            </div>

        </div>
    )
}