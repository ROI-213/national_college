
import React from 'react';
import { AcademicsLayout } from '../../components/layout/AcademicsLayout';
import { Card } from '../../components/ui/card';
import { BookOpen, Calculator, Users, Monitor, Globe, Camera, Brain, Beaker, Atom, Leaf, Bug, BarChart3, Vote, Cpu, Sigma } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepartmentsOverview = () => {
  const departments = [
    { icon: Globe, title: 'Kannada', description: 'Kannada Language and Literature', link: '/academics/departments/kannada', color: 'bg-orange-500' },
    { icon: BookOpen, title: 'English', description: 'English Language and Literature', link: '/academics/departments/english', color: 'bg-blue-500' },
    { icon: Globe, title: 'Hindi', description: 'Hindi Language and Literature', link: '/academics/departments/hindi', color: 'bg-green-500' },
    { icon: Globe, title: 'Sanskrit', description: 'Sanskrit Language and Literature', link: '/academics/departments/sanskrit', color: 'bg-amber-600' },
    { icon: Monitor, title: 'Computer Science', description: 'Programming, Software Development, and IT', link: '/academics/departments/computer-science', color: 'bg-indigo-500' },
    { icon: Camera, title: 'Animation', description: '2D/3D Animation and Visual Effects', link: '/academics/departments/animation', color: 'bg-pink-500' },
    { icon: BarChart3, title: 'Economics', description: 'Economic Theory and Applied Economics', link: '/academics/departments/economics', color: 'bg-teal-500' },
    { icon: Users, title: 'Sociology', description: 'Social Sciences and Community Studies', link: '/academics/departments/sociology', color: 'bg-purple-500' },
    { icon: Vote, title: 'Political Science', description: 'Political Theory and Governance', link: '/academics/departments/political-science', color: 'bg-red-500' },
    { icon: Cpu, title: 'Electronics', description: 'Electronic Systems and Circuits', link: '/academics/departments/electronics', color: 'bg-cyan-500' },
    { icon: Calculator, title: 'Commerce', description: 'Accounting, Finance, and Business Studies', link: '/academics/departments/commerce', color: 'bg-blue-600' },
    { icon: Sigma, title: 'Mathematics', description: 'Pure and Applied Mathematics', link: '/academics/departments/mathematics', color: 'bg-violet-500' },
    { icon: Bug, title: 'Zoology', description: 'Animal Sciences and Biology', link: '/academics/departments/zoology', color: 'bg-lime-600' },
    { icon: Leaf, title: 'Botany', description: 'Plant Sciences and Ecology', link: '/academics/departments/botany', color: 'bg-emerald-500' },
    { icon: Atom, title: 'Physics', description: 'Classical and Modern Physics', link: '/academics/departments/physics', color: 'bg-sky-500' },
    { icon: Beaker, title: 'Chemistry', description: 'Organic, Inorganic, and Physical Chemistry', link: '/academics/departments/chemistry', color: 'bg-rose-500' },
    { icon: Camera, title: 'Journalism & Mass Communication', description: 'Media Studies and Communication', link: '/academics/departments/journalism', color: 'bg-red-600' },
    { icon: Users, title: 'Management', description: 'Business Administration and Management Studies', link: '/academics/departments/management', color: 'bg-green-600' },
    { icon: Brain, title: 'Psychology', description: 'Behavioral Sciences and Mental Health', link: '/academics/departments/psychology', color: 'bg-pink-600' },
  ];

  return (
    <AcademicsLayout pageTitle="Academic Departments" breadcrumbPath="Departments" category="Academics">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Academic Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse academic departments, each offering specialized programs 
              with experienced faculty and modern facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <Link to={dept.link}>
                  <div className={`w-14 h-14 ${dept.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <dept.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{dept.title}</h3>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AcademicsLayout>
  );
};

export default DepartmentsOverview;
