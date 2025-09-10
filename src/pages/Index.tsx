import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample news data - you can update this to add more news
  const latestNews = [
    {
      id: 1,
      title: "Anti-Gratifikasi",
      excerpt: "Anti-Gratifikasi: Membangun Integritas di Laboratorium Kesehatan Daerah.",
      content: "Laboratorium Kesehatan Daerah (Labkesda) memiliki peran vital dalam sistem kesehatan masyarakat. Mereka bertanggung jawab untuk memastikan akurasi dan keandalan hasil pemeriksaan, yang menjadi dasar penegakan diagnosis, penentuan kebijakan kesehatan, hingga penanganan wabah.",
      date: "2025-09-01",
      author: "Priya Pangersa, S.T.",
      category: "Anti-Gratifikasi",
      image: "/Gratifikasi.png"
    },
    {
      id: 2,
      title: "Laboratorium Kesehatan Daerah Tingkatkan Peran dalam Deteksi Dini Penyakit Menular",
      excerpt: "Laboratorium bukan hanya tempat pemeriksaan penyakit, tapi juga garda depan dalam pencegahan.",
      content: "Laboratorium kesehatan kini memegang peran penting dalam menjaga kualitas layanan kesehatan masyarakat, terutama dalam hal deteksi dini penyakit menular.",
      date: "2025-05-08",
      author: "Priya Pangersa, S.T.",
      category: "Kesehatan",
      image: "/kesehatan.png"
    },
    {
      id: 3,
      title: "Pola Hidup Sehat Jadi Kunci Terhindar dari Penyakit Kronis",
      excerpt: "Isi piringmu dengan gizi seimbang, isi harimu dengan kebiasaan sehat.",
      content: "Penyakit kronis seperti diabetes, hipertensi, dan penyakit jantung masih menjadi penyebab utama kematian di Indonesia.",
      date: "2025-02-08",
      author: "Priya Pangersa, S.T.",
      category: "Kesehatan",
      image: "/MakanSehat.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      
      {/* Latest News Section */}
      <section className="py-16 bg-muted/20">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Informasi Publik</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dapatkan Informasi dan Perkembangan terbaru kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {latestNews.map((article) => (
              <Link key={article.id} to={`/news/${article.id}`}>
                <Card className="overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('id-ID')}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                  </div>
                </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                Tampilkan Semua Berita <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      a
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
