import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminSign from "./AdminSign";
// import { response } from "express";
// import { sdCard } from "fontawesome";


const Signin = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
const[perr,setPerr]=useState(false);
const[check,setCheck]=useState(false);    
const[disables,setDisables]=useState(false);
const[congrat,setCongrat]=useState(false);

const navigate=useNavigate();

const adminSignin=()=>{
    navigate("/Admin");
}

const handleSubmit=(e)=>{
    e.preventDefault();
if(name.length<1  ){
    setError(true);
   
    


} else if(password.length<1){
    setPerr(true);
}
else{
    const url="http://localhost/Posts/Subscribers.php";
    let sData=new FormData();
    sData.append('name',name);
    sData.append('email',password);
    
    
    axios.post(url,sData).then((response)=>
    {console.log(response.data)
 setCongrat(true) ;  
 setName("");
 setPassword("");
}).catch((error)=>console.log(error));
    
}
    // if( password.length<1){
    //     setPerr(true);
    // }

    }
    const handleName=(e)=>{
setName(e.target.value);
setError(false);
setCongrat(false);
}
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        setPerr(false);
   setCongrat(false);
    }
    const handleSelect=(e)=>{

        setCheck(e.target.checked);
// console.log(check);
if(check){
    setDisables(false);
}else{
        setDisables(true);

}
    }

    
//    console.log(check);
    return ( 
        <div className="forms">
<form onSubmit={handleSubmit}>
<div className="formsInfo">
    <h3 >infoGh!</h3>

<h4 style={{fontWeight:"bold",color:"indigo"}}>Subscribe to our newsLetter</h4>
 {/* Subscribe to our newsLetter */}

 <button className="btnGoogle">

    Sign in with Google
 </button>
</div>
<br/>
{congrat && (<div>You have subscribed</div>)}
<h4 style={{color:"gray"}}>OR</h4>

<h4 style={{textAlign:"left",fontSize:"16px"}}>Username</h4>
    <input type="text" name="user" className="input" placeholder="Username" value={name} onChange={handleName}/>
    <br>
    </br>
    {
        error && (<div
        style={{textAlign:"left",color:"red"}}

        >
            <br></br>This field can't be empty</div>)
    }
    <br/>
    <h4 style={{textAlign:"left"}}>Email</h4>
    <input type="email" className="input" value={password} placeholder="Email" name="email" onChange={handlePassword}/>
    <br>
    </br>
{perr && (<div style={{textAlign:"left",color:"red"}}>
    <br></br>
    This field can't be empty</div>)}
   <br/>
<input type="checkbox" checked={check} onChange={handleSelect}/> By continuing you agree to the  <a href="">terms and conditions</a>

<br/>
{
    disables ? (
<div>
<br/>
    <button className="btnSubmit">Subscribe</button>

</div>
   
    ):(
        <div>
            <div>
<br/>
    <button disabled 
    style={{backgroundColor:"#A6ACCD"}}
    className="btnSubmit">Subscribe</button>

</div>

        </div>
    )
}

</form>
&nbsp;
<h5>You can publish News <button onClick={adminSignin}>Publish</button>
</h5>

        </div>
     );
}
 
export default Signin;