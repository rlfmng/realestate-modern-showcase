import badge1 from "@/assets/badge1.png";
import badge2 from "@/assets/badge2.png";
import badge3 from "@/assets/badge3.png";
import badge4 from "@/assets/badge4.png";

const Badges = () => {
  const badges = [
    {
      src: badge1,
      alt: "The Ridge Realty Group",
      width: "120px"
    },
    {
      src: badge2,
      alt: "Equal Housing Opportunity",
      width: "120px"
    },
    {
      src: badge3,
      alt: "Realtor Badge",
      width: "120px"
    },
    {
      src: badge4,
      alt: "Pahrump Valley Chamber of Commerce",
      width: "150px"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                style={{ width: badge.width }}
                className="opacity-100 hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
