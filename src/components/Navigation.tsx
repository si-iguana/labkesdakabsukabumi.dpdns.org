import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo }  from "@/components/ui/logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home", path: "/" },
    { label: "Services", href: "/#services", path: "/" },
    { label: "About", href: "/#about", path: "/" },
    { label: "News", href: "/#news", path: "/" },
    { label: "Contact", href: "/#contact", path: "/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-10">
              <div className="w-8 h-8 bg-white-gradient rounded-lg flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  <img 
                    src="/pemda.png" 
                    alt="Kabupaten Sukabumi" 
                    className="w-8 h-8 object-contain"
                  />
                    <div className="w-8 h-8 bg-border"></div>
                      <img
                        src="/border.png" 
                        alt="Border" 
                        className="w-8 h-8 object-contain"
                      />
                    <img 
                      src="/logo.png" 
                      alt="Labkesda" 
                      className="w-8 h-8 object-contain"
                    />
                    <div className="w-3 h-8 bg-border"></div>
               </div>
            </div>
            <h1 className="text-sm md:text-sm lg:text-s font-bold mb-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient">Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah</span>
            <br />
            <p className="text-xs text-muted-foreground max-h-l mx-auto">
              Kabupaten Sukabumi
          </p>
          </h1>
            <div>
            </div>
          </div>

        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;