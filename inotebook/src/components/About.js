import React from 'react';
import { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    a.update()  
    }, [])
  
  return (
    <div>
      This is About {a.name} and he is in class {a.class}
    </div>
  )
}

export default About
