import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'what-i-do', label: 'What I Do' },
    { id: 'works', label: 'Works' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/90 backdrop-blur-md border-b border-background-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo('hero')}
          className="font-heading text-lg font-bold text-foreground-950 hover:text-primary-400 transition-colors cursor-pointer whitespace-nowrap tracking-wide"
        >
          K.Y.
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-foreground-700 hover:text-primary-400 transition-colors cursor-pointer whitespace-nowrap font-body"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground-700 hover:text-foreground-950 transition-colors cursor-pointer"
        >
          <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-50/95 backdrop-blur-md border-t border-background-200/50">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-foreground-700 hover:text-primary-400 transition-colors cursor-pointer text-left py-2 font-body"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}