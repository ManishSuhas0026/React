import Greet from "./Greet";
import Contact from "./Contact";
import Count from "./Count";

function App() {
  let name = "Manish";
  let age = 24;
  return(
    <>
    <h1>Welcome</h1>
    <Greet fname={name} fage = {age}/>
    
    <Contact fname={name} />
    <Count />
    </>
  )
}

export default App;