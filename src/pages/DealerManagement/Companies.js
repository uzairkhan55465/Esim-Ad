// src/components/CompanyList.js
import React, { useState } from "react";
import CompanyCard from "./CompanyCards";
import NewCompanyForm from "./NewCompanyForm";

const CompanyList = () => {
  const [formData, setFormData] = useState({
    companyType: "Person",
    companyName: "",
    officerName: "",
    officerSurname: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [showCompanyData, setShowCompanydata] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCompanydata([...showCompanyData, formData]);
    // Handle form submission logic here
    console.log(formData);
    setShowForm(false);
  };

  const [search, setSearch] = useState("");
  const companies = [
    {
      name: "Goldfone",
      situation: "Active",
      segment: "LG",
      phone: "+905330000000",
      email: "info@goldfone.com",
      entry: "13.07.2024",
    },
    {
      name: "30K Hotel Management",
      situation: "Passive",
      segment: "SM",
      phone: "+905322704377",
      email: "info@go2otel.com",
      entry: "21.06.2024",
    },
    // add more companies here
  ];

  const filteredCompanies = showCompanyData.filter((company) => {
    const nameMatch = company.companyName
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const phoneMatch = company.phone?.includes(search);
    const emailMatch = company.email
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return nameMatch || phoneMatch || emailMatch;
  });

  return (
    <div className="flex-grow p-6">
      {showForm ? (
        <NewCompanyForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-semibold">Company List</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              + Add New Company
            </button>
          </div>
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="Search by company name, company code, phone number or email."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2 ms-2">
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyList;
