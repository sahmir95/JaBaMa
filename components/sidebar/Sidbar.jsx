'use client'
import MyComp from '../mycomp/MyComp';
import { Icon } from "@iconify/react";
const Sidbar = () => {
    return (
      <div className=' w-[17rem] bg-main-white border border-main-light-gray rounded-lg mr-5 mt-5'>
        <MyComp title=" سفرهای من" icon={<Icon icon="zondicons:travel"/>} desc="لیست سفرها و درخواست ها" showBorder={true} />
        <MyComp title="  مورد علاقه ها" icon={<Icon icon="teenyicons:heart-outline" />} desc="لیست اقامتگاه‌ها و هتل‌های مورد علاقه" showBorder={false} />
        <p className='font-bold text-[0.625rem] text-main-slate-gray mr-3 mt-7'>میزبانی اقامتگاه</p>
        <MyComp title="میزبان شوید" icon={<Icon icon="fluent:arrow-swap-20-regular" />} desc="لیست سفرها و درخواست ها" showBorder={false} />
        <p className='font-bold text-[0.625rem] text-main-slate-gray mr-3 mt-7'> حساب کاربری</p>
        <MyComp title=" اطلاعات حساب کاربری " icon={<Icon icon="clarity:user-line" />} desc="مشاهده و ویرایش اطلاعات شخصی" showBorder={true} />
        <MyComp title=" تراکنش‌های من" icon={<Icon icon="icon-park-outline:transaction-order" />} desc="  مشاهده تاریخ و زمان تراکنش ها" showBorder={true} />
        <MyComp title=" رمز عبور" icon={<Icon icon="teenyicons:password-outline" />} desc=" تنظیمات و تغییرات رمز عبور" showBorder={true} />
        <p className='font-bold text-[0.625rem] text-main-slate-gray mr-3 mt-7'> اعتبار و دعوت</p>
        <MyComp title=" کیف پول" icon={<Icon icon="ph:wallet-light" />} desc=" موجودی، افزایش اعتبار" showBorder={true} />
        <MyComp title=" اعتبار سفر" icon={<Icon icon="solar:card-linear" />} desc=" کارت هدیه جاباما و دریافت اعتبار برای سفر" showBorder={false} />
      </div>
    )
  }
  export default Sidbar;

