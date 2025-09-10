import { Heart, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Logo }  from "@/components/ui/logo";

const Footer = () => {
  const footerLinks = {
    Services: [
      //{ name: "Hematology", href: "/services/hematology" },
      //{ name: "Clinical Chemistry", href: "/services/clinical-chemistry" },
      //{ name: "Environmental Lab", href: "/services/environmental-lab" },
      //{ name: "Cardiology Tests", href: "/services/cardiology" },
      //{ name: "Neurology Tests", href: "/services/neurology" },
      //{ name: "Immunology", href: "/services/immunology" },
    ],
    //"Quick Links": [
      //{ name: "About Us", href: "/about" },
      //{ name: "Our Team", href: "/team" },
      //{ name: "Careers", href: "/careers" },
      //{ name: "Contact", href: "/contact" },
      //{ name: "Blog", href: "/blog" },
      //{ name: "FAQ", href: "/faq" },
    //],
    //Support: [
      //{ name: "Help Center", href: "/help" },
      //{ name: "Test Results", href: "/results" },
      //{ name: "Appointment", href: "/appointment" },
      //{ name: "Insurance", href: "/insurance" },
      //{ name: "Privacy Policy", href: "/privacy-policy" },
      //{ name: "Terms of Service", href: "/terms" },
    //],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/labkesdakab_sukabumi", label: "Instagram" },

  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-20 h-10 bg-white-gradient rounded-lg flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-l font-bold">BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah Kabupaten Sukabumi</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Laboratorium kesehatan terkemuka yang menyediakan layanan diagnostik yang profesional, 
              akurat, dan tepercaya untuk meningkatkan kesehatan masyarakat 
              melalui teknologi medis canggih.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pb-5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 mb-4 md:mb-0">
            © 2025 BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah.
          </div>
          <div className="flex items-center space-x-2 text-white/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse-slow" />
            <span>for better healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;