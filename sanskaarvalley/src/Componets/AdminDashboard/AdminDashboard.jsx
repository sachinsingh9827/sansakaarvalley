import React from "react";
const user = JSON.parse(localStorage.getItem("user"));
console.log(user); // Will show the user object

const AdminDashboard = () => {
  return (
  <> <h1 className="text-3xl font-bold text-center mb-6 text-primary">{user.name}</h1>
    <div className="min-h-screen flex flex-col items-center justify-center from-gradient-start to-gradient-end p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">{user.name}</h1>
        <p className="text-center text-gray-700">
          Welcome to the Admin Dashboard! Here you can manage the school system efficiently.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Features:</h2>
          <ul className="list-disc list-inside">
            <li>Manage Teachers and Students</li>
            <li>View Attendance Reports</li>
            <li>Access Notifications</li>
            <li>Manage Classes and Assignments</li>
            <li>Generate Reports</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
