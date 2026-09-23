import { AboutLayout } from '../components/layout/AboutLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Cookie, Globe, Mail } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Introduction',
    content: 'The National College, Basavanagudi ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. By accessing or using our website, you agree to the terms outlined in this policy.'
  },
  {
    icon: Eye,
    title: 'Information Collection',
    content: 'We may collect personal information that you voluntarily provide when you fill out forms on our website, such as admission applications, contact forms, or scholarship applications. This information may include your name, email address, phone number, date of birth, academic records, and other relevant details. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and browsing patterns.'
  },
  {
    icon: Database,
    title: 'Use of Information',
    content: 'We use the information we collect to process admission applications, respond to inquiries, send academic notifications and updates, improve our website and services, comply with legal obligations, and communicate important institutional information. We do not sell, trade, or rent your personal information to third parties for marketing purposes.'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, access controls and authentication protocols, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
  },
  {
    icon: Cookie,
    title: 'Cookies Policy',
    content: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. We use essential cookies for website functionality, analytics cookies to understand how visitors interact with our website, and preference cookies to remember your settings. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.'
  },
  {
    icon: Globe,
    title: 'Third-party Services',
    content: 'Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you access through our website. We may use third-party analytics tools (such as Google Analytics) to help us understand website usage patterns.'
  },
  {
    icon: Mail,
    title: 'Contact Information',
    content: 'If you have any questions about this Privacy Policy or our data practices, please contact us at: The National College, Basavanagudi, Bengaluru - 560004, Karnataka, India. Email: nationalbgudiautonomous@gmail.com | Phone: 080 2667 4441. We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.'
  }
];

const PrivacyPolicy = () => {
  return (
    <AboutLayout pageTitle="Privacy Policy" breadcrumbPath="Privacy Policy">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Last updated: January 2025. This privacy policy describes how The National College collects, uses, and protects your personal information.
        </p>
        
        {sections.map((section, index) => (
          <Card key={index} className="border-border">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg text-foreground">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AboutLayout>
  );
};

export default PrivacyPolicy;
