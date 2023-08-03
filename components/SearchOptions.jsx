import SearchOption from "./SearchOption"


const SearchOptions = () => {

  const filterFields = [
    {
      name: "انتخاب تاریخ",
      icon: '/images/icon-calendar.png',
      onClick: () => console.log("are")
    },
    {
      name: "تعداد نفرات",
      icon: '/images/icon-person.png',
      onClick: () => console.log("are")
    },
    {
      name: "فیلترها",
      icon: '/images/icon-filter.png',
      onClick: () => console.log("are")
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
  )
}

export default SearchOptions
