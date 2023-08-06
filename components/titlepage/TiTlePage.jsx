const TitlePage = ({ title }) => {
    return (
      <div className=''>
        <p className="sm:w-28 md:w-40 lg:w-60 font-medium text-base text-main-deep-teal mr-5 mt-5">
          {title}
        </p>
      </div>
    );
  };
  
  export default TitlePage;