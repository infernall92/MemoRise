import React from "react";
import SignalCellularNoSimIcon from '@mui/icons-material/SignalCellularNoSim';

function Note(props) {

    function handleClick(){
        props.onDelete(props.id)
    }
    return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><SignalCellularNoSimIcon /></button>
    </div>
    )
}

export default Note;