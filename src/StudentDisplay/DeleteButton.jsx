

function DeleteButton ({notes, index, setNote}) {

    function handleDelete () {
        notes.splice(index, 1)
        setNote([...notes])
    }

    return (
        <span className="delete" onClick={handleDelete}>Remove</span>
    )
}

export default DeleteButton;