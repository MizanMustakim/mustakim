
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Skills', id: 'skills' },
    { name: 'Awards', id: 'awards' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 120; // Adjusted for larger navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center group"
          aria-label="Home"
        >
          {/* Large photo with restored gradient border */}
          <div className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-emerald-400 to-lime-400 transition-transform group-hover:scale-105 shadow-2xl shadow-emerald-900/50 -my-2">
            <img 
              src="https://res.cloudinary.com/ddbdyb6go/image/upload/v1770405460/Weixin_Image_20240404001143_a0egkv.jpg" 
              alt="M.R. Mustakim" 
              className="w-full h-full rounded-full object-cover border-4 border-emerald-950"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-sm font-medium hover:text-emerald-400 transition-colors ${
                activeSection === item.id ? 'text-emerald-400' : 'text-emerald-200/60'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-emerald-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-950 border-b border-emerald-900 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-lg font-medium text-emerald-100 py-2 border-b border-emerald-900 last:border-0"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
