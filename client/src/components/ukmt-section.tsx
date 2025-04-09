import React from 'react';
import { Container } from '@/components/ui/container';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UKMTSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Supporting UKMT</h2>
            <p className="text-xl text-blue-100">
              All profits from our competition will be donated to the UK Mathematics Trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">About UKMT</h3>
              <p className="mb-4 text-blue-50">
                The UK Mathematics Trust (UKMT) is a registered charity whose aim is to advance the education of young people in mathematics.
              </p>
              <p className="mb-4 text-blue-50">
                UKMT organizes national mathematics competitions and other mathematical activities for 11-18 year olds. Each year over 700,000 students from 4,500 schools take part in the three individual challenges.
              </p>
              <p className="text-blue-50">
                Our competition is inspired by UKMT's format but is independently organized. We are proud to support their mission by donating all profits to further their work.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Contribution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="text-yellow-500 mt-1 mr-3" size={16} />
                  <span>100% of profits donated to UKMT</span>
                </li>
                <li className="flex items-start">
                  <Heart className="text-yellow-500 mt-1 mr-3" size={16} />
                  <span>Promoting mathematical excellence in our region</span>
                </li>
                <li className="flex items-start">
                  <Heart className="text-yellow-500 mt-1 mr-3" size={16} />
                  <span>Inspiring the next generation of mathematicians</span>
                </li>
                <li className="flex items-start">
                  <Heart className="text-yellow-500 mt-1 mr-3" size={16} />
                  <span>Creating a pathway to national competitions</span>
                </li>
              </ul>
              
              <div className="mt-6 text-center">
                <Button className="bg-white text-primary hover:bg-blue-50" asChild>
                  <a href="https://www.ukmt.org.uk/" target="_blank" rel="noopener noreferrer">
                    Visit UKMT Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UKMTSection;
