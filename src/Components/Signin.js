import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
const[perr,setPerr]=useState(false);
const[check,setCheck]=useState(false);    
const[disables,setDisables]=useState(false);
const navigate=useNavigate();

const handleSubmit=(e)=>{
e.preventDefault();
if(name.length<1 ){
    setError(true);
    }
    if( password.length<1){
        setPerr(true);
    }

    }
    const handleName=(e)=>{
setName(e.target.value);
setError(false);
}
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        setPerr(false);
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

    function submitForm(){
        console.log(name);
        console.log(password);
navigate("/Dashboard");
// console.log(check);        
            
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

<h4 style={{color:"gray"}}>OR</h4>

<h4 style={{textAlign:"left",fontSize:"16px"}}>Username</h4>
    <input type="text" className="input" placeholder="Username" value={name} onChange={handleName}/>
    <br>
    </br>
    {
        error && (<div
        style={{textAlign:"left",color:"red"}}

        >
            <br></br>This field can't be empty</div>)
    }
    <br/>
    <h4 style={{textAlign:"left"}}>Password</h4>
    <input type="password" className="input" value={password} placeholder="Password" onChange={handlePassword}/>
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
    <button className="btnSubmit" onClick={submitForm}>Submit</button>

</div>
   
    ):(
        <div>
            <div>
<br/>
    <button disabled 
    style={{backgroundColor:"#A6ACCD"}}
    className="btnSubmit" onClick={submitForm}>Submit</button>

</div>

        </div>
    )
}

</form>
&nbsp;
<h5>Dont have an account <a href="">Sign up here</a>
</h5>
        </div>
     );
}
 
export default Signin;