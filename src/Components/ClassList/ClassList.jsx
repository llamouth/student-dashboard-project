import React from 'react';
import "./styles/style.css"

function ClassList({setCohort}) {

    return (
        <section className='ClassList'>
            <h4>Choose a Class by Start Date</h4>
            <ul className='ClassList__classes'>
                <li onClick={() => setCohort("All Students")}>All Students</li>
                <li onClick={() => setCohort("Winter 2026")}>Winter 2026</li>
                <li onClick={() => setCohort("Fall 2026")}>Fall 2026</li>
                <li onClick={() => setCohort("Summer 2026")}>Summer 2026</li>
                <li onClick={() => setCohort("Spring 2026")}>Spring 2026</li>
                <li onClick={() => setCohort("Winter 2025")}>Winter 2025</li>
                <li onClick={() => setCohort("Fall 2025")}>Fall 2025</li>
                <li onClick={() => setCohort("Summer 2025")}>Summer 2025</li>
                <li onClick={() => setCohort("Spring 2025")}>Spring 2025</li>
            </ul>
        </section>
    );
}

export default ClassList;