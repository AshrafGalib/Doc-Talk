import React, { use } from 'react';
import { BookDocContext } from '../../../public/Context/bookContext';

const BookedDoc = ({bookedDoctor}) => {
    const{handleCancelBook}=use(BookDocContext)
    const{id,name,education,consultation_fee}=bookedDoctor
    return (         
<div className=" rounded-xl card bg-[#0D0D0D]  shadow-lg mt-4">
    <div className='text-center mt-6'>
        <div className=' ml-7 mr-7 flex gap-5 items-center justify-between'>
                <div> 
                    <p className='mt-5 text-base font-semibold'><small>{name}</small>
                    </p>
                    <p className='text-base font-semibold text-gray-500'><small>{education}</small>
                    </p>
                </div>
            <div>
                <div> <p className='text-base font-semibold text-gray-500'><small>Appointment Fee: {consultation_fee} BDT </small></p>
                </div>
            </div>
        </div>
            <div className=' ml-7 mr-7 mt-5 border-t-2 border-dashed border-gray-800'>
            </div>   
    </div>
        <button onClick={()=>handleCancelBook(id)} className=" w-11/12 mt-5 mb-5 mr-7 ml-7 btn btn-ghost btn-info">Cancel Appointment
        </button>
</div>
    );
};

export default BookedDoc;