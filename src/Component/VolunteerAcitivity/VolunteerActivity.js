import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { UserContext } from '../../App';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import VolunteerInfo from '../VolunteerInfo/VolunteerInfo';
export const EventContext = createContext();

const VolunteerActivity = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activity, setActivity] = useState([]);
    useEffect(()=>{
        fetch("https://damp-wildwood-72836.herokuapp.com/currentUser?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setActivity(data)
        })
    },[])
    const deleteEvent = (id,event) => {
        fetch(`https://damp-wildwood-72836.herokuapp.com/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data){

                const updateEvent = activity.filter(event => event._id !== id)
                setActivity(updateEvent);
            }
        })
    }

    return (
        <EventContext.Provider value = {[activity, setActivity]}>
        <div style={{backgroundColor: "#F8FAFC"}}>
            <NavbarMenu></NavbarMenu>
            <div className="container">
                <div className="row">
                {
                    activity.map(event => <VolunteerInfo deleteEvent = {deleteEvent} event={event}></VolunteerInfo> )
                }
                </div>
            </div>
        </div>
        </EventContext.Provider>
    );
};

export default VolunteerActivity;