import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser,userProfileUpdate} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(email,password,name,photoURL);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Successfully Register');
            form.reset();
            handleUpdateUser(name,photoURL);
        })
        .catch(e =>{
            console.error('Error',e);
            toast.error(e.message);
        })
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfileUpdate(profile)
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <div className='mt-4 shadow mb-5 bg-body rounded pt-5 pb-3 px-5 lg-width'>
            <h3 className='text-primary fw-bold mb-3'>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="PhotoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Email" required />
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