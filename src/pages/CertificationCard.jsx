import React from 'react';

const CertificationCard = ({ title, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4"><strong>Date:</strong> {date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CertificationCard;
