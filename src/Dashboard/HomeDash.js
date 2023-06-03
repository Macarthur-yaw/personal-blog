import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const HomeDash = () => {
  const navigate=useNavigate();
  function logOut(){
   
    sessionStorage.removeItem('login');
    // Or clear all items from sessionStorage
    sessionStorage.clear();
    navigate("/Form");
  
  
  }
  return (
    <div className="flex flex-row gap-2 shadow-sm">
      <div className="flex flex-col gap-6 pt-8  bg-slate-200 w-48 h-screen">

<FontAwesomeIcon icon={faUserCircle} className="text-xl"/>

      <Link to="/Dashboard/Home" className="hover:bg-slate-500 p-2 cursor-pointer">        <span >
            <FontAwesomeIcon icon={faDashboard}/> Dashboard
        
        </span></Link>

        <Link to="/Dashboard/Post" className="hover:bg-slate-500 p-2 cursor-pointer">       <span >
<FontAwesomeIcon icon={faPlusSquare}/> Post

        </span></Link>

        <Link to="/Dashboard/Details" className="hover:bg-slate-500 p-2 cursor-pointer">
<span >

    <FontAwesomeIcon icon={faBook}/> Articles
</span></Link>

<Link onClick={logOut} className="hover:bg-slate-500 p-2 cursor-pointer">
<span >
    <FontAwesomeIcon icon={faRightFromBracket}/> Log out
  
</span></Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default HomeDash;
