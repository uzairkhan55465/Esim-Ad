import React from "react";
import { TotalCardsData } from "../../constant/DataPlans";

const TotalCards = () => {
  return (
    <div>
      <div className="flex items-center mt-8 mb-8 ">
        <hr className="w-[44%]  text-[#fff] bg-[#fff] p-[1.5px]" />
        <h3 className="ps-2 pe-2">Data Plans</h3>
        <hr className="w-[44%]  text-[#fff] bg-[#fff] p-[1.5px]" />
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {TotalCardsData?.map((item) => {
          return (
            <div key={item?.id} className="">
              <div className="block w-[180px] p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-[16px] font-[500] tracking-tight text-gray-900 dark:text-white">
                  <div className="flex items-center justify-between">
                    <span className="">{item?.title}</span>
                  </div>
                </h5>
                <div className="flex items-center">
                  <p className="font-[400] text-[#7460ee] pe-2 ">
                    {item?.price}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TotalCards;
