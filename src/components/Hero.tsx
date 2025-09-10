import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Logo }  from "@/components/ui/logo";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
        <div className="floating-element-delayed absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        <div className="floating-element absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg" />
        <div className="floating-element-delayed absolute bottom-40 right-1/3 w-24 h-24 bg-accent/15 rounded-full blur-xl" />
        <div className="floating-element absolute bottom-30 left-1/2 w-16 h-16 bg-primary/25 rounded-full blur-lg" />
        <div className="floating-element-delayed absolute bottom-12 right-1/5 w-24 h-24 bg-accent/15 rounded-full blur-xl" />
        <div className="floating-element absolute bottom-30 left-1/2 w-16 h-16 bg-primary/15 rounded-full blur-lg" />
        <div className="floating-element-delayed absolute bottom-12 right-1/5 w-24 h-24 bg-accent/15 rounded-full blur-xl" />
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
        <div className="floating-element-delayed absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
        <div className="floating-element-delayed absolute top-40 right-20 w-32 h-32 bg-accent/40 rounded-full blur-2xl" />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center animate-zoom-in">         
          {/* Main heading */}
          <div className="flex flex-col items-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Logo size="lg" className="mb-4" />
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
              <span className="text-gradient">BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah </span>
              <br />
              Kabupaten Sukabumi
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Memberikan pelayanan laboratorium kesehatan yang profesional, 
            akurat, dan terpercaya untuk meningkatkan kualitas kesehatan masyarakat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Layanan Kami
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                10,000+
              </div>
              <div className="text-muted-foreground">Sampel Telah Kami Periksa</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-muted-foreground">Tingkat Akurasi</div>
            </div>
            <div className="text-center group cursor-pointer">
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-veryslow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;