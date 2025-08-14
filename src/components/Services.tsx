import { ArrowRight, Home, Search, HandHeart, Calculator, Shield, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "Find your perfect home with our extensive database of luxury properties and personalized search assistance.",
      features: ["Custom search criteria", "Market insights", "Virtual tours"]
    },
    {
      icon: Home,
      title: "Get It Sold!",
      description: "Maximize your property value with our proven marketing strategies and expert negotiation skills.",
      features: ["Professional photography", "Strategic pricing", "Global exposure"]
    },
    {
      icon: HandHeart,
      title: "Buyer's Guide",
      description: "Navigate the buying process with confidence. We guide you from search to closing with expert support.",
      features: ["Market analysis", "Negotiation support", "Legal guidance"]
    },
    {
      icon: Calculator,
      title: "Investment Analysis",
      description: "Make informed investment decisions with comprehensive market analysis and ROI projections.",
      features: ["Market trends", "ROI calculations", "Risk assessment"]
    },
    {
      icon: Shield,
      title: "Property Management",
      description: "Protect and optimize your investment with our full-service property management solutions.",
      features: ["Tenant screening", "Maintenance services", "Financial reporting"]
    },
    {
      icon: Star,
      title: "Luxury Concierge",
      description: "Experience white-glove service with our exclusive concierge program for high-end properties.",
      features: ["VIP access", "Private showings", "Lifestyle matching"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to closing day and beyond, we provide complete real estate solutions 
            tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-luxury group cursor-pointer">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 text-primary font-medium group-hover:text-secondary transition-colors duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;