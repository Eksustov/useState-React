import { useState } from "react";

function Check(props){
    const [check,setCheck] = useState(props.boolean);

    function handleCheck(event){
        setCheck(event.target.value)
    }

    return <input type="checkbox" onChange={handleCheck} checked={check}/>
}

export default Check;