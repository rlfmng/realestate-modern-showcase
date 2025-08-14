import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Luxury Real Estate
          <span className="block text-secondary">Redefined</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          Discover extraordinary properties with unmatched service and expertise. 
          Your dream home awaits with our premium real estate solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-hero flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </button>
          
          <button className="btn-outline flex items-center gap-2 text-white border-white hover:bg-white hover:text-primary">
            <MessageCircle className="w-5 h-5" />
            Send Message
          </button>
        </div>
        
        <div className="mt-12 text-white/70">
          <p className="text-sm uppercase tracking-wide">Trusted by over 1,000+ clients</p>
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