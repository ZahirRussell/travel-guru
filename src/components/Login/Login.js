import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import './Login.css';


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
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

  const handleFieldValidation = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 4;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleCreateUser = (e) => {
    if(user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
          console.log(res);
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }

  const handleSignIn = (e) => { 
    if(user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    // <div style={{textAlign: 'center'}}>
    //   { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
    //     <button onClick={googleSignIn}>Sign In</button>
    //   }
    //   <br/>
    //   <button onClick={fbSignIn}>Sign in using Facebook</button>
    //   {
    //     user.isSignedIn && <div>
    //       <p>Welcome, {user.name}!</p>
    //       <p>Your email: {user.email}</p>
    //       <img src={user.photo} alt=""/>
    //     </div>
    //   }

    //   <h1>Our own Authentication</h1>
    //   <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
    //   <label htmlFor="newUser">New User Sign up</label>
    //   <form onSubmit={handleSubmit}>
    //     {newUser && <input name="name" type="text" onBlur={handleFieldValidation} placeholder="Your name"/>}
    //     <br/>
    //     <input type="text" name="email" onBlur={handleFieldValidation} placeholder="Your Email address" required/>
    //     <br/>
    //     <input type="password" name="password" onBlur={handleFieldValidation} placeholder="Your Password" required/>
    //     <br/>
    //     <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
    //   </form>
    //   <p style={{color: 'red'}}>{user.error}</p>
    //   { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
    // </div>

<div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
             <div className="col-1">
             </div>
             <div className="col-5 text-center"> 

            <div className="container">   
                 <section>				
                     <div id="container_demo" >
                       <a className="hiddenanchor" id="toregister"></a>
                         <a className="hiddenanchor" id="tologin"></a>
                         <div id="wrapper">
                             <div id="login" className="animate form">
                                 <form  onSubmit={handleSignIn}>
                                     <h1>Log in</h1>  
                                    <p> 
                                         <label for="email" className="uname" > Your email or username </label>
                                         <input id="email" onBlur={handleFieldValidation} name="email" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                                    </p>
                                   <p> 
                                         <label for="password" className="youpasswd"> Your password </label>
                                         <input id="password" name="password" onBlur={handleFieldValidation} required="required" type="password" placeholder="eg. X8df!90EO" /> 
                                    </p>
                                     <p className="signin button"> 
                                         <input className="btn-block" type="submit" value="Sign in"/> 
                                     </p>
                                     <p style={{display:'flex'}}>
                                         <button id="btn-fbsignup" onClick={fbSignIn} type="button" class="btn btn-primary"><i class="icon-facebook"></i>   with Facebook</button>&nbsp;&nbsp;&nbsp;
                                         <button id="btn-fbsignup" onClick={handleGoogleSignIn} type="button" class="btn btn-warning"><i class="icon-facebook"></i>   with Google</button>
                                     </p>
                                     <p className="change_link">
                                         Not a member yet ?
                                         <a href="#toregister" className="to_register">Join us</a>
                                    </p>
                                 </form>
                             </div>

                             <div id="register" className="animate form">
                                 <form  onSubmit={handleCreateUser}> 
                                     <h1> Sign up </h1> 
                                    <p> 
                                         <label for="name" className="uname" >Name</label>
                                         <input name="name" type="text" required="required" onBlur={handleFieldValidation} placeholder="Your name"/>
                                    </p>
                                    <p> 
                                         <label for="emailsignup" className="youmail"  > Your email</label>
                                         <input name="emailsignup" required="required" onBlur={handleFieldValidation} placeholder="mysupermail@mail.com"/> 
                                     </p>
                                     <p> 
                                         <label for="password" className="youpasswd" >Your password </label>
                                         <input  name="password" required="required" type="password" onBlur={handleFieldValidation} placeholder="eg. X8df!90EO"/>
                                     </p>
                                     <p> 
                                         <label for="password_confirm" className="youpasswd" >Please confirm your password </label>
                                        <input name="password_confirm" required="required" type="password" onBlur={handleFieldValidation} placeholder="eg. X8df!90EO"/>
                                    </p>
                                    <p className="signin button"> 
                                         <input type="submit" value="Sign up"/> 
                                    </p>
                                     <p style={{display:'flex'}}>
                                         <button id="btn-fbsignup" onClick={fbSignIn} type="button" class="btn btn-primary"><i class="icon-facebook"></i>   with Facebook</button>&nbsp;&nbsp;&nbsp;
                                         <button id="btn-fbsignup" onClick={handleGoogleSignIn} type="button" class="btn btn-warning"><i class="icon-facebook"></i>   with Google</button>
                                     </p>
                                     <p className="change_link">  
                                         Already a member ?
                                         <a href="#tologin" className="to_register"> Go and log in </a>
                                     </p>
                                 </form>
                             </div>
                            
                         </div>
                     </div>  
                 </section>
             </div>
             <div className="col-1">
             </div>
         </div>
       </div>
  );
}

export default Login;


