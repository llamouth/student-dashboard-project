import React, { useState } from "react";
import "./index.css"
import NavBar from "./Navbar/NavBar";
import ClassList from "./ClassList/ClassList";
import StudentDisplay from "./StudentDisplay/StudentDisplay";

function App() {
  const [cohort, setCohort] = useState("All Students");

  return (
    <>
      <NavBar />
      <ClassList setCohort={setCohort}/>
      <StudentDisplay cohort={cohort} setCohort={setCohort}/>
    </>
  );

}

export default App;
