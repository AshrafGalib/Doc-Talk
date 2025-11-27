import React from 'react';
import SuccessDoctor from "../../assets/success-doctor.png"
import SuccessPatients from "../../assets/success-patients.png"
import SuccessReview from "../../assets/success-review.png"
import SuccessStaffs from "../../assets/success-staffs.png"
import CountUp from "react-countup"


const BMServices = () => {
    return (
        <>
         <div className='mb-8'>
             <div className='text-center mt-10 '>
            <h1 className='text-4xl font-bold'>We Provide Best Medical Services</h1>
            <div className='w-6/12 mx-auto'>
                <p><small>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </small></p>
                </div>
        </div>
        </div>
          <div className='flex flex-col  md:flex-row gap-8 justify-center items-center mt-4'>
            {/* card-1 */}
            <div className="card w-50 rounded-4xl bg-[#0D0D0D]  ">
  <div className="card-body">
    <img className='w-12' src={SuccessDoctor} alt="" />
    <CountUp className='text-5xl font-bold' start={0} end={199} duration={5} suffix="+" />
    <p className='text-base font-semibold text-gray-500'>Total Doctors</p>
    
  </div>
</div>
{/* card-2 */}
<div className="card w-50 rounded-4xl bg-[#0D0D0D]  shadow-lg">
  <div className="card-body">
    <img className='w-12' src={SuccessPatients} alt="" />
    <CountUp className='text-5xl font-bold' start={0} end={467} duration={5} suffix="+"/>
    <p className='text-base font-semibold text-gray-500'>Total Reviews</p>
    
  </div>
</div>
{/* card-3 */}
<div className="card w-50 rounded-4xl bg-[#0D0D0D]  shadow-lg">
  <div className="card-body">
    <img className='w-12' src={SuccessReview} alt="" />
    <CountUp className='text-5xl font-bold' start={0} end={1900} duration={5} suffix="+" />
    <p className='text-base font-semibold text-gray-500'>Patients</p>
    
  </div>
</div>
{/* card-4 */}
<div className="card w-50 rounded-4xl bg-[#0D0D0D]  shadow-lg">
  <div className="card-body">
    <img className='w-12' src={SuccessStaffs} alt="" />
    <CountUp className='text-5xl font-bold' start={0} end={300} duration={5} suffix="+"/>
    <p className='text-base font-semibold text-gray-500'>Total Staffs</p>
    
  </div>
</div>
          </div>
        
        </>
      
    );
};

export default BMServices;