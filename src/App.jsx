import React, { useState } from "react";
import "./index.css"
import NavBar from "./Components/Navbar/NavBar";
import ClassList from "./Components/ClassList/ClassList";
import StudentDisplay from "./Components/StudentDisplay/StudentDisplay";

function App() {
  const [cohort, setCohort] = useState("All Students");
  
  return (
    <>
      <NavBar />
      <ClassList setCohort={setCohort} />
      <StudentDisplay cohort={cohort}/>
    </>
  );

}

export default App;
