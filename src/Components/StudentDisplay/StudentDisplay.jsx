import React, { createContext, useEffect, useState } from 'react';
import SortMenu from "./SortMenu"
import "./styles/style.scss"
import Student from './Student/Student';


function StudentDisplay ({cohort, students, setStudents, Data, currentStudent}) {  

    useEffect(() => {
        let filteredStudents = Data.sort((studentA, studentB) => {return studentA.names.surname.localeCompare(studentB.names.surname)})
        filteredStudents = Data.filter(student => {
            if( cohort === "All Students" ){return true}
            return student.cohort.cohortCode === cohort.split(" ").join("") 
        })
        setStudents(filteredStudents);
    }, [cohort])

    const [sortDropDown, setSortDropDown] = useState(false);

    return (
        <main className='studentList'>
            <div className='studentList__header'>
                <div className="studentList__info">
                    <p className='studentList__cohort'>{cohort}</p>
                    <p className='studentList__amount'><span> ({students.length})</span></p>
                </div>
                <div className="studentList__sort" onClick={() => setSortDropDown(!sortDropDown)}>
                    <p  className='studentList__sort-text'>Sort By</p>
                    <p className='studentList__sort-arrow'>⌄</p>
                    <SortMenu sortDropDown={sortDropDown} setSortDropDown={setSortDropDown} students={students} setStudents={setStudents}/> 
                </div>
            </div>
            <div className="studentList__list">
                {students.map(student => {  
                    return (
                    <Student student={student} key={student.id} currentStudent={currentStudent}/>
                    )
                })}
            </div>
        </main>
    )
}

export default StudentDisplay;