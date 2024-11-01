import React from "react";
import NoteContext from "./context/NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Niroop",
        "class": "6a"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rarry",
                "class": "9a"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.childern}
        </NoteContext.Provider>
    );
}

export default NoteState;
