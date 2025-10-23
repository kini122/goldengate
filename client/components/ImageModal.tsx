import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  title?: string;
}

export default function ImageModal({
  isOpen,
  images,
  initialIndex = 0,
  onClose,
  title,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const touchDistanceRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
  };

  // Calculate distance between two touch points
  const getDistance = (touch1: Touch, touch2: Touch) => {
    return Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY,
    );
  };

  // Pinch zoom touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      touchDistanceRef.current = getDistance(e.touches[0], e.touches[1]);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistanceRef.current > 0) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      const scaleFactor = currentDistance / touchDistanceRef.current;

      setZoom((prevZoom) => {
        const newZoom = prevZoom * scaleFactor;
        return Math.max(1, Math.min(newZoom, 3));
      });

      touchDistanceRef.current = currentDistance;
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = 0;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Minimal Modal */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "none" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-8 h-8 text-white" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${title || "Gallery"} ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `scale(${zoom})`,
              transition: zoom === 1 ? "transform 0.2s ease-out" : "none",
            }}
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/20 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:bg-white/20 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
