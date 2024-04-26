import DeleteButton from "./DeleteButton"

function StudentNotes ({notes, setNote, notesVisibility,setNotesVisibility}) {

    function handleInputSubmit (e) {
        e.preventDefault();

        const commenter = (e.target.parentElement[0].value);
        const comment = (e.target.parentElement[1].value);

        setNote([...notes, {commenter, comment}]);
        resetForm(e)

    }

    function resetForm (e) {
        e.target.parentElement[0].value = "";
        e.target.parentElement[1].value = ""; 
    }

    return (
        <>
        { notesVisibility &&
            <div className="backgroundVisibility">
                <div className="student__notes">
                    <h5 onClick={() => setNotesVisibility(!notesVisibility)}>X</h5> 
                    <form className="student__notes-info" name="comments" >
                        <h4>1-on-1 Notes</h4>
                        <input type="text" htmlFor="comments" placeholder="Commenter Name"/>
                        <br />
                        <input type="text" htmlFor="comments" placeholder="Comment"/>
                        <br />
                        <button type="submit" onClick={handleInputSubmit} htmlFor="comments">Add Note</button>
                    </form>
                    <ul className="student__comments">
                        <h2 className="student__comments-header">Comments</h2>
                        {notes.map((note, i) => {
                            return (
                                <li key={`${note.commenter}${i}`} id={`${note.commenter}${i}`}>{note.commenter} says, "{note.comment}" <DeleteButton notes={notes} index={i} setNote={setNote}/> </li>
                            )
                        })}
                    </ul>  
                </div>
            </div>  
        } 
        </> 
    )
}

export default StudentNotes;