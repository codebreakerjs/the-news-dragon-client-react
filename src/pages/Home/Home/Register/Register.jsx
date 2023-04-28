import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Register = () => {

    const {createUser} =useContext(AuthContext);

    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        
        console.log(name, email, photo, password);

        createUser(email, password)
        .then((result)=>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error);
        })
        event.target.reset();
    }

    return (
        <Container className='w-50 mx-auto'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Give Your Photo URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                    <Form.Text className="text-secondary">
                    Already Have an Account? 
                        <Link to="/login"> Login</Link>
                    </Form.Text>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                    <Form.Text className="text-success">
                        
                    </Form.Text>
            </Form>
        </Container>
        
    );
};

export default Register;