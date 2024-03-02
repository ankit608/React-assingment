import Registraion from "./Pages/Registration"
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
    return(
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Registraion></Registraion>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
       </Routes>
      </BrowserRouter>
      
       
       
    )
}

export default App;

