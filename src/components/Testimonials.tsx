
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Infosys',
      program: 'BCA Graduate 2023',
      image: '👩‍💻',
      quote: 'The computer applications program at NDC gave me a strong foundation in programming and software development. The faculty was always supportive and the practical approach to learning helped me land my dream job.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Financial Analyst at ICICI Bank',
      program: 'B.Com Graduate 2022',
      image: '👨‍💼',
      quote: 'The commerce department at NDC not only taught me accounting and finance but also developed my analytical thinking. The placement cell provided excellent guidance throughout my job search.',
      rating: 5
    },
    {
      name: 'Dr. Anitha Rao',
      role: 'Psychology Professor',
      program: 'B.A. Graduate 2020',
      image: '👩‍🏫',
      quote: 'My journey in psychology started at NDC. The diverse curriculum and research opportunities prepared me well for my master\'s and PhD. I\'m grateful for the foundation this college provided.',
      rating: 5
    },
    {
      name: 'Karthik Nair',
      role: 'Research Scientist',
      program: 'B.Sc. Graduate 2021',
      image: '👨‍🔬',
      quote: 'The science department at NDC fostered my love for research. The well-equipped labs and encouraging faculty helped me develop critical thinking skills that are essential in my current role.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      role: 'System Administrator',
      program: 'MCA Graduate 2023',
      image: '👩‍💻',
      quote: 'The MCA program was intensive and industry-relevant. The project-based learning approach and internship opportunities made me job-ready. I highly recommend NDC to aspiring IT professionals.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from our graduates who have gone on to achieve success in their careers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto lg:mx-0">
                  {testimonials[currentSlide].image}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-blue-200 text-sm mb-1">
                  {testimonials[currentSlide].role}
                </p>
                <p className="text-blue-300 text-xs">
                  {testimonials[currentSlide].program}
                </p>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <Quote className="text-blue-300 mb-4" size={32} />
                <blockquote className="text-lg lg:text-xl text-white leading-relaxed mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                
                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full p-3 transition-all"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full p-3 transition-all"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
          <p className="text-blue-100 mb-6">
            Be part of our growing community of successful graduates
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};
