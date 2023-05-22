import { useState,useEffect } from "react";

const Articles = () => {
   
    const[info,setInfo]=useState([]);
    const[error,setError]=useState(false);
    
    useEffect(()=>{
    const url="http://localhost/Posts/index.php";
    
        fetch(url).then((response)=>response.json()).then((data)=>setInfo(data.result));
    
    },[])
    console.log(info);
    const gainInfo=info.map(content=>
        // content.name
        {
            return (
                <div className={content.id}>{content.name}</div>
            )
        }
        )
    console.log(gainInfo);
    
    
   
    return ( 
        <div>{gainInfo}</div>
     );
}
 
export default Articles;