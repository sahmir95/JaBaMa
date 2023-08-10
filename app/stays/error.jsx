'use client'
 
export default function GlobalError({ error, reset }) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-[75vh] flex justify-center items-center text-sm font-medium">
      <h2>یه چیزی اشتباه شد!</h2>
      <h3>
        میتونی ارور رو توی کنسول چک کنی
      </h3>
      <button
        onClick={
          () => reset()
        }
      >
        تلاش دوباره
      </button>
    </div>
  )
}