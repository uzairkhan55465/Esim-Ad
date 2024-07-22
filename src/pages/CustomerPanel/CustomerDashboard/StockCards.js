// src/components/StockCard.js
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StockCard = ({ percentage, label }) => {
  return (
    <div className="flex justify-center flex-wrap mt-6 ">
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>{" "}
      </div>
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center p-5 bg-white rounded shadow ms-2 me-2 mt-2 mb-2">
        <div className="w-[150px] h-[150px]">
          <CircularProgressbar
            value={percentage}
            text={`75%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: percentage > 75 ? "#16bdca" : "#16bdca",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="flex flex-col jusitfy-center items-center">
          <p className="mt-2 text-lg ps-2 text-[17px]">Stock</p>
          <div className="bg-[#16bdca] ps-1 pe-1 pt-1 pb-1 rounded-[10px]">
            <p className="text-white">30GB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
