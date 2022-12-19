import React from 'react';
import { FaSadCry } from 'react-icons/fa';
import useTitle from '../Hooks/UseTitile/UseTitle';

const ErrorRoute = () => {
    useTitle('Page not found')
    return (
        <div>
            <div className='mt-5'>
                <h1>Sorry!This route not found</h1>
                <FaSadCry className='text-warning text-center ms-5 h-25 w-25'></FaSadCry>
            </div>
        </div>
    );
};

export default ErrorRoute;