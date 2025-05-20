import { useState } from "react";
import Exercise from "./components/Exercise";
import exercises from "./assets/exercises";
import "./App.css";

function App() {
  return (
    <>
      <h1>Calisthenics Progressions</h1>
      <div className="exercises">
        {exercises.map((x) => (
          <Exercise x={x} />
        ))}
      </div>
    </>
  );
}

export default App;
