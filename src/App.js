import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from "./Check.js";

function App() {
    const vardi = [
      "Bariks", 
      "Bebrs", 
      "Goed"
    ];

    const numbers = [
      7,
      41,
      101
    ]

    const booleans = [
      "true",
      "true",
      "false"
    ]

    const vardiJSX = vardi.map(vards => {
      return (
      <Hello displayName={vards}/>
      );
    })

    const counterJSX = numbers.map(number => {
      return <Counter corn={number}/>
    })

    const checkJSX = booleans.map((check, index) => {
      return <Check index={index} boolean={check}/>
    });
      
 return(
   <>
    {counterJSX}
    <br></br>
    <br></br>
    {vardiJSX}
    <br></br>
    <br></br>
    {checkJSX}
   </>
 )
}

export default App;
