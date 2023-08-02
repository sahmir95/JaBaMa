import layout from "./layout"
import Link from "next/link"
import { getLocalData } from "@/lib/localdata"

export default async function page( ) {

    const data = await getLocalData()

    return (
      <layout>
        <div className="pt-2 pb-3">
            <div className="pr-3 pl-5 h-11 flex items-center">
                <div className="px-2 flex justify-center items-center">
                    <Link href="/" >
                        <img className="h-3" src="/images/right-arrow.svg" alt="arrow" />
                    </Link>
                </div>
                <div>
                    {/* <Search />   */}
                    <div>
                        <span>search</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {data?.cities.map((city) => {
                return (
                    <p>{city.name}</p>
                )
            })}
        </div>
      </layout>
    )
  }