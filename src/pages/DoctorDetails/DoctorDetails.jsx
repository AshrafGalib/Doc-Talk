import React, {  useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';


//import { toast } from 'react-toastify';
import { BookDocContext } from '../../../public/Context/bookContext';
import { DNA } from 'react-loader-spinner';
import ChildOfDoctorDetails from '../../components/ChildOfDoctorDetails/ChildOfDoctorDetails';



const DoctorDetails = () => {
    const [loading, setLoading] = useState(true)
         useEffect(() => {
        // always show loader for 2 seconds
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
      }, []);
    const regNmbr =useParams()
    const doctors =useLoaderData()
    return (
        <>
       {
        loading ? (
                <div className="flex justify-center mt-16">
                  <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
                </div>
              ) : 
    (<ChildOfDoctorDetails doctors={doctors} regNmbr={regNmbr}></ChildOfDoctorDetails>)
       } 
        </>
        
    );
};

export default DoctorDetails;