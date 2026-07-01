import { Link } from "react-router-dom";

const CarCard = ({ car }) => {

if (!car) {
return null;
}

return (

<div
className="
bg-white
rounded-xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
"
>

<img
src={
car.image ||
"https://placehold.co/600x400"
}
alt={
car.name ||
"Car"
}
className="
w-full
h-48
sm:h-52
object-cover
"
/>

<div className="p-5">

<h2
className="
font-bold
text-lg
"
>

{car.name}

</h2>

<div
className="
flex
justify-between
items-center
mt-3
"
>

<span
className="
text-gray-500
text-sm
"
>

Luxury

</span>

<span
className="
text-green-500
font-bold
"
>

₹ {car.price}

</span>

</div>

<Link
to={`/cars/${car._id}`}
>

<button
className="
mt-5
border
border-green-500
text-green-600
w-full
py-2
rounded-lg
hover:bg-green-500
hover:text-white
transition
"
>

Rent Now

</button>

</Link>

</div>

</div>

);

};

export default CarCard;