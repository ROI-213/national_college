
import React from 'react';
import { TrendingUp, Building, Users, Award, ArrowRight, Briefcase, Target, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import recruiterCognizant from '@/assets/recruiter-cognizant.jpg';
import recruiterTcs from '@/assets/recruiter-tcs.jpg';
import recruiterWipro from '@/assets/recruiter-wipro.jpg';
import recruiterAccenture from '@/assets/recruiter-accenture.jpg';
import recruiterDeloitte from '@/assets/recruiter-deloitte.jpg';
import recruiterIbm from '@/assets/recruiter-ibm.jpg';
import recruiterTcsion from '@/assets/recruiter-tcsion.jpg';
import recruiterSpiders from '@/assets/recruiter-spiders.jpg';
import recruiterSeventhSense from '@/assets/recruiter-seventh-sense.jpg';
import recruiterMagicBus from '@/assets/recruiter-magic-bus.jpg';
import recruiterEthnus from '@/assets/recruiter-ethnus.jpg';
import recruiterLearnflu from '@/assets/recruiter-learnflu.jpg';

// Alumni photos
import alumniKiranKumar from '@/assets/alumni-kiran-kumar.jpg';
import alumniAravindKumar from '@/assets/alumni-aravind-kumar.jpg';
import alumniTGSitharam from '@/assets/alumni-tg-sitharam.jpg';
import alumniKPJReddy from '@/assets/alumni-kpj-reddy.jpg';
import alumniGKJayaram from '@/assets/alumni-gk-jayaram.jpg';
import alumniGVVishveshwar from '@/assets/alumni-gv-vishveshwar.jpg';
import alumniSrikanthShastry from '@/assets/alumni-srikanth-shastry.jpg';
import alumniGJagadeesh from '@/assets/alumni-g-jagadeesh.jpg';
import alumniKumarNaik from '@/assets/alumni-kumar-naik.jpg';
import alumniAshwinGowda from '@/assets/alumni-ashwin-gowda.jpg';
import alumniBVJagadeesh from '@/assets/alumni-bv-jagadeesh.jpg';
import alumniRashmiMahesh from '@/assets/alumni-rashmi-mahesh.jpg';
import alumniHDKumarswamy from '@/assets/alumni-hd-kumarswamy.jpg';
import alumniAnilKumble from '@/assets/alumni-anil-kumble.jpg';
import alumniPGRSindhia from '@/assets/alumni-pgr-sindhia.jpg';
import alumniTejasviSurya from '@/assets/alumni-tejasvi-surya.jpg';
import alumniSoumyaReddy from '@/assets/alumni-soumya-reddy.jpg';
import alumniBhaskarRao from '@/assets/alumni-bhaskar-rao.jpg';
import alumniVishnuvardhan from '@/assets/alumni-vishnuvardhan.jpg';
import alumniCRSimha from '@/assets/alumni-cr-simha.jpg';
import alumniRameshAravind from '@/assets/alumni-ramesh-aravind.jpg';
import alumniSrinath from '@/assets/alumni-srinath.jpg';
import alumniSundarRaj from '@/assets/alumni-sundar-raj.jpg';
import alumniChandrashekar from '@/assets/alumni-chandrashekar.jpg';
import alumniTNSeetharam from '@/assets/alumni-tn-seetharam.jpg';
import alumniRangayanaRaghu from '@/assets/alumni-rangayana-raghu.jpg';
import alumniRajeshNataranga from '@/assets/alumni-rajesh-nataranga.jpg';
import alumniMDPallavi from '@/assets/alumni-md-pallavi.jpg';
import alumniArchanaUdupa from '@/assets/alumni-archana-udupa.jpg';
import alumniVasistaSimha from '@/assets/alumni-vasista-simha.jpg';
import alumniMCSudhakar from '@/assets/alumni-mc-sudhakar.jpg';
import alumniSadanandMaiya from '@/assets/alumni-sadanand-maiya.jpg';

interface AlumniData {
  name: string;
  designation: string;
  image: string;
}

const AlumniCard = ({ alumni }: { alumni: AlumniData }) => (
  <div className="text-center group/card">
    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-white/30 group-hover/card:border-yellow-300 transition-all duration-300 shadow-lg">
      <img 
        src={alumni.image} 
        alt={alumni.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="font-bold text-white text-xs lg:text-sm mb-0.5 truncate px-1">
      {alumni.name}
    </div>
    <div className="text-blue-200 text-[10px] lg:text-xs truncate px-1">
      {alumni.designation}
    </div>
  </div>
);

export const PlacementSection = () => {
  const placementStats = [
    {
      value: "90%",
      label: "Placement Rate",
      icon: TrendingUp,
      color: "from-logo-navy to-logo-navy-light"
    },
    {
      value: "100+",
      label: "Companies",
      icon: Building,
      color: "from-logo-navy-light to-logo-navy"
    },
    {
      value: "₹8.5L",
      label: "Highest Package",
      icon: Award,
      color: "from-logo-navy to-logo-navy-light"
    },
    {
      value: "₹4.5L",
      label: "Average Package",
      icon: Briefcase,
      color: "from-logo-navy-light to-logo-navy"
    }
  ];

  const topRecruiters = [
    { name: "Cognizant", logo: recruiterCognizant },
    { name: "TCS", logo: recruiterTcs },
    { name: "Wipro", logo: recruiterWipro },
    { name: "Accenture", logo: recruiterAccenture },
    { name: "Deloitte", logo: recruiterDeloitte },
    { name: "IBM", logo: recruiterIbm },
    { name: "TCS iON", logo: recruiterTcsion },
    { name: "Spiders", logo: recruiterSpiders },
    { name: "Seventh Sense", logo: recruiterSeventhSense },
    { name: "Magic Bus", logo: recruiterMagicBus },
    { name: "Ethnus", logo: recruiterEthnus },
    { name: "LearnFlu", logo: recruiterLearnflu }
  ];

  const distinguishedAlumni: AlumniData[] = [
    { name: "Prof. AS Kiran Kumar", designation: "Retd. Director, ISRO", image: alumniKiranKumar },
    { name: "Justice Aravind Kumar", designation: "Apex Court Judge", image: alumniAravindKumar },
    { name: "Dr. TG Sitharam", designation: "Chairman, AICTE", image: alumniTGSitharam },
    { name: "Dr. KPJ Reddy", designation: "IISC", image: alumniKPJReddy },
    { name: "Sri. GK Jayaram", designation: "Infosys", image: alumniGKJayaram },
    { name: "Dr. GV Vishveshwar", designation: "JNP", image: alumniGVVishveshwar },
    { name: "Dr. Srikanth Shastry", designation: "JNCASR", image: alumniSrikanthShastry },
    { name: "Prof. G Jagadeesh", designation: "IISC", image: alumniGJagadeesh },
    { name: "Sri. Kumar Naik", designation: "IAS", image: alumniKumarNaik },
    { name: "Sri. Ashwin Gowda", designation: "IRS", image: alumniAshwinGowda },
    { name: "Sri. BV Jagadeesh", designation: "Silicon Valley, USA", image: alumniBVJagadeesh },
    { name: "Smt. Rashmi Mahesh", designation: "IAS", image: alumniRashmiMahesh },
    { name: "Sir. Sadanand Maiya", designation: "CEO Maiya's", image: alumniSadanandMaiya },
    { name: "Sri. HD Kumarswamy", designation: "Politician", image: alumniHDKumarswamy },
    { name: "Sri. Anil Kumble", designation: "Cricketer", image: alumniAnilKumble },
    { name: "Sri. PGR Sindhia", designation: "Politician", image: alumniPGRSindhia },
    { name: "Dr. MC Sudhakar", designation: "Politician", image: alumniMCSudhakar },
    { name: "Sri. Tejasvi Surya", designation: "Politician", image: alumniTejasviSurya },
    { name: "Smt. Soumya Reddy", designation: "Politician", image: alumniSoumyaReddy },
    { name: "Sri. Bhaskar Rao", designation: "IPS (Retd)", image: alumniBhaskarRao },
    { name: "Sri. Vishnuvardhan", designation: "Actor", image: alumniVishnuvardhan },
    { name: "Sri. CR Simha", designation: "Actor", image: alumniCRSimha },
    { name: "Sri. Ramesh Aravind", designation: "Actor", image: alumniRameshAravind },
    { name: "Sri. Srinath", designation: "Actor", image: alumniSrinath },
    { name: "Sri. Sundar Raj", designation: "Actor", image: alumniSundarRaj },
    { name: "Sri. Chandrashekar", designation: "Actor", image: alumniChandrashekar },
    { name: "Sri. TN Seetharam", designation: "Actor, Director", image: alumniTNSeetharam },
    { name: "Sri. Rangayana Raghu", designation: "Actor", image: alumniRangayanaRaghu },
    { name: "Sri. Rajesh Nataranga", designation: "Actor", image: alumniRajeshNataranga },
    { name: "Mrs. MD Pallavi", designation: "Singer", image: alumniMDPallavi },
    { name: "Mrs. Archana Udupa", designation: "Singer", image: alumniArchanaUdupa },
    { name: "Sri. Vasista Simha", designation: "Actor", image: alumniVasistaSimha }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-white via-logo-navy/5 to-logo-navy-light/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-logo-navy/10 to-logo-navy-light/10 px-4 py-2 rounded-full mb-4 border border-logo-navy/20">
            <Target className="text-logo-navy" size={18} />
            <span className="text-logo-navy font-semibold text-sm">Career Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Placements & <span className="text-logo-navy">Career Development</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Excellent career opportunities with industry-leading companies
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border border-logo-navy/10 hover:border-logo-navy/20">
              <CardContent className="pt-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-logo-navy font-medium text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Recruiters with Logos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Our Top Recruiters</h3>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-logo-navy/10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {topRecruiters.map((company, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-4 shadow-sm group-hover:shadow-md transition-all border border-gray-100 group-hover:border-logo-navy/20 h-24 flex items-center justify-center">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distinguished Alumni Section - Static Grid */}
        <div className="bg-gradient-to-r from-logo-navy to-logo-navy-light rounded-xl p-8 text-white shadow-lg">
          {/* Center-aligned Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="text-yellow-300" size={28} />
              <h3 className="text-2xl lg:text-3xl font-bold">Distinguished Alumni of NES Institutions</h3>
            </div>
          </div>
          
          {/* Static Grid - 8 per row desktop, 4 tablet, 2 mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
            {distinguishedAlumni.map((alumni, index) => (
              <AlumniCard key={index} alumni={alumni} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
