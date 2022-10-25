import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='mt-5 border-2'>
            <button className='btn btn-danger'><FaGoogle></FaGoogle> Login in With Google</button>
            <br />
            <button className='btn btn-dark mt-2'><FaGithub></FaGithub> Login in With GitHub</button>
        </div>
    );
};

export default RightSideNav;