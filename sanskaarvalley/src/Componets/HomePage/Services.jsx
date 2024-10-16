import React from "react";
import { Link } from 'react-router-dom';
// Example services data
const services = [
  {
    title: "Admissions",
    description:
      "We offer a seamless admission process with dedicated counselors to guide students and parents through each step.",
    icon: "🎓",
  },
  {
    title: "Academics",
    description:
      "Our curriculum focuses on holistic development, ensuring that each student excels academically with personalized attention.",
    icon: "📚",
  },
  {
    title: "Transportation",
    description:
      "Our safe and reliable transportation services cover all key routes, ensuring students reach school on time.",
    icon: "🚌",
  },
  {
    title: "Extracurricular Activities",
    description:
      "We provide a wide range of extracurricular activities including sports, music, and arts for the all-round development of students.",
    icon: "⚽",
  },
  {
  title: "Picnic",
  description:
    "We organize fun and educational picnic trips to ensure students have a balanced and joyful school experience.",
  icon: "🌳"} ,
  {
    title: "Teacher Management",
    description: "Organize and manage teacher data including schedules, classes, and performance.",
    icon: "👨‍🏫",
  },
];

 // Fees categories with their respective routes
 const feesData = [
  { title: "Total Fees", route: "/total-fees", icon: "💸" },
  { title: "Paid Fees", route: "/paid-fees", icon: "✅" },
  { title: "Due Fees", route: "/due-fees", icon: "⚠️" },
  { title: "Bus Fees", route: "/bus-fees", icon: "🚌" },
];
const Services = () => {
 
  return (
    <div className="container mx-auto px-4 py-12">
       <div
      className="welcome-section text-center mb-4"
      style={{ background: "linear-gradient(to right, #105183, #252472)" }}
    >
      <h2 className="welcome-title text-white font-semibold text-2xl mb-2 ">
      Welcome to Our School Services
      </h2>
      <p className="welcome-message text-black font-medium mt-4">
      Our platform provides a range of services designed to enhance the educational experience, including student and teacher management, bus tracking, fee management, and more.
      </p>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray mb-2">{service.title}</h2>
            <p className="text-gray font-montserrat">{service.description}</p>
           
          </div>
        ))}
      </div>
      <div>
        {/* Add more information as needed */}
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-montserrat text-gray">
        Fees Information
      </h1>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  <div
    onClick={() => window.location.href = "/fees-details"}
    className="bg-white border-2 border-gray shadow-md rounded-lg h-[150px] w-full flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 normalize-space"
  >
    <span className="text-2xl sm:text-4xl mb-4 font-montserrat text-gray">Fees Details</span>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">h</h2>
  </div>
  <div
    onClick={() => window.location.href = "/bus-fees-details"}
    className="bg-sky-100 border-2 border-gray shadow-md rounded-lg h-[150px] w-full flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 normalize-space"
  >
    <span className="text-2xl sm:text-4xl mb-4 font-montserrat text-gray">Bus Fees</span>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">h</h2>
  </div>
  <div
    onClick={() => window.location.href = "/uniform-details"}
    className="bg-sky-100 border-2 border-gray shadow-md rounded-lg h-[150px] w-full flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 normalize-space"
  >
    <span className="text-2xl sm:text-4xl mb-4 font-montserrat text-gray">Uniform Details</span>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">h</h2>
  </div>
</div>

    </div>
      </div>
    </div>
  );
};

export default Services;
