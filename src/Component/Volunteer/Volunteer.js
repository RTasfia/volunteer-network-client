import React from 'react';
import { Button } from 'react-bootstrap';

const Volunteer = (props) => {
    const {name,email,date,title,_id} = props.user;
    return (
        <div className = "d-flex flex-row justify-content-between col-12" style={{marginBottom: "20px"}}>
            <p style={{width: "100px"}}>{name}</p>
            <p style={{textAlign: "left",width: "250px"}}>{email}</p>
            <p style={{width: "100px"}}>{date}</p>
            <p style={{textAlign: "left",width: "300px"}}>{title}</p>
            <Button onClick = {()=>props.deleteEvent(`${props.user._id}`)}>Cancel</Button>  
        </div>
    );
};

export default Volunteer;