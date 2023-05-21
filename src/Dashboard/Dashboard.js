import { Link, Outlet } from "react-router-dom";
import Posts from "./Posts";
import { faDashboard,faNewspaper,faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    return ( 

        <div className="contents">

            
<div className="sub">

<div  className="User">

<h2>infoGh</h2>
</div>

<div className="links">
<Link to="/Dashboard/Home" className="link">


    <FontAwesomeIcon icon={faDashboard}/>  Dashboard
</Link>


 <Link to="/Dashboard/Post" className="link">
 <FontAwesomeIcon icon={faNewspaper}/> Articles

 </Link>

 <Link to="/Dashboard/Post" className="link">
 <FontAwesomeIcon icon={faNewspaper}/> Posts
 </Link>

 <Link to="/Dashboard/Post" className="link">
 <FontAwesomeIcon icon={faPlusSquare}/> Add new User
 </Link>


</div>
 <div style={{paddingBottom:"20px"}}>

    <Link to="/Dashboard/Post" className="linkLogout">
    <button>
    Logout
    </button>
    
       
    </Link>
 </div>

</div>



         <Outlet/>



        </div>

 

     );
}
 
export default Dashboard;