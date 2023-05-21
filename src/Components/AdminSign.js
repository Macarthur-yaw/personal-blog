import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AdminSign = () => {
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
const mydata={
    user_name:name,
    pass_word:password
}
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

    return ( 

        <div className="forms">
            
            <form onSubmit={handleSubmit}>
<div className="formsInfo">
    <h3 >infoGh!</h3>

<h4 style={{fontWeight:"bold",color:"indigo"}}>Publish credible news on our website</h4>

</div>
<br/>


<h4 style={{textAlign:"left",fontSize:"16px"}}>Username</h4>
    <input type="text" className="input" placeholder="Username" name="user" value={name} onChange={handleName}/>
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
    <input type="email" className="input" value={password} placeholder="Password" name="password" onChange={handlePassword}/>
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
    <button className="btnSubmit" onClick={submitForm}>Sign in</button>

</div>
   
    ):(
        <div>
            <div>
<br/>
    <button disabled 
    style={{backgroundColor:"#A6ACCD"}}
    className="btnSubmit" onClick={submitForm}>Sign in</button>

</div>

        </div>
    )
}

</form>
        </div>
     );
}
 
export default AdminSign;