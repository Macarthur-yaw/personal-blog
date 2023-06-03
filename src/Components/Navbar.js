import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
// import { response } from "express";



const Navbar = () => {
  const [show, setShow] = useState(false);
const[congrats,setCongrats]=useState(false);
const[name,setName]=useState("");
const[email,setEmail]=useState("");

  function toggleDialog() {
    setShow(!show);
  }
function showCongrats(){

  
}
function handleSubmit(e){
  e.preventDefault();
  let FData=new FormData();
FData.append('name',name);
FData.append('email',email);

const url="http://localhost/Posts/Subscribers.php";
axios.post(url,FData).then(response=>console.log(response)).catch(error=>console.log(error));
  console.log(email);
  if(name.length>1 && email.length>1){
    setCongrats(true);
setName("");
setEmail("");
  }
}

  return (
    <div className="p-4 text-slate text-xl flex flex-row shadow-md border-2 border-white items-center justify-between">
  <h1 className="text-">
  NEWSLETTER

    </h1>    
      <span className="flex flex-row items-center text-sm md:text-xl gap-10">
      <a href="https://kmacarthur-vercel.vercel.app/">Home</a>
        <h1>Blog</h1>
        <FontAwesomeIcon
          onClick={toggleDialog}
          icon={faBell}
          className="cursor-pointer"
        />
      </span>

      {show && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded  lg:w-1/2 sm:max-w-md h-96 flex flex-col gap-2">
            <h1 onClick={toggleDialog} className="cursor-pointer text-2xl text-end">
              <FontAwesomeIcon icon={faTimes} />
            </h1>
            <h3 className="text-sm text-center">
              Subscribe to receive the latest news updates
            </h3>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded  h-96 flex flex-col gap-2">
            <input
              type="text"
              className="text-center border-2  rounded"
              placeholder="Name"
onChange={(e)=>setName(e.target.value)}
value={name}
name="name"
/>
            <input
              type="email"
              placeholder="Email"
              className="text-center border-2  rounded"
 onChange={(e)=>setEmail(e.target.value)}
 value={email}
 name="email"
 />
            <button className="border-2 border-black px-2 text-sm py-1 bg-black text-white rounded">
              Subscribe
            </button>

            </form>        
            {congrats && (<div className="border-2 border-slate-500 p-2">You have successfully subscribed</div>)}
        
              </div>
</div>
      )}
    </div>
  );
};

export default Navbar;
