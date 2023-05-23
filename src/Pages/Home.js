// import { response } from "express";
import { useEffect, useState } from "react";
// import { useEffect } from "react"

 const Home = () => {

    const[info,setInfo]=useState([]);
    useEffect(()=>{

        const url="http://localhost/Posts/Display.php";
        fetch(url).then(response=>response.json()).then((data)=>setInfo(data)).catch(error=>console.log(error));

    },[])

    console.log(info);
    return ( 
        <div>
        
<div className="mainDiv">


</div>
<div className="sectionDiv">
hshddhgs
</div>

        </div>
     );
}
 export default Home;