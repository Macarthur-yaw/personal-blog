import { useEffect } from "react";
import useAuth from "../Pages/useAuth";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeDash from "./HomeDash";

const Dashboard = () => {
    const auth=useAuth();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!auth){
            navigate("/Form");
            console.log("name is not set");
        }
      
    })
    
    return <HomeDash/>
}
 
export default Dashboard;