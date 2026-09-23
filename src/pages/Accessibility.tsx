import { AboutLayout } from '../components/layout/AboutLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility as AccessibilityIcon, Keyboard, Type, Palette, ImageIcon, RefreshCw, Mail } from 'lucide-react';

const features = [
  { icon: Keyboard, title: 'Keyboard Navigation', description: 'All interactive elements are accessible via keyboard. Users can navigate through pages, menus, and forms using Tab, Enter, and arrow keys.' },
  { icon: Type, title: 'Readable Fonts & Text', description: 'We use clear, legible fonts with appropriate sizes and line heights. Text maintains proper contrast ratios against backgrounds for comfortable reading.' },
  { icon: Palette, title: 'Color Contrast', description: 'Our color palette meets WCAG 2.1 AA contrast ratio guidelines to ensure content is readable for users with low vision or color vision deficiencies.' },
  { icon: ImageIcon, title: 'Alt Text for Images', description: 'All meaningful images include descriptive alternative text to convey information to users who rely on screen readers or have images disabled.' },
];

const Accessibility = () => {
  return (
    <AboutLayout pageTitle="Accessibility" breadcrumbPath="Accessibility">
      <div className="space-y-8">
        {/* Commitment */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <AccessibilityIcon className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg text-foreground">Accessibility Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The National College is committed to ensuring that our website is accessible to all users, including people with disabilities. 
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our goal is to provide an 
              inclusive digital experience that allows everyone to access information about our institution, programs, and services regardless 
              of their abilities or the assistive technologies they use.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-base text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Improvements */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg text-foreground">Ongoing Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              We continuously work to improve the accessibility of our website. Our team regularly reviews and updates the site to address 
              accessibility issues, incorporate feedback from users, and adopt new best practices. We conduct periodic accessibility audits 
              and testing with assistive technologies to identify and resolve barriers.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center gap-3 pb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg text-foreground">Contact for Accessibility Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              If you encounter any accessibility barriers or have suggestions for improving accessibility, please contact us. 
              We welcome your feedback and will make every effort to address your concerns promptly.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> nationalbgudiautonomous@gmail.com</p>
              <p><strong className="text-foreground">Phone:</strong> 080 2667 4441</p>
              <p><strong className="text-foreground">Address:</strong> The National College, Basavanagudi, Bengaluru - 560004, Karnataka, India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AboutLayout>
  );
};

export default Accessibility;
