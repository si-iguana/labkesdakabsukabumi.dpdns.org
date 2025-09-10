import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Kompleks Alun-Alun, Cisaat, Kec. Cisaat",
      subContent: "Kabupaten Sukabumi, Jawa Barat 43152"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0857-1802-4486",
      subContent: ""
    },
    {
      icon: Mail,
      title: "Email",
      content: "labkesdakabsukabumi@gmail.com",
      subContent: ""
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00 WIB",
      subContent: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Siap Memulai
            <span className="text-gradient"> Perjalanan Kesehatan </span>
            Anda?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hubungi kami hari ini untuk menjadwalkan tes laboratorium Anda atau 
            mempelajari lebih lanjut tentang layanan kami. Tim kami yang ramah 
            siap membantu Anda dengan semua kebutuhan perawatan kesehatan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="group hover:shadow-medium transition-all duration-300 border-0 bg-card-gradient animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subContent}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Google Maps */}
          <div className="w-full h-[495px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31686.76878346594!2d106.890774!3d-6.908999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e683635da5468dd%3A0x70bc6198165f8863!2sLaboratorium%20Kesehatan%20Daerah%20Kab%20Sukabumi!5e0!3m2!1sen!2sid!4v1756954353424!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> 

                    
        </div>
        

        {/* Emergency Contact */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="bg-hero-gradient border-0 text-white text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Layanan Laboratorium</h3>
              <p className="text-lg opacity-90 mb-6">
                Butuh tes laboratorium? Segera Hubungi Kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/6285718024486?text=Halo%2C%20saya%20ingin%20menanyakan%20informasi%20lebih%20lanjut." target="_blank" className="flex items-center">
                  <Button variant="white" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    0857 1802 4486
                  </Button>
                </a>
                <span className="text-white/80"></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;