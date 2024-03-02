import React from 'react'
import  First from "../components/firststep";
import  Second from  "../components/secondstep"
import  Third from "../components/thirdstep";
import Fourth  from "../components/fourthstep";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { red } from "@mui/material/colors";
import { Stepper,StepLabel,Step } from '@material-ui/core'

import "../App.css"

function Registration() {
    const[counter,setCounter] = useState(1)
    const[disable,setdisable] = useState(false)
 const stepHandler = (counter) =>{
     switch(counter){
       case 1:{
          return <First></First>
       }
       case 2:{
         return <Second></Second>
      }
      case 3:{
       return <Third></Third>
    }
    case 4:{
     return <Fourth flag={disable}></Fourth>
  }
  case 5:{
   return <First></First>
}
   
default:{
    return <First></First>
}

     }
      
 }
 return (
   <div className="App" style={{background: "#F1F1F1" , height:"100%"}}>
    {disable?<div style={{position:"absolute",width:"100%",height:"100%",zIndex:"1",background:"rgba(0, 0, 0, 0.6)"}}></div>:" "}

    <header style={{}} >
     <div className="header-container" style={{display:"flex",backgroundColor:"#D9D9D9", paddingBottom:"24px"}}>
       <div style={{display:"flex",gap:"10px" ,alignItems:"center", flex:1}}>
         <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", gap:"15px"}}>
           <span style={{fontSize:"16px"}}>Option 1</span> 
           <span><ArrowForwardIosIcon  sx = {{fontSize: 14}}></ArrowForwardIosIcon> </span>
           </div>
         <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", gap:"15px"}}><span style={{fontSize:"16px"}}>Option 1</span>
         <span><ArrowForwardIosIcon  sx = {{fontSize: 14}}></ArrowForwardIosIcon> </span> </div>
         <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", gap:"15px"}}><span style={{fontSize:"16px"}}>Option 1</span>
         <span style={{display:"flex" , alignItems:"center" , justifyContent:"center", gap:"15px"}}><ArrowForwardIosIcon  sx = {{fontSize: 14}}></ArrowForwardIosIcon> </span> </div>
        
         
          
       
         </div>
       <div  className=""style={{display:"flex",gap:"15px", marginRight:"60px"}}>
           <span style={{padding:"6px", fontSize: "14px",width: "76px",height: "20px",borderRadius: "8px", backgroundColor:"#357EBD" , color:"white"}}>Onboarding</span>
           <span style={{fontSize:"14px",padding:"6px"}}> mobile:+9789797775</span>
         </div>

     </div>
    </header>
    
    <div className="form-holder">
     <div style={{width:"90%", display:"flex" , justifyContent:"center" , alignItems:"center", paddingLeft:"5%"}}>
       <Stepper style={{width:"60%",backgroundColor: "#F1F1F1"}} activeStep={counter-1} orientation="horizontal">
         <Step>
           <StepLabel></StepLabel>
         </Step>
         <Step>
           <StepLabel></StepLabel>
         </Step>
         <Step>
           <StepLabel></StepLabel>
         </Step>
         <Step>
           <StepLabel></StepLabel>
         </Step>
       </Stepper>
      
         <div style={{backgroundColor:"#989898", height:"fit-content", padding:"0px 7px 1px 7px", color:"white", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center"}}><div>save as draft</div></div>
     </div>
     <div style={{width:"100%", display:"flex" , justifyContent:"center"}}>
       {stepHandler(counter)}
     </div>
    </div>
    
    <div style={{cursor:"pointer",position:"absolute", top:"90%",right:"9%", display:"flex", justifyContent:"flex-end", gap:"30px"}}>
       <div  onClick={()=>{counter!==1?setCounter(counter-1):setCounter(1)}} style={{cursor:"pointer",color:"#767676",backgroundColor:"white",border:"#CACACA solid 1px", padding:"0px 25px 1px 25px",fontSize:"16px"}}>{counter===1?"Close":"Back"}</div>
       <div style={{backgroundColor:"#357EBD", color:"white", padding:"0px 25px 1px 25px", fontSize:"16px"}} onClick={()=>{  counter!==4 ? setCounter(counter+1) : setdisable(true)}}>{counter===4?"finish":"Next"}</div>
      </div>
     
     
   </div>


 );
}

export default Registration