import React from "react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Student Dashboard</h1>
        <p className="text-center text-gray-700">
          Welcome to the Student Dashboard! Here you can view your classes, assignments, and attendance.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Your Features:</h2>
          <ul className="list-disc list-inside">
            <li>View Class Schedule</li>
            <li>Check Attendance</li>
            <li>Access Assignments and Grades</li>
            <li>Send Messages to Teachers</li>
            <li>Receive Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
