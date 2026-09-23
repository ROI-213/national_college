import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Our Campus",
      details: "123 Education Avenue\nAcademic District, State 12345",
      icon: "📍"
    },
    {
      title: "Call Us",
      details: "+1 (555) 123-4567\nAdmissions: +1 (555) 123-4568",
      icon: "📞"
    },
    {
      title: "Email Us",
      details: "info@nationalcollege.edu\nadmissions@nationalcollege.edu",
      icon: "✉️"
    },
    {
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      icon: "🕒"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our programs or admissions process? We're here to help you 
            every step of the way on your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{info.icon}</div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="whitespace-pre-line leading-relaxed">
                  {info.details}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-gradient-subtle rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Apply?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start your application today and take the first step towards an exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Apply Online
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;