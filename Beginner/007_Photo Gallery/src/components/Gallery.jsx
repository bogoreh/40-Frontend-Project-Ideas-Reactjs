import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample CDN images from Picsum
  const images = [
    {
      id: 1,
      url: 'https://picsum.photos/400/300?random=1',
      alt: 'Nature landscape',
      title: 'Mountain View',
      description: 'Beautiful mountain landscape with clouds'
    },
    {
      id: 2,
      url: 'https://picsum.photos/400/300?random=2',
      alt: 'Cityscape',
      title: 'City Lights',
      description: 'Urban cityscape at night'
    },
    {
      id: 3,
      url: 'https://picsum.photos/400/300?random=3',
      alt: 'Beach',
      title: 'Sunset Beach',
      description: 'Peaceful beach during sunset'
    },
    {
      id: 4,
      url: 'https://picsum.photos/400/300?random=4',
      alt: 'Forest',
      title: 'Deep Forest',
      description: 'Mysterious forest path'
    },
    {
      id: 5,
      url: 'https://picsum.photos/400/300?random=5',
      alt: 'Desert',
      title: 'Sandy Dunes',
      description: 'Vast desert landscape'
    },
    {
      id: 6,
      url: 'https://picsum.photos/400/300?random=6',
      alt: 'Ocean',
      title: 'Blue Ocean',
      description: 'Crystal clear ocean water'
    },
    {
      id: 7,
      url: 'https://picsum.photos/400/300?random=7',
      alt: 'Architecture',
      title: 'Modern Building',
      description: 'Contemporary architecture design'
    },
    {
      id: 8,
      url: 'https://picsum.photos/400/300?random=8',
      alt: 'Flowers',
      title: 'Colorful Garden',
      description: 'Vibrant flower garden'
    },
    {
      id: 9,
      url: 'https://picsum.photos/400/300?random=9',
      alt: 'Animals',
      title: 'Wildlife',
      description: 'Wild animal in natural habitat'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              loading="lazy"
            />
            <div className="image-overlay">
              <h4>{image.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <ImageModal 
        image={selectedImage} 
        onClose={closeModal} 
      />

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .image-overlay {
          transform: translateY(0);
        }

        .image-overlay h4 {
          margin: 0;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;