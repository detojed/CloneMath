import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { faqs } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about the West Midlands Mathematics Competition
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                <button 
                  className="w-full text-left px-6 py-4 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-slate-800">{faq.question}</h3>
                    <ChevronDown 
                      className={cn(
                        "text-primary transition-transform", 
                        openIndices.includes(index) && "transform rotate-180"
                      )} 
                      size={16} 
                    />
                  </div>
                </button>
                
                <div className={cn("px-6 pb-4", !openIndices.includes(index) && "hidden")}>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-700">
              Still have questions? Feel free to{' '}
              <button
                onClick={scrollToContact}
                className="text-primary hover:underline"
              >
                contact us
              </button>{' '}
              for more information.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
