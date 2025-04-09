import React from 'react';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/logo';
import { competitionDetails } from '@/lib/utils';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-slate-300 mb-4">
              The West Midlands Mathematics Competition is organized by IB1 students to promote mathematical excellence 
              in the region. All profits from the competition will be donated to the UK Mathematics Trust.
            </p>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} West Midlands Mathematics Competition
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-slate-300 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-slate-300 hover:text-white"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#format')}
                  className="text-slate-300 hover:text-white"
                >
                  Format
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#team')}
                  className="text-slate-300 hover:text-white"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#register')}
                  className="text-slate-300 hover:text-white"
                >
                  Register
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#faq')}
                  className="text-slate-300 hover:text-white"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-slate-300 hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.ukmt.org.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white"
                >
                  UKMT Website
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white">Past Papers</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white">Competition Rules</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white">Registration Guide</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white">Practice Questions</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
