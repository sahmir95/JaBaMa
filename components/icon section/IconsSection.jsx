const IconsSection = () => {
  return (
    <div className="w-full px-[20px]  h-auto flex flex-col lg:hidden items-center">
      <div className="w-full flex justify-between pt-[8%] px-[8%]">
        <div className="w-[48px] md:w-[64px] flex flex-col justify-center items-center">
          <img className="" src="/images/Vila.png" alt="ویلا" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">ویلا</p>
        </div>
        <div className="w-[48px] md:w-[64px] flex flex-col justify-center items-center">
          <img className="aspect-square" src="/images/Kolbe.png" alt="کلبه" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">کلبه</p>
        </div>
        <div className="w-[48px] md:w-[64px] flex flex-col justify-center items-center">
          <img className="w-full" src="/images/Bumgardi.png" alt="بوگردی" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">بوگردی</p>
        </div>
        <div className="w-[48px] md:w-[64px] flex flex-col justify-center items-center">
          <img className="aspect-square" src="/images/Hotel.png" alt="هتل" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">هتل</p>
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
