import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import './Registeration.css';

function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Repeatpassword, setRepeatPassword] = useState("");
  

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !Repeatpassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("afzalEmail", JSON.stringify(email));
      localStorage.setItem(
        "afzalPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <div className="main">
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Create Account</h3>
              <p onClick={handleClick} className="forgot-password text-right">
                Already have an Account?{" "}log in
                
              </p>
              

              <div className="form-group">
                
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="name"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="name"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>

              <div className="form-group-1">
                
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group-2">
                
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-Enter password"
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
              </div>
              


              

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign Up 
              </button>
              
              
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </div>
  );
}

export default Registration;
