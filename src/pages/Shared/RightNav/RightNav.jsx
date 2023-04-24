import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../../assets/bg1.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant='outline-primary'> <FaGoogle /> Login With Google</Button>
            <Button variant='outline-secondary'> <FaGithub /> Login With Github</Button>

            <div className='mt-4'>
                <h4>Find Us on</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item> <FaFacebook /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> Cras justo odio</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-5 '>
                <img src={bg1} alt="" className='' />
                
            </div>
        </div>
    );
};

export default RightNav;