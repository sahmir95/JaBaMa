import React from "react";
import SearchHelper from "@/components/header/headerMobile/SearchHelper";
import SearchResultMobile from "@/components/header/headerMobile/SearchResultMobile";

const LandingSearchBoxResult = ({ city, value, type, searchCity }) => {
  return (
    <>
      <SearchHelper title="محبوب‌ترین مقصدها" data={city} />
      {value && (
        <div>
          {type != "" && searchCity == "" && (
            <p className="flex flex-col gap-2">
              {city.map((items) => {
                return (
                  <SearchResultMobile
                    icon="/images/location.png"
                    type={type}
                    searchCity={items.name}
                  />
                );
              })}
            </p>
          )}
          {searchCity != "" && type == "" && (
            <SearchResultMobile
              icon="/images/location.png"
              searchCity={searchCity}
            />
          )}
          {searchCity != "" && type != "" && (
            <p>
              <SearchResultMobile
                icon="/images/location.png"
                type={type}
                searchCity={searchCity}
              />
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default LandingSearchBoxResult;
