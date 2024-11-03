import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    

    const notesInitial = [
      {
        "_id": "6721e3a886fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e6338f2b99241ffdd398f5",
        "user": "67207cd8c70f9c82s0ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "6727607ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd40ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f12b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae27175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd00ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e6338f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae71075ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e31a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b92417ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "6762707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a846fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b29241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae71375ef137ca272882bc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) =>{
      const note = {
        "_id": "672707ae71375ef137ca02bc641",
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
    const editNote = (id) =>{

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
