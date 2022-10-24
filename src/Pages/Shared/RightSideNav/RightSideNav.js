import React from 'react';

const RightSideNav = () => {
    return (
        <div className='mt-5 border-2'>
            <button className='btn btn-danger'>Login in With Google</button>
            <br />
            <button className='btn btn-dark mt-2'>Login in With GitHub</button>
        </div>
    );
};

export default RightSideNav;