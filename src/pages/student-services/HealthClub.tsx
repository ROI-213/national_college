import React from 'react';
import { StudentServicesLayout } from '../../components/layout/StudentServicesLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Heart, Activity, Smile, CheckCircle, Dumbbell, Brain } from 'lucide-react';

const HealthClub = () => {
  const activities = [
    { icon: Activity, title: 'Yoga & Meditation', description: 'Weekly yoga and meditation sessions for physical and mental well-being.' },
    { icon: Dumbbell, title: 'Fitness Challenges', description: 'Group workouts, fitness challenges, and strength training programs.' },
    { icon: Brain, title: 'Mental Health Workshops', description: 'Awareness workshops on stress management, anxiety, and mental wellness.' },
    { icon: Heart, title: 'Nutrition Seminars', description: 'Expert talks on healthy eating, nutrition planning, and dietary habits.' },
    { icon: Smile, title: 'Wellness Activities', description: 'Group runs, outdoor activities, and wellness retreats for students.' },
    { icon: Activity, title: 'Health Camps', description: 'Regular health check-up camps and blood donation drives on campus.' },
  ];

  const benefits = [
    'Improved physical fitness and overall strength',
    'Enhanced mental well-being and emotional health',
    'Better academic performance through wellness',
    'Stress reduction techniques and coping skills',
    'Supportive community and peer connections',
    'Healthy lifestyle habits and discipline',
  ];

  return (
    <StudentServicesLayout pageTitle="Health Club" breadcrumbPath="Health Club">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-logo-navy/10 text-logo-navy px-6 py-3 rounded-full mb-8">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-medium">Wellness & Fitness</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Promoting physical and mental wellness through exercise, workshops, and peer support. 
              Your journey to a healthier, happier you starts here.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Wellness Activities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-logo-navy/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <activity.icon className="w-6 h-6 text-logo-navy" />
                    </div>
                    <h3 className="text-lg font-semibold text-logo-navy mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm">{activity.description}</p>
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
            <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Health Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
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
            <h2 className="text-3xl font-bold mb-6">Start Your Wellness Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our supportive community and take the first step towards a healthier lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-logo-navy hover:bg-gray-100 px-8">Join Health Club</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-logo-navy px-8">View Programs</Button>
            </div>
          </div>
        </div>
      </section>
    </StudentServicesLayout>
  );
};

export default HealthClub;
