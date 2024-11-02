import shop from '../../src/assets/images/About/shop.jpg'

const About = () => {
    return (
        <div className="about-us mt-10">
  
        {/* Mission & Vision Section */}
        <section className="mission-vision mt-4">
          <h2 className="text-xl font-bold">Our Mission & Vision : </h2>
          <p><strong>Mission:</strong> Our mission is to provide customers the quality food.</p>
          <p><strong>Vision:</strong> We are trying to improve the quality day by day</p>
        </section>
  
        {/* Our Story Section */}
        <section className="our-story mt-4">
          <h2 className="text-xl font-bold">Our Story</h2>
          <p>Founded in 2017, we started with a small shop and now we have 10 outlets around the country</p>
          
          <div>
            <img className='rounded-sm' src={shop} alt="" />
          </div>
        </section>
  
     
  
  
        {/* Our Approach Section */}
        <section className="our-approach  mt-4">
          <h2 className="text-xl font-bold">Our Approach</h2>
          <p>We follow a unique approach to ensure that our food is delivered to the customers in maximum impact.</p>
        </section>
  
        {/* Achievements & Recognition Section */}
        <section className="achievements mt-6">
          <h2 className="text-xl font-bold">Achievements & Recognition</h2>
          <p>We’re honored to be recognized for our efforts and impact.</p>
          <ul className='font-semibold'>
            <li>National Food Service Award(2019) 🏆  </li>
            <li>Quality Food Award(2020) 🏆  </li>
          </ul>
        </section>
  
        
  
      
  
        {/* Contact Information Section */}
        <section className="contact-info">
          <h2 className='text-xl font-bold'>Contact Us</h2>
          <address>
            <p className=''>Email: khabar_2khanei2@gmail.com</p>
            <p>Location: road-2,Dhanmondi, Dhaka, Bangladesh</p>
          </address>
        </section>
  
      </div>
    );
};

export default About;