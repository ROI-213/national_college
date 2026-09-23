
import React from 'react';
import { X, Mail, Award, BookOpen, GraduationCap } from 'lucide-react';
import { Faculty } from './types';

interface FacultyModalProps {
  faculty: Faculty | null;
  onClose: () => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose }) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Image and Basic Info */}
          <div className="bg-gradient-to-br from-logo-navy to-logo-navy-light p-8 text-white">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">{faculty.name}</h3>
              <p className="text-blue-100 text-lg mb-1">{faculty.designation}</p>
              <p className="text-blue-200 mb-4">{faculty.department} Department</p>
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">{faculty.email}</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="text-logo-navy" size={20} />
                  <h4 className="text-lg font-bold text-gray-900">Qualifications</h4>
                </div>
                <p className="text-gray-600">{faculty.qualification}</p>
                <p className="text-logo-navy font-medium mt-1">Experience: {faculty.experience}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {faculty.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-logo-navy/10 text-logo-navy px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Biography</h4>
                <p className="text-gray-600 leading-relaxed">{faculty.biography}</p>
              </div>

              {faculty.achievements.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="text-logo-navy" size={20} />
                    <h4 className="text-lg font-bold text-gray-900">Achievements</h4>
                  </div>
                  <ul className="space-y-1">
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-logo-navy rounded-full"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {faculty.publications.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="text-logo-navy" size={20} />
                    <h4 className="text-lg font-bold text-gray-900">Recent Publications</h4>
                  </div>
                  <ul className="space-y-1">
                    {faculty.publications.map((publication, index) => (
                      <li key={index} className="text-gray-600 flex items-center space-x-2">
                        <span className="w-2 h-2 bg-logo-navy-light rounded-full"></span>
                        <span>{publication}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
