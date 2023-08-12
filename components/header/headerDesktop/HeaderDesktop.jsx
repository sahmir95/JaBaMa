import {HiOutlineHeart} from "react-icons/hi";
import Link from "next/link";

const HeaderDesktop = () => {

    return (
        <div className={`hidden lg:block`}>
            <div
                className="flex items-center justify-between absolute inset-0 mt-[60px] w-full h-20 max-w-[1400px] mx-auto px-4 z-40">
                <div className="flex items-center justify-start">
                    <Link href="/">
                        <img src="/images/white-logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <Link href="/favorites" className="flex items-center justify-center cursor-pointer ml-9">
                        <HiOutlineHeart className="text-main-white text-xl ml-2"/>
                        <span className="text-main-white font-medium text-sm">مورد علاقه‌ها</span>
                    </Link>
                    <Link href="/trips" className="flex items-center justify-center cursor-pointer bg-main-white px-5 py-3 rounded-lg">
                        <span className="font-medium text-sm">سفرهای من</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;