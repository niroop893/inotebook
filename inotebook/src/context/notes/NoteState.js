import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

 
  // Get all Notes
const getNotes = async () => {
  // API Call 
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
    }
  });
  if (response.status === 204) {
    console.log("No content available");
    setNotes([]);
  } else if (response.ok) {
    const json = await response.json();
    setNotes(json);
    console.log(json);
  } else {
    console.error("Failed to fetch notes");
  }
}


  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
    
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
      }
    });
    const json = response.json();
    console.log(json)
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    console.log(id, newNotes);
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;