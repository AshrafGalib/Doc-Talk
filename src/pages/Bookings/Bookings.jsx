
import { NavLink } from 'react-router';
import { BookDocContext } from '../../../public/Context/bookContext';
import { use } from 'react';
import BookedDoc from '../../components/BookedDoc/BookedDoc';
import Recharts from '../../components/Recharts/Recharts';


const Bookings = () => {
 const {bookedDoctors}=use(BookDocContext)

    return (
        <>
        {
            bookedDoctors.length===0?<div className='text-center mt-10 '>
            <h1 className='text-4xl font-bold'>You have not Booked any appoinment yet.</h1>
            <div className='w-6/12 mx-auto mt-4'>
                <p><small>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </small></p>
                <NavLink to='/'><button className='mt-5 btn btn-outline btn-info'>Book an Appoinment</button></NavLink>
                </div>
        </div>: <div>
            <Recharts></Recharts>
<div className='text-center mt-10 '>
                <h1 className='text-4xl font-bold'>My Today Appointments</h1>
            <div className='w-6/12 mx-auto mt-4'>
                <p><small>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </small></p>
                </div>
            </div>
            {bookedDoctors.map(bookedDoctor=>
            <BookedDoc bookedDoctor={bookedDoctor}></BookedDoc>
            )}
        </div> 
        }
        </>
    );
};

export default Bookings;