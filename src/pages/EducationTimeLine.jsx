import React from 'react';
import { educationData } from '../constants';

const EducationTimeline = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Education</h2>
      <div className="relative border-l-4 border-blue-400 pl-10">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-16 relative">
            <div className="absolute -left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">{index + 1}</span>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-500 mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
