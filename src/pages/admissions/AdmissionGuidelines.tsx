
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { CheckCircle, AlertTriangle, FileText, Calendar } from 'lucide-react';

const AdmissionGuidelines = () => {
  const eligibilityData = [
    {
      course: 'B.Com',
      eligibility: '10+2 or equivalent with Commerce/Science/Arts',
      minPercentage: '45%'
    },
    {
      course: 'BBA',
      eligibility: '10+2 or equivalent from recognized board',
      minPercentage: '45%'
    },
    {
      course: 'BCA',
      eligibility: '10+2 with Mathematics/Computer Science',
      minPercentage: '50%'
    },
    {
      course: 'BA',
      eligibility: '10+2 or equivalent from recognized board',
      minPercentage: '40%'
    },
    {
      course: 'MA Journalism',
      eligibility: 'Bachelor\'s degree in any discipline',
      minPercentage: '50%'
    },
    {
      course: 'MSc Psychology',
      eligibility: 'Bachelor\'s degree in Psychology or related field',
      minPercentage: '55%'
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill the online application form with accurate details'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay admission fees to confirm your seat'
    }
  ];

  const requiredDocuments = [
    '10th Standard Marksheet and Certificate',
    '12th Standard Marksheet and Certificate',
    'Transfer Certificate from previous institution',
    'Migration Certificate (if applicable)',
    'Conduct Certificate',
    'Passport size photographs (6 copies)',
    'Caste Certificate (if applicable)',
    'Income Certificate (for scholarship)',
    'Aadhar Card copy',
    'Medical Fitness Certificate'
  ];

  return (
    <AdmissionsLayout pageTitle="Admission Guidelines" breadcrumbPath="Guidelines" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-logo-navy mb-6">Admission Guidelines 2024-25</h2>
            <p className="text-lg text-gray-700">
              Complete guide to the admission process at The National College. 
              Please read all guidelines carefully before applying.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
              <FileText className="mr-3" size={24} />
              Eligibility Criteria
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityData.map((item, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-semibold text-logo-navy mb-3">{item.course}</h4>
                  <p className="text-gray-600 mb-2">{item.eligibility}</p>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={16} />
                    <span className="font-medium text-green-700">Min: {item.minPercentage}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Admission Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6 flex items-center">
              <Calendar className="mr-3" size={24} />
              Admission Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-logo-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-logo-navy mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-logo-navy mb-6">Required Documents</h3>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Important Notes */}
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Important Notes</h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• All documents must be original for verification</li>
                  <li>• Admission is subject to verification of documents</li>
                  <li>• Seats are allotted on merit basis</li>
                  <li>• Fee once paid is non-refundable except as per refund policy</li>
                  <li>• Last date for admission may vary for different courses</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default AdmissionGuidelines;
