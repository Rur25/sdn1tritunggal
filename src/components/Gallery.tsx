import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'Kegiatan ANBK.jpeg',
      alt: 'Kegiatan Belajar di Kelas',
      category: 'Pembelajaran',
      title: 'Suasana Pembelajaran Interaktif'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8613072/pexels-photo-8613072.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kegiatan Olahraga',
      category: 'Olahraga',
      title: 'Pelajaran Olahraga'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kegiatan Seni',
      category: 'Seni',
      title: 'Workshop Seni dan Kreativitas'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8613201/pexels-photo-8613201.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Perpustakaan',
      category: 'Fasilitas',
      title: 'Perpustakaan Modern'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8613073/pexels-photo-8613073.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kegiatan Ekstrakurikuler',
      category: 'Ekstrakurikuler',
      title: 'Program Ekstrakurikuler'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8471808/pexels-photo-8471808.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Acara Sekolah',
      category: 'Event',
      title: 'Perayaan Hari Kemerdekaan'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8613202/pexels-photo-8613202.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lab Komputer',
      category: 'Fasilitas',
      title: 'Laboratorium Komputer'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kegiatan Kelompok',
      category: 'Pembelajaran',
      title: 'Pembelajaran Berkelompok'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Presentasi Siswa',
      category: 'Pembelajaran',
      title: 'Presentasi Proyek Siswa'
    }
  ];

  const categories = ['Semua', 'Pembelajaran', 'Olahraga', 'Seni', 'Fasilitas', 'Ekstrakurikuler', 'Event'];
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredImages = selectedCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Galeri Kegiatan</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan momen berharga di SD 1 Tritunggal
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

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                      {image.category}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {selectedImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            
            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  {filteredImages[selectedImage].category}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {filteredImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;