import React from 'react';

// Sample student images (these should be replaced with actual image URLs)
const studentImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Qv5s5REahX2Vcj11jPnU1ibiEUfTc-VMAQ&s", // John Doe image
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", // Jane Smith image
  "https://plus.unsplash.com/premium_photo-1670252109642-d76c2be775dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Emily Johnson image
];

const TopStudents = () => {
  // Sample data for top students
  const topStudentsData = [
    { name: "John Doe", class: "Class 10", marks: "95%", icon: "🏆", image: studentImages[0] },
    { name: "Jane Smith", class: "Class 12", marks: "93%", icon: "🥇", image: studentImages[1] },
    { name: "Emily Johnson", class: "Class 11", marks: "92%", icon: "🥈", image: studentImages[2] },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray welcome-color welcome-cont">
        Top Students of Last Year
      </h1>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {topStudentsData.map((student, index) => (
    <div 
      key={index} 
      className="bg-white shadow-md rounded-xl  flex hover:scale-105 transition-transform duration-300"
    >
      {/* Student Image */}
      <img
        src={student.image}
        alt={`${student.name[0]}`}
        className="w-1/2  h-full object-cover rounded-r-xl relative"  // Image takes 1/3 width
      />

      {/* Student Details */}
      <div className="w-2/3 flex flex-col justify-center p-2  border-gray-200">
        <h2 className="text-xl font-semibold text-gray text-center ">{student.name}</h2>
        <p className="text-lg text-gray font-semibold text-center">{student.class}</p>
        <p className="text-xl font-semibold text-[#105183] text-center">{student.marks}</p>
        <span className="text-4xl text-center">{student.icon}</span>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default TopStudents;
