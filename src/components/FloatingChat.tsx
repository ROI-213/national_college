import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const FloatingChat = () => {
  const socialLinks = [
    { icon: Phone, label: 'Call Us', href: 'tel:+918026670445', color: 'bg-green-500 hover:bg-green-600' },
    { icon: Mail, label: 'Email', href: 'mailto:info@nationalcollege.edu.in', color: 'bg-red-500 hover:bg-red-600' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/nationalcollegebasavanagudi', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/nationalcollegebasavanagudi', color: 'bg-pink-500 hover:bg-pink-600' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/NationalCollBng', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/school/national-college-basavanagudi', color: 'bg-blue-700 hover:bg-blue-800' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@nationalcollegebasavanagudi', color: 'bg-red-600 hover:bg-red-700' },
  ];

  return (
    <div className="fixed right-4 top-[55%] -translate-y-1/2 z-40 flex flex-col items-center gap-2">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target={link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full ${link.color} text-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110`}
          aria-label={link.label}
          title={link.label}
        >
          <link.icon size={18} />
        </a>
      ))}
    </div>
  );
};
