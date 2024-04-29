import React from "react";

function StudentTrackStatus({student}) {


    function checkIfOnTrack() {

        const isOnTrack = student.track === "On Track" 

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
