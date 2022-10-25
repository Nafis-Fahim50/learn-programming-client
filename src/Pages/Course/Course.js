import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
    const { name, title, img } = course;
    return (
        <div>
            <Card  className='h-100' style={{ width: '18rem' }}>
                <Card.Img className='h-50 w-50' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                    <Button variant="primary">Start Tutorial</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;