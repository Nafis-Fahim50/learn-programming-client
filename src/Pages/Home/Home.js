import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {

    return (
        <div className='my-5 text-center rounded shadow py-5 home-container'>
            <h1 className='text-success fw-bold mb-4 title' >Learn Programming</h1>
            <h5 className='text-warning fw-bold mb-4'>With the world's largest programming site.</h5>
            <p className='text-dark mb-4'>Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, C++, C# etc.</p>
            <button className='btn btn-success'>
                <Link className='text-decoration-none fw-bold text-light' to='/courses'>Checkout Our All Courses</Link>
            </button>
        </div>
    );
};

export default Home;