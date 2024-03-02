import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
function Addoption({add}) {
  return (
 
    <div style={{position:"absolute", display:"flex", flexDirection:"column", gap:"0px",width:"30%",top:"16%", backgroundColor:"white", borderRadius:"30px"}}>
    <div style={{display:"flex", justifyContent:"center", backgroundColor:"#357EBD", borderTopLeftRadius:"30px", borderTopRightRadius:"30px", padding:"10px", color:"white"}}>Add option <CloseIcon  style={{position:"absolute" , right:"15px"}}onClick={()=>{add(false)}}></CloseIcon></div>
    <div style={{paddingLeft:"20px", paddingRight:"20px"}}><div style={{padding:"6px"}}>option</div><input type='text' style={{width:"98%",borderRadius:"5px",padding:"8px"}}></input></div>
    <div style={{paddingLeft:"20px", paddingRight:"20px"}}><div style={{padding:"6px"}}>option</div><textarea type='text' style={{width:"98%",borderRadius:"5px",padding:"8px", height:"150px"}}></textarea></div>
    <div style={{paddingLeft:"20px", paddingRight:"20px"}}><div style={{padding:"6px"}}>option</div><input type='text' style={{width:"98%",borderRadius:"5px",padding:"8px"}}></input></div>
     <div style={{display:"flex", padding:"20px", justifyContent:"center"}}>
     <div style={{backgroundColor:"#357EBD", color:"white", padding:"3px 25px 3px 25px", fontSize:"16px"}}>Next</div>
     </div>
  </div>
  )
}

export default Addoption