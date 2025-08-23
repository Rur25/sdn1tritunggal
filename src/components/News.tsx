import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const newsData = [
    {
      id: 1,
      title: 'Olimpiade Olahraga Siwa Nasional',
      excerpt: 'Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.',
      content: 'Olimpiade Olahraga Siswa Nasional',
      date: '15 Januari 2024',
      time: '08:00',
      author: 'Admin Sekolah',
      category: 'Pengumuman',
      featured: true,
      image: 'https://i.pinimg.com/736x/68/4f/61/684f612f7532cf4ac28b29cd8c8a6feb.jpg'
    },
    {
      id: 2,
      title: 'Pramuka SDN 1 Tritunggal ',
      excerpt: 'Di lapangan sekolah, para siswa tampak berbaris rapi dengan seragam pramuka lengkap. Wajah mereka memancarkan semangat dan keceriaan. Kegiatan dimulai dengan upacara pembukaan, lalu dilanjutkan dengan berbagai aktivitas seru seperti baris-berbaris, permainan kekompakan, serta latihan keterampilan tali-temali.',
      content: 'Di bawah bimbingan pembina pramuka, para siswa belajar tentang disiplin, kerja sama, dan tanggung jawab.',
      date: '10 Januari 2024',
      time: '14:30',
      author: 'Guru Extra',
      category: 'Extra',
      featured: false,
      image: 'https://i.pinimg.com/736x/07/9e/a0/079ea07198a156f3b6fdf68225030ad3.jpg'
    },
    {
      id: 3,
      title: 'Peluncuran Program Ekstrakurikuler Robotika',
      excerpt: 'SD 1 Tritunggal meluncurkan program ekstrakurikuler robotika untuk mengembangkan kemampuan STEM siswa.',
      content: 'Program ini dirancang khusus untuk siswa kelas 4-6 dengan fasilitas kit robot modern dan instruktur berpengalaman.',
      date: '8 Januari 2024',
      time: '10:15',
      author: 'Kepala Sekolah',
      category: 'Program',
      featured: true,
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Perayaan Hari Pendidikan Nasional 2024',
      excerpt: 'SD 1 Tritunggal mengadakan berbagai kegiatan menarik dalam rangka memperingati Hari Pendidikan Nasional.',
      content: 'Kegiatan meliputi lomba pidato, pentas seni, dan pameran karya siswa yang akan dilaksanakan pada tanggal 2 Mei 2024.',
      date: '5 Januari 2024',
      time: '09:00',
      author: 'Panitia Acara',
      category: 'Event',
      featured: false,
      image: 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Workshop Parenting untuk Orang Tua Siswa',
      excerpt: 'Mengundang psikolog anak untuk berbagi tips mendampingi anak dalam proses belajar di rumah.',
      content: 'Workshop akan diadakan setiap Sabtu pagi dimulai tanggal 20 Januari 2024 dengan tema yang berbeda setiap sesi.',
      date: '3 Januari 2024',
      time: '16:45',
      author: 'Komite Sekolah',
      category: 'Workshop',
      featured: false,
      image: 'https://images.pexels.com/photos/8613073/pexels-photo-8613073.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Renovasi Perpustakaan Sekolah Selesai',
      excerpt: 'Perpustakaan SD 1 Tritunggal telah selesai direnovasi dengan desain modern dan koleksi buku terbaru.',
      content: 'Renovasi mencakup penambahan ruang baca yang nyaman, sistem pencarian digital, dan area khusus untuk anak-anak.',
      date: '1 Januari 2024',
      time: '11:20',
      author: 'Pustakawan',
      category: 'Fasilitas',
      featured: false,
      image: 'https://images.pexels.com/photos/8471808/pexels-photo-8471808.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['Semua', 'Pengumuman', 'Prestasi', 'Program', 'Event', 'Workshop', 'Fasilitas'];

  const filteredNews = selectedCategory === 'Semua' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Pengumuman</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Informasi terkini seputar kegiatan, prestasi, dan pengumuman penting dari SD 1 Tritunggal
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === 'Semua' && featuredNews.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Berita Unggulan</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <article
                  key={news.id}
                  className="card overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Unggulan
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {news.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {news.time}
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        <Tag className="h-3 w-3 mr-1 inline" />
                        {news.category}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {news.author}
                      </div>
                      <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center">
                        Baca Selengkapnya
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {selectedCategory === 'Semua' ? 'Berita Terbaru' : `Berita ${selectedCategory}`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'Semua' ? regularNews : filteredNews).map((news, index) => (
              <article
                key={news.id}
                className="card overflow-hidden hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {news.time}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="truncate">{news.author}</span>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center text-sm">
                      Baca
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada berita dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Berlangganan Newsletter</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan informasi terbaru seputar kegiatan dan pengumuman sekolah langsung di email Anda
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;