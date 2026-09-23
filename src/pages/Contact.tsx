import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Users, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: [
        "National College",
        "Pampa Mahakavi Rd, Basavanagudi",
        "Bengaluru - 560004",
        "Karnataka, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 (80) 6603 0200",
        "Admissions: +91 (80) 2663 2518",
        "Principal: +91 (80) 2663 0845"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@nationalcollege.edu.in",
        "Principal: principal.blr@nationalcollege.edu.in",
        "Admissions: admissions@nationalcollege.edu.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    { name: "Admissions Office", phone: "+91 (80) 2663 2518", email: "admissions@nationalcollege.edu.in" },
    { name: "Academic Office", phone: "+91 (80) 2663 0845", email: "academics@nationalcollege.edu.in" },
    { name: "Student Services", phone: "+91 (80) 6603 0200", email: "students@nationalcollege.edu.in" },
    { name: "Placement Cell", phone: "+91 (80) 2663 4521", email: "placements@nationalcollege.edu.in" }
  ];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('contact_enquiries').insert([{
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      source: 'contact',
      status: 'Not Contacted',
    }]);

    setSubmitting(false);

    if (error) {
      toast({
        title: 'Message Failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message Sent!',
      description: "We've received your message and will respond within 24 hours.",
    });

    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-gradient-to-r from-logo-navy/5 to-logo-blue/5 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-logo-navy hover:text-logo-blue transition-colors">Home</a>
            <span className="text-muted-foreground">/</span>
            <span className="text-logo-navy-dark font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-logo-navy to-logo-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full animate-scale-in animate-delay-200"></div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                  <info.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Department Contacts */}
          <div className="bg-card rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Users className="mr-3 text-primary" size={28} />
              Department Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border border-border p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">📞 {dept.phone}</p>
                  <p className="text-muted-foreground text-sm">✉️ {dept.email}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageSquare className="mr-3 text-primary" size={28} />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={e => handleChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      value={formData.lastName}
                      onChange={e => handleChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={e => handleChange('subject', e.target.value)}
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder="Please describe your inquiry in detail..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Directions */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Campus Location</h2>
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps?q=National+Degree+College+Bengaluru&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="National College Campus Location"
                  />
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Directions</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">🚇</span>
                    <span>Nearest Metro: National College Metro Station (5 minutes walk)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">🚌</span>
                    <span>Bus Routes: 201E, 223, 224A, 226</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">🚗</span>
                    <span>Car Parking: Available on campus</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">🚲</span>
                    <span>Bicycle Parking: Available at main entrance</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
