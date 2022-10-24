import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='mt-5 shadow mb-5 bg-body rounded p-5 lg-width'>
            <h3 className='text-primary fw-bold mb-3'>Sign Up</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="PhotoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='fw-bold py-2 text-white' variant="success" type="submit">
                    Sign Up
                </Button>
                <p className='text-center mt-3'><Link className='text-decoration-none fw-bold' to='/login' >Already have an account?</Link></p>
                
            </Form>
        </div>
    );
};

export default Signup;