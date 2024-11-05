import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext); // Accessing context
  const { notes, getNotes } = context; // Destructuring 'notes'
  useEffect(() => {
    getNotes();
  }, []);

  // ... rest of the component

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>

        {notes.map((note, index) => {
          return <Noteitem key={`${note._id}-${index}`} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
