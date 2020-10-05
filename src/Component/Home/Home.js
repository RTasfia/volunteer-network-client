import React, { useEffect } from 'react';
import { useState } from 'react';
import Fakedata from '../../Fakedata/Fakedata';
import './Home.css';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Event from '../Event/Event';

const Home = () => {
    const [event,setEvent] = useState([]);
    const clicked = () => {
        fetch("https://damp-wildwood-72836.herokuapp.com/allEvents", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(Fakedata)
        })
    }
    useEffect(()=> {
        fetch('https://damp-wildwood-72836.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setEvent(data);
        })

    },[])
    return (
        <div className="background">
            {/* <button onClick={clicked}>click</button> */}
            <NavbarMenu></NavbarMenu>
            <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className="container">
                <div className="row">
                {
                    event.map(event => <Event event={event}></Event>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;