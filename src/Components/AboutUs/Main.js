import React from "react";

import './Main.css'
const students = [
  { name: "Harsha Sree", rollNo: "2311CS010461" },
  { name: "Sathwik", rollNo: "2311CS010498" },
  { name: "Sahasra", rollNo: "2311CS010453" },
  { name: "Bharath", rollNo: "2311CS010482" },
  { name: "Karthik", rollNo: "2311CS010452" },
];
const Main = () => {
  return (
    <div className="about-us container text-center ">
      <h1>AboutUs</h1>
      <div className="student-list">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h2>{student.name}</h2>
            <p>Roll No: {student.rollNo}</p>
          </div>
        ))}
      </div>
      <div className="hh">
        <div className="row mt-5">
          <div className="col">
            <h3>
              Name: <i>Dr. Yogesh Madaria</i>
            </h3>
            <p>
              Designation: <i>Professor - SOE</i>
            </p>
          </div>
          <div className="col">
            <h3>
              Name: <i>Mr.T.A.Joseph Judson</i>
            </h3>
            <p>
              Designation: <i>Associative professor CSE</i>
            </p>
          </div>
          <div className="col">
            <h3>
              Name: <i>Mr.K.Vikram</i>
            </h3>
            <p>
              Designation: <i>Assistant professor CSE</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
