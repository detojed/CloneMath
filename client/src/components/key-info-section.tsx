import React from 'react';
import { Container } from '@/components/ui/container';
import { Calendar, MapPin, PoundSterling } from 'lucide-react';
import { competitionDetails } from '@/lib/utils';

export function KeyInfoSection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Competition Date</h3>
            <p className="text-slate-600">{competitionDetails.date}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Region</h3>
            <p className="text-slate-600">{competitionDetails.region}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <PoundSterling className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Entry Fee</h3>
            <p className="text-slate-600">
              £{competitionDetails.entryFee} per student
              <br />
              <span className="text-sm">(All profits to UKMT)</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default KeyInfoSection;
