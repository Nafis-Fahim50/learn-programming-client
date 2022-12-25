import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/UseTitile/UseTitle';

const Login = () => {
    useTitle('Login')
    const { signIn,providerLogin,setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error =>{
            console.error('Error',error)
        })
    }

    const handleGithubSignIn = () =>{
        providerLogin(gitHubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true});
        })
        .catch(error =>{
            console.error('Error', error);
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
                navigate(from,{replace:true});
            })
            .catch(e => {
                console.error('Error:', e);
                toast.error(e.message);
            })
            .finally(()=>{
                setLoading(false)
            })
    }
    return (
        <div className='mt-4 shadow-sm mb-5 bg-body rounded p-5 lg-width'>
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
            <div className=' login-btn'>
                <Button onClick={handleGoogleSignIn} className='btn btn-danger'><FaGoogle></FaGoogle> Login in With Google</Button>
                <button onClick={handleGithubSignIn} className='btn btn-dark gap-btn'><FaGithub></FaGithub> Login in With GitHub</button>
                
            </div>

        </div>
    );
};

export default Login;