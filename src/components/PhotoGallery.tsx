import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import property1 from "../assets/property1.png";
import property2 from "../assets/property2.png";
import property3 from "../assets/property3.png";
import property4 from "../assets/property4.png";
import property5 from "../assets/property5.png";
import property6 from "../assets/property6.png";
import property7 from "../assets/property7.png";

const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: property1, alt: "property1" },
    { src: property2, alt: "property2" },
    { src: property3, alt: "property3" },
    { src: property4, alt: "property4" },
    { src: property5, alt: "property5" },
    { src: property6, alt: "property6" },
    { src: property7, alt: "property7" },
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PHOTO GALLERY
          </h2>
        </div>

        {/* Main Featured Image */}
        <div className="relative aspect-[16/9] mb-3 max-h-[500px]">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-cover rounded-lg"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex overflow-x-auto gap-2 mt-3 pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`
                flex-none w-24 md:w-32 aspect-[4/3] cursor-pointer overflow-hidden rounded-md
                ${currentImageIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''}
              `}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;