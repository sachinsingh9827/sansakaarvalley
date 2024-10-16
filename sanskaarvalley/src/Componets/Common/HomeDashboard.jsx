import React from 'react';

const Dashboard = () => {
  // Sample data for counts and icons
  const dashboardData = [
    { title: "Students", count: 1200,  },
    { title: "Teachers", count: 100,  },
    { title: "Buses", count: "02",  },
    { title: "Wheels", count: 12, },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray font-monserrat">School Information</h1>

      {/* Responsive Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Map through dashboardData to create cards dynamically */}
        {dashboardData.map((item, index) => (
         
          <div 
            key={index} 
            className=" font-monserrat text-gray shadow-md rounded-lg p-6 h-auto sm:h-[150px] md:h-[200px] w-full sm:w-[200px] md:w-[250px] 
                       flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl border border-gray-200  transition-transform duration-300 "
          >
            <span className="text-4xl">{item.icon}</span>
            <h2 className="text-2xl font-bold text-gray-800 text-center">{item.title}</h2>
            <p className="text-xl font-semibold text-gray-800 text-center">
              {item.count} +
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
