import { AboutLayout } from '../components/layout/AboutLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, ShieldCheck, AlertTriangle, UserCheck, Gavel } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    content: 'By accessing and using The National College website (www.tndcbasavanagudi.edu.in), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use this website. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.'
  },
  {
    icon: Scale,
    title: 'Website Usage',
    content: 'This website is provided for informational and educational purposes related to The National College. You may use the website to access information about academic programs, admissions, campus facilities, and institutional activities. You agree not to use the website for any unlawful purpose, attempt to gain unauthorized access to any part of the website, interfere with the proper functioning of the website, or use automated systems to extract data from the website without prior written consent.'
  },
  {
    icon: ShieldCheck,
    title: 'Intellectual Property',
    content: 'All content on this website, including but not limited to text, graphics, logos, images, photographs, audio and video clips, data compilations, and software, is the property of The National College or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from this website without express written permission from The National College.'
  },
  {
    icon: AlertTriangle,
    title: 'Limitation of Liability',
    content: 'The National College makes every effort to ensure the accuracy of information on this website. However, the website and its contents are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. The National College shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, the website. The college reserves the right to modify, suspend, or discontinue any part of the website at any time without prior notice.'
  },
  {
    icon: UserCheck,
    title: 'User Responsibilities',
    content: 'As a user of this website, you are responsible for maintaining the confidentiality of any account credentials, ensuring that all information you provide through forms is accurate and current, complying with all applicable local, state, national, and international laws, and reporting any security breaches or unauthorized use of the website. You agree not to upload or transmit any material that is defamatory, offensive, or infringes upon the rights of others.'
  },
  {
    icon: Gavel,
    title: 'Governing Law',
    content: 'These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.'
  }
];

const TermsOfUse = () => {
  return (
    <AboutLayout pageTitle="Terms of Use" breadcrumbPath="Terms of Use">
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Please read these terms carefully before using The National College website. These terms govern your use of our website and services.
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

export default TermsOfUse;
