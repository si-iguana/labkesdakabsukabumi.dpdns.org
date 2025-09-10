import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Microscope, FlaskConical, Stethoscope, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Hematologi",
      description: "Tes darah lengkap untuk mendeteksi berbagai kondisi termasuk anemia, infeksi, dan leukemia.",
      features: ["Complete Blood Count", "Blood Typing", "Coagulation Studies"],
      color: "text-red-500",
      delay: "0.1s"
    },
    {
      icon: FlaskConical,
      title: "Clinical Chemistry",
      description: "Analisis kadar kimia darah termasuk glukosa, kolesterol, dan tes fungsi hati.",
      features: ["Glucose Testing", "Lipid Profile", "Liver Function"],
      color: "text-blue-500",
      delay: "0.2s"
    },
    {
      icon: Microscope,
      title: "Environmental Laboratory",
      description: "Analisis komprehensif untuk pengujian kualitas air, pemantauan polusi udara, dan keselamatan lingkungan.",
      features: ["Water Quality", "Air Monitoring", "Soil Testing"],
      color: "text-green-500",
      delay: "0.3s"
    },
    {
      icon: Stethoscope,
      title: "Cardiology Tests",
      description: "Diagnostik jantung tingkat lanjut termasuk analisis EKG.",
      features: ["ECG Analysis", "Heart Health"],
      color: "text-purple-500",
      delay: "0.4s"
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Layanan </span> 
            Laboratorium Kesehatan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan berbagai jenis pemeriksaan laboratorium untuk individu 
            dan institusi, memastikan hasil yang akurat dan dapat diandalkan 
            untuk keputusan perawatan kesehatan yang lebih baik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-strong transition-all duration-500 cursor-pointer border-0 bg-card-gradient animate-fade-in-up hover:scale-105"
                style={{ animationDelay: service.delay }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <button className="text-primary font-medium text-sm hover:text-accent transition-colors duration-200 group-hover:translate-x-1 transform transition-transform">
                      Learn More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mau Melakukan Pengujian Laboratorium?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Hubungi tim ahli kami untuk mendiskusikan persyaratan pengujian dan pilihan pengujian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/6285718024486?text=Halo%2C%20saya%20ingin%20menanyakan%20informasi%20lebih%20lanjut." target="_blank" className="flex items-center">
                  <Button variant="white" size="lg" className="group">
                    Hubungi Kami
                  </Button>
                </a>
                <span className="text-white/80"></span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;