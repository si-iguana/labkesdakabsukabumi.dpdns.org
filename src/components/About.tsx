import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Tersertifikasi",
      description: "Laboratorium bersertifikat dengan standar kualitas nasional"
    },
    {
      icon: Users,
      title: "Tim Ahli",
      description: "Teknolog medis dan ahli patologi yang berkualifikasi tinggi"
    },
    {
      icon: Clock,
      title: "Hasil Cepat",
      description: "Waktu penyelesaian yang cepat tanpa mengurangi akurasi"
    },
    {
      icon: Target,
      title: "Presisi",
      description: "Tingkat akurasi 99,9% dengan peralatan canggih"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <Badge variant="outline" className="mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Inovasi dan Akurasi dalam 
              <span className="text-gradient"> Setiap Pemeriksaan</span>
            </h2>
            <p className="text-lg text-foreground mb-10 leading-relaxed">
              Lebih dari sepuluh tahun, kami menjadi mitra terpercaya di bidang layanan Laboratorium.
              Dengan diagnostik yang akurat dan andal, kami mendukung tenaga kesehatan 
              dalam mengambil keputusan tepat demi meningkatkan kualitas hidup dan kesehatan pasien.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-gradient mb-1">15+ Tahun</div>
                <div className="text-sm text-muted-foreground">Pengalaman</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-xl">
                <div className="text-2xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Jenis Tes</div>
              </div>
            </div>

           
          </div>

          {/* Right Content - Features Grid */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="group hover:shadow-medium transition-all duration-300 cursor-pointer border-0 bg-card-gradient animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 bg-muted/50 border-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gradient mb-3">Misi Kami</h3>
                <p className="text-foreground">
                  Memberikan layanan laboratorium terbaik untuk mendukung tenaga kesehatan 
                  dalam memberikan perawatan pasien yang optimal melalui pengujian diagnostik yang akurat, 
                  tepat waktu, dan terpercaya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;