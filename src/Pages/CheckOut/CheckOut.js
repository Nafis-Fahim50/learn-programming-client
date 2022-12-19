import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCommentDollar,FaCommentsDollar,FaDollarSign } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTitile/UseTitle';

const CheckOut = () => {
    const tutorial = useLoaderData();
    const { name, id, price } = tutorial;
    const { user } = useContext(AuthContext);
    useTitle('Checkout')
    const handleButton = () =>{
        toast.success('Successfully completed payment')
    }
    return (
        <div>
            <div className='mt-5 shadow-lg w-lg-50 p-5'>
                <h4 className='text-success'>Customer Name: <span className='text-primary'>{user?.displayName}</span></h4>
                <h5 className='mt-3'>Course ID: {id}</h5>
                <h5 className='mt-3'>Course Name: {name}</h5>
                <h5 className='mt-3'>Price: {price}</h5>
                <button onClick={handleButton} className='btn btn-success mt-3'>Confirm Payment</button>
            </div>

            <h3 className='mt-5 text-success'>Payment With-</h3>
            <div className='mt-3 d-flex'>
                <p className='text-danger'><FaCommentDollar></FaCommentDollar> bKash</p>
                <p className='ms-5 text-primary'><FaCommentsDollar></FaCommentsDollar> Rocket</p>
                <p className='ms-5 text-warning'><FaDollarSign></FaDollarSign> Nagad</p>
            </div>
        </div>
    );
};

export default CheckOut;