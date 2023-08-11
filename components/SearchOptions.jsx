"use client"

import SearchOption from "./SearchOption"
import { useEffect, useState } from "react"
import Modal from "./Modal"
import TypeModal from "./TypeModal"
import CityModal from "./CityModal"
import TypeTool from "./TypeTool"
import CityTool from "./CityTool"
import CategoryModal from "./CategoryModal"
import CategoryTool from "./CategoryTool"
import { useDispatch, useSelector } from "react-redux";
import { peopleIncrement, setCityReset, setTypeReset } from "@/redux/featchers/filterSlice";
import { sortReset } from "@/redux/featchers/filterSlice";
import ToolTip from "./ToolTip"


const SearchOptions = ({ mode }) => {

  const sort = useSelector((state) => state.filterReducer.sort)
  const city = useSelector((state) => state.filterReducer.city)
  const type = useSelector((state) => state.filterReducer.type)
  const dispatch = useDispatch()



  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState("")
  const [isTooltipOpen, setIsTooltipOpen] = useState({
    city: false,
    type: false,
    sort: false
  })
  const [tooltipType, setTooltipType] = useState("")


  const handleCityClick = () => {
    if (window.innerWidth < 1023) {
      setModalType("city");
      setIsOpen(true);
    } else {
      setIsTooltipOpen((prev) => ({
        ...prev,
        city: true,
        sort: false,
        type: false
      }))
      setTooltipType("city");
    }
  };

  const handleSortClick = () => {
    if (window.innerWidth < 1023) {
      setModalType("sort");
      setIsOpen(true);
    } else {
      setIsTooltipOpen((prev) => ({
        ...prev,
        sort: true,
        city: false,
        type: false,
      }))
      setTooltipType("sort");
    }
  };

  const handleTypeClick = () => {
    if (window.innerWidth < 1023) {
      setModalType("type");
      setIsOpen(true);
    } else {
      setIsTooltipOpen((prev) => ({
        ...prev,
        type: true,
        city: false,
        sort: false,
      }))
      setTooltipType("type");
    }
  };

  const handleTooltipClick = (type) => {
    setIsTooltipOpen((prevTooltipStates) => ({
      ...prevTooltipStates,
      [type]: false,
    }));
  };

  const modalClassName = (key) => {
    switch (key) {
      case "sort":
        return "w-full h-fit"
      case "type":
        return "w-full h-fit"
      case "city":
        return "w-full h-fit"
      default:
        break;
    }
  }

  const tooltipClassName = (key) => {
    switch (key) {
      case "city":
        return "w-fit h-fit"
      case "sort":
        return "w-fit h-fit"
      case "type":
        return "w-fit h-fit"
      default:
        break;
    }
  }

  const renderModal = (key) => {
    switch (key) {
      case "city":
        return <CityModal />
      case "sort":
        return <CategoryModal />
      case "type":
        return <TypeModal />
    
      default:
        break;
    }
  }

  const renderTooltip = (key) => {
    switch (key) {
      case "city":
        return <CityTool />
      case "sort":
        return <CategoryTool />
      case "type":
        return <TypeTool />
      default:
        break;
    }
  }

  const filterFields = (mode) => {
    
    switch (mode) {
      case "essential":
        return [
          {
            name: `دسته بندی`,
            type: "sort",
            icon: '/images/icon-filter.png',
            redux: sort,
            onClick: () => handleSortClick(),
            reset: () => dispatch(sortReset()),
          },
          {
            name: "شهر",
            type: "city",
            redux: city,
            onClick: () => handleCityClick(),
            reset: () => dispatch(setCityReset()),
          },
          {
            name: "نوع اقامتگاه",
            type: "type",
            redux: type,
            onClick: () => handleTypeClick(),
            reset: () => dispatch(setTypeReset()),
          },
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
        <div className="px-5 flex overflow-x-scroll no-scrollbar w-full whitespace-nowrap lg:px-4">
            {filterFields(mode)?.map((field) => {
            return (
              <div className="relative">
                <SearchOption redux={field?.redux} isOpen={isTooltipOpen[field?.type]} setIsOpen={() => handleTooltipClick(field?.type)} reset={field?.reset} name={field?.name} icon={field?.icon} onClick={field?.onClick} />
                <ToolTip isOpen={isTooltipOpen[field?.type]} setIsOpen={() => handleTooltipClick(field?.type)} className={tooltipClassName(field?.type)}>
                  {renderTooltip(field?.type)}
                </ToolTip>
              </div>
            )
            })}
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} className={modalClassName(modalType)}>
        {renderModal(modalType)}
      </Modal>
    </>
  )
}

export default SearchOptions
