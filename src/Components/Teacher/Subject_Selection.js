import React, { useState, useEffect } from "react";
import "./subject_selection.css";

const SubjectSelection = () => {
  const [subjects] = useState([
    {
      id: 1,
      name: "Mathematics",
    },
    {
      id: 2,
      name: "Physics",
    },
    {
      id: 3,
      name: "Chemistry",
    },
  ]);

  useEffect(() => {
    // Fetch the subject data from an API or database here
    // and set the subjects state variable
  }, []);

  const renderSubjectList = () => {
    return (
      <table className="subject-list">
        <thead>
          <tr>
            <th>Subject Name</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="subject-selection-page">
      <h1>Subject Selection</h1>
      {subjects.length > 0 ? renderSubjectList() : <p>No subjects found.</p>}
    </div>
  );
};

export default SubjectSelection;
