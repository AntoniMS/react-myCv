import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4 className="name">📂 {item.name}</h4>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;