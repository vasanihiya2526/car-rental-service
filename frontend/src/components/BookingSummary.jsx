import { useNavigate } from "react-router-dom";

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
sticky
top-5
p-6
"
>

<h4 className="text-sm text-blue-900">

{car.brand}

</h4>

<h2 className="text-3xl font-bold">

{car.carName}

</h2>

<div className="flex justify-between mt-6">

<span>

Daily Rate

</span>

<span className="text-blue-900 font-bold">

₹ {car.pricePerDay}

</span>

</div>

<hr className="my-5"/>

<div className="space-y-4">

<div className="flex justify-between">

<span>Model</span>

<b>{car.model}</b>

</div>

<div className="flex justify-between">

<span>Seats</span>

<b>{car.seats}</b>

</div>

<div className="flex justify-between">

<span>Fuel</span>

<b>{car.fuelType}</b>

</div>

<div className="flex justify-between">

<span>Transmission</span>

<b>{car.transmission}</b>

</div>

<div className="flex justify-between">

<span>Availability</span>

<b
className={
car.available
?
"text-green-600"
:
"text-red-600"
}
>

{
car.available
?
"Available"
:
"Not Available"
}

</b>

</div>

</div>

<hr className="my-5"/>

<div className="flex justify-between text-xl">

<b>Total</b>

<b className="text-blue-900">

₹ {car.pricePerDay}

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

);

};

export default BookingSummary;