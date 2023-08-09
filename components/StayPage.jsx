"use client"

import { useEffect, useState } from "react"
import Link from "next/link";
import toFarsiNumber from "@/utils/toFaNumber";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import { useDispatch, useSelector } from "react-redux";
import { setTypeVilla , setTypeCottage , setTypeReset , setCityReset, reset , setCityKish, setCityRamsar } from "@/redux/features/filterSlice"
import NoResultFound from "./NoResultFound";



function StayPage({ stays }) {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(stays);
  const [amount, setAmount] = useState(stays.length);
  const filter = useSelector((state) => state.filterReducer);
  const type = useSelector((state) => state.filterReducer.type);
  const city = useSelector((state) => state.filterReducer.city);
  const sort = useSelector((state) => state.filterReducer.sort);
  const dispatch = useDispatch();


  const titleMaker = () => {
    let type = "ویلا و سوئیت"
    let city = "سراسر کشور"
    switch (filter.type) {
      case "villa":
        type = "ویلا"
        break;
      case "cottage":
        type = "کلبه"
        break;
      case "hotel":
        type = "هتل"
        break;
      case "ecoTourism":
        type = "بومگردی"
        break;
      default:
        break;
    }
    if (filter.city) {
      city = filter.city
    }
    return `اجاره ${type} در ${city}`
  }

  useEffect(() => {
    const handleSort = () => {
      setProducts((prevProducts) => {
        switch (sort) {
          case "expensive":
            return prevProducts.slice().sort((a, b) => b.price.base - a.price.base);
          case "cheap":
            return prevProducts.slice().sort((a, b) => a.price.base - b.price.base);
          case "rate":
            return prevProducts.slice().sort((a, b) => b.rate - a.rate);
          default:
            setProducts(stays)
            handleFilters()
        }
      });
    };
    
    handleSort();
  }, [sort]);


  function filterCityDataAsync(data, city) {
    return new Promise((resolve) => {
      const filteredData = city === "" ? data : data.filter((item) => item.city === city)
      setLoading(true)
      resolve(filteredData);
    });
  }

  function filterTypeDataAsync(data, type) {
    return new Promise((resolve) => {
      const filteredData = type === "" ? data : data.filter((item) => item.type === type)
      setLoading(true)
      resolve(filteredData);
    });
  }

  const handleFilters = async () => {
    setLoading(true);

    try {
      let filteredData = stays;

      if (type !== "") {
        filteredData = await filterTypeDataAsync(filteredData, type);
      }

      if (city !== "") {
        filteredData = await filterCityDataAsync(filteredData, city);
      }

      setProducts(filteredData);
      setAmount(filteredData.length);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFilters();
  }, [type, city]);

  return (
    <>
    <div className="px-5 pb-20">
      <div className="pt-[1.45rem] pb-[0.6rem]">
        {/* <p onClick={() => dispatch(setTypeVilla())}>set villa</p>
        <p onClick={() => dispatch(setTypeCottage())}>set cottage</p>
        <p onClick={() => dispatch(setCityRamsar())}>set ramsar</p>
        <p onClick={() => dispatch(setCityKish())}>set kish</p>
        <p onClick={() => dispatch(setTypeReset())}>type reset</p>
        <p onClick={() => dispatch(setCityReset())}>city reset</p>
        <p onClick={() => dispatch(reset())}>all reset</p> */}
        <p className="mb-1 font-bold text-main-deep-teal">{titleMaker()}</p>
        <p className="mt-2 font-medium text-xs text-main-slate-gray">{`${toFarsiNumber(amount)} اقامتگاه`}</p>
      </div>
      {loading ? (
            <div className="mt-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="pb-6 animate-pulse">
                <div className="h-44 bg-main-light-silver rounded"></div>
                <div className="space-y-2 mt-2">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="h-4 bg-main-light-silver rounded w-5/6"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
      ) : (
      <div className="mt-4 pb-10 flex flex-col md:grid md:grid-cols-2">
          {products?.length >= 1 ?
          products
            .map((stay) => {
              return (
              <div key={stay.id} className="pb-6 text">
                  <CardWithSwiper
                    price={stay?.price?.base}
                    rate={stay?.rate}
                    comments={stay?.comments}
                    title={stay?.title}
                    city={stay?.city}
                    classNames={{
                      images: "sm:aspect-[8/5] sm:h-fit md:aspect-[8/5] md:h-fit",
                      rate: "text-xs font-bold pl-[0.1rem]",
                      comment: 'text-xs inline',
                      title: "",
                      middle: "text-xs ",
                      startPrice: "sm:inline text-xs",
                      bottom: "text-xs",
                      price: "font-bold flex items-center gap-x-1 text-[0.9rem] pl-[0.15rem]",
                      reserve: "w-fit text-xs px-2 py-1 border-main-border-gray font-medium mt-[0.35rem]",
                      discount: "w-fit text-xs px-2 py-[0.15rem] font-medium",
                    }}
                    province={stay?.province}
                    images={stay?.images}
                    capacity={stay?.capacity}
                    hasDiscount={stay?.discount}
                    isBeginText={true}
                    hasReserv={stay?.HasImmediateReserve}
                    hasFavorit={true}
                  />
              </div>
              );
          }) : <NoResultFound />}
      </div>
      )}
    </div>
  </>
  )
}

export default StayPage