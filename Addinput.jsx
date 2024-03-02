import React from 'react'

function Addinput({setstate,state}) {
  return (
    <div>
            <div style={{padding:"7px"}}>OptionA</div>
          <input type='text' placeholder='Enter Option' style={{width:"90%", padding:"10px",borderRadius:"5px"}}></input>
          <div style={{padding:"4px", color:"#357EBD", cursor:"pointer"}} onClick={()=>{setstate(state+1)}}>+add</div>
          </div>
  )
}

export default Addinput