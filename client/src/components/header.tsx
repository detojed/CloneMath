import React, { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/logo';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Format', href: '#format' },
  { name: 'Our Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-primary font-medium"
              >
                {item.name}
              </button>
            ))}
            
            <Link href="/register">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMobileMenu} className="text-slate-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              >
                {item.name}
              </button>
            ))}
            
            <Link href="/register" className="block w-full">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
