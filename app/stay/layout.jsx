import {Providers} from "@/redux/provider/provider";
import HeaderSinglePage from "@/components/header/headerMobile/HeaderSinglePage";
import MenuPrice from "@/components/menu/MenuPrice";
import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import HeaderPagesSearch from "@/components/header/headerDesktop/HeaderPagesSearch";

export default function StayLayout({children}) {
    

    return (
        <Providers>
            <HeaderSinglePage/>
            <HeaderPages
                display="block"
                border="border-b border-b-main-light-gray"
                compSearch={<HeaderPagesSearch/>}
                background="bg-main-white"
            />
            <section>{children}</section>
            <MenuPrice />
        </Providers>
    );
}
