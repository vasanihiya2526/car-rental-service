import {useEffect,useState} from "react";
import {Link,useNavigate} from "react-router-dom";

import API from "../services/api";

import CarCard from "../components/CarCard";
import TestimonialCard from "../components/TestimonialCard";

import hero from "../assets/images/hero-car.jpg";

const Home=()=>{

const navigate=
useNavigate();

const [cars,setCars]=
useState([]);

const [search,setSearch]=
useState("");

const [date,setDate]=
useState("");

useEffect(()=>{

loadCars();

},[]);



const loadCars=
async()=>{

try{

const res=
await API.get(
"/cars"
);

setCars(
res.data.cars ||
res.data
);

}
catch(err){

console.log(
"Home Cars Error",
err
);

}

};



const handleSearch=()=>{

navigate(
`/cars?search=${search}&date=${date}`
);

};



return(

<div>

{/* HERO */}

<section
className="
relative
overflow-hidden
min-h-screen
pt-20
"
>

<div
className="
absolute
inset-0
bg-cover
bg-center
"
style={{
backgroundImage:
`url(${hero})`
}}
>
</div>

<div
className="
absolute
inset-0
bg-gradient-to-r
from-white
via-white/90
to-transparent
"
>
</div>

<div
className="
relative
z-10
min-h-screen
flex
items-center
px-4
sm:px-8
lg:px-16
"
>

<div
className="
max-w-xl
w-full
"
>

<p
className="
inline-block
bg-green-100
text-green-700
px-4
py-2
rounded-full
text-sm
"
>

PREMIUM MOBILITY

</p>

<h1
className="
mt-5
font-bold
leading-tight
text-3xl
sm:text-4xl
lg:text-6xl
"
>

Rent Your Perfect Car

<span
className="
block
text-green-500
"
>

Anytime, Anywhere

</span>

</h1>

<p
className="
mt-4
text-gray-600
"
>

Experience the ultimate car rental experience with DriveEase.

</p>



{/* SEARCH */}

<div
className="
bg-white
shadow-xl
rounded-2xl
p-4
mt-8
flex
flex-col
md:flex-row
gap-3
"
>

<input
type="text"
placeholder="Search Cars"
value={search}
onChange={(e)=>
setSearch(
e.target.value
)
}
className="
border
p-3
rounded-lg
w-full
"
/>

<input
type="date"
value={date}
onChange={(e)=>
setDate(
e.target.value
)
}
className="
border
p-3
rounded-lg
w-full
md:w-auto
"
/>

<button
onClick={
handleSearch
}
className="
bg-green-500
text-white
px-6
py-3
rounded-lg
hover:bg-green-600
"
>

Search Cars

</button>

</div>

</div>

</div>

</section>



{/* FEATURED CARS */}

<section
className="
container
mx-auto
py-12
px-4
"
>

<h2
className="
text-3xl
font-bold
"
>

Explore Featured Luxury Rentals

</h2>

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-8
"
>

{

cars
.slice(0,3)
.map((car)=>(

<CarCard
key={car._id}
car={car}
/>

))

}

</div>



<div className="mt-10">

<Link to="/cars">

<button
className="
bg-green-500
text-white
px-8
py-3
rounded-lg
hover:bg-green-600
"
>

View All Cars

</button>

</Link>

</div>

</section>



{/* TESTIMONIAL */}

<section
className="
bg-gray-100
py-12
px-6
"
>

<h2
className="
text-center
text-3xl
font-bold
"
>

The DriveEase Experience

</h2>

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-8
"
>

<TestimonialCard
name="Julian Varkas"
text="Amazing rental experience"
/>

<TestimonialCard
name="Elena Rodriguez"
text="Smooth booking process"
/>

<TestimonialCard
name="Marcus Thorne"
text="Best car service"
/>

</div>

</section>



{/* CTA */}

<section
className="
mx-4
my-10
bg-slate-950
text-white
rounded-xl
p-10
"
>

<h1
className="
text-3xl
lg:text-5xl
font-bold
"
>

Ready for the

<span className="text-green-500">

Ultimate Drive?

</span>

</h1>

<Link to="/cars">

<button
className="
bg-green-500
mt-6
px-6
py-3
rounded-lg
hover:bg-green-600
"
>

Book Your Car Now

</button>

</Link>

</section>

</div>

)

}

export default Home;