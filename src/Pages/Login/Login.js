import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='mt-5 shadow-sm mb-5 bg-body rounded p-5 lg-width'>
            <h3 className='text-primary fw-bold mb-3'>Please Login Here</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='fw-bold py-2 text-white' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center text-primary mt-3'><Link className='text-decoration-none'>Forgotten Password?</Link></p>
            <hr></hr>
            <button className='btn btn-success py-2 fw-bold'><Link className='text-decoration-none text-white' to='/signup'>Create New Account</Link></button>
        </div>
    );
};

export default Login;