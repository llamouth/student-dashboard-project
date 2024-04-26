import StudentTrackStatus from "../StudentTrackStatus"

function StudentMenu ({visible, student, studentInfo, setVisibility}) {

    function convertToPercentage (number) {
        const num = String(number).split(".")
        return `${num[1]} %`
    }

    function isCertified (bool) {
        return !bool ? "❌" : "✅";
    }

    return (
        <>
        { visible && 
            <div className="backgroundVisibility">  
                <div className="menu">

                    <div className="menu__info">
                        <div className="menu__main">
                            <img src={student.profilePhoto} alt="" />
                            <div className="menu__studentInfo">
                                <StudentTrackStatus student={student}/>
                                <h2>{studentInfo[0]}</h2>
                                <p>{student.username}</p>
                                <p>Birthday: {studentInfo[1]}</p>
                            </div>
                        </div>
                        <h5 onClick={() => setVisibility(!visible)} className="menu__close">X</h5>      
                    </div>

                    <div className="menu__data">
                        <div className="menu__codeWars">
                            <h4>Codewars:</h4>
                            <div className="menu__details">
                                <p>Current Total: <span> {student.codewars.current.total}</span></p>
                                <p>Last Week: <span> {student.codewars.current.lastWeek}</span></p>
                                <p>Goal: <span> {student.codewars.goal.total}</span></p>
                                <p>Percent of Goal Achieved: <span> {student.codewars.goal.lastWeek} %</span></p>
                            </div>
                        </div>

                        <div className="menu__scores">
                            <h4>Scores:</h4>

                            <div className="menu__details">
                                <p>Assignments: <span> {convertToPercentage(student.cohort.scores.assignments)} </span></p>
                                <p>Projects: <span> {convertToPercentage(student.cohort.scores.projects)}</span></p>
                                <p>Assessments: <span> {convertToPercentage(student.cohort.scores.assessments)} </span></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="menu__certifications">
                            <h4>Certifications:</h4>

                            <div className="menu__details certDetails">
                                <p>Resume: {isCertified(student.certifications.resume)}</p>
                                <p>Linkedin: {isCertified(student.certifications.linkedin)}</p>
                                <p>Mock Interview: {isCertified(student.certifications.mockInterview)}</p>
                                <p>GitHub:{isCertified(student.certifications.github)}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        }
        </>
    );
}

export default StudentMenu;