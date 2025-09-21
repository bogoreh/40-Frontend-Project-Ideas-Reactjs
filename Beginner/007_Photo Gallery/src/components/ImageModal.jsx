import React from 'react';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img 
          src={image.url} 
          alt={image.alt} 
          className="modal-image"
        />
        <div className="image-info">
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;