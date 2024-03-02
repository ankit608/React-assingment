import React from 'react'


function Firststep() {
const handleChange = () =>{
  
}
    return (
     <div style={{width:"30%"}}>
        
  <form style={{display:"flex", flexDirection:"column" , gap:"20px"}}>
    <select placeholder='select option'onChange={handleChange} style={{width:"100%" , padding:"15px", border:"solid #CACACA 1px" , borderRadius:"8px"}}>
    <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <select onChange={(e)=>{handleChange()}} style={{width:"100%" , padding:"15px", border:"solid #CACACA 1px" , borderRadius:"8px"}}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <select onChange={handleChange} style={{width:"100%" , padding:"15px", border:"solid #CACACA 1px" , borderRadius:"8px"}}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
  </form>
     </div>
    
    
  )
}

export default Firststep

//border: Mixed solid #CACACA

/*
<select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
*/