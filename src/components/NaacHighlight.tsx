import React from 'react';
import { Award, Download, FileText, TrendingUp } from 'lucide-react';

export const NaacHighlight = () => {
  const naacData = {
    grade: 'A',
    cgpa: '3.18',
    cycle: '4th Cycle',
    year: '2025'
  };

  const documents = [
    { name: 'Self Study Report (SSR)', type: 'PDF', size: '2.5 MB', icon: FileText },
    { name: 'AQAR', type: 'PDF', size: '1.8 MB', icon: FileText },
    { name: 'NAAC Certificate', type: 'PDF', size: '850 KB', icon: Award },
    { name: 'Best Practices', type: 'PDF', size: '1.2 MB', icon: TrendingUp }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur px-6 py-3 rounded-full mb-6">
            <Award className="text-yellow-400" size={24} />
            <span className="font-semibold">NAAC Accreditation</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Quality Education
            <span className="block text-yellow-400">Recognized Excellence</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our commitment to quality education has been recognized by NAAC with an A grade, 
            reflecting our dedication to academic excellence and institutional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* NAAC Stats */}
          <div className="space-y-8">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-6">NAAC Accreditation Details</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{naacData.grade}</div>
                  <div className="text-primary-foreground/70 text-sm">Grade Awarded</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">{naacData.cgpa}</div>
                  <div className="text-primary-foreground/70 text-sm">CGPA Scored</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground/90 mb-2">{naacData.cycle}</div>
                  <div className="text-primary-foreground/70 text-sm">Assessment Cycle</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground/90 mb-2">{naacData.year}</div>
                  <div className="text-primary-foreground/70 text-sm">Accreditation Year</div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-primary-foreground/5 backdrop-blur rounded-xl p-6 border border-primary-foreground/10">
              <h4 className="text-lg font-semibold mb-4">Key Quality Indicators</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Curricular Aspects</span>
                    <span className="font-semibold">3.70</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Teaching & Learning</span>
                    <span className="font-semibold">3.48</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Research & Innovation</span>
                    <span className="font-semibold">1.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Infrastructure</span>
                    <span className="font-semibold">3.80</span>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <FileText size={28} />
                <span>NAAC Documents</span>
              </h3>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group cursor-pointer"
                    onClick={() => {
                      if (doc.name === 'NAAC Certificate') {
                        window.open('/NAAC-Certificate.pdf', '_blank');
                      } else if (doc.name === 'Best Practices') {
                        window.open('/Best-Practices.pdf', '_blank');
                      }
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                        <doc.icon size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-foreground group-hover:text-primary-foreground/80 transition-colors">
                          {doc.name}
                        </div>
                        <div className="text-sm text-primary-foreground/60">
                          {doc.type} • {doc.size}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 px-4 py-2 rounded-lg transition-colors">
                      <Download size={16} />
                      <span className="text-sm font-medium">Download</span>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => { window.location.href = '/naac-iqac'; }}
                  className="bg-primary-foreground text-primary px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
                >
                  View All NAAC Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
