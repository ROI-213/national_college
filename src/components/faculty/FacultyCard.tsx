
import React from 'react';
import { Faculty } from './types';

interface FacultyCardProps {
  faculty: Faculty;
  onClick: (faculty: Faculty) => void;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({ faculty, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-80 cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-logo-navy/10 hover:border-logo-navy/20 overflow-hidden group"
      onClick={() => onClick(faculty)}
    >
      <div className="flex">
        {/* Photo */}
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Info */}
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-logo-navy transition-colors">
            {faculty.name}
          </h4>
          <p className="text-logo-navy font-semibold text-sm mb-1">{faculty.designation}</p>
          <p className="text-gray-600 text-xs mb-2">{faculty.qualification.split(',')[0]}</p>
          <div className="flex items-center justify-between">
            <span className="bg-logo-navy/10 text-logo-navy px-2 py-1 rounded-full text-xs font-medium">
              {faculty.experience}
            </span>
            <button className="text-logo-navy hover:text-logo-navy-light font-medium text-xs transition-colors">
              View Profile →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
