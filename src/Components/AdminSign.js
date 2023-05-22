import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminSign = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [perr, setPerr] = useState(false);
  const [check, setCheck] = useState(false);
  const [disables, setDisables] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 1) {
      setError(true);
    }
    if (password.length < 1) {
      setPerr(true);
    }

    if (name.length >= 1 && password.length >= 1) {
     
      const url = "http://localhost/Posts/Check.php";

      let formData=new FormData();
      formData.append('name',name);
      formData.append('password',password);
      axios.post(url, formData).then((response) => {
          console.log(response.data); 
          console.log(response.data.success);
          if(response.data.success){
            navigate("/Dashboard"); 
          }
          else{
            navigate("/Admin");
          }
           
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPerr(false);
  };

  const handleSelect = (e) => {
    setCheck(e.target.checked);

    if (check) {
      setDisables(false);
    } else {
      setDisables(true);
    }
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="formsInfo">
          <h3>infoGh!</h3>
          <h4 style={{ fontWeight: "bold", color: "indigo" }}>
            Publish credible news on our website
          </h4>
        </div>
        <br />

        <h4 style={{ textAlign: "left", fontSize: "16px" }}>Username</h4>
        <input
          type="text"
          className="input"
          placeholder="Username"
          name="user"
          value={name}
          onChange={handleName}
        />
        <br />

        {error && (
          <div style={{ textAlign: "left", color: "red" }}>
            <br />
            This field can't be empty
          </div>
        )}
        <br />

        <h4 style={{ textAlign: "left" }}>Password</h4>
        <input
          type="password"
          className="input"
          value={password}
          placeholder="Password"
          name="password"
          onChange={handlePassword}
        />
        <br />

        {perr && (
          <div style={{ textAlign: "left", color: "red" }}>
            <br />
            This field can't be empty
          </div>
        )}
        <br />

        <input
          type="checkbox"
          checked={check}
 onChange={handleSelect}/> By continuing you agree to the  <a href="">terms and conditions</a>

<br/>
{
    disables ? (
<div>
<br/>
    <button className="btnSubmit">Sign in</button>

</div>
   
    ):(
        <div>
            <div>
<br/>
    <button disabled 
    style={{backgroundColor:"#A6ACCD"}}
    className="btnSubmit">Sign in</button>

</div>

        </div>
    )
}

</form>
        </div>
     );
}
 
export default AdminSign;