import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../../image/image.png'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img
                    src={image}
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-3"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand><Link className='text-decoration-none' to='/'>Learn Programming</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='text-muted text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link className='text-muted text-decoration-none' to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='text-muted text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link className='text-muted text-decoration-none' to='/signup'>Signup</Link></Nav.Link>
                        <Nav.Link><Link className='text-muted text-decoration-none' to='/login'>Login</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;