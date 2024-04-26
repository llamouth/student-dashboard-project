import React, { useEffect, useState } from "react";
import StudentMenu from "./StudentMenu/StudentMenu"
import { CgNotes } from "react-icons/cg";
import StudentNotes from "./StudentMenu/StudentNotes";

const months= ["_","January","February","March","April","May","June","July","August","September","October","November","December"];

function Student ({student, currentStudent}) {
    
    const { resume, linkedin, github, mockInterview } = student.certifications;
    const codeWarsScore = student.codewars.current.total;
    const isOnTrack = resume && linkedin && github && mockInterview && codeWarsScore > 600;
    isOnTrack ? student["track"] = "On Track" : student["track"] = "Off Track"
    
    const fullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`
    const dobArray = student.dob.split("/");
    const dob = `${months[dobArray[0]]} ${dobArray[1]}, ${dobArray[2]}`
    const [visible, setVisibility] = useState(false);
    const [notes, setNote] = useState(student.notes);
    const [notesVisibility, setNotesVisibility] = useState(false)
    const studentInfo = [fullName, dob]; 

    useEffect(() => {
        currentStudent === student.id && setVisibility(!visible)
    },[currentStudent])

    student["label"] = fullName;
    student["value"] = student.id;

    return (
        <>
            <div className='student' key={student.id}>
                <img src={student.profilePhoto} alt="" />
                <div className='student__info'>
                    <h2>{fullName}</h2>
                    <p>{student.username}</p>
                    <p>Birthday: {dob}</p>
                </div>
                <div className="student__extra" ><span className="show" onClick={() => setVisibility(!visible)}>More Details</span>
                </div>
                <CgNotes className="student__notes-icon" onClick={() => setNotesVisibility(!notesVisibility)}/>
            </div>
            <StudentNotes notes={notes} setNote={setNote} notesVisibility={notesVisibility} setNotesVisibility={setNotesVisibility}/>
            <StudentMenu visible={visible} student={student} studentInfo={studentInfo} setVisibility={setVisibility}/>
        </>
    )
}

export default Student;