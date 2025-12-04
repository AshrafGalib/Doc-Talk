import React from 'react';
import { NavLink } from 'react-router';




const NotFound = () => {
    
    return (
        <div className='mt-10 rounded-4xl p-10 bg-neutral-900 grid w-6/12 mx-auto justify-items-center content-center '>
            <h1 className='text-xl font-bold'>NOT FOUND!</h1>
            <NavLink to='/'><button className="mt-5 btn btn-outline btn-info">Back to Home</button></NavLink>
        </div>
    );
};

export default NotFound;