import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CampusTourModal } from "@/components/CampusTourModal";

const About = () => {
  const highlights = [
    {
      title: "Academic Excellence",
      description: "Rigorous curriculum designed to meet industry standards and prepare students for successful careers.",
      icon: "🎓"
    },
    {
      title: "Expert Faculty",
      description: "Learn from experienced professionals and researchers who are leaders in their respective fields.",
      icon: "👨‍🏫"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art laboratories, libraries, and technology infrastructure for optimal learning.",
      icon: "🏢"
    },
    {
      title: "Career Support",
      description: "Comprehensive placement assistance and career guidance to ensure successful professional transitions.",
      icon: "💼"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About National College
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, National College has been at the forefront of higher education, 
            nurturing minds and shaping futures. Our commitment to academic excellence and holistic 
            development has made us a trusted name in education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Community?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Discover the programs that align with your aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              View Programs
            </Button>
            <CampusTourModal>
              {(openModal) => (
                <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={openModal}>
                  Schedule Campus Tour
                </Button>
              )}
            </CampusTourModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;