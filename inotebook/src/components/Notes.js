import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext); // Accessing context
    const {notes, addNote} = context; // Destructuring 'notes'
    // ... rest of the component
    <AddNote />

    return (
        <>
        <div className="row my-3">
            <h2>You Notes</h2> 
            
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </>
    )

}

export default Notes
