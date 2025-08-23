import React from 'react';
import { GraduationCap, Mail, Award, Users } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Imron Habib, S.Ag., S.Pd',
      position: 'Kepala Sekolah',
      subject: 'Manajemen Sekolah',
      education: 'S1 Pendidikan Dasar',
      
      image: '/1.png',
      description: 'Memimpin dengan visi pendidikan yang holistik dan berfokus pada pengembangan karakter siswa.'
    },
    {
      id: 2,
      name: 'H. Mat Jais, S.Pd',
      position: 'Guru Kelas 1A',
      subject: 'Guru Kelas',
      education: 'S1 Pendidikan Dasar',
      
      image: '/H. Mat Jais.jpg w=400'',
      description: 'Spesialis dalam pembelajaran anak usia dini dengan pendekatan yang menyenangkan.'
    },
    {
      id: 3,
      name: 'Titik Widowati, S.Pd',
      position: 'Guru Kelas 2B',
      subject: 'Guru Kelas',
      education: 'S1 PGSD',
     
      image: 'https://images.pexels.com/photos/8613072/pexels-photo-8613072.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ahli dalam pengembangan kreativitas anak melalui berbagai media pembelajaran inovatif.'
    },
    {
      id: 4,
      name: 'Bapak Dedi Kurniawan, S.Pd',
      position: 'Guru Matematika',
      subject: 'Matematika Kelas 4-6',
      education: 'S1 Pendidikan Matematika',
      experience: '15 tahun',
      achievements: ['Pembina Olimpiade Matematika', 'Juara 2 Guru Inovatif 2023'],
      email: 'dedi.kurniawan@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mengajar matematika dengan metode yang mudah dipahami dan aplikatif dalam kehidupan sehari-hari.'
    },
    {
      id: 5,
      name: 'Ibu Lisa Permata, S.Pd',
      position: 'Guru Bahasa Indonesia',
      subject: 'Bahasa Indonesia Kelas 3-6',
      education: 'S1 Pendidikan Bahasa Indonesia',
      experience: '10 tahun',
      achievements: ['Pembina Literasi Sekolah', 'Penulis Buku Cerita Anak'],
      email: 'lisa.permata@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8613073/pexels-photo-8613073.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Passionate dalam mengembangkan kemampuan literasi dan menulis kreatif siswa.'
    },
    {
      id: 6,
      name: 'Bapak Rio Prasetyo, S.Pd',
      position: 'Guru Olahraga',
      subject: 'Pendidikan Jasmani',
      education: 'S1 Pendidikan Jasmani',
      experience: '7 tahun',
      achievements: ['Pelatih Sepak Bola Terbaik', 'Sertifikat Instruktur Renang'],
      email: 'rio.prasetyo@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8471808/pexels-photo-8471808.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mengembangkan potensi fisik dan sportivitas siswa melalui berbagai aktivitas olahraga.'
    },
    {
      id: 7,
      name: 'Ibu Maya Sari, S.Pd',
      position: 'Guru Seni Budaya',
      subject: 'Seni Budaya',
      education: 'S1 Pendidikan Seni Rupa',
      experience: '6 tahun',
      achievements: ['Juara 1 Festival Seni Guru', 'Kurator Pameran Karya Siswa'],
      email: 'maya.sari@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8613202/pexels-photo-8613202.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Menggali dan mengembangkan bakat seni siswa melalui berbagai medium dan teknik kreatif.'
    },
    {
      id: 8,
      name: 'Ibu Nur Aini, S.Pd',
      position: 'Guru Agama Islam',
      subject: 'Pendidikan Agama Islam',
      education: 'S1 Pendidikan Agama Islam',
      experience: '9 tahun',
      achievements: ['Da\'i Muda Berprestasi', 'Pembina Tahfidz Quran'],
      email: 'nur.aini@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Membimbing siswa dalam pemahaman agama dan pembentukan akhlak mulia.'
    },
    {
      id: 9,
      name: 'Bapak Andi Setiawan, S.Kom',
      position: 'Guru Komputer',
      subject: 'Teknologi Informasi',
      education: 'S1 Sistem Informasi',
      experience: '5 tahun',
      achievements: ['Certified IT Teacher', 'Pembina Klub Robotika'],
      email: 'andi.setiawan@sd1tritunggal.sch.id',
      image: 'https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Memperkenalkan dunia teknologi dan coding kepada siswa dengan cara yang menyenangkan.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Total Guru', value: '25' },
    { icon: GraduationCap, label: 'Guru S1', value: '23' },
    { icon: Award, label: 'Guru Berprestasi', value: '8' },
    { icon: Users, label: 'Guru Tersertifikasi', value: '20' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tenaga Pendidik</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Guru-guru berpengalaman dan berdedikasi tinggi yang siap membimbing dan mengembangkan potensi setiap siswa
          </p>
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

      {/* Teachers Grid */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Teachers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim pengajar profesional yang berpengalaman dalam mendidik dan membentuk karakter siswa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="card p-6 hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {teacher.position}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{teacher.subject}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pendidikan:</span>
                    <span className="font-medium text-gray-700">{teacher.education}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pengalaman:</span>
                    <span className="font-medium text-gray-700">{teacher.experience}</span>
                  </div>
                </div>

                {teacher.achievements && teacher.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-yellow-500" />
                      Prestasi:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={`https://wa.me/6283122035308`}
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Kirim pesan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan Tim Kami</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kami selalu terbuka untuk guru-guru berkualitas yang memiliki dedikasi tinggi terhadap dunia pendidikan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              Lihat Lowongan
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Kirim CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;