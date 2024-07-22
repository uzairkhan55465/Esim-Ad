import React, { useState } from "react";

const CustomerProfile = () => {
  const [formData, setFormData] = useState({
    id: "",
    companyCode: "",
    title: "",
    companyType: "",
    taxAdministration: "",
    taxNumber: "",
    ibanOwner: "",
    iban: "",
    address: "",
    country: "",
    city: "",
    district: "",
    telephone: "",
    email: "",
    note: "",
    web: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    // Save success message
    setSuccessMessage("Customer added successfully!");

    // Clear form fields after success message shown
    setFormData({
      companyType: "Person",
      companyName: "",
      officerName: "",
      officerSurname: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    });

    // Optionally, clear success message after a timeout
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // Clear success message after 3 seconds (optional)
  };
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 className="text-xl font-bold mb-4">Customer Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Company Type</label>
          <select
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Person">Person</option>
            <option value="Legal Entity">Legal Entity</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Officer Name</label>
          <input
            type="text"
            name="officerName"
            value={formData.officerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Officer Surname</label>
          <input
            type="text"
            name="officerSurname"
            value={formData.officerSurname}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Repeat Password</label>
          <input
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CustomerProfile;
