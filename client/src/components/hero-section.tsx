import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-12 gap-2 transform rotate-12">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="col-span-1 bg-white opacity-30 h-8"></div>
          ))}
        </div>
      </div>
      
      <Container className="py-16 sm:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            West Midlands Mathematics Competition
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Challenge your mathematical abilities in our regional competition designed for talented students. 
            Inspired by UKMT with all profits supporting their mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#register">
              <Button
                className="w-full sm:w-auto bg-white text-primary hover:bg-blue-50 px-8 py-6 rounded-md font-semibold shadow-md"
                size="lg"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Your School
              </Button>
            </Link>
            <Button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white/20 px-8 py-6 rounded-md font-semibold"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Gradient fade to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}

export default HeroSection;
