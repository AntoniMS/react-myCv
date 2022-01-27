import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="card">
        <h2>💭Idiomas</h2>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4>{item.language}</h4>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}

        <h2>🛠Skills</h2>

        {habilities.map((txt) => (
          <p key={txt}> {txt}</p>
        ))}
      </div>
    </div>
  );
};

export default More;
