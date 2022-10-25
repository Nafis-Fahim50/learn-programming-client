import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, title, img } = course;
    return (
        <div>
            <Card  className='h-100'>
                <Card.Img className='h-50 w-50' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                    <Button variant="success">
                        <Link className='text-decoration-none text-light' to={`/course/${course.id}`}>Start Tutorial</Link>
                        </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;