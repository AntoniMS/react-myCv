import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Idiomas</span>
        <span></span>
      </div>
      <div className="card"> 
      {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4>💭{item.language}</h4>
              <p>{item.wrlevel}</p>
            
            </div>
          );
        })}
    
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p>🔧 {txt}</p>
        ))}
      </div>

      
    </div>
  );
};

export default More;