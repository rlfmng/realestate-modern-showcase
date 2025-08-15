import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign, Bed, Bath } from "lucide-react";
import Badges from "./Badges";

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: ""
  });

  const handleSearch = () => {
    console.log("Search initiated with:", searchData);
  };

  return (
    <section className="py-20 bg-luxury">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Property
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Use our advanced search to discover properties that match your exact preferences and lifestyle.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-luxury max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* Location */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Location
              </label>
              <input
                type="text"
                placeholder="City, neighborhood, or ZIP code"
                className="input-luxury"
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              />
            </div>
            
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Home className="w-4 h-4 inline mr-1" />
                Type
              </label>
              <select
                className="select-luxury"
                value={searchData.propertyType}
                onChange={(e) => setSearchData({...searchData, propertyType: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="condo">Condominium</option>
                <option value="townhouse">Townhouse</option>
                <option value="luxury">Luxury Estate</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <DollarSign className="w-4 h-4 inline mr-1" />
                Price Range
              </label>
              <select
                className="select-luxury"
                value={searchData.priceRange}
                onChange={(e) => setSearchData({...searchData, priceRange: e.target.value})}
              >
                <option value="">Any Price</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-5000000">$2M - $5M</option>
                <option value="5000000+">$5M+</option>
              </select>
            </div>
            
            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Bed className="w-4 h-4 inline mr-1" />
                Bedrooms
              </label>
              <select
                className="select-luxury"
                value={searchData.bedrooms}
                onChange={(e) => setSearchData({...searchData, bedrooms: e.target.value})}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            {/* Bathrooms */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Bath className="w-4 h-4 inline mr-1" />
                Bathrooms
              </label>
              <select
                className="select-luxury"
                value={searchData.bathrooms}
                onChange={(e) => setSearchData({...searchData, bathrooms: e.target.value})}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button 
              onClick={handleSearch}
              className="btn-hero flex items-center gap-2 w-full sm:w-auto"
            >
              <Search className="w-5 h-5" />
              Search Properties
            </button>
            
            <div className="text-sm text-muted-foreground">
              Advanced filters available after search
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Badges */}
      <div className="mt-16">
        <Badges />
      </div>
    </section>
  );
};

export default SearchForm;