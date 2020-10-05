import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo  from '../../logos/Group 1329.png'



const NavbarMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const handleAdmin = () => {
        history.push("/volunteerlist");
    }
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand><img className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="mr-auto nav" >
                        <ul >
                            <li> <Link to = "/home">Home</Link> </li>
                            <li> <Link to = "/home">Donation</Link> </li>
                            <li> <Link to = "/events">Events</Link> </li>
                            <li> <Link to = "/home">Blog</Link> </li>                               
                            <li>
                                <Link to ="login">
                                {
                                    loggedInUser.email ? <Button>{loggedInUser.name}</Button> : <Button>Register</Button>
                                }
                                </Link>
                            </li> 
                            <li><Button onClick = {handleAdmin}>Admin</Button></li> 
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarMenu;