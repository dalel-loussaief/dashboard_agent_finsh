import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './Login.css';
// import welcomeImage from '../../assets/images/home.png'; // Importez votre image ici

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`}>
      <div className="form-container sign-up">
     
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Log In</h1>
         
          <span> your email and  password  </span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
    
          <button>log In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
    
          <div className="toggle-panel toggle-right">
            <h2>Welcome to MartVilla</h2>
            {/* <p>Register with your personal details to use all of site features</p> */}
     {/* <img src={welcomeImage} alt="Welcome Image" /> Remplacez le texte par l'image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
