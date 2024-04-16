function SortMenu ({sortDropDown, setSortDropDown, students, setStudents}) {
    const onTrack = students.filter(student => student.track === 'On Track');
    const offTrack  = students.filter(student => student.track === 'Off Track');

    function handleClick (e) {
        if(e.target.id === "On-Track"){
            setStudents([...onTrack, ...offTrack]);
        }else if (e.target.id === "Off-Track"){ 
            setStudents([...offTrack, ...onTrack]);
        }
        setSortDropDown(!sortDropDown);
    }

    return (
        <>
            {sortDropDown && 
                <div className="sort">
                    <p id="On-Track" onClick={handleClick} className="sort__options">On Track</p>
                    <p id="Off-Track" onClick={handleClick} className="sort__options">Off Track</p>
                </div>
            } 
        </>   
    )
}

export default SortMenu;