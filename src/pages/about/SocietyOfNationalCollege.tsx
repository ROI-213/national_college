import React from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card } from '../../components/ui/card';
import { Users, Award, Building, BookOpen, Heart, Shield } from 'lucide-react';
import councilDrSubrahmanya from '@/assets/council-dr-hn-subrahmanya.jpg';
import councilVenkatasivaReddy from '@/assets/council-v-venkatasiva-reddy.jpg';
import councilArunkumar from '@/assets/council-bs-arunkumar.jpg';
import councilDwarakanath from '@/assets/council-tallam-dwarakanath.jpg';
import councilSudhakarEsturi from '@/assets/council-sudhakar-esturi.jpg';

const SocietyOfNationalCollege = () => {

  const societyServices = [
    { icon: Users, title: 'Educational Governance', description: 'Democratic governance structure with elected representatives ensuring transparent administration' },
    { icon: Award, title: 'Quality Assurance', description: 'Maintaining highest educational standards across all affiliated institutions' },
    { icon: Building, title: 'Infrastructure Development', description: 'Continuous campus improvement and expansion to meet modern educational needs' },
    { icon: BookOpen, title: 'Curriculum Excellence', description: 'Academic program development and faculty enhancement initiatives' },
    { icon: Heart, title: 'Student Welfare', description: 'Comprehensive student support services and community engagement programs' },
    { icon: Shield, title: 'Financial Stewardship', description: 'Transparent financial management and accountability across all operations' }
  ];




  const governingBody = [
    { id: 1, name: "Dr. H.N. Subrahmanya", designation: "President", position: "Chairman", image: councilDrSubrahmanya, experience: "25+ Years in Education Leadership", qualifications: "Ph.D. in Educational Administration", expertise: ["Educational Leadership", "Strategic Planning", "Policy Development"], message: "Education is the cornerstone of societal progress. As Chairman, I am committed to ensuring that The National College continues to be a beacon of excellence.", email: "chairman@ndc.edu.in", phone: "+91 80 2656 1234" },
    { id: 2, name: "Sri. V. Venkatasiva Reddy", designation: "Hon. Secretary", position: "Honorary Secretary", image: councilVenkatasivaReddy, experience: "18+ Years in Academia", qualifications: "M.A., B.Ed. in Educational Sciences", expertise: ["Academic Governance", "Curriculum Development", "Research Coordination"], message: "Education should inspire curiosity and critical thinking. As Honorary Secretary, I work towards ensuring our academic programs remain relevant.", email: "secretary1@ndc.edu.in", phone: "+91 80 2656 1236" },
    { id: 3, name: "Sri. B.S. Arunkumar", designation: "Hon. Secretary", position: "Honorary Secretary", image: councilArunkumar, experience: "15+ Years in Educational Management", qualifications: "M.Com., MBA in Educational Management", expertise: ["Educational Planning", "Quality Assurance", "Student Development"], message: "Quality education is a fundamental right, and as Honorary Secretary, I strive to make it accessible and meaningful for every student.", email: "secretary2@ndc.edu.in", phone: "+91 80 2656 1237" },
    { id: 4, name: "Sri. Tallam R. Dwarakanath", designation: "Treasurer", position: "Treasurer", image: councilDwarakanath, experience: "22+ Years in Financial Management", qualifications: "M.Com., CA, CFA", expertise: ["Financial Planning", "Resource Management", "Infrastructure Development"], message: "Effective financial stewardship is crucial for an institution's growth and sustainability.", email: "treasurer@ndc.edu.in", phone: "+91 80 2656 1238" },
    { id: 5, name: "Sri. Sudhakar Esturi", designation: "Joint Secretary & Chairman", position: "Joint Secretary & Chairman", image: councilSudhakarEsturi, experience: "20+ Years in Educational Governance", qualifications: "M.Com., LL.B. in Educational Law", expertise: ["Governance", "Policy Implementation", "Community Engagement"], message: "Education transforms lives and communities. As Joint Secretary & Chairman, I work towards creating an inclusive educational environment.", email: "jointsecretary@ndc.edu.in", phone: "+91 80 2656 1240" }
  ];

  return (
    <AboutLayout pageTitle="Governing Body" breadcrumbPath="Governing Body">
      {/* Governing Body Section */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-2 rounded-full mb-6 shadow-md">
              <Users className="text-logo-navy" size={20} />
              <span className="text-logo-navy font-semibold">Leadership Excellence</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Governing <span className="text-logo-navy">Body</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the distinguished leaders who provide strategic direction and governance 
              to The National College, ensuring excellence in education and institutional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {governingBody.map((member) => (
              <div
                key={member.id}
                className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden text-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{member.name}</h3>
                  <p className="text-primary text-xs font-medium leading-tight">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society Services */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-logo-navy mb-4 animate-fade-in-up">Our Core Functions</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            The Society serves as the governing body, ensuring academic excellence, financial stability, 
            and institutional growth through dedicated leadership and community service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {societyServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-logo-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>





    </AboutLayout>
  );
};

export default SocietyOfNationalCollege;
