import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../services/api";

import CarGallery from "../components/CarGallery";
import BookingCard from "../components/BookingSummary";
import CarFeature from "../components/CarFeature";
import SimilarCar from "../components/SimilarCar";

const CarDetails = () => {

const { id } = useParams();

const [car, setCar] =
useState(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {

getCar();

}, []);

const getCar = async () => {

try {

const res =
await API.get(
`/cars/${id}`
);

setCar(
res.data
);

}
catch(err){

console.log(err);

}
finally{

setLoading(false);

}

};

if(loading){

return(
<div>
Loading...
</div>
);

}

if(!car){

return(
<div>
Car Not Found
</div>
);

}

return(

<div className="bg-gray-50">

<div
className="
max-w-7xl
mx-auto
p-5
md:p-10
"
>

<p className="text-sm mb-5">

Fleet ›

<span className="ml-1">

{car.name}

</span>

</p>

<div
className="
grid
lg:grid-cols-3
gap-8
"
>

<div className="lg:col-span-2">

<CarGallery image={car.image}/>

<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mt-5
"
>

<CarFeature
icon="⛽"
title="Fuel"
value={
car.fuel
||
"N/A"
}
/>

<CarFeature
icon="💺"
title="Seats"
value={
car.seats
||
"N/A"
}
/>

<CarFeature
icon="⚙"
title="Transmission"
value={
car.transmission
||
"N/A"
}
/>

<CarFeature
icon="◉"
title="Mileage"
value={
car.mileage
||
"N/A"
}
/>

</div>

<div
className="
bg-white
border
rounded-xl
p-8
mt-6
"
>

<h2 className="text-2xl font-bold">

{car.name}

</h2>

<p
className="
text-gray-600
mt-4
leading-7
"
>

{
car.description
||
"No description available"
}

</p>

</div>

</div>

<div>

<BookingCard
car={car}
/>

</div>

</div>

<h2
className="
text-3xl
font-bold
mt-20
"
>

Similar Vehicles

</h2>

<div
className="
grid
md:grid-cols-3
gap-6
mt-8
"
>

<SimilarCar/>

</div>

</div>

</div>

);

};

export default CarDetails;