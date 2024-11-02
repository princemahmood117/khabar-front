

const About = () => {
    return (
        <div className="about-us">
  
        {/* Mission & Vision Section */}
        <section className="mission-vision">
          <h2 className="text-xl font-bold">Our Mission & Vision : </h2>
          <p><strong>Mission:</strong> Our mission is to provide customers the quality food.</p>
          <p><strong>Vision:</strong> We are trying to improve the quality day by day</p>
        </section>
  
        {/* Our Story Section */}
        <section className="our-story">
          <h2 className="text-xl font-bold">Our Story</h2>
          <p>Founded in 2017, we started with a small shop and now we have 10 outlets arounf the country</p>
          {/* Add more content or a timeline if needed */}
        </section>
  
        {/* Core Values Section */}
        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We believe in doing the right thing.</li>
            <li><strong>Innovation:</strong> We continuously improve and evolve.</li>
            <li><strong>Community:</strong> We support and empower our community.</li>
            {/* Add more values as needed */}
          </ul>
        </section>
  
        {/* Team Section */}
        <section className="our-team">
          <h2>Our Team</h2>
          <p>Meet the dedicated individuals who make it all possible.</p>
          <div className="team-members">
            <div className="team-member">
              <img src="path/to/team-member1.jpg" alt="Team Member Name" />
              <h3>Team Member 1</h3>
              <p>Short bio or role description.</p>
            </div>
            <div className="team-member">
              <img src="path/to/team-member2.jpg" alt="Team Member Name" />
              <h3>Team Member 2</h3>
              <p>Short bio or role description.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
  
        {/* Our Approach Section */}
        <section className="our-approach">
          <h2>Our Approach</h2>
          <p>We follow a unique approach to ensure that our [service/product/mission] delivers maximum impact.</p>
          <p>Our methods include [brief explanation of unique methods].</p>
        </section>
  
        {/* Achievements & Recognition Section */}
        <section className="achievements">
          <h2>Achievements & Recognition</h2>
          <p>We’re honored to be recognized for our efforts and impact.</p>
          <ul>
            <li>Award 1</li>
            <li>Award 2</li>
            {/* Add more awards or recognition as needed */}
          </ul>
        </section>
  
        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What People Say</h2>
          <blockquote>
            <p>"This organization has made a significant impact on our community."</p>
            <cite>– Satisfied Client</cite>
          </blockquote>
          <blockquote>
            <p>"Their commitment to excellence is truly inspiring."</p>
            <cite>– Partner Organization</cite>
          </blockquote>
          {/* Add more testimonials if available */}
        </section>
  
        {/* Call to Action Section */}
        <section className="call-to-action">
          <h2>Join Us</h2>
          <p>Want to be part of our journey? Reach out or follow us on social media to stay updated.</p>
          <button>Contact Us</button>
        </section>
  
        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Us</h2>
          <address>
            <p>Email: contact@ourorganization.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: 123 Street, City, Country</p>
          </address>
        </section>
  
      </div>
    );
};

export default About;