import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error('Error',error)
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Login')
                form.reset();
            })
            .catch(e => {
                console.error('Error:', e);
                toast.error(e.message);
            })
    }
    return (
        <div className='mt-5 shadow-sm mb-5 bg-body rounded p-5 lg-width'>
            <h3 className='text-primary fw-bold mb-3'>Please Login Here</h3>
            <Form onSubmit={handleLogin}>
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
            <p className='text-center text-primary'><Link className='text-decoration-none'>Forgotten Password?</Link></p>
            <button className='btn btn-success py-2 w-100 fw-bold'><Link className='text-decoration-none text-white' to='/signup'>Create New Account</Link></button>
            <hr></hr>
            <h5 className='text-center text-success fw-blod'>Or</h5>
            <div>
                <button onClick={handleGoogleSignIn} className='btn btn-danger'><FaGoogle></FaGoogle> Login in With Google</button>
                <button className='btn btn-dark ms-5'><FaGithub></FaGithub> Login in With GitHub</button>
            </div>

        </div>
    );
};

export default Login;