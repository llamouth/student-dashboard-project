function StudentTrackStatus ({student, track, setTrack}) {
    
    function checkIfOnTrack () {
        const {resume, linkedin, github, mockInterview} = student.certifications;
        const codeWarsScore = student.codewars.current.total

        if(resume && linkedin && github && mockInterview && codeWarsScore > 600){
            setTrack(true)
            student["Track"] = "On Track"
        }else {
            student["Track"] = "Off Track"
        }

        if(track) {
            return (
                <>
                    <p className="student__on">On Track to graduate</p>
                </>
            )
        }else {
            return (
                <>
                    <p className="student__off">Off Track to graduate</p>
                </>
            )
        }
        
    }
    
    return (
        <div>{checkIfOnTrack()}</div>
    )
}

export default StudentTrackStatus;