import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import KeyInfoSection from '@/components/key-info-section';
import AboutSection from '@/components/about-section';
import FormatSection from '@/components/format-section';
import UKMTSection from '@/components/ukmt-section';
import TeamSection from '@/components/team-section';
import RegisterSection from '@/components/register-section';
import FAQSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <KeyInfoSection />
        <AboutSection />
        <FormatSection />
        <UKMTSection />
        <TeamSection />
        <RegisterSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
