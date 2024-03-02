import React, { useState } from 'react'
import Addinput from './Addinput';
import Success from './success';


export default function Fourthstep({flag}) {
    
   const[state,setState] = useState(1) 
   let numberArray = new Array(state)
    for(let i = 0 ; i<numberArray.length; i++){
       numberArray[i] = i
    }
  
  const handleChange = ()=>{

  }
  return (
    
    <div style={{width:"30%", fontSize:"14px"}}>
    <form style={{display:"flex", flexDirection:"column"}}>
      <div style={{width:"100%", padding:"10px"}}><div style={{padding:"4px"}}>Option</div><input placeholder='Enter Option' type='text' style={{width:"91%", padding:"10px", borderRadius:"5px"}}></input></div>
      <div style={{width:"100%", padding:"10px"}}><div style={{padding:"4px"}}>Option</div><input placeholder='Enter Option' type='text' style={{width:"91%", padding:"10px", borderRadius:"5px"}}></input></div>
       
       <div style={{width:"100%"}}>
        <div style={{padding:"20px 0px 20px 20px", backgroundColor:"white"}}>
            {numberArray.map((i)=>{
              return <Addinput setstate={setState} state = {state}></Addinput>
            })}
           
        </div>
       </div>
       {flag? <Success></Success>:""}
      
    </form>

</div>
  )
}
