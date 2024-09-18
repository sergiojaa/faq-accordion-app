import React from 'react'

export default function DivsHide({show,setShow}) {
    const hide = () => {
        setShow(!show); 
    }
       
  return (
    <div>
       { show ? <div style={{backgroundColor:"red",width:"100px", height:"100px"}}  >div1</div>
: null }
<div style={{backgroundColor:"yellow",width:"100px", height:"100px"}}  >div2</div>

<button onClick={hide}>Toggle Div 1</button>
    </div>
  )
}
