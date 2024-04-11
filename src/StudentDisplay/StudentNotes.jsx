import DeleteButton from "./DeleteButton"

function StudentNotes ({notes, setNote}) {

    function handleInputSubmit (e) {
        e.preventDefault()
        let commenter = (e.target.offsetParent.children[4].childNodes[1].children[1].value)
        let comment = (e.target.offsetParent.children[4].childNodes[1].children[4].value)

        setNote([...notes, {commenter, comment}])

        e.target.offsetParent.children[4].childNodes[1].children[1].value = ""
        e.target.offsetParent.children[4].childNodes[1].children[4].value = ""   
    }


    return (
        <div className="student__notes">
            <h5>1-on-1 Notes</h5>
            <form className="student__comments" name="comments">
                <label htmlFor="name">Commenter Name</label>
                <input type="text" htmlFor="comments"/>
                <br />
                <label htmlFor="name">Comment</label>
                <input type="text" htmlFor="comments"/>
                <br />
                <button type="submit" onClick={handleInputSubmit} htmlFor="comments">Add Note</button>
            </form>
            <ul>
                {notes.map((note, i) => {
                    return (
                        <li key={`${note.commenter}${i}`} id={`${note.commenter}${i}`}>{note.commenter} says, "{note.comment}" <DeleteButton notes={notes} index={i} setNote={setNote}/> </li>
                    )
                })}
            </ul>
        </div>    
    )
}

export default StudentNotes;