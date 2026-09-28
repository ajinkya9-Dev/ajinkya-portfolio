import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhatsAppIntegration } from './components/WhatsAppIntegration';
import { ScaleSection } from './components/ScaleSection';
import { TechStack } from './components/TechStack';
import { SkillsMap } from './components/SkillsMap';
import { AboutApproach } from './components/AboutApproach';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1C2420] flex flex-col font-sans selection:bg-[#C76B3C] selection:text-white">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Engineering Impact */}
        <Impact />

        {/* 4. Experience Timeline */}
        <ExperienceTimeline />

        {/* 5. Featured Products */}
        <FeaturedProducts />

        {/* 6. Signature Section — Meta WhatsApp Integration */}
        <WhatsAppIntegration />

        {/* 7. Scale Section — 50,000+ Records / Day */}
        <ScaleSection />

        {/* 8. Technical Architecture Layers */}
        <TechStack />

        {/* 9. Skills Capability Map */}
        <SkillsMap />

        {/* 10. About & Approach */}
        <AboutApproach />

        {/* 11. Education & Languages */}
        <Education />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
