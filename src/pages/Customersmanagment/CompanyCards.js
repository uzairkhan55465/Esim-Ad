import React from "react";

const CompanyCard = ({ companyName, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-semibold">Company Name:</td>
            <td>{companyName}</td>
          </tr>
          <tr>
            <td className="font-semibold">Email:</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyCard;
