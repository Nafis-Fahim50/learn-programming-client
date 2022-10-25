import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error('Error',error);
        })
    }
    return (
        <div className='mt-5 border-2'>
            <button onClick={handleGoogleSignIn} className='btn btn-danger'><FaGoogle></FaGoogle> Login in With Google</button>
            <br />
            <button className='btn btn-dark mt-2'><FaGithub></FaGithub> Login in With GitHub</button>
        </div>
    );
};

export default RightSideNav;