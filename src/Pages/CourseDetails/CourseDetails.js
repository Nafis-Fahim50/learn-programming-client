import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import './CourseDetails.css'


const CourseDetails = () => {
    const details = useLoaderData();
    const { img_url, discription, title, name,id } = details;
    return (
        <div>
            <div className='d-flex justify-content-between mt-3'>
                <h3>{name}</h3>
                <FaDownload className='save-icon'></FaDownload>
            </div>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                    <Button className='fw-bold' variant="success">
                        <Link className='text-decoration-none text-light' to={`/checkout/${id}`}>Get Premium Access</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;