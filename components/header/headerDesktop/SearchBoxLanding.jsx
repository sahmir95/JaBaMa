import React from "react";
import HeaderMobile from "@/components/header/headerMobile/HeaderMobile";
import { getLocalData } from "@/lib/localdata";

const data = await getLocalData();

const SearchBoxLanding = () => {
  const stays = data.data.flatMap((category) => Object.values(category).flat());
  return (
    <div className="lg:hidden">
      <div className="px-5 pt-[15px]">
        <img className="h-[20px]" src="/images/color-logo.svg" alt="logo" />
        <h5 className="text-[.63rem] font-light mt-2">
          اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران
        </h5>
      </div>
      <HeaderMobile data={stays} city={data.cities} />
    </div>
  );
};

export default SearchBoxLanding;
