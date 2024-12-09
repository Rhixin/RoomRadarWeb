import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoModal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="flex-1 relative">
          <img
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-contain"
          />
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-white text-center">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;