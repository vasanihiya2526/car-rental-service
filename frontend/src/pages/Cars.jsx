import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/CarCard";

import toyota from "../assets/images/toyota.jpg";
import hyundai_creta from "../assets/images/hyundai_creta.jpg";
import honda_city from "../assets/images/honda_city.jpg";
import maruti_suzuki from "../assets/images/maruti_suzuki.jpg";
import mahindra_XUV70 from "../assets/images/mahindra_XUV70.jpg";
import audi from "../assets/images/audi.jpg";

const Cars = () => {
const cars=[
{
id:1,
image:toyota,
name:"Mercedes AMG GT",
price:"175,900"
},
{
id:2,
image:hyundai_creta,
name:"Tesla Model S Plaid",
price:"109,990"
},
{
id:3,
image:honda_city,
name:"Porsche 911 GT3",
price:"223,800"
},
{
id:4,
image:maruti_suzuki,
name:"Maruti Suzuki X7 M60i",
price:"108,700"
},
{
id:5,
image:mahindra_XUV70,
name:"Mahindra XUV70",
price:"147,100"
},
{
id:6,
image:audi,
name:"Lucid Air Sapphire",
price:"249,000"
}
];
return(
<div>
<section className="
container
bg-gray-50
pt-24
pb-10
">
<p className="
text-sm
text-gray-500
mb-5
">
Marketplace /
<span className="
text-green-600
ml-1
">
All Vehicles
</span>
</p>
<div className="
flex
flex-col
md:flex-row
justify-between
items-start
md:items-center
gap-5
">
<h1 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
">
Luxury Fleet
</h1>
<button
className="
bg-white
border
px-4
py-3
rounded-lg
">
Sort By: Newest Arrival
</button>
</div>
<div className="
grid
grid-cols-1
lg:grid-cols-4
gap-8
mt-10
">
<div>
<FilterSidebar/>
</div>
<div className="
lg:col-span-3
">
<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-6
">
{
cars.map((car)=>(
<CarCard
key={car.id}
car={car}
/>
))
}
</div>
</div>
</div>
</section>
</div>
)}
export default Cars;