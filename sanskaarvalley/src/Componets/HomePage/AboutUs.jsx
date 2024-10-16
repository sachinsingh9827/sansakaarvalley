import React from "react";
import { FaClock, FaUserGraduate, FaUniversity } from 'react-icons/fa';
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
  
    <div
      className="welcome-section text-center mb-4"
      style={{ background: "linear-gradient(to right, #105183, #252472)" }}
    >
      <h2 className="welcome-title text-white font-semibold text-2xl mb-2 ">
        Welcome to Our About Us Page!
      </h2>
      <p className="welcome-message text-black font-medium mt-4">
        Learn more about our mission, vision, and values. We are dedicated to shaping the future and nurturing bright minds.
      </p>
    </div>
 
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12 relative sm:-top-14 m-4">

     

<div className="top relative border-[#105183] bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 transform ">
  <FaClock className="text-[#667085] text-3xl mb-2" />
  <h3 className="text-2xl text-gray font-semibold mb-3">Years of Experience</h3>
  <p className="text-gray font-semibold">
    With over 20 years in the field, we bring a wealth of experience to our educational practices.
  </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 mr-2  rotate-[-5deg]">
  <FaUserGraduate className="text-[#667085] text-3xl mb-2" />
  <h3 className="text-2xl text-gray font-semibold mb-3">Qualified Faculty</h3>
  <p className="text-gray font-semibold">
    Our highly qualified teachers are committed to providing the best education.
  </p>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 ">
  <FaUniversity className="text-[#667085] text-3xl mb-2" />
  <h3 className="text-2xl text-gray font-semibold mb-3">State-of-the-Art Facilities</h3>
  <p className="text-gray font-semibold">
    Our school boasts modern, state-of-the-art facilities for a complete educational experience.
  </p>
</div>

      </section>

     

      {/* Call to Action Section */}
      <section className="text-center mt-8">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Join Us on Our Mission!
        </h3>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Together, let's create a brighter future for the next generation. 
          Join us in shaping minds and building leaders for tomorrow.
        </p>
        <a
          href="/contact"
          className="text-black no-underline border-2 border-[#0871b3] px-6 py-3 rounded-full font-semibold transition-colors hover:bg-[#0871b3]"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
