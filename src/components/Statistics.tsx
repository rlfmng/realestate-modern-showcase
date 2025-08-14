import { TrendingUp, Users, Home, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$2.5B+",
      label: "Sales Volume",
      description: "In luxury property transactions"
    },
    {
      icon: Users,
      value: "1,200+",
      label: "Happy Clients",
      description: "Served across the region"
    },
    {
      icon: Home,
      value: "850+",
      label: "Properties Sold",
      description: "Premium homes delivered"
    },
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      description: "In luxury real estate"
    }
  ];

  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Proven Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Experience the difference that expertise and dedication make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h4>
              
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;