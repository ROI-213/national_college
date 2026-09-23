import { useState } from 'react';
import { InfrastructureLayout } from '../../components/layout/InfrastructureLayout';
import { Card, CardContent } from '../../components/ui/card';
import { Bed, BookOpen, Wifi, Shield, UtensilsCrossed, UserCheck, Lock, Camera, Apple, Gamepad2 } from 'lucide-react';
import boysHostelImg from '@/assets/boys-hostel.jpg';
import girlsHostelImg from '@/assets/girls-hostel.jpg';

const boysFeatures = [
  { icon: Bed, label: 'Spacious Rooms' },
  { icon: BookOpen, label: 'Study Areas' },
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Shield, label: '24/7 Security' },
  { icon: UtensilsCrossed, label: 'Hygienic Dining' },
  { icon: UserCheck, label: 'Warden Supervision' },
];

const girlsFeatures = [
  { icon: Lock, label: 'Secure Premises' },
  { icon: Camera, label: 'CCTV Monitoring' },
  { icon: Apple, label: 'Nutritious Meals' },
  { icon: BookOpen, label: 'Study Hall' },
  { icon: Gamepad2, label: 'Recreation Area' },
  { icon: UserCheck, label: 'Dedicated Wardens' },
];

const HostelFacility = () => {
  const [activeTab, setActiveTab] = useState<'boys' | 'girls'>('boys');

  return (
    <InfrastructureLayout pageTitle="Hostel Facility" breadcrumbPath="Hostel Facility">
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-logo-navy mb-6">Safe • Comfortable • Student-Centric Living</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            National College provides well-maintained hostel facilities for both boys and girls, ensuring a safe, comfortable, and academically conducive environment. Our hostels are equipped with modern amenities, nutritious meals, and round-the-clock security to support students throughout their academic journey.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('boys')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === 'boys'
                  ? 'bg-logo-navy text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Boys Hostel
            </button>
            <button
              onClick={() => setActiveTab('girls')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === 'girls'
                  ? 'bg-logo-navy text-white shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Girls Hostel
            </button>
          </div>

          {/* Content */}
          <div className="transition-all duration-500">
            {activeTab === 'boys' ? (
              <Card className="overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={boysHostelImg}
                      alt="Boys Hostel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-logo-navy mb-4">Boys Hostel</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our boys' hostel offers a disciplined yet friendly atmosphere with spacious rooms, dedicated study areas, and recreational zones. Supervised by experienced wardens, the hostel ensures a balanced lifestyle that promotes both academic excellence and personal growth.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {boysFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-logo-navy/10 transition-colors group">
                          <f.icon size={20} className="text-logo-navy group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-foreground">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ) : (
              <Card className="overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={girlsHostelImg}
                      alt="Girls Hostel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-logo-navy mb-4">Girls Hostel</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The girls' hostel provides a secure and nurturing environment with CCTV-monitored premises, dedicated wardens, and wholesome meals. Students enjoy access to study halls, recreation spaces, and a supportive community that fosters confidence and independence.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {girlsFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-logo-navy/10 transition-colors group">
                          <f.icon size={20} className="text-logo-navy group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-medium text-foreground">{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>
    </InfrastructureLayout>
  );
};

export default HostelFacility;
