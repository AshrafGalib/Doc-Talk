import React, { use } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";
import { dayName } from '../../../public/date';
//import { toast } from 'react-toastify';
import { BookDocContext } from '../../../public/Context/bookContext';




const DoctorDetails = () => {
    const {handleBook}=use(BookDocContext)
    //const notify = (msg,type) => toast(msg,({type}));
    const regNmbr =useParams()
    const doctors =useLoaderData()
    //console.log(doctors)
    //console.log(doctors)
    const doctor =doctors.find(doctor=>doctor.registration_number===regNmbr.registration_number)
   //console.log(doctor)
    const isAvailableToday = doctor.availability.some(time => time.day === dayName);
    return (
        <>
    {/* short profile details */}
        <div className=" rounded-xl card bg-[#0D0D0D]  shadow-lg mt-4">
            <div className='text-center mt-6'>
            <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
            <div className='mt-3 mb-6 w-6/12 mx-auto'>
                <p><small>{doctor.profile_details}</small></p>
                </div>
        </div>
        </div>
    {/* doctor pictire & Details */}
    <div className="grid md:grid-cols-2 gap-5 p-7 rounded-xl card bg-[#0D0D0D]  shadow-lg mt-4">
         <div className='bg-[#969696] border-black rounded-xl'>
    <figure className="">
    <img 
      src={doctor.image}
      alt="Shoes"
      className="rounded-xl h-[260px] " />
  </figure>
         </div>
         <div className=''>
            <h2 className='text-xl font-bold'>{doctor.name}</h2>
            <p className='text-base font-semibold text-gray-500'><small>{doctor.education}</small></p>
            <p className='text-base font-semibold text-gray-500'><small>{doctor.speciality}</small></p>
            <p className='mt-3 text-base font-semibold text-gray-500'><small>Working at</small></p>
            <h2 className='text-sm font-bold'>{doctor.working_at}</h2>
            <div className='mt-3 border-t-2 border-dashed border-gray-800'></div>
                <div className=' text-base font-semibold text-gray-500 mt-3 mb-3 flex items-center gap-2'>
                        <small><FaRegRegistered /></small>
                    <p ><small>Reg. No: {doctor.registration_number}</small></p>
                    </div>
            <div className=' border-t-2 border-dashed border-gray-800'></div>
            <div className='flex gap-5 items-center'>
               
                   
                     <p className='mt-5 text-base font-semibold'><small>Availability</small></p>
                   
                
                <div>
                    {
                        doctor.availability.map(time=><div className=" ml-2 mt-5  text-xs badge badge-soft badge-success">{time.day}</div>)
                    }
                </div>
            </div>
            <p className='mt-3 text-base font-semibold'><small>Consultation Fee:<span className='text-blue-500'>  Taka {doctor.consultation_fee}</span><span className='text-balance font-normal'> (Per consultation)</span></small></p>
         </div>
    </div>
    {/* book appoinment */}
    <div className=" rounded-xl card bg-[#0D0D0D]  shadow-lg mt-4">
            <div className='text-center mt-6'>
            <h1 className='text-2xl font-bold'>Book an Appointment</h1>
            <div className='ml-7 mr-7 mt-3 border-t-2 border-dashed border-gray-800'></div>
            <div className=' ml-7 mr-7 flex gap-5 items-center justify-between'>
               
                   
                     <p className='mt-5 text-base font-semibold'><small>Availability</small></p>
                   
                
                <div>
                    <div className={`ml-9 mt-5 badge-lg rounded-lg md:rounded-xl md:badge badge-soft ${isAvailableToday?'badge-success':'badge-warning'} `}>{isAvailableToday?'Doctor available today':'Doctor not available today'}</div>
                </div>
            </div>
            <div className=' ml-7 mr-7 mt-5 border-t-2 border-dashed border-gray-800'></div>
        </div>
        <div className="ml-7 mr-7 mt-5 badge-lg md:badge badge-ghost"><small>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</small></div>
                <NavLink className='flex justify-center' to='/mybookings'>
                    <button  onClick={()=>handleBook(doctor)} className="w-11/12 mt-5 mb-5 mr-7 ml-7 btn btn-outline btn-info">Book Appointment Now</button>
                </NavLink>
          </div>
        </>
        
    );
};

export default DoctorDetails;