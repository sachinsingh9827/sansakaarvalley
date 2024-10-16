import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // You can remove this if not using Bootstrap at all.
import "./StudentAttendance.css";

const StudentAttendance = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Sample data with classId for each student
  const fetchedStudents = [
    { id: 1, name: "John Doe", classId: "Class 1" },
    { id: 2, name: "Jane Smith", classId: "Class 2" },
    { id: 3, name: "Alice Johnson", classId: "Class 1" },
    // Add more students as needed
  ];

  useEffect(() => {
    // Set current date when the component mounts
    const today = new Date().toLocaleDateString();
    setCurrentDate(today);
  }, []);

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);

    // Filter students based on the selected class
    const filteredStudents = fetchedStudents.filter(
      (student) => student.classId === selectedClass
    );
    setStudents(filteredStudents);

    // Initialize attendance with "Present" for all students in the selected class
    const initialAttendance = filteredStudents.map((student) => ({
      date: currentDate,
      studentId: student.id,
      status: "Present", // Default status
      name: student.name,
    }));
    setAttendance(initialAttendance);
  };

  const toggleAttendance = (studentId, status) => {
    const updatedAttendance = attendance.map((item) =>
      item.studentId === studentId
        ? { ...item, status: item.status === status ? "" : status }
        : item
    );
    setAttendance(updatedAttendance);
  };

  const handleSubmitAttendance = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate an API call or any asynchronous operation
      console.log("Submitting attendance for date:", currentDate);
      console.log("Attendance data:", attendance);
      setSubmittedData(attendance);
      setIsLoading(false);
      setSubmitted(true); // Set submitted to true
    }, 2000); // Simulate a 2-second delay for the loading spinner
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {!submitted ? (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">
                Total Students: {students.length}
              </div>
              <select
                id="class"
                value={selectedClass}
                onChange={handleClassChange}
                className="border rounded-md p-2"
              >
                <option value="">--Select Class--</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                {/* Add more classes as needed */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <strong>Date:</strong> {currentDate}
          </div>
          {!isLoading ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-md">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4 border-b">Sn.</th>
                    <th className="py-2 px-4 border-b">Student Name</th>
                    <th className="py-2 px-4 border-b">Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{index + 1}.</td>
                      <td className="py-2 px-4 border-b">{student.name}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex space-x-4">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`present-${student.id}`}
                              value="Present"
                              checked={
                                attendance.find(
                                  (item) =>
                                    item.studentId === student.id &&
                                    item.status === "Present"
                                )
                                  ? true
                                  : false
                              }
                              onChange={() =>
                                toggleAttendance(student.id, "Present")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`present-${student.id}`}
                            >
                              P
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`absent-${student.id}`}
                              value="Absent"
                              checked={
                                attendance.find(
                                  (item) =>
                                    item.studentId === student.id &&
                                    item.status === "Absent"
                                )
                                  ? true
                                  : false
                              }
                              onChange={() =>
                                toggleAttendance(student.id, "Absent")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`absent-${student.id}`}
                            >
                              A
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`application-${student.id}`}
                              value="Application"
                              checked={
                                attendance.find(
                                  (item) =>
                                    item.studentId === student.id &&
                                    item.status === "Application"
                                )
                                  ? true
                                  : false
                              }
                              onChange={() =>
                                toggleAttendance(student.id, "Application")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`application-${student.id}`}
                            >
                              L
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded"
                onClick={handleSubmitAttendance}
                disabled={!selectedClass || students.length === 0}
              >
                Submit Attendance
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-4">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="submitted-data mt-4">
          <h3 className="text-xl font-semibold mb-2">Submitted Attendance</h3>
          <table className="min-w-full bg-white border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border-b">Sn.</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Student Name</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{item.date}</td>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentAttendance;
