import React, { useState } from 'react';
import lock from "../images/password.jpg";
import user from "../images/user.jpg";
import envelope from "../images/envelope.jpg";
import robot from "../images/FlavourFinderLogo.png";
import { Link } from 'react-router-dom';
import "../user/register.css"
import Nav from '../nav/nav';


const SignUpForm = ({ navigate }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!passwordValidating(password)){
      setErrorMessage(<p className="error_message">Invalid password. Must contain uppercase, lowercase,<br/> a special character (@$!%*?&) and be a minimum of 8 characters</p>)
    }else if(password !== confirmPassword){
      setErrorMessage(<p className="error_message">Passwords do not match</p>)
    }else {
      fetch( '/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password })
      })
        .then(response => {
          if(response.status === 201) {
            navigate('/login')
          } else {
            return response.json();
          }
        })
        .then((data) => {
          data.message = setErrorMessage(<p className="error_message">Email already exists. Please login or use a different email</p>);
        });
    }
  }
  const handleNameChange = (event)=>{
    setName(event.target.value)
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const passwordValidating = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };


    return (
      <div className="big_background"> 
      <Nav />
      <div className="robot_image robot_and_speech">
        <img src={robot} className="robot_image" />
        <div class="box3">
          <strong>Enter your details and create your account with us!</strong>
          </div>
      </div>
        <div className="inner_background" >
          <div className="text_color">
            <h1 id="registration">Register</h1>
            <form className="register_form" onSubmit={handleSubmit}>
              <div className="input_fields">
              <img src={user} className="image_icons" alt="icon" width="24" height="24"/>
                <label id="name_title" htmlFor="name" >
                  <strong >Name</strong>
                </label>
                <input
                id="name_input"
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="name"

                  onChange={handleNameChange}
                />
              </div>
              <div className="input_fields">
              <img src={envelope} className="image_icons" alt="email" width="24" height="24"/>
                <label id="email_title" htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                id="email_input"
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input_fields">
              <img src={lock} className="image_icons" alt="icon" width="24" height="24"/>
                <label id="password_title" htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                id="password_input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="confirm_input_field">
                <img src={lock} className="confirm_image_icon" alt="icon" width="24" height="24"/>
                <label id="confirm_password_title" htmlFor="password">
                  <strong>Re-enter <br/>Password</strong>
                </label>
                <input
                  id="password_input"
                  type="password"
                  placeholder="Re-enter Password"
                  name="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <p className="error">{errorMessage}</p>
              <button type="submit" className="register_button">
                Register
              </button>
            </form>
            <div className="already_account_prompt">
              <p className='account-login-link'>
                Already have an account? 
                <Link to="/login"> Login</Link>
              </p>
            </div>
                
            
          </div>
        </div>
        </div>
    
  );
}

export default SignUpForm;
