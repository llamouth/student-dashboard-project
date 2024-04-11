import React, { useEffect, useState } from 'react';
import Data from "../data/data.json"
import "./style.css"
import Student from './Student';
import SortMenu from './SortMenu';

function StudentDisplay ({cohort, setCohort}) {

    const [visible, setVisibility] = useState(false)


    const filteredStudents = Data.filter(student => {
        if( cohort === "All Students" ){return true}
        if( cohort === "On Track"){
            return student.Track === cohort
        }else if(cohort === "Off Track") {
            return student.Track === cohort
        }
        return student.cohort.cohortCode === cohort.split(" ").join("") 
    })

    

    return (
        <main className='classList'>
            <div className='classList__header'>
                <h2>{cohort}</h2>
                <p>Total Students: <span>{filteredStudents.length}</span></p>
                <p onClick={() => setVisibility(!visible)} className='sort__text'>Sort By <span className='sort__arrow'>⌄</span></p>
                <SortMenu setCohort={setCohort} visible={visible} setVisibility={setVisibility}/>
            </div>
            <div className="classList__list">
                {filteredStudents.map(student => {  
                    return (
                    <Student student={student} key={student.id} filteredStudents={filteredStudents}/>
                    )
                })}
            </div>
        </main>
    )
}

export default StudentDisplay;