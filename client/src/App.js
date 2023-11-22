import { useEffect } from "react"
import './App.css';

function App() {
  /*
  - Use useEffect to:
    - send a get request to '/cookies'
    - parse resp as json and console.log resp
    - console.log document.cookie
      - Note the cookies that are marked as HTTP only
  */
 
useEffect(() => {
  fetch('/cookies')
  .then(r => r.json())
  .then(data => {
    console.log(data)
    console.log(document.cookie)
  })
}, []);

  return (
    <div className="App">
      httpOnly demo
    </div>
  );
}

export default App;
