import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    
    function handleChange(event){
        const {name, value} = event.target
        setNote(prevNote => {
            return {
            ...prevNote,
            [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    return (<div>
        <form className="create-note">
            <input name="title" onChange={handleChange} value={note.title} placeholder="Memory title"></input>
            <input name="content" onChange={handleChange} value={note.content} placeholder="Create a memory..."></input>
            <button onClick={submitNote} type="submit">Add</button>
        </form>
    </div>)
}

export default CreateArea;