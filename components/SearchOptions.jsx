"use client"

import SearchOption from "./SearchOption"
import { useState } from "react"
import Modal from "./Modal"
import FilterModal from "./filterModal"
import CategoryModal from "./CategoryModal"
import { useDispatch, useSelector } from "react-redux";
import { peopleIncrement } from "@/redux/features/filterSlice";


const SearchOptions = ({ mode }) => {

  const filter = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()



  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState("")

  const modalClassName = (key) => {
    switch (key) {
      case "filter":
        return "w-full h-1/2"
      case "categories":
        return "w-full h-[30vh]"
    
      default:
        break;
    }
  }

  const renderModal = (key) => {
    switch (key) {
      case "filter":
        return <FilterModal />
      case "categories":
        return <CategoryModal />
    
      default:
        break;
    }
  }

  const filterFields = (mode) => {
    
    switch (mode) {
      case "essential":
        return [
          {
            name: "دسته بندی",
            icon: '/images/icon-filter.png',
            onClick: () => {
              setModalType((prev) => "categories")
              setIsOpen(true)
            }
          }
        ]
      case "mini":
        return [
          {
            name: "دسته بندی",
            icon: '/images/icon-person.png',
            onClick: console.log("first")
          },
          {
            name: "فیلترها",
            icon: '/images/icon-filter.png',
            onClick: () => {
              setModalType((prev) => "filter")
              setIsOpen(true)
            }
          }
        ]
      case "full":
        return [
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
      default:
        break;
    }
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="px-5 flex overflow-x-scroll no-scrollbar w-full whitespace-nowrap">
            {filterFields(mode)?.map((field) => {
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
