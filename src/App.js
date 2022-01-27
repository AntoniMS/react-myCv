import { useState } from "react";
import React from "react";
import "./App.css";
import { Hero, Education, Experience, More } from "./components";
import { CV } from "./CV/Cv";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showBox, setShowBox] = useState("education");

  return (
    <div className="App">
      <div className="div">
        <Hero hero={hero} />
      </div>
      <nav>
        <div className="div">
          <button
            className="button btn"
            onClick={() => setShowBox("education")}
          >
            Educación
          </button>
          <button
            className="button btn"
            onClick={() => setShowBox("experience")}
          >
            Experiencia
          </button>
          <button
            className="button btn"
            onClick={() => setShowBox("more")}
          >
            Aptitudes
          </button>

        </div>
      </nav>

      {
        <div className="div">
          {showBox === "education" ? (
            <Education education={education} />
          ) : showBox === "experience" ? (
            <Experience experience={experience} />
          ) : showBox === "more" ? (
            <More languages={languages} habilities={habilities} />

          ) : null}
        </div>
      }
    </div>
  );
}

export default App;
