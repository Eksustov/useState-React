import { useState } from "react";

function Counter(props){
  const [corn, setCorn] = useState(props.corn)
  const [cornChange, setCornChange] = useState(1);

  function farmCorn(){
    setCorn(corn + parseInt(cornChange));
  }

  function sellCorn(){
    setCorn(corn - parseInt(cornChange));
  }

  function abolishCorn(){
    setCorn(corn == 0);
    setCorn(corn - corn);
  }

  function handleCornChange(event){
    setCornChange(event.target.value);
  }

 return(
   <div className="App">
     <input type="number" value={cornChange} onChange={handleCornChange}/>
     <button type="button" onClick={farmCorn}>+{cornChange} Corn</button>
     <button type="button" onClick={abolishCorn}>Abolish Corn</button>
     <button type="button" onClick={sellCorn}>-{cornChange} Corn</button>
     <h1>{corn}</h1>
   </div>
 )
}



export default Counter;