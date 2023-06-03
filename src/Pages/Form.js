import {  useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
import { useEffect } from "react";
// import { response } from "express";

const Form = () => {
    const initialValues={
        name:"",
        password:"",
        error:false
    }

    function reducer(state,action){
switch(action.type){
    case 'UpdateName':{
        return {

...state,
name:action.name,

        }
    }
    case 'UpdatePassword':{
        return {
            ...state,
            password:action.password
        }
    }
    case 'UpdateState':{
        return {
            ...state,
            error:state.error=true
        }
    }
    
    default:return state;
}
    }
const[state,dispatch]=useReducer(reducer,initialValues);
// const[error,setError]=useStates(false);
const navigate=useNavigate();



const handleSubmit=(e)=>{

    console.log(state.name);
    e.preventDefault();
    let fData=new FormData();
fData.append('name',state.name);
fData.append('password',state.password);
const url="http://localhost/Posts/Check.php";
axios.post(url,fData).then(response=>{console.log(response)
if(response.data.success){
    navigate("/Dashboard");
    sessionStorage.setItem("login","true");
}
else{
dispatch({type:'UpdateState'});
    
}
}).catch(error=>console.log(error));



//     if(state.name==="Kevin" && state.password==="kevin"){
//         console.log("true");
//         sessionStorage.setItem("login","true");
// navigate("/Dashboard");

//     }
//     else{
//         console.log("false");
//     }
}
const handleChange=(e)=>{
dispatch({type:"UpdateName",name:e.target.value});

}
const handlePassword=(e)=>{
    dispatch({type:"UpdatePassword",password:e.target.value});
}
    return (
        <>        <div className="flex justify-center  items-center  h-screen " >
            
<form onSubmit={handleSubmit} className="flex shadow-xl flex-col gap-6 w-96 p-4  ">
    <h3 className="text-center text-xl">Welcome</h3>
   
    <input className="border-2 text-center outline-none" name="name"
onChange={handleChange}  value={state.name}    type="text" placeholder="Username"/>


    <input className="border-2 text-center outline-none" name="password"
 onChange={handlePassword}  value={state.password}
  type="password" placeholder="Password"/>

    <button className="border-2 text-white bg-black border-none p-1 hover:bg-slate-700">Sign in</button>
    <div>
{state.error && (<div className="text-center text-red-500 p-2">Wrong Credentials.</div>)}
</div>  
      

</form>
  </div>
        </>
 );
}
 
export default Form;