
function SortMenu ({setCohort, visible, setVisibility}) {

    function handleClick (e) {
        if(e.target.innerText === "On Track"){
            setCohort("On Track");
        }else if (e.target.innerText === "Off Track"){
            setCohort("Off Track");     
        }else {
            setCohort("All Students")
        }
        setVisibility(!visible)
    }

    return (
        <>
            {visible && 
                <>
                    <div name="sort" id="sort" placeholder='Sort' className="sort">
                        <p value="All Students" onClick={handleClick} className="sort__options">All Students</p>
                        <p value="On-Track" onClick={handleClick}className="sort__options">On Track</p>
                        <p value="Off-Track" onClick={handleClick} className="sort__options">Off Track</p>
                    </div>
                </>
            } 
        </>   
    )
}

export default SortMenu;