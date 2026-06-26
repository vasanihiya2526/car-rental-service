import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
image:toyota,
name:"Mercedes AMG GT",
price:"175,900"
},
{
image:hyundai_creta,
name:"Tesla Model S Plaid",
price:"109,990"
},
{
image:honda_city,
name:"Porsche 911 GT3",
price:"223,800"
},
{
image:maruti_suzuki,
name:"Maruti Suzuki X7 M60i",
price:"108,700"
},
{
image:mahindra_XUV70,
name:"Mahindra XUV70",
price:"147,100"
},
{
image:audi,
name:"Lucid Air Sapphire",
price:"249,000"
}
];

return(
<div>
<Navbar/>
<section className="
container
bg-gray-50
pt-24
pb-10
">

{/* Breadcrumb */}
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

{/* Heading + Sort */}
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
w-full
sm:w-auto
hover:bg-gray-100
"
>
Sort By: Newest Arrival
</button>
</div>

{/* Main Layout */}
<div className="
grid
grid-cols-1
lg:grid-cols-4
gap-8
mt-10
">

{/* Filter */}
<div className="
lg:col-span-1
">
<FilterSidebar/>
</div>

{/* Cars */}
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
    cars.map((car,index)=>(
    <CarCard
    key={index}
    image={car.image}
    name={car.name}
    price={car.price}
    />
    ))
    }
</div>

<div className="
flex
justify-center
flex-wrap
gap-3
mt-10
">

    <button
        className="
        border
        px-4
        py-2
        rounded
        hover:bg-gray-100
        "
        >
        ←
    </button>

    <button
        className="
        bg-green-600
        text-white
        px-4
        py-2
        rounded
        "
        >
        1
    </button>

    <button
        className="
        border
        px-4
        py-2
        rounded
        "
        >
        2
    </button>

    <button
        className="
        border
        px-4
        py-2
        rounded"
        >
        3
    </button>
</div>
</div>
</div>
</section>
<Footer/>
</div>
)
}
export default Cars;