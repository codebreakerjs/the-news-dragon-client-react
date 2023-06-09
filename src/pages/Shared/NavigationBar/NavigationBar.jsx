import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {

     const {user, logOut} = useContext(AuthContext);

     const handleLogOut =()=>{
        logOut()
        .then()
        .catch(erorr => console.log(erorr))
     }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light mb-4">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link to="/">Home</Link> 
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">Career</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            { user && 
                            <FaUserCircle style={{fontSize: '2rem'}}/> 
                                
                            }

                                { user ? 
                                    <Button onClick={handleLogOut} variant='secondary'>Logout</Button> :
                                    <Link to="/login">
                                        <Button variant='secondary'>Login</Button>
                                    </Link>
                                }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;