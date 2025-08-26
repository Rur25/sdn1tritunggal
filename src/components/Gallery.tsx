import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/Kegiatan ANBK.jpeg',
      alt: 'Kegiatan ANBK',
      title: 'Suasana Pembelajaran Interaktif'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/17/a4/f5/17a4f542dc6fedff801f0217f1c79480.jpg',
      alt: 'MPLS SDN 1 Tritunggal',
      title: 'Pengenalan lingkungan Sekolah'
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/68/4f/61/684f612f7532cf4ac28b29cd8c8a6feb.jpg',
      alt: 'Kegiatan Seni',
      title: 'Workshop Seni dan Kreativitas'
    },
    {
      id: 4,
      src: '/Zulistianah.jpg',
      alt: 'Perpustakaan',
      title: 'Perpustakaan Modern'
    }
    // Tambahkan lagi sesuai foto di public/
  ];

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
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

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Lihat Detail</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            {selectedImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}
            
            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {selectedImage + 1} dari {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
