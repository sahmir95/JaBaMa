const TitlePage = ({ title }) => {
    return (
      <div className='w-full'>
        <p className="sm:w-28 md:w-40 lg:w-60 font-bold text-[18px] text-main-deep-teal mr-5 mt-5">
          {title}
        </p>
      </div>
    );
  };
  
  export default TitlePage;