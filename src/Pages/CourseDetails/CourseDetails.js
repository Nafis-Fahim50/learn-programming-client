import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseDetails = () => {
    const details = useLoaderData();
    const { img_url, discription, title } = details;
    return (
        <Card className='my-5'>
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {discription}
                </Card.Text>
                <Button variant="primary">Checkout</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;