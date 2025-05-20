import { useState } from "react";
import Exercise from "./components/Exercise";
import "./App.css";

function App() {
  const exercises = [];
  return (
    <>
      <h1>Calisthenics Progressions</h1>
      <div className="exercises">
        {exercises.map((x) => (
          <Exercise />
        ))}
      </div>
    </>
  );
}

export default App;
