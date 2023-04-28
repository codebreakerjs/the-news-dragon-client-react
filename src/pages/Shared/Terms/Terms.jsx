import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h1> Terms and Conditions </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores amet eligendi labore, quaerat sint ut ipsam reprehenderit quo blanditiis dolorem dolore voluptatum debitis non doloribus iure nisi perspiciatis? Officia.</p>
            <p>Go Back to <Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;