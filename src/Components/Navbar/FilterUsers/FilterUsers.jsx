import React from "react";

const FilterUsers = ({setStudents, Data, cohort}) => {

    const handleClick = (e) => {
        const value = e.target.value;

        const currentCohort = Data.filter(student => {
            if(cohort === "All Students") {
                if(value === "All"){
                    return (student)
                }else if(student.track === value) {
                    return (student)
                }
            }else if(student.cohort.cohortCode === cohort.split(" ").join("")) {
                if(value === "All"){
                    return (student)
                }else if(student.track === value) {
                    return (student)
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
