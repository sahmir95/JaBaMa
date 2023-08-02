import {FaLinkedinIn} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";

const Footer = ({display}) => {
    return (
        <div className={`${display} hidden bg-main-light-grayish-white mt-14`}>
            <div className="px-4 pt-14 border-t border-main-gainsboro">
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
                            <span>جاباما را در شبکه‌های اجتماعی دنبال کنید:</span>
                        </div>
                        <div className="mt-4 flex items-center justify-start gap-3">
                            <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm" href="#"><FaLinkedinIn/></a>
                            <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm" href="#"><FaTwitter/></a>
                            <a className="border-main-snow rounded-md bg-main-snow p-2 text-sm" href="#"><FaInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;