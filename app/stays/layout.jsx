import SupportCall from "@/components/SupportCall";



export default function layout({children}) {


  return (
    <section>
      <div>
        <div className="pt-2 px-5 h-9 flex justify-between items-end">
          <img className="h-[22px] mb-[1px]" src="/images/color-logo.svg" alt="logo" />
          <SupportCall />
        </div>
      </div>
        {children}
    </section>
  )
}
