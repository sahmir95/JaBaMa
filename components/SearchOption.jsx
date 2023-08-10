"use client"


const SearchOption = ({name , icon , onClick, reset, redux}) => {


  return (
    <div onClick={onClick} className={`flex flex-shrink-0 justify-center gap-x-1 items-center h-8 customPadOption lg:lgCustomPadOption ml-1 border ${redux === "" ? "border-main-border-gray" : "border-main-deep-teal"} rounded-2xl text-main-deep-teal cursor-pointer`}>
        {icon && <img className="w-4 lg:fill-main-deep-teal" src={icon} alt={`icon ${name}`} />}
        <span className="font-normal lg:font-medium lg:text-sm">{name}</span>
        <span onClick={(e) => {
          e.stopPropagation()
          reset()
          }}
          className={`${redux === "" ? "hidden" : "inline"} mt-[3px] px-1`}>X</span>
    </div>
  )
}

export default SearchOption;