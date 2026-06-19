import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
import api from "../services/api";
function CarDetails(){
const {id}=useParams();
const [car,setCar]=useState(null);
useEffect(()=>{
api.get(`/cars/${id}`)
.then(res=>setCar(res.data))
},[]);
if(!car)
return <h1>Loading...</h1>
return(
<div className="p-10">
<img
src={car.image}
className="w-96"
/>
<h1 className="text-3xl">
{car.name}
</h1>
<p>
{car.description}
</p>
<Link
to={`/booking/${car._id}`}
>
<button className="bg-green-600 text-white p-3">
Book Now
</button>
</Link>
</div>
)
}
export default CarDetails;