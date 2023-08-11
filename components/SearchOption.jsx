"use client"


const SearchOption = ({name ,isOpen, icon , onClick, reset, redux, setIsOpen}) => {


  return (
    <div onClick={() => {
      if (isOpen) {
        setIsOpen()
      } else {
        onClick()
      }
    }
      } className={`flex flex-shrink-0 justify-center gap-x-1 items-center h-8 customPadOption lg:lgCustomPadOption ml-1 border ${redux === "" ? "border-main-border-gray" : "border-main-deep-teal"} rounded-2xl text-main-deep-teal cursor-pointer`}>
        {icon && <img className="w-4 lg:fill-main-deep-teal" src={icon} alt={`icon ${name}`} />}
        <span className="lg:font-medium font-normal lg:text-xs dxl:font-medium dxl:text-sm">{name}</span>
        <span onClick={(e) => {
          e.stopPropagation()
          setIsOpen()
          reset()
          }}
          className={`${redux === "" ? "hidden" : "inline lg:text-xs"} mt-[3px] px-1`}> 
          <span className="hidden lg:inline pl-1"> | </span> X
          </span>
    </div>
  )
}

export default SearchOption;