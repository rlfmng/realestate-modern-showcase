import { MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyGallery = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$4,750,000",
      image: property1,
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "Luxury Villa"
    },
    {
      id: 2,
      title: "Contemporary Estate",
      location: "Malibu, CA",
      price: "$6,200,000",
      image: property2,
      beds: 6,
      baths: 5,
      sqft: "5,800",
      type: "Estate"
    },
    {
      id: 3,
      title: "Designer Penthouse",
      location: "Manhattan, NY",
      price: "$8,900,000",
      image: property3,
      beds: 4,
      baths: 3,
      sqft: "3,600",
      type: "Penthouse"
    },
    {
      id: 4,
      title: "Oceanfront Mansion",
      location: "Miami Beach, FL",
      price: "$12,500,000",
      image: property1,
      beds: 7,
      baths: 6,
      sqft: "8,200",
      type: "Mansion"
    },
    {
      id: 5,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$5,800,000",
      image: property2,
      beds: 5,
      baths: 4,
      sqft: "4,800",
      type: "Retreat"
    },
    {
      id: 6,
      title: "Urban Luxury Loft",
      location: "SoHo, NY",
      price: "$3,200,000",
      image: property3,
      beds: 3,
      baths: 2,
      sqft: "2,400",
      type: "Loft"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of exceptional properties, each offering unique luxury and sophistication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="card-property group">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Share2 className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                
                {/* Property Type Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-secondary">
                    {property.price}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} beds</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} baths</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 btn-outline hover:bg-primary hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;