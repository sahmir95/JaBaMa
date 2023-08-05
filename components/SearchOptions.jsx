import SearchOption from "./SearchOption"
import { useState } from "react"
import Modal from "./Modal"
import FilterModal from "./filterModal"
import { useDispatch, useSelector } from "react-redux";
import { peopleIncrement } from "@/redux/features/filterSlice";


const SearchOptions = () => {

  const filter = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()


  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState("")

  const modalClassName = (key) => {
    switch (key) {
      case "filter":
        return "w-full h-full"
        break;
    
      default:
        break;
    }
  }

  const renderModal = (key) => {
    switch (key) {
      case "filter":
        return <FilterModal />
        break;
    
      default:
        break;
    }
  }

  const filterFields = [
    {
      name: "انتخاب تاریخ",
      icon: '/images/icon-calendar.png',
      onClick: () => dispatch(peopleIncrement())
    },
    {
      name: "تعداد نفرات",
      icon: '/images/icon-person.png',
      onClick: () => console.log("are")
    },
    {
      name: "فیلترها",
      icon: '/images/icon-filter.png',
      onClick: () => {
        setModalType((prev) => "filter")
        setIsOpen(true)
      }
    },  
    {
      name: "انتخاب شهر",
      onClick: () => console.log("are")
    },
    {
      name: "قیمت برای هر شب",
      onClick: () => console.log("are")
    },         
    {
      name: "نوع اقامتگاه",
      onClick: () => console.log("are")
    },  
    
  ]

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="px-5 flex overflow-x-scroll no-scrollbar w-full whitespace-nowrap">
            {filterFields.map((field) => {
            return (
              <>
                <SearchOption name={field?.name} icon={field?.icon} onClick={field?.onClick} />
              </>
            )
            })}
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={modalClassName(modalType)}>
        {renderModal(modalType)}
      </Modal>
    </>
  )
}

export default SearchOptions
