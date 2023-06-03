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


    

<div className="flex flex-row gap-2 p-4">
<div className="flex flex-row border-2 p-2 rounded p-4 items-center gap-2">
    
    
    <FontAwesomeIcon className="text-5xl" icon={faNewspaper}/>
 
    <div className="flex flex-col">
        
    Number of Articles
    {display && 
  (<h3 className="text-xl">{info.num_filled_fields}</h3>) }
    </div>
    </div>
   
   <div className="flex flex-row border-2 rounded p-4 p-2 items-center gap-2">
   
    <FontAwesomeIcon className="text-5xl"  icon={faBook}/>
 
 <div  className="flex flex-col">
    Articles Today
    <h1 className="text-xl">
{info.todays_Articles}
</h1> 
    </div>
   </div>

   <div className="flex flex-row border-2 p-2 rounded p-4 items-center gap-2">
   
    <FontAwesomeIcon className="text-5xl"  icon={faUser}/>
 
    <div className="flex flex-col">
    Number of Subscribers
    <h1 className="text-xl">
{info.num_subscribers}
</h1>
    </div>

   </div>
   <div className="flex flex-row border-2 rounded p-4 p-2 items-center gap-2">
   
    <FontAwesomeIcon  icon={faBook} className="text-5xl"/>
 
   
<div className="flex flex-col">
Number of Users

<h1 className="text-xl">
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