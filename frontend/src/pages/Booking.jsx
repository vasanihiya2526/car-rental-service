import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GuestInformation from "../components/GuestInformation";
import ScheduleForm from "../components/ScheduleForm";
import PaymentForm from "../components/PaymentForm";
import BookingSummary from "../components/BookingSummary";

const Booking=()=>{
return(
<div>
    <Navbar/>
    <div className="
    container
    mx-auto
    px-5
    py-10
    ">
        <h1 className="
        text-4xl
        md:text-5xl
        font-bold
        text-gray-900
        ">
        Complete Your Booking
        </h1>
        <p className="mt-2 text-gray-500">
        Confirm your details to finalize your reservation.
        </p>
        <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
        mt-10
        ">
            <div className="
            lg:col-span-2
            space-y-6
            ">
                <GuestInformation/>
                <ScheduleForm/>
                <PaymentForm/>
            </div>
            <div>
                <BookingSummary/>
            </div>
        </div>
    </div>
    <Footer/>
</div>
)}
export default Booking;