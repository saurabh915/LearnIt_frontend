

import React, { useState, useEffect } from "react";
import "./student_list.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the API endpoint
    fetch("https://learnit-backend-5t1o.onrender.com/studentdata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data.");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  const renderStudentList = () => {
    return (
      <table className="student-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>School_id</th>
            <th>Email</th>
            <th>Class</th>
            <th>AverageMarks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.school_id}>
              <td>{student.name}</td>
              <td>{student.school_id}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>{student.AverageMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="student-list-page">
      <h1>Student List</h1>
      {students.length > 0 ? renderStudentList() : <p>No students found.</p>}
    </div>
  );
};

export default StudentList;
