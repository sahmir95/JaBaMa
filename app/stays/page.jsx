import layout from "./layout"
import Link from "next/link"
import { getLocalData } from "@/lib/localdata"
import SearchOptions from "@/components/SearchOptions"
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper"


export default async function page( ) {

    const data = await getLocalData()  
    const stays = data.data.flatMap(category => Object.values(category).flat());


    return (
      <layout>
        <div className="flex flex-col py-3 border-b border-main-light-silver">
            <div className="pr-3 mb-3 pl-5 h-11 flex items-center">
                <div className="px-2 flex justify-center items-center">
                    <Link href="/" >
                        <img className="h-3" src="/images/right-arrow.svg" alt="arrow" />
                    </Link>
                </div>
                <div className="bg-main-lightish-gray p-3 w-full">
                    {/* <Search />   */}
                    <div>
                        <span>search</span>
                    </div>
                </div>
            </div>
            <div className="font-medium text-xs">
                <SearchOptions />
            </div>
        </div>
        <div className="px-5 mt-4">
            <div className="pt-6 pb-2">
                <p>{`اجاره `}</p>
                <p></p>
            </div>
            {data && stays.map((stay) => {
                return (
                    <div>
                        <CardWithSwiper price={stay?.price?.base} rate={stay?.rate} comments={stay?.comments} title={stay?.title} city={stay?.city} province={stay?.province} images={stay?.images} />
                    </div>
                )
            })}
        </div>
      </layout>
    )
  }