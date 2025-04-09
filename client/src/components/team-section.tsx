import React from 'react';
import { Container } from '@/components/ui/container';
import { teamMembers } from '@/lib/utils';

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-slate-600">
            We are IB1 students passionate about mathematics and education
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary text-white text-3xl font-bold">
                  {member.initials}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-slate-500 mb-3">{member.position}</p>
                <p className="text-slate-700 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Commitment</h3>
          <p className="text-slate-700 text-center">
            As IB1 students, we are committed to promoting mathematical excellence in our region. 
            We have designed this competition to challenge and inspire students while supporting the 
            important work of the UK Mathematics Trust through our fundraising efforts.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
