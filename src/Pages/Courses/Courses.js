import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitile/UseTitle';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    useTitle('Courses')
    // console.log(courses);
    return (
        <div className='mb-5'>
            <div className='tutorial mt-5'>
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