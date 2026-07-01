import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import API from "../services/api";

import GuestInformation from "../components/GuestInformation";
import ScheduleForm from "../components/ScheduleForm";
import PaymentForm from "../components/PaymentForm";
import BookingSummary from "../components/BookingSummary";

const Booking = () => {

const { id } = useParams();

const navigate =
useNavigate();

const [car,setCar] =
useState(null);

const [loading,setLoading] =
useState(false);

const [pickupDate,setPickupDate] =
useState("");

const [returnDate,setReturnDate] =
useState("");


// LOAD CAR
useEffect(()=>{

fetchCar();

},[]);

const fetchCar =
async()=>{

try{

const res =
await API.get(
`/cars/${id}`
);

setCar(
res.data
);

}
catch(error){

console.log(error);

}

};


// SUBMIT BOOKING
const submitBooking =
async()=>{

try{

if(
!pickupDate ||
!returnDate
){

return alert(
"Select dates"
);

}

setLoading(true);

await API.post(
"/bookings",
{
car:id,
pickupDate,
returnDate
}
);

alert(
"Booking Success"
);

navigate(
"/dashboard"
);

}
catch(err){

console.log(err);

alert(
err.response?.data?.message
||
"Booking Failed"
);

}
finally{

setLoading(false);

}

};

return(

<div className="container mx-auto px-5 py-10">

<h1
className="
text-4xl
font-bold
"
>

Complete Your Booking

</h1>

<p className="text-gray-500 mt-2">

Confirm your details

</p>


<div
className="
grid
grid-cols-1
lg:grid-cols-3
gap-8
mt-10
"
>

{/* LEFT */}

<div className="lg:col-span-2 space-y-6">

<GuestInformation/>

<div>

<ScheduleForm/>

<div
className="
grid
md:grid-cols-2
gap-5
mt-4
"
>

<input
type="date"
value={pickupDate}
onChange={(e)=>
setPickupDate(
e.target.value
)
}
className="
border
p-3
rounded-lg
"
/>

<input
type="date"
value={returnDate}
onChange={(e)=>
setReturnDate(
e.target.value
)
}
className="
border
p-3
rounded-lg
"
/>

</div>

</div>

<PaymentForm/>

<button
onClick={submitBooking}
className="
w-full
bg-green-500
text-white
py-4
rounded-xl
"
>

{
loading
?
"Booking..."
:
"Confirm Booking"
}

</button>

</div>


{/* RIGHT */}

<div>

<BookingSummary
car={{
...car,
price:
car?.pricePerDay,
name:
car?.carName
}}
/>

</div>

</div>

</div>

);

};

export default Booking;