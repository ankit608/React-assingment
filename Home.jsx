import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [Image,setImage] = useState([])
    
  const loadImage= async () => {
      const data =  await axios.get("https://dog.ceo/api/breeds/image/random") ;
    
    
      setImage([...Image,data.data.message])

      console.log(Image)
    
      
      
  }
  return (
   <div>
        <div style={{backgroundColor:"green" , padding:"10px" ,width:"100px", color:"white", marginLeft:"50%"}} onClick={()=>{loadImage()}}> Load Image</div>
        <div style={{height:"10vh"}}></div>
         {Image.map((a)=>{
                
                return <img src={a} style={{width:"30vh", height:"30vh"}}></img>
            })}   
            
         
       
         
   </div>
      
    
    
  )
}

export default Home

//