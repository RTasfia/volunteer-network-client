import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import VolunteerActivity from './Component/VolunteerAcitivity/VolunteerActivity';
import AllVolunter from './Component/AllVolunteer/AllVolunter';
import AddEvent from './Component/AddEvent/AddEvent';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({name: "", email: "", title: "",img: ""});
  return (
    
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/registration">
            <Registration/>
          </PrivateRoute>
          <Route path="/events">
            <VolunteerActivity/>
          </Route>
          <Route path="/volunteerlist">
            <AllVolunter/>
          </Route>
          <Route path="/createEvent">
            <AddEvent/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
      
    </UserContext.Provider>
    </div>
  );
}

export default App;
