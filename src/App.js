import Counter from "./Counter.js";
import Hello from "./Hello.js";

function App() {
    const vardi = [
      "Bariks", 
      "Bebrs", 
      "Goed"
    ];
    const vardiJSX = vardi.map(vards => {
      return (
      <Hello displayName={vards}/>
      );
    })
 return(
   <>
    <Counter/>
    <Hello/>
    {vardiJSX}
   </>
 )
}

export default App;
