import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative mb-6">
          <img src={person} className="rounded-lg shadow-2xl w-3/4" />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 right-5 top-1/2 border-8 border-white"
          />
        </div>

        <div className="md:w-1/2">
          <h4 className="lg:text-orange-600 text-xl font-bold hidden">
            About Us
          </h4>
          <h1 className="lg:text-5xl text-xl font-bold md:w-96">
            We are qualified & of experience in this field
          </h1>
          <p className="lg:py-6 py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>

          <p className="mb-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>

          <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-orange-700 border-2 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-orange-700 hover:border-none opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Get More Info</span>
          </button>
          {/* <button className="btn btn-sm lg:btn-primary bg-orange-700 hover:bg-orange-900 border-none">
            Get More Info
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
