
import Navbar from '../../components/Header/Navbar';
import { Outlet} from 'react-router';
import Footer from '../../components/Footer/Footer';
import { BookDocContext } from '../../../public/Context/bookContext';
import { useState } from 'react';
import { toast } from 'react-toastify';



const Root = () => {
    const [bookedDoctors,setBookedDoctors]=useState([])
    const handleBook =(doctor)=>{
        const checkDoctor = bookedDoctors.some(d=>d.id===doctor.id)
        console.log(checkDoctor)
        if(checkDoctor){
               toast('Appointment already scheduled for today',{type:'error'})
               //return bookedDoctors
        }
        else{
            toast('Booked',{type:'success'})
            const newBookedDoctors =[...bookedDoctors,doctor]
        setBookedDoctors(newBookedDoctors)
        }
    }
    const handleCancelBook=(id)=>{
       const newBookedDoctorsAfterCancelation = bookedDoctors.filter(doc=>
       id!==doc.id)
        setBookedDoctors(newBookedDoctorsAfterCancelation)
    }


    return (
        <div className= 'w-11/12 mx-auto'>
            
            <Navbar></Navbar>
           <BookDocContext.Provider value ={{bookedDoctors,handleBook,handleCancelBook}} >
               <Outlet></Outlet>
           </BookDocContext.Provider>
                
           
            <Footer></Footer>

        </div>
    );
};

export default Root;