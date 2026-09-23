import React from 'react';
import { AcademicsLayout } from '../../../components/layout/AcademicsLayout';
import { Card } from '../../../components/ui/card';
import { Calculator, Package, Truck, ShoppingCart, Building, Handshake, ClipboardList, Search, CheckCircle, GraduationCap, Briefcase, Target, BookOpen, Users } from 'lucide-react';

const specializations = [
  { icon: Calculator, title: 'Financial Accounting', description: 'Principles of accounting, financial statements, and bookkeeping for logistics enterprises.' },
  { icon: Package, title: 'Materials Management', description: 'Inventory control, warehousing, and materials planning for efficient operations.' },
  { icon: Truck, title: 'Fundamentals of Logistics & Supply Chain', description: 'Core concepts of logistics networks, distribution, and supply chain frameworks.' },
  { icon: ShoppingCart, title: 'Purchasing & Supply Chain Management', description: 'Procurement strategies, vendor management, and supply chain optimization.' },
  { icon: Building, title: 'Facilities Management', description: 'Managing physical infrastructure, workplace services, and operational efficiency.' },
  { icon: Handshake, title: 'Managing Procurement Contracts & Relationship', description: 'Contract negotiation, supplier relationships, and compliance management.' },
  { icon: ClipboardList, title: 'Project Management & Supply Chain Process Redesign', description: 'Project planning methodologies and process improvement in supply chains.' },
  { icon: Search, title: 'Sourcing for Logistics & Supply Chain Management', description: 'Strategic sourcing, global procurement, and cost optimization techniques.' },
];

const whyChoose = [
  { icon: CheckCircle, text: 'Unique B.Com program with logistics specialization' },
  { icon: BookOpen, text: 'Industry-aligned curriculum covering end-to-end supply chain' },
  { icon: Target, text: 'Growing demand for logistics professionals in India' },
  { icon: Users, text: 'Guest lectures from logistics and supply chain industry leaders' },
  { icon: GraduationCap, text: 'Pathway to MBA in Supply Chain, M.Com, and professional certifications' },
  { icon: Briefcase, text: 'Internship opportunities with logistics and e-commerce companies' },
];

const careers = [
  'Supply Chain Manager',
  'Logistics Coordinator',
  'Procurement Officer',
  'Warehouse Manager',
  'Operations Analyst',
  'Freight & Transport Manager',
  'Inventory Controller',
  'E-Commerce Operations',
];

const BComLogistics = () => {
  return (
    <AcademicsLayout pageTitle="B.Com - Logistics" breadcrumbPath="B.Com - Logistics" category="Graduate Programs">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-4">Course Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The B.Com Logistics program combines foundational commerce education with specialized logistics and supply chain management training. Students gain expertise in procurement, materials management, warehousing, and distribution — skills highly sought after in today's global trade and e-commerce landscape.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-logo-blue rounded-full flex items-center justify-center shrink-0">
                    <spec.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy">{spec.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{spec.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Why Choose B.Com Logistics?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon size={22} className="text-logo-blue shrink-0 mt-0.5" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-logo-navy mb-8 text-center">Career Opportunities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {careers.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm border">
                <Briefcase size={18} className="text-logo-blue shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default BComLogistics;
