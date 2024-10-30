import { useState } from "react"
import DivsHide from "./components/DivsHide"
import Rate from "./components/Rate"
sss

  function App() {
   const [show, setShow] = useState(true)
  

   
    return (
      <div>
      <DivsHide show={show} setShow={setShow} />
      <Rate/>
    
     </div>
    )}
  

  export default App
