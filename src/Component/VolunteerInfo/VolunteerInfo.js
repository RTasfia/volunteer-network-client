import React from 'react';
import { Button } from 'react-bootstrap';

const VolunteerInfo = (props) => {
    
    return (
        <div className="col-6">
            <div style={{backgroundColor: "white", margin: "30px"}} className="row">
                <div className="col-6">
                    <img className="img-fluid" src ={props.event.img} alt = ""/>
                </div>
                <div className="col-6" style={{textAlign:"left", paddingTop: "30px"}}>
                <h5>{props.event.title}</h5>
                <p>{props.event.date}</p>
                <Button onClick = {()=>props.deleteEvent(`${props.event._id}`)}>Cancel</Button>
            </div>
            </div>
            
            
        </div>
    );
};

export default VolunteerInfo;