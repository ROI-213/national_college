import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';

const reviews = [
  { name: 'Ananya Sharma', initials: 'AS', rating: 5, date: '2 months ago', text: 'Excellent college with great faculty and infrastructure. The placement support is outstanding and helped me land my dream job.' },
  { name: 'Rahul Gowda', initials: 'RG', rating: 5, date: '3 months ago', text: 'The National College has been a transformative experience. The professors are highly knowledgeable and always willing to help.' },
  { name: 'Priya Reddy', initials: 'PR', rating: 4, date: '1 month ago', text: 'Good college with a beautiful campus. The library and lab facilities are top-notch. Loved the cultural events and sports activities.' },
  { name: 'Karthik Nair', initials: 'KN', rating: 5, date: '4 months ago', text: 'One of the best degree colleges in Bengaluru. The BCA program prepared me well for the IT industry. Highly recommend!' },
  { name: 'Meera Patel', initials: 'MP', rating: 5, date: '2 months ago', text: 'Amazing experience at NDC! The faculty is supportive and the campus life is vibrant. Great exposure through seminars and workshops.' },
  { name: 'Suresh Kumar', initials: 'SK', rating: 4, date: '5 months ago', text: 'Very good institution with strong academics. The commerce department is particularly strong with experienced professors.' },
  { name: 'Divya Hegde', initials: 'DH', rating: 5, date: '1 month ago', text: 'NDC gave me the best three years of my life. The cultural diversity and inclusive environment make it a wonderful place to learn.' },
  { name: 'Vijay Krishnan', initials: 'VK', rating: 5, date: '3 months ago', text: 'Excellent placement record and industry connections. The training programs and workshops kept us industry-ready throughout.' },
  { name: 'Lakshmi Devi', initials: 'LD', rating: 4, date: '6 months ago', text: 'Good college with NAAC accreditation. The management is very supportive and always focused on student development.' },
  { name: 'Arun Prasad', initials: 'AP', rating: 5, date: '2 months ago', text: 'I am proud to be an alumnus of NDC. The values and knowledge I gained here have been instrumental in my career success.' },
];

const overallRating = 4.1;
const totalReviews = 773;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} size={14} className={i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'} />
    ))}
  </div>
);

export const GoogleReviews = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm mb-4">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-semibold text-sm text-foreground">Google Reviews</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            What People <span className="text-primary">Say About Us</span>
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-4xl font-bold text-foreground">{overallRating}</span>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className={i <= Math.round(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/30 text-yellow-400/30'} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{totalReviews}+ reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden max-w-6xl mx-auto" ref={emblaRef}>
          <div className="flex -ml-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="p-5 h-full border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-4">{review.text}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="gap-2">
            <a href="https://www.google.com/maps/place/National+Degree+College/@12.9487261,77.5723597,17z/data=!4m8!3m7!1s0x3bae15f2046d6ff9:0x5baa26acab9c9d58!8m2!3d12.9487261!4d77.5723597!9m1!1b1!16s%2Fm%2F03cl8t6?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              Write a Review on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
