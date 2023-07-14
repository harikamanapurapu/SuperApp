import React, { useState } from "react";
import '../Components/Notes.css'

function Notes(){
    const [notes,setNotes]=useState(localStorage.getItem("notes")||"")

    const handleChange=(e)=>{
        setNotes(e.target.value)
        localStorage.setItem("notes",notes);
    }
    return(
        <div className="notes-main">
            <p className="notesHeader">All Notes</p>
            <textarea cols={20} className="textArea" value={notes} onChange={handleChange}></textarea>
        </div>
    )
}

export default Notes
