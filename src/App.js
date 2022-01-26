import { useState } from "react";
import React from "react";
import "./App.css";
import { Hero, Education, Experience, More } from "./components";
import { CV } from "./CV/Cv";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <nav>
        <div className="div">

  
            <button
              className="button btn"
              onClick={() => setShowEducation(true)}
            >
              Educación
            </button>
            <button
              className="button btn"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>

        </div>
      </nav>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
       
      />
      <br />
      <br />
    </div>
  );
}

export default App;
