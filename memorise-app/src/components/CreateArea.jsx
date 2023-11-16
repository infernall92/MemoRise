import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)

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

    function expand() {
        setExpanded(true);
    }

    return (<div>
        <form className="create-note">
            {isExpanded ? <input name="title" onChange={handleChange} value={note.title} placeholder="Memory title"></input> : null}
            <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} rows={isExpanded ? "3" : "1"} placeholder="Create a memory..."></textarea>
            <Zoom in={isExpanded}>
            <Fab onClick={submitNote} type="submit"><SdStorageIcon /></Fab>
            </Zoom>
        </form>
    </div>)
}

export default CreateArea;