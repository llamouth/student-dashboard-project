import StudentNotes from "./StudentNotes"

function StudentMenu ({visible, student, notes, setNote}) {

    function convertToPercentage (number) {
        const num = String(number).split(".")
        return `${num[1]} %`
    }

    function isCertified (bool) {
       return !bool ? "❌" : "✅"
    }

    return (
        <>
        { visible && 
            <>
            <div className="student__codeWars">
                <h4>Codewars:</h4>
                <p><span>Current Total:</span> {student.codewars.current.total}</p>
                <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
                <p><span>Goal:</span> {student.codewars.goal.total}</p>
                <p><span>Percent of Goal Achieved:</span> {student.codewars.goal.lastWeek} %</p>
            </div>

            <div className="student__scores">
                <h4>Scores</h4>
                <p><span>Assignments:</span> {convertToPercentage(student.cohort.scores.assignments)}</p>
                <p><span>Projects:</span> {convertToPercentage(student.cohort.scores.projects)}</p>
                <p><span>Assessments</span> {convertToPercentage(student.cohort.scores.assessments)}</p>
                <p></p>
            </div>

            <div className="student__certifications">
                <h4>Certifications</h4>
                <p><span>Resume:</span> {isCertified(student.certifications.resume)}</p>
                <p><span>Linkedin:</span> {isCertified(student.certifications.linkedin)}</p>
                <p><span>Mock Interview:</span> {isCertified(student.certifications.mockInterview)}</p>
                <p><span>GitHub:</span>{isCertified(student.certifications.github)}</p>
            </div>
            <StudentNotes notes={notes} setNote={setNote}/>
            </>
        }
        </>
    )
}

export default StudentMenu;