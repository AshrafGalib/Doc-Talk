import React, { Suspense, useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import OurBestDoctor from '../../components/OurBestDoctor/OurBestDoctor';
import Doctor from '../../components/Doctor/Doctor';
import BMServices from '../../components/BMServices/BMServices';
import { DNA } from 'react-loader-spinner';

const Home = () => {

    //Loader func start
     const [loading, setLoading] = useState(true)
     useEffect(() => {
      const timer = setTimeout(() => {
      setLoading(false);
    })
    return () => clearTimeout(timer);
  }, []);
  //Loader func end
    
    const doctors =useLoaderData()
    //showAll state
    const [showAll,setShowAll]=useState(false)
    const visibleDoctors =showAll?doctors:doctors.slice(0,6)
    //console.log(doctors)
    //console.log(visibleDoctors)
    return (
        <div>
            {loading ? (
        <div className="flex justify-center mt-16">
          <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
        </div>
      ) : (<div>
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
        </div>)}
        </div>
      
            
            
    );
};

export default Home;