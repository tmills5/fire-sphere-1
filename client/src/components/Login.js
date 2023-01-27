// import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import { useState } from 'react';
import logo from '../assets/images/fireLogoBlackLetters.png';

import React from 'react';


const Login = ({setUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = e => {
    e.preventDefault();

    let user = {
      username,
      password
  }

  fetch('/login',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res => res.json())
  .then(user => {
    setUser(user);

    // need the values from the object. user.error is an object but i need
    // it in an array
    if(user.error) setErrors(Object.values(user.error))
    console.log("User Errors: ", user.error)
  })

  setUsername('');
  setPassword('');
  setErrors([]);
  }

  return(
    <MDBContainer className="my-5 login-parent-div">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src={logo} alt="login form" className='rounded-start w-90'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              
              <span className="h1 fw-bold mb-0"></span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <MDBInput 
                wrapperClass='mb-4' 
                label='Username' 
                id='formControlLg' 
                type='username' 
                size="lg"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <MDBInput 
                wrapperClass='mb-4' 
                label='Password' 
                id='formControlLg' 
                type='password' 
                size="lg"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

            <MDBBtn className="mb-4 px-5" color='dark' size='lg'onClick={onSubmit}>Login</MDBBtn>
            <a className="small text-muted" href="#!">Forgot password?</a>
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>


    // <div className="login-parent-div">
    //   <div className="login-wrapper">
    //     <div className="login-container">
    //       <form className="login-form" onSubmit={onSubmit}>
    //         <label>Username</label>
    //         <input
    //           type="text"
    //           name="username"
    //           onChange={e => setUsername(e.target.value)}
    //           value={username}
    //           placeholder="Username"
    //           required
    //         />
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           onChange={e => setPassword(e.target.value)}
    //           value={password}
    //           placeholder="Password"
    //           required
    //         />
    //         <input type="submit" value="Login" />
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
};

export default Login;