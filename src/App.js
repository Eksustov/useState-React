import { useState } from "react";

function App() {
  const [corn, setCorn] = useState(0)
  function farmCorn(){
    setCorn(corn + 1);
  }
  function sellCorn(){
    setCorn(corn - 1);
  }
  function abolishCorn(){
    setCorn(corn - corn);
  }
 return(
   <div className="App">
     <input type="number" id="name" name="name"/>
     <button type="button" onClick={farmCorn}>+1 Corn</button>
     <button type="button" onClick={abolishCorn}>Abolish Corn</button>
     <button type="button" onClick={sellCorn}>-1 Corn</button>
     <h1>{corn}</h1>
   </div>
 )
}

export default App;
