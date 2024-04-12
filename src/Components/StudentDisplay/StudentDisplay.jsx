import React, { useEffect, useState } from 'react';
import Data from "../../data/data.json"
import "./styles/style.css"
import Student from './Student/Student';
import SortMenu from './SortMenu';

function StudentDisplay ({cohort}) {
    
    useEffect(() => {
        let filteredStudents = Data.sort((studentA, studentB) => {return studentA.names.surname.localeCompare(studentB.names.surname)})
        filteredStudents = Data.filter(student => {
            if( cohort === "All Students" ){return true}
            return student.cohort.cohortCode === cohort.split(" ").join("") 
        })
        setStudents(filteredStudents)
    }, [cohort])


    const [sortDropDown, setSortDropDown] = useState(false)
    const [students, setStudents] = useState(Data);

    

    return (
        <main className='studentList'>
            <div className='studentList__header'>
                <h2>{cohort}</h2>
                <p>Total Students: <span>{students.length}</span></p>
                <p onClick={() => setSortDropDown(!sortDropDown)} className='sort__text'>Sort By <span className='sort__arrow'>⌄</span></p>
                <SortMenu sortDropDown={sortDropDown} setSortDropDown={setSortDropDown} students={students} setStudents={setStudents}/>
            </div>
            <div className="studentList__list">
                {students.map(student => {  
                    return (
                    <Student student={student} key={student.id}/>
                    )
                })}
            </div>
        </main>
    )
}

export default StudentDisplay;