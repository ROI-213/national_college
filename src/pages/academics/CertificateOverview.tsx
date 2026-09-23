
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { Award, Monitor, Camera, DollarSign, Plane, Shield, BarChart3, Code, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificateOverview = () => {
  const courses = [
    {
      icon: Monitor,
      title: 'Advanced Digital Marketing',
      description: 'Digital marketing strategies and online promotion',
      link: '/academics/certificate/digital-marketing',
      category: 'Digital Skills'
    },
    {
      icon: Award,
      title: 'Civil Service Coaching',
      description: 'UPSC and state civil service examination preparation',
      link: '/academics/certificate/civil-service',
      category: 'Government Exams'
    },
    {
      icon: Camera,
      title: 'Film Making',
      description: 'Video production and cinematography',
      link: '/academics/certificate/film-making',
      category: 'Media & Arts'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography techniques',
      link: '/academics/certificate/photography',
      category: 'Media & Arts'
    },
    {
      icon: Monitor,
      title: 'Television Production & Software Training',
      description: 'TV production and media software',
      link: '/academics/certificate/tv-production',
      category: 'Media & Arts'
    },
    {
      icon: DollarSign,
      title: 'B.Com/BBA with ACCA',
      description: 'Professional accounting certification',
      link: '/academics/certificate/bcom-acca',
      category: 'Finance & Accounting'
    },
    {
      icon: DollarSign,
      title: 'Tax Filing and Compliance',
      description: 'Professional tax filing services',
      link: '/academics/certificate/tax-filing',
      category: 'Finance & Accounting'
    },
    {
      icon: DollarSign,
      title: 'Pro GST Accountant',
      description: 'GST compliance and accounting',
      link: '/academics/certificate/gst-accountant',
      category: 'Finance & Accounting'
    },
    {
      icon: BarChart3,
      title: 'Advanced Excel',
      description: 'Advanced spreadsheet and data analysis',
      link: '/academics/certificate/advanced-excel',
      category: 'Digital Skills'
    },
    {
      icon: Plane,
      title: 'Aviation',
      description: 'Aviation industry training and certification',
      link: '/academics/certificate/aviation',
      category: 'Industry Training'
    },
    {
      icon: DollarSign,
      title: 'CA/CS',
      description: 'Chartered Accountant and Company Secretary',
      link: '/academics/certificate/ca-cs',
      category: 'Finance & Accounting'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Information security and cyber defense',
      link: '/academics/certificate/cyber-security',
      category: 'Technology'
    },
    {
      icon: BarChart3,
      title: 'Advanced Data Analytics and Visualization',
      description: 'Data science and visualization techniques',
      link: '/academics/certificate/data-analytics',
      category: 'Technology'
    },
    {
      icon: Code,
      title: 'Ethical Hacking + Cloud Computing',
      description: 'Cybersecurity and cloud technologies',
      link: '/academics/certificate/ethical-hacking',
      category: 'Technology'
    },
    {
      icon: Truck,
      title: 'Logistics and Supply Chain Management',
      description: 'Supply chain operations and management',
      link: '/academics/certificate/logistics',
      category: 'Industry Training'
    }
  ];

  const categories = ['Digital Skills', 'Media & Arts', 'Finance & Accounting', 'Technology', 'Industry Training', 'Government Exams'];

  return (
    <AcademicsLayout pageTitle="Diploma/Certificate Courses" breadcrumbPath="Certificate Programs" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-logo-navy mb-6">Professional Certificate Courses</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Enhance your skills with our industry-focused certificate programs designed to meet 
              current market demands and boost your career prospects.
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-logo-navy mb-6 text-center">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.filter(course => course.category === category).map((course, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <Link to={course.link}>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-logo-blue rounded-lg flex items-center justify-center flex-shrink-0">
                          <course.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-logo-navy mb-2">{course.title}</h4>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default CertificateOverview;
