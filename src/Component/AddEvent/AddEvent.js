import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const AddEvent = () => {
    const [newEvent, setNewEvent] = useState({});
    const history = useHistory();
    const handleBlur = (e) =>{
        const addEvent = {title: e.target.value};
        setNewEvent(addEvent);

    }
    const handleSubmit = () => {
        fetch("https://damp-wildwood-72836.herokuapp.com/newEvent", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push("/home");

    }
    return (
        <div>
            <div className="row">
                <div className="col-6 col-md-3">
                    <img style={{height: "60px", marginTop: "30px"}} src={logo} alt=""/>
                </div>
                <div className="col-6 col-md-9">
                    <h4 style={{textAlign:"left", marginTop: "40px"}}>Add Event</h4>
                </div>
            </div>
                <div className="row" style={{marginTop: "40px"}}>
                <div className="col-3" > 
                    <p><img style={{height: "20px"}} src={require("../../logos/users-alt 1.png")} alt=""/>Volunteer Register List</p>
                    <p><img style={{height: "20px"}} src={require("../../logos/plus 1.png")} alt=""/>Add Event</p>
                </div>
                <div className="col-9" style={{backgroundColor: "#F8FAFC"}}>
                    <form action="" style={{textAlign: "left"}}>
                        <p>Event Title</p>
                        <input onBlur = {handleBlur} type="text"/>
                        <br/> <br/>
                        <p>Event Date</p>
                        <input type="date" name="" id=""/>
                        <br/> <br/>
                        <p>Description</p>
                        <input type="text"/>
                        <br/> <br/>
                        <Button onClick={handleSubmit}>Submit</Button>

                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default AddEvent;