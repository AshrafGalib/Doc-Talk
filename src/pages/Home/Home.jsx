import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';

import { useLoaderData } from 'react-router';
import OurBestDoctor from '../../components/OurBestDoctor/OurBestDoctor';
import Doctor from '../../components/Doctor/Doctor';

import BMServices from '../../components/BMServices/BMServices';

const Home = () => {
    
    const doctors =useLoaderData()
    //showAll state
    const [showAll,setShowAll]=useState(false)
    const visibleDoctors =showAll?doctors:doctors.slice(0,6)
    //console.log(doctors)
    //console.log(visibleDoctors)
    return (
        <div>
            <Banner></Banner>
            <OurBestDoctor></OurBestDoctor>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-24  justify-items-center'>
                {
                    visibleDoctors.map(doctor=><Doctor key={doctor.id}
                         doctor={doctor}></Doctor>)
                }
            </div>
            <div  className='mt-5 flex justify-center'>
                <button onClick={()=>setShowAll(!showAll)} className="btn btn-outline btn-info">{showAll?'View less':'View all'}</button>
            </div>

          <BMServices></BMServices>
        </div>
    );
};

export default Home;