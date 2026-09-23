import { AboutLayout } from '../../components/layout/AboutLayout';
import { Card, CardContent } from '../../components/ui/card';
import adoptionLetter from '../../assets/adoption-letter.jpg';
import { Heart, Users, Sprout, Home, BookOpen, Droplets } from 'lucide-react';

const initiatives = [
  { icon: BookOpen, title: 'Education Support', description: 'Providing educational resources, tutoring, and scholarships to village children.' },
  { icon: Heart, title: 'Health & Hygiene', description: 'Organizing medical camps, health awareness drives, and sanitation programs.' },
  { icon: Sprout, title: 'Environmental Awareness', description: 'Tree plantation drives, waste management education, and sustainable farming practices.' },
  { icon: Home, title: 'Infrastructure Development', description: 'Assisting in building community spaces, improving roads, and basic amenities.' },
  { icon: Users, title: 'Skill Development', description: 'Vocational training workshops for youth and women empowerment programs.' },
  { icon: Droplets, title: 'Water Conservation', description: 'Rainwater harvesting projects and clean water access initiatives.' },
];

const VillageAdoption = () => {
  return (
    <AboutLayout pageTitle="Village Adoption" breadcrumbPath="Village Adoption">
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
            As part of our commitment to social responsibility, National College has adopted nearby villages to uplift rural communities through education, healthcare, environmental awareness, and skill development. Our students and faculty actively participate in outreach programs that bridge the gap between urban institutions and rural life.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-center">
            This initiative nurtures civic responsibility among students while creating a meaningful and lasting impact on the adopted communities.
          </p>
        </div>
      </section>

      {/* Adoption Letter Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <img
            src={adoptionLetter}
            alt="Village Adoption Letter"
            className="max-w-[1080px] w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-logo-navy mb-12">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => (
              <Card key={idx} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-logo-navy/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-logo-navy/20 transition-colors">
                    <item.icon className="w-8 h-8 text-logo-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AboutLayout>
  );
};

export default VillageAdoption;
