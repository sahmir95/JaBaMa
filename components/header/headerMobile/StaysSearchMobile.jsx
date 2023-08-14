import SupportCall from "@/components/stays/SupportCall";
import GoBackButton from "@/components/stays/GoBackButton";
import SearchOptions from "@/components/stays/SearchOptions";
import HeaderPagesSearch from "../headerDesktop/HeaderPagesSearch";

function StaysSearchMobile({ city, data }) {
  return (
    <>
      <div className="mb-1 lg:hidden">
        <div className="pt-2 px-5 h-9 flex justify-between items-end">
          <img
            className="h-[22px] mb-[1px]"
            src="/images/color-logo.svg"
            alt="logo"
          />
          <SupportCall />
        </div>
      </div>
      <div className="flex flex-col px-2 pt-2 pb-3 border-b bg-main-white border-main-light-silver h-fit sticky top-0 z-50 lg:hidden">
        <div className="mb-3 h-11 flex items-center justify-between">
          <GoBackButton/>
          <HeaderPagesSearch
            city={city}
            data={data}
            classNames={{ body: "m-0 px-1",inner: "w-[200px] sm:w-[240px]" }}
          />
        </div>
        <div className="font-medium text-xs">
          <SearchOptions mode={"essential"} />
        </div>
      </div>
    </>
  );
}

export default StaysSearchMobile;
