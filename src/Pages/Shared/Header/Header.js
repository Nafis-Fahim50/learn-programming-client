import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import image from '../../../image/image.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <img
                    src={image}
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-3"
                    alt="React Bootstrap logo"
                />
                <Navbar.Brand><Link className='text-decoration-none text-light fw-bold' to='/'>Learn Programming</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className=' mt-1 text-light text-decoration-none' to='/courses'>Courses</Link>
                        <Link className=' mt-1 ms-2 text-light text-decoration-none' to='/faq'>FAQ</Link>
                        <Link className=' mt-1 ms-2 text-light text-decoration-none' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        {
                            user?.photoURL ?
                                <Image className='user-img-width'
                                style={{ height: '50px' }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    title={
                                        user?.displayName?
                                        user.displayName
                                        :
                                        'Name not found'
                                        }>
                                </Image>
                                :
                                <FaUser className='mt-1'></FaUser>
                        }

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button className='ms-3' onClick={logout}><FaSignOutAlt></FaSignOutAlt> Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none text-warning fw-bold me-2 ms-2' to='/signup'>Signup</Link>
                                        <Link className='text-decoration-none text-info fw-bold me-2' to='/login'>Login</Link>
                                    </>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;