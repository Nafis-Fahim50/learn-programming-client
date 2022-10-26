import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='my-5 container'>
            <hr />
            <div className='d-lg-flex justify-content-between footer-container'>
                <p>© 2022 Learn Programming, Inc. All rights reserved.</p>
                <div>
                    <FaTwitter className='social-icon' ></FaTwitter>
                    <FaInstagram className='ms-3 social-icon'></FaInstagram>
                    <FaFacebook className='ms-3 social-icon'></FaFacebook>
                </div>
            </div>
        </div>
    );
};

export default Footer;