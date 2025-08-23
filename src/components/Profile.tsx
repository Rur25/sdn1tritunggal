import React from "react";
import { School, Award, Users, BookOpen, Cpu, Palette, Music, Trophy,chef } from "lucide-react";

const Profile = () => {
  const facilities = [
    { icon: BookOpen, name: "Perpustakaan Modern", description: "Koleksi buku lengkap dengan ruang baca yang nyaman" },
 
    { icon: Users, name: "Kantin", description: "Di kantin ini tersedia beragam pilihan makanan dan minuman yang sehat, higienis, serta terjangkau, sehingga siswa dapat beristirahat dan mengisi energi setelah mengikuti kegiatan belajar." },
    
  ];

  const achievements = [
    { year: "2023", title: "Juara 1 Olimpiade Matematika Kabupaten", category: "Akademik" },
    { year: "2023", title: "Juara 2 Lomba Cerdas Cermat IPA", category: "Akademik" },
    { year: "2023", title: "Juara 1 Festival Seni Budaya", category: "Non-Akademik" },
    { year: "2022", title: "Sekolah Adiwiyata Tingkat Kabupaten", category: "Lingkungan" },
    { year: "2022", title: "Juara 3 Lomba Robotika", category: "Teknologi" },
    { year: "2022", title: "Juara 1 Paduan Suara", category: "Seni" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Profil Sekolah</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Mengenal lebih dekat SD 1 Tritunggal, sekolah yang berkomitmen memberikan pendidikan terbaik untuk masa depan cerah anak-anak Indonesia.</p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Singkat</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Pada awal tahun 1947an, para warga dan perangkat Desa Tritunggal pada waktu itu, berinisiatif untuk mendirikan lembaga pendidikan yang dimulai dari lembaga dasar untuk memberikan pendidikan pada anak usia sekolah, yang
                  pada waktu itu dinamakan Sekolah Rakdjat VI Desa Tritunggal Wilayah Penilik Sekolah Rakyat Babat.
                </p>
                <p>
                  Pada waktu itu Sekolah Rakyat didirikan dan diusulkan oleh Kepala Desa Tritunggal yang pertama yakni Bpk Rastam dan Sekdes Marsam, di tempatkan di bekas Kandang Ternak Sapi Desa di RT 08 RW 04 Dusun Beton, yang sekarang
                  berubah menjadi Gedung Suroloyo (Gedung Serbaguna) dusun Beton Desa Tritunggal.
                </p>
                <p>
                  Di awal berdirinya Sekolah Rakyat (SR), antusias warga untuk memberikan pendidikan kepada anak – anak mereka sangatlah kurang, tetapi pada tahun kedua sekitar tahun 1948, dimulailah inisiatif warga untuk memberikan
                  pendidikan kepada anak – anak mereka
                </p>
                <p>
                  Di tahun 1949 Sekolah Rakyat Desa Tritunggal mendapat pengakuan dari Negara dan berubah status menjadi Sekolah Rakyat Negeri dan berubah nama pada tahun 1955-1956 menjadi SD Negeri Tritunggal. Ditahun 1980 dirubah menjadi
                  SD Negeri Tritunggal 1, dikarenaakn SD Negeri Tritunggal 2 yang pada waktu itu dikenal dengan SD Inpres berdiri di Dusun Tesa Desa Tritunggal. Dan berganti lagi pada tahun 2021 menjadi SDN 1 Tritunggal.
                </p>
                <p>
                  Pada tahun 1970an, Tempat bernaungnya para siswa dalam belajar yang notabene adalah kandang sapi desa di bongkar dan didirikan gedung seolah yang lebih layak dengan bantuan swadaya masyarakat desa Tritunggal pada waktu
                  itu. Yang ditempatkan ditepi jalan raya nasional Babat – Lamongan, dengan tiga perempat atau tepatnya sekitar 697 m2 adalah tanah kas desa dan sepertiga bagian tepatnya sekitar 368 m2 adalah Waqaf dari Haji W.
                </p>
                <p>
                  Dalam proses pembangunan gedung sekolah yang agak lama dikarenakan anggaran dana yang hanya diambilkan dari para warga dan kas Desa Tritunggal, akhirnya para siswa di ajar di rumah – rumah para warga di 6 titik, kelas 1-3
                  di rumah-rumah warga dusun beton dan 4-6 di rumah-rumah warga dusun Grogol, termasuk rumah petinggi Rastam dan Carik Marsam.
                </p>
                <p>
                  Akhirnya, pada tahun 1972 SD Negeri Tritunggal berdiri yang hanya memiliki 5 ruang, 1 ruang untuk ruang guru dan 4 ruang digunakan untuk tempat kegiatan belajar mengajar (yang skarang menjadi ryuang kelas 1 sampai kelas
                  4). Berhubung rasio siswa yang amat banyak dengan ruang kelas tidak imbang, maka pembagian jam masuk siswa dibagi menjadi 2, masuk pagi dan siang. Kemudian pada sekitar tahun 1978, 2 ruang kelas berdiri atas dana swadaya
                  masyarakat (sekarang menjadi ruang kelas 5 dan 6) termasuk 1 rumah dinas kepala sekolah (yang dirobohkan pada tahun 2021 dikarenakan sudah tidak layak huni). Tetapi dikarenakn rasio siswa yang tinggi dan ruang belajar yang
                  sudah 6 kelas masih tidak imbang, pembagian jam pagi dan siang untuk siswa masih berlanjut hingga tahun 1990.
                </p>
                <p>
                  SD Negeri 1 Tritunggal, adalah lembaga pendidikan dasar yang berdiri lebih dari 77 tahun dan lembaga pertama di Desa Tritunggal yang memiliki alumni tidak hanya warga Desa Tritunggal, tetapi para warga dari desa – desa
                  yang bersebelahan dengan Desa tritunggal, seperti Desa Moropelang, Kebonagung, Keyongan, Gembong bahkan Warga Desa dari kecamatan Pucuk, yakni Pucuk, Kesambi, Waru.
                </p>
                <p>Dengan motto "Cerdas, Kreatif, dan Berkarakter", SD 1 Tritunggal berkomitmen memberikan pendidikan holistik yang tidak hanya fokus pada aspek akademik, tetapi juga pengembangan soft skills dan karakter mulia.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8">
                <img src="https://i.pinimg.com/736x/a9/d8/90/a9d890649fedb9a454089eff3749b16d.jpg" />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-800 px-6 py-3 rounded-2xl font-bold shadow-lg">
                  <School className="inline h-5 w-5 mr-2" />
                  Sejak 1972
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fasilitas Sekolah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fasilitas modern dan lengkap untuk mendukung proses pembelajaran yang optimal</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.name}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Ruang Kelas</h3>
              <p className="text-gray-600">6 ruang kelas nyaman untuk para siswa</p>
            </div>

            <div className="card p-6 text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Aula</h3>
              <p className="text-gray-600">Aula serbaguna untuk acara sekolah dan pembelajaran</p>
            </div>

            <div className="card p-6 text-center">
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Lapangan</h3>
              <p className="text-gray-600">Lapangan olahraga untuk berbagai aktivitas fisik</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
