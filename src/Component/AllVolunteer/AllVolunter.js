import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import Volunteer from '../Volunteer/Volunteer';

const AllVolunter = () => {
    const [volunteers, setVolunteers] = useState([]);
    const deleteEvent = (id,event) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const updateVoluneer =volunteers.filter(event => event._id !== id)
                setVolunteers(updateVoluneer);
            }
        })
    }

    useEffect(()=>{
        fetch("http://localhost:5000/allUser")
        .then(res => res.json())
        .then(data => {
            setVolunteers(data)
        })
    },[])
    
    return (
        <div>

            <div className="row">
                <div className="col-6 col-md-3">
                    <img style={{height: "60px", marginTop: "30px"}} src={logo} alt=""/>
                </div>
                <div className="col-6 col-md-9">
                    <h4 style={{textAlign:"left", marginTop: "40px"}}>Volunteer Register List</h4>
                </div>
            </div>
                <div className="row" style={{marginTop: "40px"}}>
                <div className="col-3" > 
                    <p><img style={{height: "20px"}} src={require("../../logos/users-alt 1.png")} alt=""/>Volunteer Register List</p>
                    <Link to = "/createEvent"> <p><img style={{height: "20px"}} src={require("../../logos/plus 1.png")} alt=""/>Add Event</p></Link>
                </div>
                <div className="col-9 " style={{backgroundColor: "#F8FAFC"}}>
                    
                    <div className="row">
                        <div className="d-flex flex-row justify-content-between col-12">
                            <h6>Name</h6>
                            <h6>EmailID</h6>
                            <h6>Registrating Date</h6>
                            <h6>Volunteer List</h6>
                            <h6>Action</h6>
                        </div>
                        {
                            volunteers.map(user => <Volunteer deleteEvent = {deleteEvent} user={user}></Volunteer>)
                        }
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AllVolunter;