// import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import { Link } from 'react-router-dom';
import { Routes,Route } from "react-router-dom";

import Home from './Components/Home';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import International from './Components/International';
import Body from './Components/Body';
import Signin from './Components/Signin';
import { useState } from 'react';

function App() {
const[bg,setBg]=useState(false);

const handleDatas=(data)=>{
setBg(data);
}


  return (
    <>

 <div className="App">
       <Navbar  handleData={handleDatas} />
         <div className='links'>
     
</div>

<Routes>
  
    
<Route path='/Home' element={<Home/>}>
  <Route index element={<Body/>} />
<Route path="Business" element={<Business />}  />
<Route path="Entertainment" element={<Entertainment />} />
   
</Route>

<Route path='/International' element={<International/>}/>
<Route path="/sign" element={<Signin/>}/>  

</Routes>
  
    </div>
    </>
    );
}

export default App;
