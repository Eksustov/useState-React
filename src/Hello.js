import { useState } from "react";

function Hello(props){

    const [nameChange, setNameChange] = useState(props.displayName);

    function handleNameChange(event){
        setNameChange(event.target.value);
    }

    return(
        <>
            <input type="text" value={nameChange} onChange={handleNameChange}/>
            <h1>Hello, {nameChange}!</h1>
        </>
    )
}

export default Hello;