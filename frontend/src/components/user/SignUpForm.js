import React, { useState } from 'react';
import lock from "../images/password.jpg";
import user from "../images/user.jpg";
import envelope from "../images/envelope.jpg";
import { Link } from 'react-router-dom';



const SignUpForm = ({ navigate }) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!passwordValidating(password)){
      setErrorMessage("Password not valid. Password must include an uppercase and lowercase character, a special character (@$!%*?&) and be a minimum of 8 characters")
    }else if(password !== confirmPassword){
      setErrorMessage("Passwords do not match")
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
          setErrorMessage(data.message);
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
      <div className='big_background'> 
          {/* <img src={background} className="image_icons" alt="Girl in a jacket"/> */}
        <div className="inner_background" >
          <div className="text_color">
            <h1 id="registration">Register</h1>
            <form className="register_form" onSubmit={handleSubmit}>
              <div className="input_fields">
              <img src={user} className="image_icons" alt="Girl in a jacket" width="24" height="24"/>
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
              <img src={lock} className="image_icons" alt="Girl in a jacket" width="24" height="24"/>
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
              <div className="input_fields">
              <img src={lock} className="image_icons" alt="Girl in a jacket" width="24" height="24"/>
                <label id="password_title" htmlFor="password">
                  <strong>Confrim Password</strong>
                </label>
                <input
                  id="password_input"
                  type="password"
                  placeholder="Confrim Password"
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
            <div>
            <Link to="/login">Click here to go to the login page</Link>
            </div>
                
            
          </div>
        </div>
        </div>
    
  );
}

export default SignUpForm;
