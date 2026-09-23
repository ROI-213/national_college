import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Cpu, Code, Lightbulb, Users, CheckCircle, CircuitBoard } from 'lucide-react';

const activities = [
  { icon: Code, title: 'Coding Competitions', description: 'Hackathons, coding challenges, and programming contests to sharpen technical skills.' },
  { icon: Cpu, title: 'Technical Workshops', description: 'Hands-on workshops on emerging technologies, IoT, AI, and embedded systems.' },
  { icon: Lightbulb, title: 'Innovation Projects', description: 'Student-led projects in electronics, robotics, and computer science applications.' },
  { icon: Users, title: 'Industry Interaction', description: 'Guest lectures, industry visits, and networking events with tech professionals.' },
];

const EcsAssociation = () => (
  <StudentServicesLayout pageTitle="Electronics & Computer Science Association" breadcrumbPath="ECS Association">
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
            <CircuitBoard className="w-5 h-5 mr-2" />
            <span className="font-medium">Technology & Innovation</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Electronics & Computer Science Association brings together students passionate about technology, electronics, and computer science. Through workshops, competitions, and collaborative projects, the association fosters innovation and practical learning beyond the classroom.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Activities & Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <a.icon className="w-6 h-6 text-logo-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-logo-navy mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Bridge the gap between academics and industry', 'Encourage hands-on learning and experimentation', 'Foster teamwork and collaborative problem-solving', 'Expose students to cutting-edge technologies', 'Develop entrepreneurial and innovative thinking', 'Build a strong technical community on campus'].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-logo-blue mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-to-r from-logo-navy to-logo-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Innovate. Build. Excel.</h2>
          <p className="text-xl mb-8 opacity-90">Join the ECS Association and be part of the tech revolution on campus.</p>
          <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Now</Button>
        </div>
      </div>
    </section>
  </StudentServicesLayout>
);

export default EcsAssociation;
