import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = [ ]
    const [notes, setNotes] = useState(notesInitial);

    //Get all Notes
    const getNotes = async () =>{
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: "GET",
        headers: {"Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
        }
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }
      
     
    // Add a Note
    const addNote = async (title, description, tag) =>{
      // eslint-disable-next-line
      const response = await fetch(`${host}/api/notes/addnote/`, {
                method: "POST",
        body: JSON.stringify({title, description, tag}),
        headers: {"Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
        },
      });
      
      const note = {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }

    // Delete a Note  
    const deleteNote = (id) =>{
      console.log("Deleting note with id" +id)
      const newNotes = notes.filter((note)=>{return note._id !== id})
      setNotes(newNotes)
    }
    //Edit a Note
    const editNote = async (id, title, description, tag) =>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        body: JSON.stringify({title, description, tag}),
        headers: {"Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyMDdjZDhjNzBmOWM4MjBlZjhjODAwIn0sImlhdCI6MTczMDI2ODU3OX0.1bgsKaN7smlqAoc08Ke1F90wJQE5Dj3kIifLlf4woF4"
        },
      });
      // eslint-disable-next-line
     const json = response.json();
     
     //
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
        
      }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
  }


export default NoteState;
