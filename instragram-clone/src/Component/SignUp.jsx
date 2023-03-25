import { useState } from "react";
import "./Component.css";
import {useNavigate} from 'react-router-dom';

function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        username:"",
        password: "",
      });
  const route = useNavigate();

  function signup(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("userDataInsta")) || [];

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        flag = true;
      }
    }
    if (flag) {
      setUserData({ ...userData, ["email"]: "" });
      alert("Email Already Exsited");
      
    } else if (userData.password.length < 8) {
      setUserData({ ...userData, ["password"]: "" });
      alert("Password must of 8 chracters");
   
    } else {
      dataFromLs.push(userData);
      localStorage.setItem("userDataR", JSON.stringify(dataFromLs));
      setUserData({ name: "", email: "",username:"", password: "" });
      route("/login");
      alert("Registration Sucessful");
     
    }
  }

  function updatingData(e) {
    var name = e.target.name;
    var value = e.target.value;

    setUserData({...userData, [name] : value})
  }

  return (
    <div id="signup-fullpage">
      <div id="signup">
        <div id="signup-one">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <div id="signup-content-info">
          <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div id="signup-five">
          <div id="signup-five-one">
            <div id="signup-five-f-one">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div id="signup-five-f-two">
              <p>Log in with facebook</p>
            </div>
          </div>
        </div>
        <div id="signup-three">
          <fieldset>
            <legend>OR</legend>
          </fieldset>
        </div>
        <div id="signup-two">
          <form onSubmit={(e) => signup(e)}>
            <input
              onChange={(e) => {
                updatingData(e);
              }}
              name="email"
              type="email"
              placeholder="Enter your Email"
            />
            <br />
            <input
              onChange={(e) => {
                updatingData(e);
              }}
              name="name"
              type="text"
              placeholder="Enter your Full Name"
            />
            <br />
            <input
              onChange={(e) => {
                updatingData(e);
              }}
              name="username"
              type="text"
              placeholder="Enter your username"
            />
            <br />
            <input
              onChange={(e) => {
                updatingData(e);
              }}
              name="password"
              type="Password"
              placeholder="Enter your password"
            />
            <br />
            <div id="signup-four">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </p>
            </div>
            <div id="signup-content">
              <p>
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
