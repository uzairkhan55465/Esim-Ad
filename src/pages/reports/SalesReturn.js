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
    // Generate dummy reports dynamically
    const generateDummyReports = (type) => {
      let dummyReports = [];
      if (type === "daily") {
        for (let i = 1; i <= 30; i++) {
          dummyReports.push({
            orderNo: `00${i}`,
            companyName: `Company ${String.fromCharCode(65 + (i % 26))}`,
            productName: `Product ${String.fromCharCode(88 + (i % 3))}`,
            orderAmount: `$${(i * 100).toFixed(2)}`,
          });
        }
      } else if (type === "monthly") {
        for (let i = 1; i <= 12; i++) {
          dummyReports.push({
            date: `2024-${i.toString().padStart(2, "0")}-01`,
            orderQuantity: i * 10,
            orderAmount: `$${(i * 1000).toFixed(2)}`,
          });
        }
      } else if (type === "yearly") {
        for (let i = 2020; i <= 2024; i++) {
          dummyReports.push({
            year: i.toString(),
            orderQuantity: i * 30,
            orderAmount: `$${(i * 10000).toFixed(2)}`,
          });
        }
      }
      return dummyReports;
    };

    setReports(generateDummyReports(reportType));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <select
            className="py-2 px-4 border rounded"
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
