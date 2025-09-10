import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
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
    },
    {
      id: 4,
      title: "Kasus Demam Berdarah Masih Tinggi, Warga Diimbau Waspada",
      excerpt: "Jangan anggap remeh demam tinggi. Segera periksa ke fasilitas kesehatan agar tidak terlambat ditangani.",
      content: "Memasuki musim hujan, kasus demam berdarah dengue (DBD) di Indonesia kembali meningkat. Data Kementerian Kesehatan menunjukkan, hingga Agustus 2025, tercatat lebih dari 50 ribu kasus dengan ratusan kematian akibat penyakit ini.",
      date: "2025-06-21",
      author: "Priya Pangersa, S.T.",
      category: "Kesehatan",
      image: "/dbd.png"
    },

  ];

  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Informasi Publik</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ikuti terus berita, update, dan perkembangan terkini dari BLUD UPTD Klinik Kesehatan Daerah dan Laboratorium Kesehatan Daerah Kabupaten Sukabumi.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-0">
        <div className="container-width section-padding">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Berita Terkini</h2>
          </div>
          
          <Card className="overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{featuredArticle.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredArticle.date).toLocaleDateString('id-ID')}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredArticle.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {featuredArticle.author}
                  </div>
                  <Link to={`/news/${featuredArticle.id}`}>
                    <Button variant="outline" size="sm">
                      Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Articles */}
      <section className="py-16 bg-muted/20">
        <div className="container-width section-padding">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Berita</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group">
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
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Link to={`/news/${article.id}`}>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>  
      <Footer />
    </div>
  );
};

export default News;