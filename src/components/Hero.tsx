import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";
import profileImage from "@/assets/profile-marci.jpg";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-6 left-6 z-50 p-2 text-white hover:text-secondary transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-6">
              <li><a href="#" className="text-2xl text-white hover:text-secondary">Home</a></li>
              <li><a href="#services" className="text-2xl text-white hover:text-secondary">Services</a></li>
              <li><a href="#properties" className="text-2xl text-white hover:text-secondary">Properties</a></li>
              <li><a href="#gallery" className="text-2xl text-white hover:text-secondary">Gallery</a></li>
              <li><a href="#contact" className="text-2xl text-white hover:text-secondary">Contact</a></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury real estate property" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Marci Metzger - Real Estate Professional"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight ">
          Marci Metzger
          <span className="block text-secondary text-4xl md:text-5xl font-['MonteCarlo']">Homes</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          With nearly 3 decades of real estate experience, we helped nearly 90 clients in 2021 
          and closed $28.5 million in sales! Your dream home awaits with our expert guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:2069196886" className="btn-hero flex items-center gap-2">
            <Phone className="w-5 h-5" />
            (206) 919-6886
          </a>
          
          <a href="#contact" className="btn-outline flex items-center gap-2 text-white border-white hover:bg-white hover:text-primary">
            <MessageCircle className="w-5 h-5" />
            Send Message
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;