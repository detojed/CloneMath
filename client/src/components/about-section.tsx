import React from 'react';
import { Container } from '@/components/ui/container';
import { Check, Trophy } from 'lucide-react';
import { Star } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">About the Competition</h2>
          <p className="text-lg text-slate-600">
            An exciting mathematics competition organized by IB1 students for schools across the West Midlands region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-slate-700 mb-4">
              We aim to foster mathematical excellence among students in the West Midlands region through a challenging 
              and enriching competition experience.
            </p>
            <p className="text-slate-700 mb-4">
              Inspired by the renowned UK Mathematics Trust (UKMT) competitions, our event offers a unique opportunity 
              for students to showcase their problem-solving skills and mathematical reasoning.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>All profits from this competition will be donated to the UKMT</strong> to support their mission of 
              advancing mathematics education across the United Kingdom.
            </p>
            
            <div className="flex items-center text-primary">
              <Check className="mr-2" />
              <p>UKMT-style problems with a regional focus</p>
            </div>
            <div className="flex items-center text-primary mt-2">
              <Check className="mr-2" />
              <p>Challenging questions to develop critical thinking</p>
            </div>
            <div className="flex items-center text-primary mt-2">
              <Check className="mr-2" />
              <p>Recognition for top-performing students</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <span className="inline-block p-3 bg-blue-100 text-primary rounded-full mb-2">
                <Trophy size={24} />
              </span>
              <h3 className="text-xl font-semibold">Why Participate?</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <span className="mr-3 text-yellow-500"><Star size={16} /></span>
                <span>Challenging problems beyond standard curriculum</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-yellow-500"><Star size={16} /></span>
                <span>Perfect preparation for UKMT Senior Challenge and BMO1</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-yellow-500"><Star size={16} /></span>
                <span>Certificates and prizes for top performers</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-yellow-500"><Star size={16} /></span>
                <span>Supporting mathematics education through UKMT donation</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-yellow-500"><Star size={16} /></span>
                <span>Networking opportunity with mathematically-minded peers</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
