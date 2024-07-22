import React, { useState } from "react";

const Banner = () => {
  const [hideBannerAfterSomeSeconds, setHideBannerAfterSomeSeconds] =
    useState(true);

//   if (hideBannerAfterSomeSeconds === true) {
//     setTimeout(() => {
//       setHideBannerAfterSomeSeconds(false);
//     }, 5000);
//   }

  const handleCloseBanner = () => {
    setHideBannerAfterSomeSeconds(!hideBannerAfterSomeSeconds);
  };

  return (
    <div>
      {hideBannerAfterSomeSeconds && (
        <div>
          <div
            class="p-4 flex items-center justify-between text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <span class="font-medium">
              Our website is under maintenance.And the site should be
              deactivated.
            </span>
            <button onClick={handleCloseBanner} class="btn btn-primary text-[16px]">
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
