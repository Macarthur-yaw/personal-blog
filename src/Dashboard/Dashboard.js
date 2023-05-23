import { Link, Outlet,useNavigate } from "react-router-dom";
import Posts from "./Posts";

import { faDashboard,faNewspaper,faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
const navigate=useNavigate();

const logOut=()=>{
navigate("/");
}
    return ( 

        <div className="contents">



           <div className="mainNav">

          

<div className="sub">
<div  className="User">

<FontAwesomeIcon icon={faUserCircle} style={{fontSize:"35px"}}/>

{/* <h2 style={{fontFamily:"Bodoni"}}>InfoGh</h2> */}
  </div> 

<div className="links">
 <Link to="/Dashboard/Home" className="link">


    <FontAwesomeIcon icon={faDashboard}/>  Dashboard
 </Link>


 <Link to="/Dashboard/Post" className="link">
 <FontAwesomeIcon icon={faNewspaper}/> Posts

 </Link>

 <Link to="/Dashboard/Articles" className="link">
 <FontAwesomeIcon icon={faNewspaper}/> Articles
 </Link>

 <Link to="/Dashboard/User" className="link">
 <FontAwesomeIcon icon={faPlusSquare}/> Add new User
 </Link>


    <Link to="/Dashboard/Post" onClick={logOut} className="link">
    
   <FontAwesomeIcon icon={faSignOutAlt}/>   Logout 
    
    
       
    </Link>

</div>


</div> 


           </div>
           <div className="body">

<Outlet/>

</div>





        </div>

 

     );
}
 
export default Dashboard;