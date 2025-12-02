import React from 'react';
import { dayName } from '../../../public/date';
import { FaRegRegistered } from "react-icons/fa";
import { NavLink } from 'react-router';
const Doctor = ({doctor}) => {
    //console.log(dayName)
    //console.log(doctor)
    const {availability,experience,name,education,registration_number,image}=doctor
    return (
        <div className=''>
            <div className=" rounded-4xl card bg-[#0D0D0D] w-96 shadow-lg">
  <div className='bg-[#969696] w-10/12 mx-auto mt-10 border-black rounded-4xl'>
    <figure className="">
    <img 
      src={image}
      alt="Shoes"
      className="rounded-xl h-[260px] " />
  </figure>
  </div>
   <div>
        {
           availability.map((timing)=> dayName===timing.day &&<div className=" ml-9 mt-5  badge badge-soft badge-success">Available</div>  ) 
        }
    <div className=" ml-9 mt-5  badge badge-soft badge-info">{experience} Exp.</div>
   </div>
  <div className="mt-0 ml-2 card-body">
        <h2 className="card-title">{name}</h2>
    <p>{education}</p>
    <div className="mt-0 mb-0 divider"></div>
    <div className='flex items-center gap-2'>
        <FaRegRegistered />
    <p>Reg. No: {registration_number}</p>
    </div>
    <div className="card-actions">
      <NavLink to={`/doctorDetails/${registration_number}`}><button className="rounded-xl btn btn-outline btn-info">View details</button></NavLink>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctor;