import { faSearch,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const[login,setLogin]=useState(false);

    const navigate=useNavigate();
   const loginWindow=()=>{
    navigate("/Sign");
    setLogin(!false);
   }
   const navigateHome=()=>{
    navigate("/");
   }
   
   return ( 
<>
<div className={login ? "hidden": "Nav"} >
<div className="headerIcon" onClick={navigateHome}>
<h3>infoGH</h3><h4>!</h4>
    


</div>
    
        <div>
            <input type="text" placeholder="Search" className="searchBar"/>
      <button className="btnSearch"> 
      <FontAwesomeIcon icon={faSearch}/>
      </button>
        </div>

      <div>
<div>
<button onClick={loginWindow} className="btnSignin">Sign in
        </button>
    
</div>
<div>
<button className="btnUser" onClick={loginWindow}>  <FontAwesomeIcon icon={faUserCircle} className="userIcon"/>
      </button>
    
</div>
        
      </div>

        </div>
        <div className={login? "hidden":"subNav"}>
<ul>
    <li>
     <Link to='Home'>Home</Link></li>
    <li>
        <Link to='Business'>Business</Link></li>
    <li>
        <Link to='Entertainment'>Entertainment</Link>
        </li>
    <li>
        <Link to='Political'>Political</Link>
    </li>
    <li>
        <Link to='International'>International</Link>
        </li>

</ul>
        </div>
   


        </>
     );
}
 
export default Navbar;
<div>

</div>