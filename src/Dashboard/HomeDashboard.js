import { useState,useEffect } from "react";
import { faBook,faNewspaper,faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HomeDashboard = () => {
   
 
    const [info, setInfo] = useState([]);
// const[initial,setInitial]=useState([]);
const[loading,setLoading]=useState(false); 
// const [error, setError] = useState(false);
const[display,setDisplay]=useState(true);

useEffect(() => {
  const url = "http://localhost/Posts/Count.php";
setLoading(true);
setDisplay(false);
  fetch(url).then((response) => 
  response.json()
).then((data) => {setInfo(data);
setLoading(false);
setDisplay(true);

})
    .catch((error) => console.log(error));
}, []);

console.log(info);
// const getData=intial.map((content)=>{
//     return (
//         <div>{content.num_filled_fields}</div>
//     )
// })

// console.log("the numbee of row is"+info.num_filled_fields);
   
    return ( 
        <div className="dashboardBody">
            {/* {getData} */}
   
   <div>
{loading && "Loading"}

<div>
<h3 style={{fontWeight:"bold"}}>
 
    Dashboard
    </h3>
    <br/>
</div>
    

<div className="DashBoxes">
<div className="numUsers">
    
    <div>
    <FontAwesomeIcon style={{fontSize:"35px",color:"indigo"}} icon={faNewspaper}/>
 
    </div>

    <div>
        
    Number of Articles
    {display && 
  (<h3>{info.num_filled_fields}</h3>) }
    </div>
  
    </div>
   
   <div className="numUsers">
   <div>
    <FontAwesomeIcon style={{fontSize:"35px",color:"indigo"}} icon={faBook}/>
 
    </div>
    <div>
    Articles Today
    <br>
    </br>
    <h1>
{info.todays_Articles}
</h1> 
    </div>
   </div>

   <div className="numUsers">
   <div>
    <FontAwesomeIcon style={{fontSize:"35px",color:"indigo"}} icon={faUser}/>
 
    </div>
    <div>
    Number of Subscribers
    <br>
    </br>
    <h1>
{info.num_subscribers}
</h1>
    </div>

   </div>
   <div className="numUsers">
   <div>
    <FontAwesomeIcon style={{fontSize:"35px",color:"indigo"}} icon={faBook}/>
 
    </div>
<div>
Number of Users

<h1>
{info.admin}
</h1>
</div>


   </div>

</div>
        </div>
            </div>
     );
}
 
export default HomeDashboard;