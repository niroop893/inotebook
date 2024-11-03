import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext); // Accessing context
    const {notes, setNotes} = context; // Destructuring 'notes'
    // ... rest of the component


    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note.id} note={note}/>  
            })}
            </div>
    )
}

export default Notes
