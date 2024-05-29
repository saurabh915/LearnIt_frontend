
import React, { useState, useEffect } from "react";
import "./class_alloted.css";

const ClassAlloted = () => {
  const [classesAlloted] = useState([
    {
      className: "Mathematics",
      classCode: "MAT101",
      teacherName: "Prof. Alan",
      roomNo: "301",
    },
    {
      className: "Physics",
      classCode: "PHY101",
      teacherName: "Dr. Jane",
      roomNo: "202",
    },
    {
      className: "Chemistry",
      classCode: "CHM101",
      teacherName: "Dr. Smith",
      roomNo: "303",
    },
  ]);

  useEffect(() => {
    // Fetch the class data from an API or database here
    // and set the classesAlloted state variable
  }, []);

  const renderClassAllotedList = () => {
    return (
      <table className="class-alloted-list">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Class Code</th>
            <th>Teacher</th>
            <th>Room Number</th>
          </tr>
        </thead>
        <tbody>
          {classesAlloted.map((classItem) => (
            <tr key={classItem.classCode}>
              <td>{classItem.className}</td>
              <td>{classItem.classCode}</td>
              <td>{classItem.teacherName}</td>
              <td>{classItem.roomNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    );
  };

  return (
    <div className="class-alloted-page">
      <h1>Classes Allotted</h1>
      {classesAlloted.length > 0 ? renderClassAllotedList() : <p>No classes allotted.</p>}
    </div>
  );
};

export default ClassAlloted;
