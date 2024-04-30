import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

function Success() {

    const [isVisible, setIsVisible] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    useEffect(() => {
        // Check if payment status is 'success' in local storage
        const status = localStorage.getItem('paymentStatus');
        if (status === 'success') {
            setIsVisible(true);
        } else {
            // Redirect to another route if payment status is not 'success'
            setShouldRedirect(true);
        }
    }, []);

    useEffect(() => {
        if (shouldRedirect) {
            // Redirect to another route
            navigate('/');
        }
    }, [shouldRedirect, navigate]);

    const handleRedirect = () => {
        // Remove payment status from local storage
        localStorage.removeItem('paymentStatus');
        // Redirect to another route
        navigate('/');
    };

    return (
        <div>
            <Navbar />
            <div className='  h-screen'>

                <div className="flex items-center justify-center " style={{ paddingTop: '300px' }}>
                    <div
                        className={`bg-green-500 text-white font-bold py-6 px-10 rounded-lg shadow-md transform transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    >
                        <h2 className="text-4xl mb-4">Success!</h2>
                        <p className="text-lg">Your payment was successfully submitted.</p>
                    </div>

                </div>
                <div className='text-center mt-5' ><button className='text-white rounded-lg bg-blue-600 p-2' onClick={handleRedirect}>more items</button></div>
            </div>


        </div>
    );
}

export default Success;