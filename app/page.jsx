import React from 'react';

const Page = () => {
    return (
     <div>
         <section className="sm:hidden md:hidden lg:block relative">
             <div className="shadowHeader">
                 <img className="w-full h-full imageRendering object-cover" src="/images/background.jpg" alt="bg"/>
             </div>
         </section>
     </div>
    );
};

export default Page;
