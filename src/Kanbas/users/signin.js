import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/kanbas/Account");
  };
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column">
      <h1>Signin</h1>
      <input className="form-control w-25" placeholder="username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control w-25" placeholder="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary mt-2 col-2" onClick={signin}> Signin </button>
      </div>
      
    </div>
  );
}
export default Signin;