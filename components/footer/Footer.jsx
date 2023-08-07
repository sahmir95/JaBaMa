import {FaLinkedinIn} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaArrowLeft} from "react-icons/fa6";

const Footer = ({display}) => {
    return (
        <div className={`${display} hidden border-t border-main-gainsboro bg-main-light-grayish-white w-full`}>
            <div className="px-4 max-w-[1400px] mx-auto">
                <div className="pt-14">
                    <div className="grid grid-cols-4">
                        <div className="">
                            <span className="font-medium font-sm">نحوه رزرو اقامتگاه</span>
                            <ul className="flex items-start justify-center flex-col mt-4">
                                <li>
                                    <a className="font-light text-sm" href="#">راهنمای رزرو اقامتگاه</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">شیوه‌های پرداخت</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">لغو رزرو</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <span className="font-medium font-sm">خدمات مشتریان</span>
                            <ul className="flex items-start justify-center flex-col mt-4">
                                <li>
                                    <a className="font-light text-sm" href="#">پرسش‌های متداول مهمان</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">پرسش‌های متداول میزبان</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">چطور اقامتگاه ثبت کنم؟</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">حریم شخصی کاربران</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <span className="font-medium font-sm">با جاباما</span>
                            <ul className="flex items-start justify-center flex-col mt-4">
                                <li>
                                    <a className="font-light text-sm" href="#">مجله جاباما</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">درباره جاباما</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">قوانین جاباما</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">تماس با ما</a>
                                </li>
                                <li>
                                    <a className="font-light text-sm" href="#">فرصت‌های شغلی</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div>
                                <img className="w-24" src="/images/color-logo.svg" alt="logo"/>
                            </div>
                            <div className="mt-4">
                                <span className="font-medium text-sm">جاباما را در شبکه‌های اجتماعی دنبال کنید:</span>
                            </div>
                            <div className="mt-4 flex items-center justify-start gap-3">
                                <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm"
                                   href="#"><FaLinkedinIn/></a>
                                <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm"
                                   href="#"><FaTwitter/></a>
                                <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm"
                                   href="#"><FaInstagram/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 flex items-center justify-between bg-main-deep-teal p-4 rounded-[10px]">
                    <a className="flex items-center justify-centerc" href="https://www.jabama.com/app">
                        <img className="w-9" src="/images/logo-curve.svg" alt="logo"/>
                        <span className="font-medium text-main-white mr-4">دانلود اپلیکیشن جاباما</span>
                    </a>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://cafebazaar.ir/app/?id=com.jabamaguest">
                            <img className="w-28" src="/images/bazar.png" alt="bazar"/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.jabamaguest&hl=en_US&gl=US">
                            <img className="w-28" src="/images/googleplay.png" alt="googleplay"/>
                        </a>
                        <a href="https://sibapp.com/applications/%D8%AC%D8%A7%D8%A8%D8%A7%D9%85%D8%A7-jabama">
                            <img className="w-28" src="/images/sib.png" alt="sib"/>
                        </a>
                        <a className="bg-[#42494C] rounded p-[10px]" href="https://www.jabama.com/app">
                            <FaArrowLeft className="text-main-light-gray"/>
                        </a>
                    </div>
                </div>
                <div className="mt-14 grid grid-cols-5 gap-3">
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">اجاره ویلا و اقامتگاه</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">اجاره ویلا در کردان</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">اجاره سوئیت در کیش</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">اجاره ویلا در رامسر</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">اجاره بومگردی</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">رزرو هتل</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">رزرو هتل در کیش</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">رزرو هتل در تهران</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>
                    <a className="flex items-center justify-between rounded-md border border-main-light-gray bg-main-white px-2 py-[6px]"
                       href="#">
                        <span className="font-medium text-xs text-main-deep-teal ml-10">رزرو هتل در مشهد</span>
                        <div className="border-r border-main-silver pr-2">
                            <FaArrowLeft className="text-[8px] text-main-slate-gray"/>
                        </div>
                    </a>

                </div>
                <div className="flex items-center justify-between mt-14 pt-6 border-t border-main-light-gray">
                    <div className="">
                        <h5 className="font-medium text-sm">در تمامی سفرهای شما، <span className="font-light text-sm">همه روزه از ساعت ۷ صبح تا ۲ بامداد در کنار شما هستیم.</span>
                        </h5>
                    </div>
                    <div className="flex gap-5">
                        <span className="font-light text-sm">تلفن پشتیبانی:
                            <a className="font-medium text-main-blue" href="tel:+982143900900"> ۴۳۹۰۰۹۰۰ - ۰۲۱</a>
                        </span>
                        <span className="font-light text-sm">ایمیل:
                            <a className="font-medium text-main-blue"
                               href="mailto:support@jabama.ir"> support@jabama.ir</a>
                        </span>
                        <span className="font-light text-sm">کدپستی:
                            <a className="font-medium text-main-blue" href=""> ۱۳۹۳۷۳۳۶۹۱</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-main-white-smoke">
                <div className="max-w-[1400px] mx-auto flex items-end justify-between py-8 px-4 mt-6 ">
                    <div className="">
                        <div className="">
                        <span className="font-medium text-xs">طراحی و توسعه جاباما، <span
                            className="font-light text-xs">ایران سال1402</span></span>
                        </div>
                        <div className="">
                        <span className="font-light text-xs">&copy; کلیه حقوق این سایت محفوظ و متعلق به <span
                            className="font-medium text-xs">شرکت خدمات مسافرتی و گردشگری امید تجربه شایسته‌ی سفر</span>است</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center bg-main-white rounded-2xl border border-main-gainsboro w-20 h-20">
                            <img className="w-10" src="/images/tejari.svg"
                                 alt="tejarat"/>
                        </div>
                        <div className="flex items-center justify-center bg-main-white rounded-2xl border border-main-gainsboro w-20 h-20">
                            <img className="w-10" src="/images/meli.png"
                                 alt="meli"/>
                        </div>
                        <div className="flex items-center justify-center bg-main-white rounded-2xl border border-main-gainsboro w-20 h-20">
                            <img className="w-12" src="/images/enamad.png"
                                 alt="enamad"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;