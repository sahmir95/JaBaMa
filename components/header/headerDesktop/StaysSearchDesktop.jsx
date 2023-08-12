import SupportCall from "@/components/SupportCall"
import GoBackButton from "@/components/GoBackButton"
import SearchOptions from "@/components/SearchOptions"

function StaysSearchDesktop() {
  return (
    <div className="hidden py-4 lg:flex justify-center sticky top-0 z-50 bg-main-white border-b border-main-light-silver">
      <div className="max-w-[1400px] flex flex-col w-full">
        <div className="flex w-full">
          <div className="max-w-[1400px] pt-2 px-5 h-9 flex justify-between items-end">
            <img className="h-[22px] mb-[1px]" src="/images/color-logo.svg" alt="logo" />
          </div>
          <div className="max-w-[1400px] w-full flex flex-col pt-2 pb-3 bg-main-white h-fit">
            <div className="bg-main-lightish-gray p-3 w-full">
              <div>
                <span>search</span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-medium text-xs">
          <SearchOptions mode={"essential"}/>
        </div>
      </div>
    </div>
  )
}

export default StaysSearchDesktop