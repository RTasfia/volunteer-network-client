import React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Event = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleSelect = () => {
        const currentUser = {...loggedInUser};
        currentUser.title = props.event.title;
        currentUser.img = props.event.img;
        setLoggedInUser(currentUser);
        history.push("/registration");
    }
    const backgroundColor = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"]
    const co = "#421FCF";
    const position = Math.floor(Math.random()*4)
    return (
        <div className = "col-6 col-lg-3" style={{marginTop: "30px"}}>
             <Card onClick={handleSelect} style={{ width: '16rem' }}>
                <Card.Img variant="top" src={props.event.img}  />
                    <Button style={{height: "60px", backgroundColor: `${backgroundColor[position]}`,border: "none"}} variant="primary">{props.event.title}</Button>
            </Card>

        </div>
    );
};

export default Event;