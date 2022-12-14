import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import './CourseDetails.css'
import Pdf from "react-to-pdf";
import useTitle from '../../Hooks/UseTitile/UseTitle';

const ref = React.createRef();

const CourseDetails = () => {
    const details = useLoaderData();
    const { img_url, discription, title, name, id } = details;
    useTitle('Details')

    return (
        <div>
            <div className='d-flex justify-content-between mt-3'>
                <h3>{name}</h3>
                <Pdf targetRef={ref} filename={`${name}.pdf`}>
                    {({ toPdf }) => <FaDownload onClick={toPdf} className='save-icon'></FaDownload>}
                </Pdf>
            </div>
            <Card ref={ref}>
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