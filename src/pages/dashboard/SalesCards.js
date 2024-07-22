import React from "react";

const SalesCards = () => {
  const SalesCard = [
    {
      id: 1,
      title: "Today",
      price: "$50.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      ),
    },
    {
      id: 2,

      title: "Month",
      price: "$ 50.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      ),
    },
    {
      id: 3,

      title: "Week",
      price: "$ 50.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      ),
    },
    {
      id: 4,

      title: "Year",
      price: "$ 50.5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      ),
    },
  ];

  const SalesCard2 = [
    {
      id: 1,
      title: "Orders",
      price: "6981 65%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      id: 2,

      title: "Delivered Orders",
      price: "6981 65%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
    {
      id: 3,

      title: "Incorrect",
      price: "6981 25%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-around mt-8">
      <div class="block w-[475px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class=" text-[26px] mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
          Sales Details
        </h5>
        <div className="flex flex-wrap justify-between">
          {SalesCard?.map((items) => {
            return (
              <>
                <div
                  key={items?.id}
                  className="block w-[200px] p-4 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-[16px] font-[500] tracking-tight text-gray-900 dark:text-white">
                    <div className="flex items-start justify-between">
                      <div
                        className={`${
                          items?.id === 1
                            ? "bg-[#7460ee]"
                            : items?.id === 2
                            ? "bg-[#fb9678]"
                            : items?.id === 3
                            ? "bg-[#01c0c8]"
                            : "bg-[#f1b44c]"
                        } ps-1 pe-1 pt-1 pb-1 rounded-[50px]`}
                      >
                        {items?.icon}
                      </div>
                      <div>
                        <span className="">{items?.title}</span>
                        <p className="font-[400] text-[#7460ee] ">
                          {items?.price}
                        </p>
                      </div>
                    </div>
                  </h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div class="block w-[475px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class=" text-[26px] mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
          Trending Details
        </h5>
        <div className="flex flex-wrap justify-between">
          {SalesCard2?.map((items) => {
            return (
              <>
                <div
                  key={items?.id}
                  className="block w-[200px] p-4 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-[16px] font-[500] tracking-tight text-gray-900 dark:text-white">
                    <div className="flex items-start justify-between">
                      <div
                        className={`${
                          items?.id === 1
                            ? "bg-[#7460ee]"
                            : items?.id === 2
                            ? "bg-[#fb9678]"
                            : items?.id === 3
                            ? "bg-[#01c0c8]"
                            : "bg-[#f1b44c]"
                        } ps-1 pe-1 pt-1 pb-1 rounded-[50px]`}
                      >
                        {items?.icon}
                      </div>
                      <div>
                        <span className="">{items?.title}</span>
                        <p className="font-[400] text-[#7460ee] ">
                          {items?.price}
                        </p>
                      </div>
                    </div>
                  </h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesCards;
