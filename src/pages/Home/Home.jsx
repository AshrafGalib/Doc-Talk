import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Bookings from '../Bookings/Bookings';
import { useLoaderData } from 'react-router';
import OurBestDoctor from '../../components/OurBestDoctor/OurBestDoctor';
import Doctor from '../../components/Doctor/Doctor';
import CountUp from 'react-countup';
import BMServices from '../../components/BMServices/BMServices';

const Home = () => {
    // const[doctors,setDoctors]=useState([])
    //     useEffect(()=>{
    //         fetch('Doctors.json')
    //         .then(res=>res.json())
    //         .then(data=>setDoctors(data))
    //     },[])
    
    const doctors =useLoaderData()
    console.log(doctors)
    // console.log(Array.isArray(doctors))
//     const loaderData = useLoaderData();
// const doctors = Array.isArray(loaderData) ? loaderData : [];

    
    //showAll state
    const [showAll,setShowAll]=useState(false)
    const visibleDoctors =showAll?doctors:doctors.slice(0,6)
    //console.log(doctors)
    console.log(visibleDoctors)
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