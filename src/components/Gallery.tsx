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
      src: '/1.png',
      alt: 'Kegiatan Olahraga',
      title: 'Pelajaran Olahraga'
    },
    {
      id: 3,
      src: '/Srigati.jpg',
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
          <div c
