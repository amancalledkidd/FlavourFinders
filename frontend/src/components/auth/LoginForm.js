import React, { useState } from 'react';
import lock from "../images/password.jpg";
import envelope from "../images/envelope.jpg";
import background from "../images/background.jpg";
import { Link } from 'react-router-dom';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch( '/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if(response.status !== 201) {
      let data = await response.json();
      setErrorMessage("Incorrect email or password");
      //navigate('/login')
    } else {
      console.log("yay")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate('/');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <div className='big_background'> 
      {/* <img src={background} className="image_icons" alt="Girl in a jacket"/> */}
    <div className="inner_background" >
      <div className="text_color">
        <h1 id="registration">Login</h1>
        <form className="register_form" onSubmit={handleSubmit}>   
          <div className="mb-3">
            <label id="email_title" htmlFor="email">
            <img src={envelope} className="image_icons" alt="email" width="24" height="24"/>
              <strong>Email</strong>
            </label>
            <input
            id="email_input"
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label id="password_title" htmlFor="password">
            <img src={lock} className="image_icons" alt="Girl in a jacket" width="24" height="24"/>
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
          <p className="error">{errorMessage}</p>
          <button type="submit" className="register_button">
            Login
          </button>
        </form>
        <div className='inner_bottom'>
          <p>
            make an account
            <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
    );
}

export default LogInForm;
