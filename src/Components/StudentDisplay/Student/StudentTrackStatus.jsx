import React from "react";

function StudentTrackStatus({student}) {


    function checkIfOnTrack() {
        const { resume, linkedin, github, mockInterview } = student.certifications;
        const codeWarsScore = student.codewars.current.total;

        const isOnTrack = resume && linkedin && github && mockInterview && codeWarsScore > 600;

        return (
            <>
                {isOnTrack ? (
                    <h5 className="student__on">On Track to graduate</h5>
                ) : (
                    <h5 className="student__off">Off Track to graduate</h5>
                )}
            </>
        );
    }
    
    return <div>{checkIfOnTrack()}</div>;
}

export default StudentTrackStatus;
