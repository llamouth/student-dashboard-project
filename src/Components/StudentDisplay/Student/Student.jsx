import React, { useState } from "react";
import StudentMenu from "./StudentMenu/StudentMenu"
import StudentTrackStatus from "./StudentTrackStatus";

const month= ["_","January","February","March","April","May","June","July","August","September","October","November","December"];

function Student ({student}) {
     
    const fullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`
    const dobArray = student.dob.split("/");
    const dob = `${month[dobArray[0]]} ${dobArray[1]}, ${dobArray[2]}`
    const [visible, setVisibility] = useState(false);
    const [show, setShow] = useState("More...")
    const [notes, setNote] = useState(student.notes)

    function handleDropDown () {
        if(visible){
            setShow("More...")
        }else {
            setShow("Less")
        }
        setVisibility(!visible)
    }


    return (
    <div className='student' key={student.id}>
        <img src={student.profilePhoto} alt="" />
        <div className='student__info'>
            <h3>{fullName}</h3>
            <p>{student.username}</p>
            <p><span>Birthday:</span> {dob}</p>
        </div>
        <StudentTrackStatus student={student}/>
        <div className="student__extra" ><span className="show" onClick={handleDropDown}>Show {show}</span><StudentMenu visible={visible} student={student} notes={notes} setNote={setNote}/></div>
    </div>
    )

}

export default Student;