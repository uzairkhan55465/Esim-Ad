import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const SalesReport = () => {
  const [reportType, setReportType] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, [reportType, startDate, endDate]);

  const fetchReports = () => {
    // Fetch the reports from the backend (dummy data here)
    // This should be replaced with the actual data fetching logic
    const dummyReports = {
      daily: [
        {
          orderNo: "001",
          companyName: "Company A",
          productName: "Product X",
          orderAmount: "$100",
        },
        {
          orderNo: "002",
          companyName: "Company B",
          productName: "Product Y",
          orderAmount: "$200",
        },
        {
          orderNo: "003",
          companyName: "Company C",
          productName: "Product Z",
          orderAmount: "$150",
        },
        // Add more dummy data as needed
      ],
      monthly: [
        { date: "2024-01-01", orderQuantity: 10, orderAmount: "$1000" },
        { date: "2024-02-01", orderQuantity: 15, orderAmount: "$1500" },
        { date: "2024-03-01", orderQuantity: 20, orderAmount: "$2000" },
        // Add more dummy data as needed
      ],
      yearly: [
        { year: "2020", orderQuantity: 120, orderAmount: "$12000" },
        { year: "2021", orderQuantity: 150, orderAmount: "$15000" },
        { year: "2022", orderQuantity: 180, orderAmount: "$18000" },
        // Add more dummy data as needed
      ],
    };

    setReports(dummyReports[reportType]);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <select
            className="py-2 px-3 border rounded"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          {reportType !== "yearly" && (
            <div className="flex space-x-2">
              <input
                type="date"
                className="p-2 border rounded"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border rounded"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="overflow-x-auto bg-white p-4 rounded-md shadow-md">
          <table className="min-w-full bg-white border mt-3">
            <thead className="bg-gray-200">
              <tr>
                {reportType === "daily" && (
                  <>
                    <th className="py-2 px-4 border">Order No</th>
                    <th className="py-2 px-4 border">Company Name</th>
                    <th className="py-2 px-4 border">Product Name</th>
                    <th className="py-2 px-4 border">Order Amount</th>
                  </>
                )}
                {reportType === "monthly" && (
                  <>
                    <th className="py-2 px-4 border">Date</th>
                    <th className="py-2 px-4 border">Order Quantity</th>
                    <th className="py-2 px-4 border">Order Amount</th>
                  </>
                )}
                {reportType === "yearly" && (
                  <>
                    <th className="py-2 px-4 border">Year</th>
                    <th className="py-2 px-4 border">Order Quantity</th>
                    <th className="py-2 px-4 border">Order Amount</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  {reportType === "daily" && (
                    <>
                      <td className="py-2 px-4 border">{report.orderNo}</td>
                      <td className="py-2 px-4 border">{report.companyName}</td>
                      <td className="py-2 px-4 border">{report.productName}</td>
                      <td className="py-2 px-4 border">{report.orderAmount}</td>
                    </>
                  )}
                  {reportType === "monthly" && (
                    <>
                      <td className="py-2 px-4 border">{report.date}</td>
                      <td className="py-2 px-4 border">
                        {report.orderQuantity}
                      </td>
                      <td className="py-2 px-4 border">{report.orderAmount}</td>
                    </>
                  )}
                  {reportType === "yearly" && (
                    <>
                      <td className="py-2 px-4 border">{report.year}</td>
                      <td className="py-2 px-4 border">
                        {report.orderQuantity}
                      </td>
                      <td className="py-2 px-4 border">{report.orderAmount}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesReport;
