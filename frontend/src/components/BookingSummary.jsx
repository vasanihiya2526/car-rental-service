import {useNavigate} from "react-router-dom";

const BookingSummary = ({ car }) => {

const navigate =
useNavigate();

if (!car) return null;

const handleBooking = () => {

navigate(
`/booking/${car._id}`
);

};

return (

<div
className="
bg-white
border
rounded-2xl
overflow-hidden
sticky
top-5
"
>

<img
src={
car.image?.length
?
`http://localhost:5000/uploads/${car.image[0]}`
:
"https://placehold.co/600x400"
}
alt={car.carName}
className="
w-full
h-56
object-cover
"
/>

<div className="p-6">

<h4 className="text-sm text-blue-900">

{car.brand || "PREMIUM"}

</h4>

<h2 className="text-3xl font-bold">

{
car.carName
||
car.name
}

</h2>

<div className="flex justify-between mt-4">

<span>

Daily Rate

</span>

<span className="text-blue-900 font-bold">

₹
{
car.pricePerDay
||
car.price
||
0
}

</span>

</div>

<hr className="my-5"/>

<div className="space-y-3">

<div className="flex justify-between">

<span>

Rental Duration

</span>

<b>

1 Day

</b>

</div>

<div className="flex justify-between">

<span>

Insurance

</span>

<b>

Included

</b>

</div>

<div className="flex justify-between">

<span>

Service Fee

</span>

<b>

₹ 100

</b>

</div>

</div>

<hr className="my-5"/>

<div className="flex justify-between text-xl">

<b>

Total

</b>

<b className="text-blue-900">

₹
{
car.pricePerDay
||
car.price
||
0
}

</b>

</div>

<button
onClick={handleBooking}
className="
bg-blue-900
text-white
w-full
py-4
rounded-xl
mt-6
hover:bg-blue-800
"
>

Confirm Reservation →

</button>

</div>

</div>

);

};

export default BookingSummary;