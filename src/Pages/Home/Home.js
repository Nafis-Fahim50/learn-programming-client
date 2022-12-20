import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitile/UseTitle';
import Course from '../Course/Course';
import './Home.css'


const Home = () => {
    const courses = useLoaderData();
    useTitle('home')
    return (
        <div>
            <div  className='my-5 text-center rounded py-5 home-container'>
                <h1 className='text-success fw-bold mb-4 title' >Learn Programming</h1>
                <h5 className='text-warning fw-bold mb-4'>With the world's largest programming site.</h5>
                <p className='text-dark mb-4'>Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, C++, C# etc.</p>
                <button className='btn btn-success'>
                    <Link className='text-decoration-none fw-bold text-light' to='/courses'>Checkout Our All Courses</Link>
                </button>
            </div>
                <div className='pt-2'>
                    <h1 className='text-success font-bold text-center'>All Courses</h1>
                    <div className='mb-2'>
                        <div className='tutorial mt-2'>
                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}></Course>)
                            }
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;