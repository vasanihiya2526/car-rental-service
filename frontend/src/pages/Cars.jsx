import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/CarCard";
import API from "../services/api";
const Cars = () => {
const [cars, setCars] = useState([]);
const [loading, setLoading] =
useState(true);
useEffect(() => {
getCars();
}, []);
const getCars = async () => {
try {
const res =
await API.get(
"/cars"
);
console.log(res.data);

setCars(
res.data.cars ||
res.data
);
}
catch (err) {
console.log(
"Cars Error:",
err
);
}
finally {
setLoading(
false
);
}
};
return (
<div>
<section
className="
container
bg-gray-50
pt-24
pb-10
"
>
<p
className="
text-sm
text-gray-500
mb-5
"
>
Marketplace /
<span
className="
text-green-600
ml-1
"
>
All Vehicles
</span>
</p>
<div
className="
flex
flex-col
md:flex-row
justify-between
items-start
md:items-center
gap-5
"
>
<h1
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
"
>
Luxury Fleet
</h1>
<button
className="
bg-white
border
px-4
py-3
rounded-lg
"
>
Sort By: Newest Arrival
</button>
</div>
<div
className="
grid
grid-cols-1
lg:grid-cols-4
gap-8
mt-10
"
>
<div>
<FilterSidebar />
</div>
<div
className="
lg:col-span-3
"
>
{
loading
?
<div>
Loading Cars...
</div>
:
<div
className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-6
"
>
{
Array.isArray(cars) &&
cars.map((car)=>(
<CarCard
key={car._id}
car={car}
/>
))
}
</div>
}
</div>
</div>
</section>
</div>
);
};
export default Cars;