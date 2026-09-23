import React from 'react';
import { AboutLayout } from '@/components/layout/AboutLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mous: { name: string; date?: string; description: string }[] = [
  { name: 'Durga India', description: 'Women safety, gender equality, and support for survivors of discrimination and abuse (especially women and children). Internal Compliance Cell includes Ms. Priya Vardarajan (Founder & CEO) as external member.' },
  { name: 'IIIT Kottayam', description: 'Recognized as an examination centre in Bengaluru for M.Tech online program.' },
  { name: 'M-Power Aditya Birla Education Trust', description: 'Extension MoU to promote mental health.' },
  { name: 'ELCIA (Electronics City Industries Association)', description: 'Skill development, internships, industrial visits, placement opportunities, and resource sharing.' },
  { name: 'IIIT Kottayam', description: 'Academic R&D funded projects, joint courses, certifications.' },
  { name: 'Seventh Sense', date: '26-08-2025', description: 'Collaboration with NASSCOM, access to Coursera platform, skill development.' },
  { name: 'Ethnus Consultancy Services Pvt. Ltd.', date: '03-09-2025', description: 'Skill development and industry training.' },
  { name: 'Salvin Info Systems / Sri Spardha Academy', description: 'Coaching for UPSC, KAS, KPSC, FDA, SDA, etc.' },
  { name: 'Raak Sapphire Pvt. Ltd.', date: '27-05-2025', description: 'STEM, Robotics, and AI programs.' },
  { name: 'Drishti Scribe Program', date: '10-06-2025', description: 'Scribe volunteers.' },
  { name: 'TNS India Foundation', description: 'Training in personal/professional skills, interview readiness, digital literacy, financial markets, data visualization.' },
  { name: 'Aaadhya Communications', date: '09-07-2023', description: 'Internships, guest lectures, real-world projects.' },
  { name: 'Kala Gangotri Theatre Group', description: 'Cultural enrichment and theatre activities.' },
  { name: 'Samarthanam Trust for Disabled', date: '01-04-2024', description: 'Volunteering and scholarships.' },
  { name: 'Rotary Club Bengaluru Shankara Park', date: '27-07-2024', description: 'Social initiatives, scholarships, health camps, guest lectures.' },
  { name: 'ICAI – Institute of Cost Accountants of India', description: 'Cost and account management.' },
  { name: 'FIU', description: '—' },
  { name: 'Vemana Institute of Technology', description: 'Research, workshops, startups.' },
  { name: 'Quiz Shala', description: 'Collaborative activities, internships, placements.' },
  { name: 'PYZAQL', description: 'Training, internship, placement.' },
  { name: 'Anudip Foundation for Social Welfare', description: 'Job-oriented skill training and placements.' },
  { name: 'Anudip Foundation with IBM', description: 'Training programs.' },
  { name: 'Chanakya University', description: 'Holistic development.' },
  { name: 'KLE Law College', description: 'IQAC collaboration.' },
  { name: 'Rangadore Memorial Hospital', description: 'Health and medical support.' },
  { name: 'Chariton Research Institute Pvt. Ltd.', description: 'Environmental studies, food/water microbiology.' },
  { name: 'KSTA (Karnataka Science and Technology Academy)', description: 'Innovation, entrepreneurship.' },
  { name: 'Veranda Learning Solutions Ltd.', description: 'Learning initiatives.' },
  { name: 'Karnataka Gandhi Smaraka Nidhi', description: 'Collaborations.' },
  { name: 'Anubhuti Welfare Foundation', description: 'Waste management (ITC India).' },
  { name: 'Sambhav Foundation', description: 'Internship and placement.' },
  { name: 'Learnflu Edu Tech Firm', description: 'Internship and placement.' },
];

const MouPage = () => {
  return (
    <AboutLayout pageTitle="Memorandum of Understanding" breadcrumbPath="MOU">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-logo-navy mb-3">Institutional Partnerships</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The National College has signed Memorandums of Understanding with diverse institutions across industry, academia, research, and social sectors.
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border shadow-sm bg-white">
              <Table>
                <TableHeader className="bg-logo-navy">
                  <TableRow className="hover:bg-logo-navy">
                    <TableHead className="text-white font-semibold w-20 text-center">Sl No.</TableHead>
                    <TableHead className="text-white font-semibold">Particulars</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mous.map((mou, index) => (
                    <TableRow key={index} className="even:bg-muted/30 hover:bg-muted/50">
                      <TableCell className="text-center font-medium align-top">{index + 1}</TableCell>
                      <TableCell className="align-top">
                        <span className="font-semibold text-logo-navy">{mou.name}</span>
                        {mou.date && <span className="text-muted-foreground"> ({mou.date})</span>}
                        {mou.description !== '—' && (
                          <>: <span>{mou.description}</span></>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default MouPage;
