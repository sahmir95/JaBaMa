
import { useDispatch,useSelector } from "react-redux";
import { sortReset } from "@/redux/features/filterSlice";

const SearchOption = ({name , icon , onClick}) => {

  const sort = useSelector((state) => state.filterReducer.sort)
  const dispatch = useDispatch()

  return (
    <div onClick={onClick} className={`flex flex-shrink-0 justify-center gap-x-1 items-center h-8 customPadOption ml-1 border ${sort === "" ? "border-main-border-gray" : "border-main-deep-teal"} rounded-2xl text-main-deep-teal cursor-pointer`}>
        {icon && <img className="w-4" src={icon} alt={`icon ${name}`} />}
        <span className="font-normal">{name}</span>
        <span onClick={(e) => {
          e.stopPropagation()
          dispatch(sortReset())
          }} className={`${sort === "" ? "hidden" : "inline"} mt-[3px] px-1`}>X</span>
    </div>
  )
}

export default SearchOption;