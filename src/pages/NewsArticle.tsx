import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This is the same data as in News.tsx - you can update this to add more news
  const newsArticles = [
    {
      id: 1,
      title: "Anti-Gratifikasi",
      excerpt: "Anti-Gratifikasi: Membangun Integritas di Laboratorium Kesehatan Daerah",
      content: `Laboratorium Kesehatan Daerah (Labkesda) memiliki peran vital dalam sistem kesehatan masyarakat. Mereka bertanggung jawab untuk memastikan akurasi dan keandalan hasil pemeriksaan, yang menjadi dasar penegakan diagnosis, penentuan kebijakan kesehatan, hingga penanganan wabah. Namun, di balik peran mulia ini, Labkesda juga rentan terhadap praktik korupsi, khususnya gratifikasi. Memahami dan menerapkan prinsip anti-gratifikasi bukanlah sekadar kepatuhan hukum, melainkan fondasi utama untuk menjaga integritas dan kepercayaan publik.

      ### Apa itu Gratifikasi dan Mengapa Berbahaya?

- **Merusak Objektivita**: Pegawai yang menerima gratifikasi bisa terpengaruh dalam mengambil keputusan. Misalnya, memilih reagen atau alat dari vendor tertentu bukan karena kualitasnya, melainkan karena imbalan yang diberikan.
- **Menurunkan Kualitas Layanan**: Gratifikasi dapat mengarah pada praktik curang, seperti memanipulasi hasil tes demi kepentingan pihak pemberi. Ini secara langsung membahayakan pasien dan merusak data kesehatan masyarakat.
- **Menciptakan Ketidakadilan**: Pasien atau masyarakat umum yang tidak memberikan 'hadiah' akan mendapatkan pelayanan yang tidak optimal, sementara pihak pemberi gratifikasi mendapatkan perlakuan khusus.
- **Melanggar Hukum**: Di Indonesia, gratifikasi dianggap sebagai tindak pidana korupsi jika berhubungan dengan jabatan dan berlawanan dengan kewajiban atau tugas penerima.

### Menerapkan Budaya Anti-Gratifikasi di Labkesda

Membangun benteng anti-gratifikasi di Labkesda tidak bisa hanya mengandalkan aturan, melainkan harus menjadi **budaya kerja**. Berikut adalah langkah-langkah konkret yang dapat diimplementasikan:.

**1. Edukasi dan Sosialisasi Berkelanjutan**: Pimpinan Labkesda harus secara rutin mengadakan pelatihan dan sosialisasi mengenai bahaya gratifikasi, termasuk contoh-contoh kasus nyata dan sanksi hukumnya. Pastikan setiap pegawai, mulai dari analis laboratorium hingga petugas administrasi, memahami konsep ini.

**2. Sistem Pengendalian Internal yang Kuat**:
- **Prosedur Pelayanan Standar (SOP)**: Buat dan terapkan SOP yang jelas dan transparan untuk setiap proses, mulai dari penerimaan sampel hingga penyerahan hasil. SOP ini harus meminimalkan interaksi personal yang dapat membuka celah untuk gratifikasi.
- **Mekanisme Pelaporan**: Sediakan saluran pelaporan yang aman dan rahasia bagi pegawai yang mengetahui atau menerima tawaran gratifikasi. Lindungi pelapor (whistleblower) dari potensi intimidasi.

**3. Penguatan Integritas dan Kode Etik**:
- **Pakta Integritas**: Setiap pegawai baru atau secara berkala, dapat menandatangani pakta integritas yang menyatakan komitmen untuk menolak gratifikasi.
- **Teladan dari Pimpinan**: Pimpinan Labkesda harus menjadi contoh utama dalam menolak gratifikasi dan menerapkan prinsip-prinsip kejujuran. Sikap tegas dari atasan akan memotivasi bawahan.

**4. Apresiasi Non-Finansial**: Ciptakan budaya kerja yang mengapresiasi kinerja berbasis meritokrasi, bukan kedekatan atau pemberian. Pemberian penghargaan atas integritas dan dedikasi bisa menjadi insentif yang jauh lebih positif dan berkelanjutan.

### Pentingnya Melapor dan Konsekuensinya

Menolak gratifikasi memang tidak selalu mudah, tetapi ini adalah langkah krusial untuk menjaga marwah profesi dan memastikan Labkesda dapat menjalankan tugasnya dengan profesional, objektif, dan berintegritas tinggi. Dengan menolak gratifikasi, kita tidak hanya menghindari jerat hukum, tetapi juga turut serta dalam membangun sistem kesehatan yang bersih dan dipercaya masyarakat.
`,
      date: "2025-09-01",
      author: "Priya Pangersa, S.T.",
      position: "Penelaah Teknis Kebijakan",
      category: "Anti-Gratifikasi",
      image: "/public/Gratifikasi.png"
    },
    {
      id: 2,
      title: "Laboratorium Kesehatan Daerah Tingkatkan Peran dalam Deteksi Dini Penyakit Menular",
      excerpt: "Laboratorium bukan hanya tempat pemeriksaan penyakit, tapi juga garda depan dalam pencegahan.",
      content: `Laboratorium kesehatan kini memegang peran penting dalam menjaga kualitas layanan kesehatan masyarakat, terutama dalam hal deteksi dini penyakit menular.

Menurut data Kementerian Kesehatan, jumlah kasus penyakit menular seperti tuberkulosis (TBC), hepatitis, hingga demam berdarah dengue (DBD) masih cukup tinggi di Indonesia. Kecepatan diagnosis menjadi salah satu kunci dalam menekan penyebaran penyakit.

“Peran laboratorium kesehatan sangat strategis. Dengan pemeriksaan sampel yang akurat dan cepat, tenaga medis bisa segera menentukan langkah penanganan yang tepat,” ujar dr. Siti Rahma, Kepala Bidang Pelayanan Laboratorium Kesehatan Daerah (Labkesda) Jawa Barat.

Seiring dengan perkembangan teknologi, laboratorium kesehatan kini dilengkapi dengan alat pemeriksaan modern, seperti PCR (Polymerase Chain Reaction) untuk mendeteksi virus, serta sistem automated analyzer untuk pemeriksaan darah dan urin. Hal ini memungkinkan hasil uji dapat keluar lebih cepat dengan tingkat akurasi tinggi.

Selain itu, laboratorium kesehatan juga berperan dalam pemantauan kualitas lingkungan, seperti uji air bersih, makanan, dan limbah. Pengawasan ini penting untuk mencegah potensi wabah penyakit berbasis lingkungan.

“Laboratorium bukan hanya tempat pemeriksaan penyakit, tapi juga garda depan dalam pencegahan. Misalnya, saat pandemi COVID-19 lalu, kita belajar betapa vitalnya laboratorium dalam memberikan data epidemiologi yang menjadi dasar kebijakan pemerintah,” tambah dr. Siti.

Masyarakat diimbau untuk tidak ragu memanfaatkan layanan laboratorium kesehatan daerah, baik untuk pemeriksaan kesehatan rutin maupun skrining penyakit tertentu. Dengan deteksi dini, peluang keberhasilan pengobatan akan jauh lebih besar.`,
      date: "2025-05-08",
      author: "Priya Pangersa, S.T.",
      position: "Penelaah Teknis Kebijakan",
      category: "Community Health",
      image: "/kesehatan.png"
    },
    {
      id: 3,
      title: "Pola Hidup Sehat Jadi Kunci Terhindar dari Penyakit Kronis",
      excerpt: "Isi piringmu dengan gizi seimbang, isi harimu dengan kebiasaan sehat.",
      content: `Penyakit kronis seperti diabetes, hipertensi, dan penyakit jantung masih menjadi penyebab utama kematian di Indonesia. Namun, para ahli menekankan bahwa pola hidup sehat bisa menjadi tameng utama untuk mencegahnya.

Menurut data Kementerian Kesehatan, lebih dari 70% kasus penyakit tidak menular (PTM) dipengaruhi oleh gaya hidup sehari-hari, seperti pola makan tidak seimbang, kurang olahraga, merokok, dan stres.

“Menjaga kesehatan itu sebenarnya sederhana. Cukup makan dengan gizi seimbang, rutin bergerak minimal 30 menit sehari, tidur cukup, dan hindari kebiasaan buruk,” jelas dr. Andi Pratama, seorang dokter spesialis penyakit dalam di Jakarta.

Pola makan sehat dianjurkan mengikuti prinsip Isi Piringku, yaitu separuh piring berisi buah dan sayur, serta sisanya karbohidrat dan protein. Sementara itu, olahraga ringan seperti jalan cepat, bersepeda, atau senam sudah cukup untuk menjaga kebugaran.

Selain itu, masyarakat diimbau untuk melakukan pemeriksaan kesehatan rutin. Dengan deteksi dini, penyakit kronis bisa dikendalikan sebelum menimbulkan komplikasi.

“Pencegahan lebih murah dan lebih mudah daripada mengobati. Dengan pola hidup sehat, kita bukan hanya memperpanjang umur, tapi juga meningkatkan kualitas hidup,” tambah dr. Andi.`,
      date: "2025-02-08",
      author: "Priya Pangersa, S.T.",
      position: "Penelaah Teknis Kebijakan",
      category: "Community Health",
      image: "/MakanSehat.png"
    },
    {id: 4,
      title: "Kasus Demam Berdarah Masih Tinggi, Warga Diimbau Waspada",
      excerpt: "Jangan anggap remeh demam tinggi. Segera periksa ke fasilitas kesehatan agar tidak terlambat ditangani.",
      content: `Memasuki musim hujan, kasus demam berdarah dengue (DBD) di Indonesia kembali meningkat. Data Kementerian Kesehatan menunjukkan, hingga Agustus 2025, tercatat lebih dari 50 ribu kasus dengan ratusan kematian akibat penyakit ini.

DBD ditularkan melalui gigitan nyamuk Aedes aegypti. Gejala awalnya sering menyerupai flu biasa, seperti demam tinggi, sakit kepala, hingga nyeri sendi. Namun, jika tidak segera ditangani, penyakit ini bisa berujung fatal.

“Yang paling penting adalah mencegah gigitan nyamuk dengan menjaga kebersihan lingkungan. Lakukan 3M Plus: menguras, menutup, dan mendaur ulang barang bekas, serta menambahkan langkah lain seperti memakai lotion anti-nyamuk,” ujar dr. Rina Wahyuni, seorang dokter penyakit dalam di Jakarta.

Masyarakat juga diimbau untuk segera memeriksakan diri jika mengalami demam tinggi mendadak selama lebih dari dua hari. Dengan deteksi cepat, penanganan bisa dilakukan sebelum kondisi pasien memburuk.`,
      date: "2025-06-21",
      author: "Priya Pangersa, S.T.",
      position: "Penelaah Teknis Kebijakan",
      category: "Community Health",
      image: "/dbd.png"
    }
  ];

  const article = newsArticles.find(article => article.id === parseInt(id || ''));

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container-width section-padding py-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/news')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Article Content */}
      <article className="pt-24 pb-16">
        <div className="container-width section-padding">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/news')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(article.date).toLocaleDateString('id-ID')}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 leading-tight">
              {article.title}
            </h1>
            <h2 className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                  {article.excerpt}
            </h2>
            
            <div className="flex items-center text-muted-foreground mb-8">
              <User className="h-5 w-5 mr-2" />
              <span className="text-lg">By {article.author}</span>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-12">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full md:h-full object-cover rounded-lg shadow-elegant"
            />
          </div>

          {/* Article Content */}
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="prose prose-lg max-w-none">
                
                <div 
                  className="text-base md:text-lg leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/### (.*)/g, '<h3 class="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                      .replace(/- \*\*(.*?)\*\*: (.*)/g, '<li class="ml-6 mb-2"><strong class="text-foreground">$1:</strong> <span class="text-foreground">$2</span></li>')
                      .replace(/- (.*)/g, '<li class="ml-6 mb-2 text-foreground">$1</li>')
                      .replace(/\n\n/g, '</p><p class="text-foreground leading-relaxed mb-4">')
                      .replace(/^(.)/g, '<p class="text-foreground leading-relaxed mb-4">$1')
                      .replace(/(.*)$/, '$1</p>')
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{article.author}</h4>
                <p className="text-muted-foreground">{article.position}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;