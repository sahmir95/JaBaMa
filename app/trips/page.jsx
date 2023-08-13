"use client";

import Sidbar from "@/components/sidebar/Sidbar";
import TitlePage from "@/components/titlepage/TiTlePage";

const MyTrips = ({data}) =>{
    return (
      <div className="max-w-[1400px] mx-auto">
      <div>
        {data?.length > 0 ? (
          <div className="w-full h-auto flex pb-[58px]">
            <div className="hidden lg:block mb-10 mr-5 lg:w-72">
              <Sidbar />
            </div>
            <div className="w-full h-full lg:w-2/4 mx-3">
              <div className="w-full h-auto">
                <div className="hidden lg:block  ">
                <TitlePage title="سفرهای من" />
                </div>
                <div className="w-full h-full grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-3 sm:pt-[50px] lg:pt-4">
                  {data.map((item) => {
                    return (
                      <div className="gap-4 pt-5 mr-5">
                      <p className="">{item}</p>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="hidden lg:block mb-10 mr-5 lg:w-72">
              <Sidbar />
            </div>
            <div className="w-full h-auto ">
              <div className="hidden lg:block ">
                <TitlePage title="سفرهای من" />
              </div>
              <div className="h-[100vh] flex flex-col items-center justify-center pb-[40px] lg:pb-[140px] ">
                <img
                  className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
                  src="https://cdn.jabama.com/original/statics/mobile/img/trips-empty-state.fc2770b.svg"
                  alt=""
                />
                <div className="lg:w-3/3 text-center">
                <p className="font-light text-base text-main-slate-gray mt-2">
                      درحال حاضر هیچ{" "}
                        <strong className="text-main-deep-teal font-bold">
                          سفر فعالی
                        </strong>{" "}
                       ندارید.
                      </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      );
}
export default MyTrips;