import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setcourses] = useState([])

    useEffect(()=>{
        fetch('https://learn-programming-server-side.vercel.app/courses')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])

    return (
        <div className='mt-3'>
          <h4 className='text-success mb-3'>Quick Links</h4>
          <div>
            {
                courses.map(course => <p
                key={course.id}>
                    <Link className='text-decoration-none text-dark fw-bold' to={`/course/${course.id}`}>Learn {course.name}</Link>
                </p>)
            }
          </div>
        </div>
    );
};

export default RightSideNav;