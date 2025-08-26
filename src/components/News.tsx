import React from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Olimpiade Olahraga Siwa Nasional",
      excerpt:
        "Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.",
      date: "15 Januari 2024",
      time: "08:00",
      author: "Admin Sekolah",
      image: "https://i.pinimg.com/736x/68/4f/61/684f612f7532cf4ac28b29cd8c8a6feb.jpg",
    },
     {
      id: 1,
      title: "Penerimaan Mahasiswa KKN Dari Universitas Billfath",
      excerpt:
        "Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.",
      date: "15 Januari 2024",
      time: "08:00",
      author: "Admin Sekolah",
      image: "https://i.pinimg.com/736x/7d/7b/03/7d7b03269bf1c7e7717feb30cda2a018.jpg",
    },
     {
      id: 1,
      title: "Olimpiade Olahraga Siwa Nasional",
      excerpt:
        "Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.",
      date: "15 Januari 2024",
      time: "08:00",
      author: "Admin Sekolah",
      image: "https://i.pinimg.com/736x/68/4f/61/684f612f7532cf4ac28b29cd8c8a6feb.jpg",
    },
     {
      id: 1,
      title: "Olimpiade Olahraga Siwa Nasional",
      excerpt:
        "Siapa bilang sekolah di desa tak bisa menorehkan sejarah? Hari ini, SDN 1 Tritunggal membuktikan bahwa semangat, kerja keras, dan doa tulus mampu mengantarkan mereka berdiri di panggung tertinggi, meraih Juara CASN se-Kabupaten Babat.",
      date: "15 Januari 2024",
      time: "08:00",
      author: "Admin Sekolah",
      image: "https://i.pinimg.com/736x/68/4f/61/684f612f7532cf4ac28b29cd8c8a6feb.jpg",
    },
    // ...berita lain
  ];

  return (
    <section className="py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Berita Sekolah</h2>
        <Link
          to="/berita"
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          Lihat Semua Berita <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{news.excerpt}</p>
              <div className="flex items-center text-gray-500 text-xs space-x-4">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {news.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {news.time}
                </span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" /> {news.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
