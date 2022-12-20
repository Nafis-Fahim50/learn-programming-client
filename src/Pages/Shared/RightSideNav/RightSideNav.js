import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa";

const RightSideNav = () => {
    const [courses, setcourses] = useState([])

    useEffect(() => {
        fetch('https://learn-programming-server-side.vercel.app/courses')
            .then(res => res.json())
            .then(data => setcourses(data))
    }, [])

    return (
        <div className='mt-3'>
            <h4 className='text-success mb-3'>Quick Links</h4>
            <div className='my-2'>
                {
                    courses.map(course => <p
                        key={course.id}>
                        <Link className='text-decoration-none text-dark fw-bold p-2 border border-1 rounded mb-5 hover:bg-success' to={`/course/${course.id}`}>Learn {course.name}</Link>
                    </p>)
                }
            </div>
            <h4 className='text-success my-2'>Contract Us</h4>
            <ListGroup>
                <ListGroup.Item className='mb-3 mt-2 text-primary'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-3 text-success'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-3 text-info'><FaTwitter /> Twitter</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightSideNav;