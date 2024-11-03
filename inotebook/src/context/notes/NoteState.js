import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    

    const notesInitial = [
      {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      },
      {
        "_id": "6721e3a86fd0ee38f83e1907",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Frist title check",
        "tag": "personal",
        "date": "2024-10-30T07:43:36.348Z",
        "__v": 0
      },
      {
        "_id": "6721e638f2b9241ffdd398f5",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "First Title",
        "description": "Third title check",
        "tag": "personal",
        "date": "2024-10-30T07:54:32.393Z",
        "__v": 0
      },
      {
        "_id": "672707ae7175ef137cabc641",
        "user": "67207cd8c70f9c820ef8c800",
        "title": "Work Title",
        "description": "work title check",
        "tag": "work",
        "date": "2024-11-03T05:18:38.928Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
