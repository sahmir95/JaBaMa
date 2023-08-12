import SupportCall from "@/components/stays/SupportCall";
import GoBackButton from "@/components/stays/GoBackButton";
import SearchOptions from "@/components/stays/SearchOptions";
import StaysSearchMobile from "@/components/header/headerMobile/StaysSearchMobile";
import StaysSearchDesktop from "@/components/header/headerDesktop/StaysSearchDesktop";
import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import HeaderPagesSearch from "@/components/header/headerDesktop/HeaderPagesSearch";


export default function layout({children}) {


  return (
    <section className="relative h-100%">
      <StaysSearchMobile />
      <HeaderPages
                display="block"
                loc=""
                border="border-b border-main-border-gray pb-4 dxl:pt-[0.8rem] sticky top-0 z-20 bg-main-white"
                compFilter={<SearchOptions mode={"essential"}/>}
                compSearch={<HeaderPagesSearch/>}
            />
        {children}
    </section>
  )
}
