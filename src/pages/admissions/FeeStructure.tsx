
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { DollarSign, CreditCard, Calendar, AlertCircle } from 'lucide-react';

const FeeStructure = () => {
  const undergradFees = [
    {
      course: 'B.Com',
      duration: '3 Years',
      annualFee: '₹35,000',
      totalFee: '₹1,05,000'
    },
    {
      course: 'BBA',
      duration: '3 Years',
      annualFee: '₹45,000',
      totalFee: '₹1,35,000'
    },
    {
      course: 'BCA',
      duration: '3 Years',
      annualFee: '₹50,000',
      totalFee: '₹1,50,000'
    },
    {
      course: 'BA',
      duration: '3 Years',
      annualFee: '₹30,000',
      totalFee: '₹90,000'
    }
  ];

  const postgradFees = [
    {
      course: 'MA Journalism',
      duration: '2 Years',
      annualFee: '₹60,000',
      totalFee: '₹1,20,000'
    },
    {
      course: 'MSc Psychology',
      duration: '2 Years',
      annualFee: '₹65,000',
      totalFee: '₹1,30,000'
    }
  ];

  const additionalFees = [
    { component: 'Admission Fee', amount: '₹5,000', frequency: 'One-time' },
    { component: 'Registration Fee', amount: '₹2,000', frequency: 'One-time' },
    { component: 'Library Fee', amount: '₹3,000', frequency: 'Annual' },
    { component: 'Laboratory Fee', amount: '₹5,000', frequency: 'Annual' },
    { component: 'Sports Fee', amount: '₹2,000', frequency: 'Annual' },
    { component: 'Development Fee', amount: '₹10,000', frequency: 'Annual' }
  ];

  return (
    <AdmissionsLayout pageTitle="Fee Structure" breadcrumbPath="Fee Structure" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <DollarSign className="w-20 h-20 text-logo-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-logo-navy mb-4">Fee Structure 2024-25</h2>
              <p className="text-lg text-gray-700">
                Transparent and competitive fee structure for all programs offered at National College.
              </p>
            </div>

            {/* Undergraduate Programs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Undergraduate Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {undergradFees.map((program, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-logo-navy mb-2">{program.course}</h4>
                      <p className="text-gray-600 mb-4">{program.duration}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-600">Annual Fee</p>
                          <p className="text-xl font-bold text-logo-blue">{program.annualFee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Program Fee</p>
                          <p className="text-lg font-semibold text-gray-800">{program.totalFee}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Postgraduate Programs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {postgradFees.map((program, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-logo-navy mb-2">{program.course}</h4>
                      <p className="text-gray-600 mb-4">{program.duration}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-600">Annual Fee</p>
                          <p className="text-xl font-bold text-logo-blue">{program.annualFee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Program Fee</p>
                          <p className="text-lg font-semibold text-gray-800">{program.totalFee}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Fees */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-logo-navy mb-6">Additional Fees & Charges</h3>
              <Card className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {additionalFees.map((fee, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{fee.component}</h4>
                          <p className="text-sm text-gray-600">{fee.frequency}</p>
                        </div>
                        <p className="font-bold text-logo-blue">{fee.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Payment Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-logo-navy mb-4 flex items-center">
                  <CreditCard className="mr-3 text-logo-blue" size={24} />
                  Payment Options
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Online payment via college portal
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Demand Draft in favor of The National College
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Cash payment at college accounts office
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Bank transfer to college account
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-logo-navy mb-4 flex items-center">
                  <Calendar className="mr-3 text-logo-blue" size={24} />
                  Payment Schedule
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Annual payment: 5% discount on total fee
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Semester-wise: 50% at admission, 50% before 2nd semester
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Quarterly installments available on request
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-logo-blue rounded-full mr-3"></div>
                    Late payment penalty: ₹100 per day after due date
                  </li>
                </ul>
              </Card>
            </div>

            {/* Important Note */}
            <Card className="p-6 border-yellow-200 bg-yellow-50">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Important Information</h3>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>• Fee structure is subject to change as per university/government regulations</li>
                    <li>• Fees once paid are non-refundable except as per college refund policy</li>
                    <li>• Students are eligible for examination only after clearing all dues</li>
                    <li>• Additional charges may apply for special courses and workshops</li>
                    <li>• Scholarship holders must pay the balance amount after scholarship deduction</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default FeeStructure;
