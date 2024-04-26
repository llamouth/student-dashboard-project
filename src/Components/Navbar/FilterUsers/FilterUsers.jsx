import React from "react";

const FilterUsers = ({setStudents, Data, cohort}) => {
    const currentCohort = []

    const handleClick = (e) => {
        const value = e.target.value;

        Data.forEach(student => {
            if(cohort === "All Students") {
                if(value === "All"){
                    currentCohort.push(student)
                }else if(student.track === value) {
                    currentCohort.push(student)
                }
            }else if(student.cohort.cohortCode === cohort.split(" ").join("")) {
                if(value === "All"){
                    currentCohort.push(student)
                }else if(student.track === value) {
                    currentCohort.push(student)
                }
            }
        })
        setStudents(currentCohort);
    };

    return (
        <select className="filterUsers" onChange={handleClick}>
            <option value="Filter Users" disabled defaultValue>
                Filter Users
            </option>
            <option value="All">All</option>
            <option value="On Track">On Track</option>
            <option value="Off Track">Off Track</option>
        </select>
    );
};

export default FilterUsers;
