

const SearchOption = ({name , icon , onClick}) => {
  return (
    <div className="flex flex-shrink-0 justify-center gap-x-1 items-center h-8 customPadOption ml-1 border border-main-border-gray rounded-2xl text-main-deep-teal cursor-pointer">
        {icon && <img className="w-4" src={icon} alt={`icon ${name}`} />}
        <span className="font-normal">{name}</span>
    </div>
  )
}

export default SearchOption;