import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGoogle } from "@fortawesome/free-brands-svg-icons"
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";


function Login() {
  const [newUser, setNewUser] = useState(true);
  const [validData, setValidData] = useState(true);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

     const handleBlur = (e) => {
      const resUser = {...user};
      resUser[e.target.name] = e.target.value;

      if(e.target.name === 'confirm'){
          if(e.target.value !== user.password){
            resUser.message = "Password Didn't Match";
              setValidData(false);
          }
          else{
            resUser.message = '';
              setValidData(true);
          }
      }
      setUser(resUser);
  }

  // const handleSubmit = (e) => {
  //   if(newUser && user.email && user.password){
  //     createUserWithEmailAndPassword(user.name, user.email, user.password)
  //     .then(res => {
  //       handleResponse(res, true);
  //     })
  //   }

  //   if(!newUser && user.email && user.password){
  //     signInWithEmailAndPassword(user.email, user.password)
  //     .then(res => {
  //       handleResponse(res, true);
  //     })
  //   }
  //   e.preventDefault();
  // }
    // update name
    const updateName = name => {
      const currentUser = firebase.auth().currentUser;
      currentUser.updateProfile({displayName: name})
      .then()
      .catch(error => {
          console.log(error);
      });
     }

  const handleSubmit = (e) => {        
    // email sign in
    if (newUser){
        if(validData) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {
                const newUserInfo = {
                    signed: true,
                    name: user.name,
                    email: user.email,
                    message: 'Login Successful'
                }
                setUser(newUserInfo);
                updateName(user.name);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {...user};
                newUserInfo.message = error.message;
                setUser(newUserInfo);
            });
        }
    }

    // email login
    if (!newUser) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                const {displayName, email} = result.user;
                const newUserInfo = {
                    signed: true,
                    name: displayName,
                    email: email,
                    message: 'Login Successful'
                }
                setUser(newUserInfo);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = {};
                newUserInfo.message = error.message;
                setUser(newUserInfo);
            });
    }
    e.preventDefault();
}



  return (
    
<div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
             <div className="col-1">
             </div>
             <div className="col-6 text-center"> 

            <div className="container">   
                 <section>				
                 <Container className="text-center text-white">
                  <div className="bg-dark rounded" id="login">

                  <Form onSubmit={handleSubmit}>
                  <h4 className="my-4">{newUser ? 'New User Sign up' : 'User Login'}</h4>
                  <Form.Group>     
                  <Form.Label className="col-3">{newUser && <span>Name</span>}</Form.Label>                 
                      {                        
                          newUser && <Form.Control className="col-9" onBlur={handleBlur} name="name" type="text" placeholder="Enter name" required /> 
                      }                                          
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="col-3">Email</Form.Label>
                      <Form.Control className="col-9"  onBlur={handleBlur} name="email" type="email" placeholder="Enter Email" required />                     
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="col-3">Password</Form.Label>
                      <Form.Control className="col-9" onBlur={handleBlur} name="password" type="password" placeholder="Password"  required />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="col-3">{newUser && <span>Confirm Password</span>}</Form.Label>
                      {
                          newUser && <FormControl onBlur={handleBlur} className="col-9"  type="password" name="confirm" placeholder="Confirm Password"  required />
                      }
                    </Form.Group>
                    <Form.Group>
                      <span className="col-3"></span>
                       <button className="btn-warning btn-sm" type="submit">{newUser ? 'Sign Up' : 'Login'}</button>
                      <span className="btn btn-link text-light" onClick={()=>{
                              setNewUser(!newUser);
                              setUser({
                                  isSignedIn: false,
                                  name: user.name,
                                  email: user.email,
                                  password: user.password,
                                  photo: ''
                              });
                          }}>
                              {
                                  newUser ?
                                  ' Not a member yet? Join us' :
                                  ' Already a member ? Log in'
                              }
                          </span>
                          </Form.Group>
                          <h6 className="text-danger text-center">{user.message}</h6>
                          <hr className="bg-white" />                          
                          <Button className="btn-danger rounded-pill" onClick={googleSignIn}>
                            <FontAwesomeIcon icon={faGoogle}/> 
                            &nbsp; Sign in with Google
                          </Button>
                          &nbsp;
                          <Button className="btn-primary rounded-pill" onClick={fbSignIn}>
                            <FontAwesomeIcon icon={faFacebookF}/> 
                              &nbsp;   Sign in with Facebook
                          </Button>
                  </Form>                          
                  </div>
              </Container> 
                 </section>
             </div>
             <div className="col-1">
             </div>
         </div>
       </div>
  );
}

export default Login;


