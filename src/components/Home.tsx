import React from 'react';
import { Users, BookOpen, Award, Star, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
interface HomeProps {
  setActiveSection?: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const stats = [
    { icon: Users, label: 'Siswa Aktif', value: '450+' },
    { icon: BookOpen, label: 'Program Belajar', value: '20+' },
    { icon: Award, label: 'Prestasi', value: '15+' },
    { icon: Star, label: 'Rating', value: '4.9' },
  ];

  const latestNews = [
    {
      id: 1,
      title: 'Olimpiade Olahraga Siwa Nasional',
      excerpt: 'Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.',
      date: '15 Januari 2024',
    },
    {
      id: 2,
      title: 'Pramuka SDN 1 Tritunggal ',
      excerpt: 'Di lapangan sekolah, para siswa tampak berbaris rapi dengan seragam pramuka lengkap. Wajah mereka memancarkan semangat dan keceriaan. Kegiatan dimulai dengan upacara pembukaan, lalu dilanjutkan dengan berbagai aktivitas seru seperti baris-berbaris, permainan kekompakan, serta latihan keterampilan tali-temali',
      date: '10 Januari 2024',
    },
    {
      id: 3,
      title: 'Program Ekstrakurikuler Baru',
      excerpt: 'Menambah program robotika dan coding untuk mengembangkan kreativitas siswa.',
      date: '8 Januari 2024',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white section-padding">
       
        
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Selamat Datang di
                <span className="block text-yellow-300">SD 1 Tritunggal</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Membangun generasi cerdas, kreatif, dan berkarakter dengan pendidikan berkualitas 
                dalam lingkungan yang menyenangkan dan kondusif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-800">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="https://i.pinimg.com/736x/a9/d8/90/a9d890649fedb9a454089eff3749b16d.jpg"
                  alt="Siswa SD 1 Tritunggal"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-800 px-6 py-3 rounded-2xl font-bold shadow-lg animate-bounce-slow">
                <Star className="inline h-5 w-5 mr-2" />
                Sekolah Terfavorit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visi & Misi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun fondasi pendidikan yang kuat untuk masa depan yang cerah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="card p-8 animate-slide-up">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visi</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Menjadi sekolah dasar unggulan yang menghasilkan generasi cerdas, berkarakter, 
                dan berwawasan global dengan tetap menjunjung tinggi nilai-nilai luhur budaya bangsa.
              </p>
            </div>

            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Misi</h3>
              <ul className="text-lg text-gray-600 space-y-3">
                <li>• Memberikan pendidikan berkualitas dengan metode pembelajaran inovatif</li>
                <li>• Mengembangkan karakter siswa yang berakhlak mulia</li>
                <li>• Memfasilitasi pengembangan bakat dan minat siswa</li>
                <li>• Menciptakan lingkungan belajar yang kondusif dan menyenangkan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Latest News Section */}
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Berita Terbaru
        </h2>
        <p className="text-xl text-gray-600">
          Informasi terkini dari SD 1 Tritunggal
        </p>
      </div>
      <button 
        onClick={() => setActiveSection?.('news')} 
        className="btn-primary"
      >
        Lihat Semua Berita
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;