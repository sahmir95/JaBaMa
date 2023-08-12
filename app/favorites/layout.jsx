import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import HeaderMobilePages from "@/components/header/headerMobile/HeaderMobilePages";

export default function FavoritesLayout({ children }) {
  return (
    <section>
      <HeaderPages
        display="block"
        loc=""
        border="border-b border-b-main-light-gray"
        compFilter=""
      />
      <HeaderMobilePages title="مورد علاقه‌ها" />
      {children}
    </section>
  );
}
