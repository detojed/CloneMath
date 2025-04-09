import React from 'react';
import { Container } from '@/components/ui/container';
import { ListChecks, Brain, Medal } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function FormatSection() {
  return (
    <section id="format" className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Competition Format</h2>
          <p className="text-lg text-slate-600">
            A challenging mathematical experience designed to test problem-solving skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <ListChecks size={24} />
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Structure</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>10 challenging mathematical problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>90 minutes to complete all questions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>Individual participation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>No calculators allowed</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Brain size={24} />
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Difficulty Level</h3>
            <p className="text-slate-700 mb-4">
              The difficulty level is calibrated between the UKMT Senior Mathematics Challenge and the British Mathematical Olympiad Round 1 (BMO1).
            </p>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-blue-100">
                    Difficulty Scale
                  </span>
                </div>
              </div>
              <Progress value={70} className="h-2 bg-blue-100" />
              <div className="flex text-xs justify-between mt-1">
                <span>UKMT Senior Challenge</span>
                <span className="font-bold">Our Competition</span>
                <span>BMO1</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Medal size={24} />
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Recognition</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>Gold, Silver, and Bronze certificates for top-performing students</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>Special recognition for the highest-scoring school</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>Participation certificates for all students</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <span>Mathematical prizes for top individual performers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-6 shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Sample Problem</h3>
          <div className="bg-white p-5 rounded shadow-sm text-center mb-4">
            <p className="text-slate-800">
              Find all positive integers <span className="italic">n</span> such that <span className="italic">n</span>²+20<span className="italic">n</span>+12 is a perfect square.
            </p>
          </div>
          <p className="text-slate-600 text-center italic text-sm">
            This sample demonstrates the level of challenge you can expect in our competition. It requires algebraic manipulation and number theory concepts.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FormatSection;
