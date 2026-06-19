import {Link} from "react-router-dom";
function CarCard({car}){
return(
<div className="border rounded p-4 shadow">
<img
src={car.image}
className="h-40 w-full object-cover"
/>
<h2 className="text-xl font-bold">
{car.name}
</h2>
<p>
Brand : {car.brand}
</p>
<p>
₹{car.pricePerDay}/day
</p>
<Link
to={`/cars/${car._id}`}
>
<button className="bg-blue-600 text-white p-2 mt-3">
View Details
</button>
</Link>
</div>
)
}
export default CarCard;