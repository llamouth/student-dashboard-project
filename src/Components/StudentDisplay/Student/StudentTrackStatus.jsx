import React from "react";

function StudentTrackStatus({ student}) {
    function updateStudentTrack (onTrack) {
        onTrack ? student["track"] = "On Track" : student["track"] = "Off Track"
    }

    function checkIfOnTrack() {
        const { resume, linkedin, github, mockInterview } = student.certifications;
        const codeWarsScore = student.codewars.current.total;

        const isOnTrack = resume && linkedin && github && mockInterview && codeWarsScore > 600;

        updateStudentTrack(isOnTrack)

        return (
            <>
                {isOnTrack ? (
                    <p className="student__on">On Track to graduate</p>
                ) : (
                    <p className="student__off">Off Track to graduate</p>
                )}
            </>
        );
    }

    return <div>{checkIfOnTrack()}</div>;
}

export default StudentTrackStatus;
