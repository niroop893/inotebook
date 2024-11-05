import React, { useContext, useEffect } from 'react';
import NoteContext from './noteContext';

const NotesList = () => {
  const { notes, getNotes } = useContext(NoteContext);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        notes.map(note => (
          <div key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <p>{note.tag}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
