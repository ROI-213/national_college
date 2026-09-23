import React, { useState } from 'react';
import { AboutLayout } from '../../components/layout/AboutLayout';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Users, Quote, Award, Mail, Phone } from 'lucide-react';
import councilDrSubrahmanya from '@/assets/council-dr-hn-subrahmanya.jpg';
import councilMadhusudhan from '@/assets/council-yg-madhusudhan.jpg';
import councilVenkatasivaReddy from '@/assets/council-v-venkatasiva-reddy.jpg';
import councilArunkumar from '@/assets/council-bs-arunkumar.jpg';
import councilDwarakanath from '@/assets/council-tallam-dwarakanath.jpg';
import councilManjunath from '@/assets/council-v-manjunath.jpg';
import councilSudhakarEsturi from '@/assets/council-sudhakar-esturi.jpg';
import { Badge } from '../../components/ui/badge';
const GoverningCouncil = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const governingBody = [
    {
      id: 1,
      name: "Dr. H.N. Subrahmanya",
      designation: "President",
      position: "Chairman",
      image: councilDrSubrahmanya,
      experience: "25+ Years in Education Leadership",
      qualifications: "Ph.D. in Educational Administration",
      expertise: ["Educational Leadership", "Strategic Planning", "Policy Development"],
      message: "Education is the cornerstone of societal progress. As Chairman, I am committed to ensuring that The National College continues to be a beacon of excellence, nurturing future leaders who will contribute meaningfully to our nation's development. Our institution's legacy of over six decades is a testament to our unwavering dedication to quality education and holistic development.",
      email: "chairman@ndc.edu.in",
      phone: "+91 80 2656 1234"
    },
    {
      id: 2,
      name: "Sri. Y.G. Madhusudhan",
      designation: "Vice-President",
      position: "Vice-President",
      image: councilMadhusudhan,
      experience: "20+ Years in Educational Administration",
      qualifications: "M.A., M.Phil. in Educational Management",
      expertise: ["Educational Policy", "Administration", "Student Welfare"],
      message: "As Vice-President, I believe in fostering an environment where students can explore their potential and excel in their chosen fields. Our focus remains on creating well-rounded individuals who are not only academically proficient but also socially responsible. The college's commitment to innovation and excellence drives our continuous efforts to enhance the educational experience.",
      email: "vicepresident@ndc.edu.in",
      phone: "+91 80 2656 1235"
    },
    {
      id: 3,
      name: "Sri. V. Venkatasiva Reddy",
      designation: "Hon. Secretary",
      position: "Honorary Secretary",
      image: councilVenkatasivaReddy,
      experience: "18+ Years in Academia",
      qualifications: "M.A., B.Ed. in Educational Sciences",
      expertise: ["Academic Governance", "Curriculum Development", "Research Coordination"],
      message: "Education should inspire curiosity and critical thinking. As Honorary Secretary, I work towards ensuring that our academic programs remain relevant and challenging, preparing students for the dynamic global landscape. Our emphasis on research and innovation helps students develop analytical skills essential for their future success.",
      email: "secretary1@ndc.edu.in",
      phone: "+91 80 2656 1236"
    },
    {
      id: 4,
      name: "Sri. B.S. Arunkumar",
      designation: "Hon. Secretary",
      position: "Honorary Secretary",
      image: councilArunkumar,
      experience: "15+ Years in Educational Management",
      qualifications: "M.Com., MBA in Educational Management",
      expertise: ["Educational Planning", "Quality Assurance", "Student Development"],
      message: "Quality education is a fundamental right, and as Honorary Secretary, I strive to make it accessible and meaningful for every student. Our college's diverse programs and inclusive environment ensure that students from all backgrounds can thrive and achieve their aspirations. We are committed to maintaining the highest standards of academic excellence.",
      email: "secretary2@ndc.edu.in",
      phone: "+91 80 2656 1237"
    },
    {
      id: 5,
      name: "Sri. Tallam R. Dwarakanath",
      designation: "Treasurer",
      position: "Treasurer",
      image: councilDwarakanath,
      experience: "22+ Years in Financial Management",
      qualifications: "M.Com., CA, CFA",
      expertise: ["Financial Planning", "Resource Management", "Infrastructure Development"],
      message: "Effective financial stewardship is crucial for an institution's growth and sustainability. As Treasurer, I ensure that our resources are optimally utilized to enhance educational infrastructure and support student welfare. Our commitment to transparency and efficient financial management enables us to continuously invest in state-of-the-art facilities and innovative programs.",
      email: "treasurer@ndc.edu.in",
      phone: "+91 80 2656 1238"
    },
    {
      id: 6,
      name: "Sri. V. Manjunath",
      designation: "Associate Vice President",
      position: "Associate Vice President",
      image: councilManjunath,
      experience: "18+ Years in Educational Administration",
      qualifications: "M.A., M.Ed. in Educational Leadership",
      expertise: ["Strategic Planning", "Academic Development", "Institutional Growth"],
      message: "As Associate Vice President, I am dedicated to advancing the institution's academic goals and ensuring that our students receive the best possible education. Our commitment to excellence and innovation drives us to continuously improve our programs and services.",
      email: "avp@ndc.edu.in",
      phone: "+91 80 2656 1239"
    },
    {
      id: 7,
      name: "Sri. Sudhakar Esturi",
      designation: "Joint Secretary & Chairman",
      position: "Joint Secretary & Chairman",
      image: councilSudhakarEsturi,
      experience: "20+ Years in Educational Governance",
      qualifications: "M.Com., LL.B. in Educational Law",
      expertise: ["Governance", "Policy Implementation", "Community Engagement"],
      message: "Education transforms lives and communities. As Joint Secretary & Chairman, I work towards creating an inclusive and progressive educational environment that empowers every student to reach their full potential. Our institution's rich heritage and forward-looking vision guide our efforts.",
      email: "jointsecretary@ndc.edu.in",
      phone: "+91 80 2656 1240"
    }
  ];

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <AboutLayout pageTitle="Governing Council" breadcrumbPath="Governing Council">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-logo-navy/5 to-logo-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full mb-6 shadow-md">
              <Users className="text-logo-navy" size={20} />
              <span className="text-logo-navy font-semibold">Leadership Excellence</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Governing <span className="text-logo-navy">Council</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Meet the distinguished leaders who provide strategic direction and governance 
              to The National College, ensuring excellence in education and institutional development.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Body Members */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {governingBody.map((member) => (
              <div
                key={member.id}
                className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden text-center cursor-pointer"
                onClick={() => openMemberModal(member)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
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

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={closeMemberModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-logo-navy">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Position</h4>
                      <p className="text-logo-navy font-medium">{selectedMember.position}</p>
                      <p className="text-gray-600 text-sm">{selectedMember.designation}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                      <p className="text-gray-700">{selectedMember.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                      <p className="text-gray-700">{selectedMember.qualifications}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill, index) => (
                          <Badge key={index} className="bg-logo-blue text-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Mail size={16} />
                          <span>{selectedMember.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone size={16} />
                          <span>{selectedMember.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-logo-navy/5 to-logo-blue/5 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <Quote className="text-logo-navy" size={24} />
                      <h4 className="text-xl font-semibold text-gray-900">Message</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{selectedMember.message}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-logo-navy">
                        {selectedMember.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {selectedMember.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AboutLayout>
  );
};

export default GoverningCouncil;
