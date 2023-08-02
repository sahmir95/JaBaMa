


export default function layout({children}) {


  return (
    <section>
      <div>
        <div className="pt-2 px-5 h-9 flex justify-between items-end">
          <img className="h-[22px] mb-[1px]" src="/images/color-logo.svg" alt="logo" />
          <div className={`mt-[2px] p-[8px] self-center border border-main-border-gray rounded-full`}>
            <a className="flex items-center gap-x-2" href="tel:02143900900">
              <img className="w-[14px] h-[14px] fill-main-orange" src="/images/phone-call.png" alt="phone"/>
              {/* <span className={`font-medium text-xs hidden ${isPhoneClicked ? "inline" : "hidden" }`}>
                تماس با پشتیبانی
              </span> */}
            </a>
          </div>
        </div>
      </div>
        {children}
    </section>
  )
}
