
import Navbar from '../../components/Header/Navbar';
import { Outlet} from 'react-router';
import Footer from '../../components/Footer/Footer';
import { BookDocContext } from '../../../public/Context/bookContext';
import {   useState } from 'react';
import { toast } from 'react-toastify';
import { getBookedDocFromLocalStorage, setBookedDocToLocalStorage } from '../../utilities/localStorage';

const Root = () => {
    const [bookedDoctors, setBookedDoctors] = useState(() => {
        return getBookedDocFromLocalStorage();
    });
    const handleBook = (doctor) => {
        const alreadyBooked = bookedDoctors.some(d => d.id === doctor.id);

        if (alreadyBooked) {
            toast("Appointment already scheduled for today", { type: "error" });
            return;
        }

        toast(`Appointment scheduled for ${doctor.name} successfully`, { type: "success" });

        const updated = [...bookedDoctors, doctor];
        setBookedDoctors(updated);
        setBookedDocToLocalStorage(doctor);
    };

    const handleCancelBook = (id) => {
        const updated = bookedDoctors.filter(doc => doc.id !== id);
        setBookedDoctors(updated);
        localStorage.setItem("Booked Doctor", JSON.stringify(updated));
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