import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext); // Accessing context
    const {addNote} = context; // Destructuring 'notes'
    const [note, setNote] = useState({title:"",description: "", tag: "default"})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description: "", tag: ""})
        props.showAlert("Added Successfully", "success")
    }
    const onChange = (e) => {
        e.preventDefault();
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
       <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
                </div>
            
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary"onClick={handleClick}>Add Note</button>
            </form>
            </div>

    </div>
  )
}

export default AddNote
