import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import "./css/Gallary.css";
import img1 from "../img/images/IMG-20250607-WA0005.jpg";
import img2 from "../img/images/IMG-20250607-WA0006.jpg";
import img3 from "../img/images/IMG-20250607-WA0010.jpg";
import img4 from "../img/images/IMG-20250607-WA0013.jpg";
import img5 from "../img/images/IMG-20250607-WA0014.jpg";
import img6 from "../img/images/carosal1.jpg";
import img7 from "../img/images/carosal2.jpg";
import img8 from "../img/images/carosal3.jpg";
import img9 from "../img/images/carosal4.jpg";
import img10 from "../img/images/carosal5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: "Foundation Image 1", title: "Community Outreach" },
    { src: img2, alt: "Foundation Image 2", title: "Helping Hands" },
    { src: img3, alt: "Foundation Image 3", title: "Making a Difference" },
    { src: img4, alt: "Foundation Image 4", title: "Together We Grow" },
    { src: img5, alt: "Foundation Image 5", title: "Empowering Lives" },
    { src: img6, alt: "Foundation Image 6", title: "Building Dreams" },
    { src: img7, alt: "Foundation Image 7", title: "Hope & Progress" },
    { src: img8, alt: "Foundation Image 8", title: "Community Support" },
    { src: img9, alt: "Foundation Image 9", title: "Positive Impact" },
    { src: img10, alt: "Foundation Image 10", title: "Better Tomorrow" },
  ];

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <p className="subtitle">Gallery</p>
          <div className="title-underline"></div>
        </div>

        {/* Floating Elements */}
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-content">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>

              {/* Overlay */}
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3 className="image-title">{image.title}</h3>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="zoom-icon">
                <ZoomIn size={20} color="#3786b6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />

            {/* Close Button */}
            <button className="modal-button close-button" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button className="modal-button prev-button" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button className="modal-button next-button" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
