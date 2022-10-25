import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='mb-5'>
            <h1>Total Courses: {courses.length}</h1>
            <div className='tutorial'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;