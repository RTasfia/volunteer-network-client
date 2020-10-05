import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;

            const signedInUser = {...loggedInUser};
            signedInUser.name = displayName;
            signedInUser.email = email;
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }
    return (
        <div style={{backgroundColor: "#F8FAFC", height: "100vh"}}>
            <img style={{height: "60px", marginTop: "30px"}} src={logo} alt=""/>
            <div style={{margin: "40px 30% 0 30%", height: "300px",border: "1px solid gray",backgroundColor: "white"}}>
                <h3 style={{padding:"40px"}}>Login with</h3>
                <Button onClick = {handleGoogleSignIn} style={{backgroundColor: "white", color: "black", border: "1px solid gray", borderRadius: "20px"}}> <img style={{height: "30px"}} src={require("../../logos/google.png")} alt=""/> Continue with Google</Button>
                <br/> <br/>
                <p>Don't have an account  <a href="/">Create account</a></p>
            </div>
            
        </div>
    );
};

export default Login;