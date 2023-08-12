'use client'
import { useEffect } from "react"
 
export default function GlobalError({ error, reset }) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-[75vh] flex flex-col gap-y-2 justify-center items-center text-sm font-medium">
      <h2>یه چیزی اشتباه شد!</h2>
      <h3>
        میتونی ارور رو توی کنسول چک کنی
      </h3>
      <button
        className="p-2 rounded-md shadow-md border-2 border-main-light-orange hover:bg-main-orange hover:text-main-white"
        onClick={
          () => reset()
        }
      >
        تلاش دوباره
      </button>
    </div>
  )
}