import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, School, MessageCircle, User, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "umum",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Sekolah",
      content: "JL Raya Tritunggal No.43, Beton, Tritunggal, Kec. Babat, Kabupaten Lamongan, Jawa Timur 62271",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0831-2203-5308",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sdn-1-tritunggal.com",
      color: "bg-yellow-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 07:00 - 15:00\nSabtu: 07:00 - 12:00",
      color: "bg-purple-500",
    },
  ];

  const quickContacts = [
    {
      title: "Kesiswaan",
      contact: "0831-2203-5308",
      person: "Bapak Agung ",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Pesan Anda telah berhasil dikirim! Kami akan merespon dalam 24 jam.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: "umum",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Kami siap membantu Anda dengan segala informasi tentang SD 1 Tritunggal. Jangan ragu untuk menghubungi kami!</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak Cepat</h2>
            <p className="text-gray-600">Hubungi langsung bagian yang Anda butuhkan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickContacts.map((contact, index) => (
              <div key={index} className="card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">{contact.title}</h3>
                <p className="text-blue-600 font-semibold text-lg mb-2">{contact.contact}</p>
                <p className="text-gray-600 text-sm">{contact.person}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Send className="h-6 w-6 mr-3 text-blue-600" />
                  Kirim Pesan
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="nama@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="0812-3456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Kategori Pesan
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="umum">Informasi Umum</option>
                        <option value="pendaftaran">Pendaftaran Siswa Baru</option>
                        <option value="akademik">Akademik</option>
                        <option value="ekstrakurikuler">Ekstrakurikuler</option>
                        <option value="keuangan">Keuangan</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Subjek pesan Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Mengirim Pesan...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Kirim Pesan
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="card p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                  Lokasi Sekolah
                </h2>

                {/* Google Maps Embed */}
                <div className="mb-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2389972833225!2d112.2544089091354!3d-7.098274269560109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f32576702b31%3A0x4fdce865797fe7b4!2sSD%20Negeri%201%20Tritunggal!5e0!3m2!1sid!2sid!4v1756234000955!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Alamat Lengkap</h3>
                      <p className="text-gray-600">
                        JL Raya Tritunggal No.43, Beton, Tritunggal, 
                        <br />
                        Kec. Babat, Kabupaten Lamongan, Jawa Timur 62271
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <School className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Jam Kunjungan</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 15:00
                        <br />
                        Sabtu: 08:00 - 12:00
                        <br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Butuh Respon Cepat?</h3>
                <p className="text-gray-700 mb-4">Hubungi langsung via WhatsApp untuk informasi urgent</p>
                <a href="https://wa.me/6283122035308" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
