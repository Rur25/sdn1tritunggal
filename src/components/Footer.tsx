import React from 'react';
import { School, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Profil Sekolah', href: '#' },
    { name: 'Visi & Misi', href: '#' },
    { name: 'Fasilitas', href: '#' },
    { name: 'Prestasi', href: '#' },
  ];

  // Tambahkan ini!
  const academicLinks = [
    { name: 'Kurikulum', href: '#' },
    { name: 'Ekstrakurikuler', href: '#' },
    { name: 'Kalender Akademik', href: '#' },
    { name: 'Jadwal Pelajaran', href: '#' },
  ];

  const informationLinks = [
    { name: 'Berita Terbaru', href: '#' },
    { name: 'Pengumuman', href: '#' },
    { name: 'Galeri Kegiatan', href: '#' },
    { name: 'Download', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/sd1tritunggal', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/sd1tritunggal', color: 'hover:bg-pink-500' },
    { icon: Twitter, href: 'https://twitter.com/sd1tritunggal', color: 'hover:bg-blue-400' },
    { icon: Youtube, href: 'https://youtube.com/@sd1tritunggal', color: 'hover:bg-red-600' },
  ];


  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl">
                <School className="h-8 w-8 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SD 1 Tritunggal</h3>
                <p className="text-gray-300 text-sm">Sekolah Dasar Berkualitas</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Membangun generasi cerdas, kreatif, dan berkarakter melalui pendidikan berkualitas 
              dalam lingkungan yang menyenangkan dan kondusif.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700 p-2 rounded-lg transition-colors ${social.color} group`}
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Tentang Sekolah</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Akademik</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Jl. Pendidikan No. 123<br />
                    Kelurahan Tritunggal<br />
                    Kota Edukatif 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(021) 123-4567</p>
                  <p className="text-gray-400 text-sm">Senin - Jumat: 07:00 - 15:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@sd1tritunggal.sch.id"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    info@sd1tritunggal.sch.id
                  </a>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Informasi</h5>
              <ul className="space-y-2">
                {informationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-bold text-lg mb-2">Berlangganan Newsletter</h4>
              <p className="text-gray-300">
                Dapatkan informasi terbaru tentang kegiatan dan pengumuman sekolah
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 SD 1 Tritunggal. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center text-gray-300 text-sm">
                <span>Dibuat dengan</span>
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                <span>untuk pendidikan Indonesia</span>
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>

          {/* School Stats */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-400 text-sm">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">450+</div>
                <div className="text-gray-400 text-sm">Siswa Aktif</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">25+</div>
                <div className="text-gray-400 text-sm">Guru Berpengalaman</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100+</div>
                <div className="text-gray-400 text-sm">Prestasi Diraih</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;