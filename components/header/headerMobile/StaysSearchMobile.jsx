import SupportCall from "@/components/stays/SupportCall"
import GoBackButton from "@/components/stays/GoBackButton"
import SearchOptions from "@/components/stays/SearchOptions"
import HeaderPagesSearch from "../headerDesktop/HeaderPagesSearch"

function StaysSearchMobile() {
  return (
    <>
      <div className="mb-1 lg:hidden">
        <div className="pt-2 px-5 h-9 flex justify-between items-end">
          <img className="h-[22px] mb-[1px]" src="/images/color-logo.svg" alt="logo" />
          <SupportCall />
        </div>
      </div>
      <div className="flex flex-col pt-2 pb-3 border-b bg-main-white border-main-light-silver h-fit sticky top-0 z-50 lg:hidden">
        <div className="pr-3 mb-3 pl-5 h-11 flex items-center justify-between">
          <GoBackButton />
          <HeaderPagesSearch classNames={{container: "m-0 ml-4"}}/>
        </div>
        <div className="font-medium text-xs">
          <SearchOptions mode={"essential"}/>
        </div>
      </div>
    </>
  )
}

export default StaysSearchMobile