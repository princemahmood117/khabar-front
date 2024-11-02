// import image1 from "../../assets/images/banner/1.jpg";
// import image2 from "../../assets/images/banner/2.jpg";
// import image3 from "../../assets/images/banner/3.jpg";
// import image4 from "../../assets/images/banner/4.jpg";
// import image5 from "../../assets/images/banner/5.jpg";
// import image6 from "../../assets/images/banner/6.jpg";

// const Banner = () => {
//   return (
//     <div className="p-4">
//       <div className="carousel w-full rounded-lg">
//         {/* image1 */}
//         <div id="slide1" className="carousel-item relative w-full ">
//           <img src={image1} className="w-full" />
//           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end gap-2 bottom-0 ">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* image2 */}
//         <div id="slide2" className="carousel-item relative w-full ">
//           <img src={image2} className="w-full" />
//           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* image3 */}
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src={image3} className="w-full" />
//           <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* image4 */}
//         <div id="slide4" className="carousel-item relative w-full ">
//           <img src={image4} className="w-full" />
//           <div className="absolute left-5 right-5  flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide5" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* image5 */}
//         <div id="slide5" className="carousel-item relative w-full ">
//           <img src={image5} className="w-full" />
//           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
//             <a href="#slide5" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide6" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* image6 */}
//         <div
//           id="slide6"
//           className="carousel-item relative w-full transition-all duration-1000"
//         >
//           <img src={image6} className="w-full" />
//           <div className="absolute left-5 right-5 flex -translate-y-1/2 transform justify-end gap-2 bottom-0">
//             <a href="#slide5" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;




    




import { useState, useEffect } from "react";
import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
        <div className="absolute left-5 top-1 md:top-1/3 z-10">
          <div className="text-white md:space-y-2 lg:w-1/2">
            <h2 className="md:text-6xl text-xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
            <div className="flex gap-3 lg:mt-10 mt-2">
              <button className="btn rounded bg-orange-700 text-white hover:bg-red-900 border-none">Discover More</button>
              <button className="btn btn-outline text-white hover:bg-slate-100 hover:text-black">Latest Projects</button>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute left-5 right-5 md:flex hidden -translate-y-1/2 transform justify-end gap-2 bottom-0 z-20">
          <button onClick={handlePrev} className="btn btn-circle">❮</button>
          <button onClick={handleNext} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;






