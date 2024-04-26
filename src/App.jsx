import React, { createContext, useEffect, useState } from "react";
import "./index.css"
import Data from "./data/data.json"
import NavBar from "./Components/Navbar/NavBar";
import ClassList from "./Components/ClassList/ClassList";
import StudentDisplay from "./Components/StudentDisplay/StudentDisplay";

function App() {
  const [cohort, setCohort] = useState("All Students");
  const [students, setStudents] = useState(Data);
  const [currentStudent, setCurrentStudent] = useState("");
  
  
  
  return (
    <>
      <NavBar students={students} setStudents={setStudents} Data={Data} setCurrentStudent={setCurrentStudent} cohort={cohort}/>
      <ClassList setCohort={setCohort} />
      <StudentDisplay cohort={cohort} students={students} setStudents={setStudents} Data={Data} currentStudent={currentStudent}/>
    </>
  );

}

export default App;
