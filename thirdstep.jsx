import React, { useState } from 'react'
import Addoption from './Addoption'

function Thirdstep() {

   const[add,setadd] = useState()
  const handleChange =()=>{

  }
  return (
    <div style={{width:"30%"}}>
        <form style={{display:"flex", flexDirection:"column" , gap:"20px"}}>
    <select placeholder='select option'onChange={handleChange} style={{width:"100%" , padding:"15px", border:"solid #CACACA 1px" , borderRadius:"8px"}}>
    <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <div style={{fontSize:"12px" ,display:"flex", justifyContent:"flex-end"}}>Cant find Occasion?<span style={{color:"#357EBD",cursor:"pointer"}} onClick={()=>{setadd(true)}}>Add Option</span></div>
      <select onChange={(e)=>{handleChange()}} style={{width:"100%" , padding:"15px", border:"solid #CACACA 1px" , borderRadius:"8px"}}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <div style={{fontSize:"12px" ,display:"flex", justifyContent:"flex-end"}}>Cant find Occasion?<span style={{color:"#357EBD",cursor:"pointer"}} onClick={()=>{setadd(true)}}>Add Option</span></div>

  </form>
 

   {add?<Addoption add={setadd}></Addoption>:""}
    </div>
  )
}

export default Thirdstep


//
