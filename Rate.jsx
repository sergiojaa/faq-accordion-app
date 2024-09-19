import React from 'react'

export default function Rate() {
    const numbers = [1,2,3,4,5]
    const [submit, setSubmit] = useState(false);
    const [rate,setRate]=useState(0)
    const handleSubmit=()=>{
      setSubmit(true)
    }
  const handleClick=(number)=>{
    setRate(number)
    setSubmit(false);
  
  }
   
  return (
    <div>
    {/* <DivsHide show={show} setShow={setShow} /> */}
   {numbers.map(number => (
    <button onClick={ ()=>handleClick(number)} style={{backgroundColor: rate == number ? "orange" : "" }} key={number} >{number}</button>
   ))}
   
   <button onClick={handleSubmit} type="submit">Submit</button>
        { submit ? <p>thanks for choosing {rate}</p> : null }
   </div>
  )}

