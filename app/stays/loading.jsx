

const loading = () => {
  return (
  <div className="">
    <div className="px-5 pb-20">
    <div className="pt-[1.45rem] pb-[0.6rem]">
      <div className="animate-pulse">
        <div className="h-4 bg-main-light-silver rounded w-3/4"></div>
        <div className="h-4 bg-main-light-silver rounded w-2/6 mt-2"></div>
      </div>
    </div>
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
  </div>
</div>
  )
}

export default loading