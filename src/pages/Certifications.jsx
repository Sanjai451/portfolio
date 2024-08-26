import React from 'react';
import CertificationCard from './CertificationCard'; // Import the card component
import { certificationsData } from '../constants';

const Certifications = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center m-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16">
        {certificationsData.map((cert, index) => (
          <CertificationCard 
            key={index} 
            title={cert.title} 
            date={cert.date} 
            description={cert.description} 
          />
        ))}
      </div>
    </div>

  );
};

export default Certifications;
