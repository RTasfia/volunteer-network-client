import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({date: ""})
    const handleBlur = (e) => {
        const currentDate = {...info}
        currentDate.date = e.target.value;
        setInfo(currentDate);
    }
    const history = useHistory();
    const handleRegistration = () => {
        const user = {...loggedInUser, ...info};
        fetch("https://damp-wildwood-72836.herokuapp.com/addUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push("/events");
    }
    return (
        <div style={{backgroundColor: "#F8FAFC"}}>
            <img style={{height: "60px", marginTop: "30px"}} src={logo} alt=""/>
            <form action="" style={{margin: "40px 30%", backgroundColor: "white", height: "650px", padding: "50px", border: "2px solid black"}}>
                <h3>Register as a volunteer</h3>
                <br/>
                <p style={{textAlign: "left"}}>Full Name</p>
                <input style={{width: "100%"}} type="text" value={loggedInUser.name} required/>
                <br/> <br/>
                <p style={{textAlign: "left"}}>Username or Email</p>
                <input style={{width: "100%"}} type="text" value={loggedInUser.email} required/>
                <br/> <br/>
                <p style={{textAlign: "left"}}>Date</p>
                <input onBlur = {handleBlur} style={{width: "100%"}} type="date" name="" id="" required/>
                <br/> <br/>
                <p style={{textAlign: "left"}}>Description</p>
                <input style={{width: "100%"}} type="text" required/>
                <br/> <br/>
                <p style={{textAlign: "left"}}>Organize books at library</p>
                <input style={{width: "100%"}} type="text" value={loggedInUser.title} required/>
                <br/> <br/>
                <Button onClick = {handleRegistration} style={{width: "100%"}}>Register</Button>

            </form>
            
        </div>
    );
};

export default Registration;