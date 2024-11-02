
import { useState, useEffect } from "react";
import image1 from "../../assets/images/banner/burgers.jfif";
import image2 from "../../assets/images/banner/chicken_leg.jfif";
import image3 from "../../assets/images/banner/crunchy.jfif";
import image4 from "../../assets/images/banner/french.jfif";
import image5 from "../../assets/images/banner/katsu_rice.jfif";
import image6 from "../../assets/images/banner/pizza.jfif";
import image7 from "../../assets/images/banner/ramen.jfif";
import image8 from "../../assets/images/banner/shawrma.jfif";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };



  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="p-4">
      {/* full carosal is inside this div */}
      <div className="carousel w-full overflow-hidden relative rounded-lg ">

        {/* for Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] z-10">
        </div>

        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={img} className="w-full md:h-[700px]" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Text and buttons */}
        <div className="absolute left-5 bottom-1 md:bottom-10 z-10">
          <div className="text-white md:space-y-2 lg:w-1/2">
          
            <div className="flex gap-3 lg:mt-10 mt-2">
              <Link to='/services'><button className="btn btn-ghost text-white hover:bg-red-500 border-none italic font-bold">Visit Now</button></Link>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;






