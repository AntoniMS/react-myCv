import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4 className="name">📕 {item.name}</h4>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;