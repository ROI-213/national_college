import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { Card } from '../../components/ui/card';
import { Camera, Image, Calendar } from 'lucide-react';

const PlacementPhotos = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Placement Photos</h1>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                Capturing moments of success and celebration from our placement activities and events.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-logo-navy mb-12 text-center">Photo Gallery</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Camera className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Campus Drives</h3>
                  <p className="text-gray-600">Photos from various company recruitment drives</p>
                </Card>
                <Card className="p-6">
                  <Image className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
                  <p className="text-gray-600">Moments of achievement and job offer celebrations</p>
                </Card>
                <Card className="p-6">
                  <Calendar className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Training Sessions</h3>
                  <p className="text-gray-600">Photos from skill development and training programs</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PlacementPhotos;