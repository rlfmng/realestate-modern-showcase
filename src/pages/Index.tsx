import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import SearchForm from "@/components/SearchForm";
import PropertyGallery from "@/components/PropertyGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Services />
      <SearchForm />
      <PropertyGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
