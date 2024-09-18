import { useState } from "react"
import DivsHide from "./components/DivsHide"


  function App() {
   const [show, setShow] = useState(true)
  

   
    return (
      <div>
      <DivsHide show={show} setShow={setShow} />
    
     </div>
    )}
  

  export default App
