import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Cancel } from '@mui/icons-material';
function Success() {
  return (
    <div style={{position:"absolute", width:"30%", height:"fit-content" ,backgroundColor:"white" , zIndex:"2", paddingBottom:"20px"}}>
         <div style={{position:"absolute", right:"10px",top:"10px"}}> <Cancel></Cancel></div>
        
         <div>
           <div style={{width:"100%",display:"flex", justifyContent:"center"}}> <CheckCircleIcon style={{color:"#4CAF50"}} sx={{ fontSize:150}}></CheckCircleIcon></div>  
             <div style={{width:"100%",display:"flex", justifyContent:"center",}} ><div style={{fontSize:"2rem",color:"#4CAF50"}}> Saved</div></div>
             <div style={{width:"100%",display:"flex", justifyContent:"center",}} ><div style={{fontSize:"2rem",color:"#4CAF50"}}> Successfully</div></div>
         </div>
       </div>
  )
}

export default Success