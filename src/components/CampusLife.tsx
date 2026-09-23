
import React from 'react';
import { Users, Trophy, Heart, BookOpen, Music, Camera } from 'lucide-react';

export const CampusLife = () => {
  const campusActivities = [
    {
      icon: Users,
      title: 'Student Clubs',
      description: 'Join various clubs and societies to pursue your interests and develop leadership skills',
      image: '🎭',
      stats: '15+ Active Clubs',
      activities: ['Drama Club', 'Debate Society', 'Literature Club', 'Photography Club']
    },
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      description: 'Excel in sports with our comprehensive athletic programs and modern facilities',
      image: '🏆',
      stats: '10+ Sports',
      activities: ['Cricket', 'Basketball', 'Volleyball', 'Table Tennis']
    },
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Showcase your talents in our annual cultural festivals and competitions',
      image: '🎨',
      stats: '20+ Events/Year',
      activities: ['Annual Fest', 'Music Concert', 'Dance Competition', 'Art Exhibition']
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Make a difference through NCC, NSS, and various community outreach programs',
      image: '🤝',
      stats: '500+ Volunteers',
      activities: ['NCC', 'NSS', 'Blood Donation', 'Environment Drives']
    },
    {
      icon: BookOpen,
      title: 'Academic Support',
      description: 'Get additional academic help through study groups and peer mentoring',
      image: '📖',
      stats: '24/7 Library',
      activities: ['Study Groups', 'Peer Tutoring', 'Research Projects', 'Workshops']
    },
    {
      icon: Camera,
      title: 'Student Media',
      description: 'Express yourself through student publications and digital media platforms',
      image: '📸',
      stats: '3 Publications',
      activities: ['College Magazine', 'Newsletter', 'Social Media', 'Blog Platform']
    }
  ];

  const upcomingEvents = [
    {
      date: 'Mar 25',
      title: 'Annual Cultural Fest - Basavanagudi Utsav',
      type: 'Cultural',
      description: 'Three-day celebration of arts, music, and talent'
    },
    {
      date: 'Apr 02',
      title: 'Inter-College Sports Tournament',
      type: 'Sports',
      description: 'Compete with other colleges across various sports'
    },
    {
      date: 'Apr 15',
      title: 'Science Exhibition',
      type: 'Academic',
      description: 'Showcase innovative projects and research work'
    },
    {
      date: 'Apr 20',
      title: 'Alumni Meet 2024',
      type: 'Networking',
      description: 'Connect with successful alumni and industry leaders'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Campus Life at NDC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life with endless opportunities for growth, learning, and fun
          </p>
        </div>

        {/* Campus Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {campusActivities.map((activity, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <activity.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl mb-2">{activity.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                {activity.description}
              </p>

              <div className="text-center mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {activity.stats}
                </span>
              </div>

              <div className="space-y-2">
                {activity.activities.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm group-hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
            <p className="text-gray-600 text-lg">
              Don't miss out on these exciting campus events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center mb-4">
                  <div className="bg-blue-600 text-white rounded-lg p-3 mb-3 inline-block">
                    <div className="text-lg font-bold">{event.date}</div>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>

                <h4 className="font-bold text-gray-800 mb-2 text-center">
                  {event.title}
                </h4>
                
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {event.description}
                </p>

                <button className="w-full mt-4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg font-medium transition-colors text-sm">
                  Register Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
