
import React from 'react';
import { AdmissionsLayout } from '../../components/layout/AdmissionsLayout';
import { Card } from '../../components/ui/card';
import { Calendar, Download, AlertCircle } from 'lucide-react';

const AcademicCalendar = () => {
  const calendarEvents = [
    { slNo: '1', date: '7th January 2026', activity: 'UG Commencement of classes for II, IV & VI semesters', celebration: '' },
    { slNo: '', date: '22nd January 2026', activity: 'TCS ion Drive – Placement drive', celebration: '26th Republic Day' },
    { slNo: '', date: '23rd January 2026', activity: 'Kannada Seminar', celebration: '' },
    { slNo: '2', date: '1st Feb – 7th Feb 2026', activity: 'NSS Camp', celebration: '' },
    { slNo: '', date: '14th February 2026', activity: 'Placement drive by Samarthanam', celebration: '' },
    { slNo: '', date: 'February 2026', activity: "Sport's Day Celebration", celebration: '' },
    { slNo: '3', date: '25th February 2026', activity: 'UG-II Internal Assessment Test', celebration: '' },
    { slNo: '', date: 'March 2026', activity: 'Co-curricular / Extra-curricular (various club activities)', celebration: '31st March – Mahaveera Jayanthi' },
    { slNo: '4', date: 'April 1st week', activity: 'Intersection Drama Competition', celebration: '' },
    { slNo: '5', date: '15th–18th April 2026', activity: 'UG-II Internal Assessment Test', celebration: '3rd April – Good Friday' },
    { slNo: '6', date: '27th April 2026', activity: 'UG – Practical Internal Assessment Test', celebration: '14th April – Ambedkar Jayanthi' },
    { slNo: '7', date: '9th May 2026', activity: 'Last working day', celebration: '20th April – Basava Jayanthi' },
    { slNo: '8', date: '', activity: 'Payment of End Semester Examination Fee', celebration: '' },
    { slNo: '', date: '', activity: 'Submission of final IA marks (theory and practical)', celebration: '' },
    { slNo: '9', date: '15th April 2026', activity: 'Last Date to complete BoE and send question papers to CoE', celebration: "1st May – Worker's Day" },
    { slNo: '10', date: '25th May 2026', activity: 'UG – Commencement of End Semester Theory Examination', celebration: '' },
    { slNo: '11', date: '6th May 2026', activity: 'UG – Commencement of End Semester Practical Examination', celebration: '' },
    { slNo: '12', date: 'Last week of June 2026', activity: 'UG – Announcement of Results', celebration: '' },
    { slNo: '13', date: '10th June 2026', activity: 'UG – Reopening of the college', celebration: '' },
  ];

  const workingDays = [
    { month: 'January 2026', days: 20 },
    { month: 'February 2026', days: 23 },
    { month: 'March 2026', days: 22 },
    { month: 'April 2026', days: 22 },
    { month: 'May 2026', days: 7 },
  ];

  const notes = [
    'Semester End Examination for both Theory and Labs will be conducted in OFFLINE MODE ONLY.',
    'If any of the above dates are declared a holiday, the corresponding event will come into effect on the next working day.',
    'The Controller of Examinations will separately prepare and notify the theory examinations timetable.',
    'The Controller of Examinations will separately prepare and notify the Practical Examinations timetable.',
    'This academic calendar is tentative and subject to change depending on the circumstances.',
  ];

  return (
    <AdmissionsLayout pageTitle="Academic Calendar" breadcrumbPath="Academic Calendar" category="Admissions">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-logo-blue mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-logo-navy mb-2">Calendar of Events</h2>
              <p className="text-lg text-gray-700">Academic Year 2025-26 (Even Semester)</p>
              <p className="text-gray-500">The National College, Basavanagudi, Bengaluru – Autonomous | NAAC 'A' Grade</p>
            </div>

            {/* Events Table */}
            <Card className="overflow-hidden mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-logo-navy text-white">
                      <th className="px-4 py-3 text-left w-16">Sl.No</th>
                      <th className="px-4 py-3 text-left w-48">Date</th>
                      <th className="px-4 py-3 text-left">Activities</th>
                      <th className="px-4 py-3 text-left w-56">Celebrations / Holidays</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendarEvents.map((event, index) => (
                      <tr key={index} className={`border-b ${event.slNo ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/50 transition-colors`}>
                        <td className="px-4 py-3 font-semibold text-logo-navy">{event.slNo}</td>
                        <td className="px-4 py-3 text-gray-700 font-medium">{event.date}</td>
                        <td className="px-4 py-3 text-gray-800">{event.activity}</td>
                        <td className="px-4 py-3 text-logo-blue font-medium">{event.celebration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Working Days */}
            <Card className="p-6 mb-10">
              <h3 className="text-xl font-bold text-logo-navy mb-4">Working Days Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full max-w-lg text-sm">
                  <thead>
                    <tr className="bg-logo-blue/10">
                      <th className="px-4 py-3 text-left text-logo-navy">Sl.No</th>
                      <th className="px-4 py-3 text-left text-logo-navy">Month</th>
                      <th className="px-4 py-3 text-left text-logo-navy">No. of Working Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workingDays.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2 font-medium">{item.month}</td>
                        <td className="px-4 py-2 font-semibold text-logo-navy">{item.days}</td>
                      </tr>
                    ))}
                    <tr className="bg-logo-navy/5 font-bold">
                      <td className="px-4 py-2" colSpan={2}>Total</td>
                      <td className="px-4 py-2 text-logo-navy">94 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Notes */}
            <Card className="p-6 mb-10 border-l-4 border-l-yellow-500 bg-yellow-50/50">
              <h3 className="text-lg font-bold text-logo-navy mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" /> Important Notes
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                {notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
            </Card>

            {/* Download */}
            <Card className="p-8 bg-gradient-to-r from-logo-navy to-logo-blue text-white text-center">
              <Download className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Download Academic Calendar</h3>
              <p className="mb-6">Get the complete academic calendar for the Even Semester 2025-26.</p>
              <a href="/Academic-Calendar.pdf" download className="inline-block bg-white text-logo-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download PDF
              </a>
            </Card>
          </div>
        </div>
      </section>
    </AdmissionsLayout>
  );
};

export default AcademicCalendar;
