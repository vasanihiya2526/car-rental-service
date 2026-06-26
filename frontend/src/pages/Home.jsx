import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import hero from "../assets/images/hero-car.jpg";
import toyota from "../assets/images/toyota.jpg";
import mahindra_XUV70 from "../assets/images/mahindra_XUV70.jpg";
import hyundai_creta from "../assets/images/hyundai_creta.jpg";

const Home = () => {
return(
<div>
<Navbar/>

{/* HERO SECTION */}
<section className="
relative
overflow-hidden
min-h-screen
pt-20
">
<div
className="
absolute
inset-0
bg-cover
bg-center
"
style={{
backgroundImage:`url(${hero})`
}}
>
</div>
<div className="
absolute
inset-0
bg-gradient-to-r
from-white
via-white/90
to-transparent
">
</div>
<div className="
relative
z-10
min-h-screen
flex
items-center
px-4
sm:px-8
lg:px-16
">
<div className="
max-w-xl
w-full
">
<p className="
inline-block
bg-green-100
text-green-700
px-4
py-2
rounded-full
text-sm
">
PREMIUM MOBILITY
</p>
<h1 className="
mt-5
font-bold
leading-tight
text-3xl
sm:text-4xl
lg:text-6xl
">
Rent Your Perfect Car
<span className="
block
text-green-500
">
Anytime, Anywhere
</span>
</h1>
<p className="
mt-4
text-gray-600
text-sm
sm:text-base
">
Experience the ultimate car rental experience with DriveEase.
</p>

{/* Search Box */}
<div className="
bg-white
shadow-xl
rounded-2xl
p-4
mt-8
flex
flex-col
md:flex-row
gap-3
">
<input
type="text"
placeholder="Location"
className="
border
p-3
rounded-lg
w-full
"/>
<input
type="date"
className="
border
p-3
rounded-lg
w-full
md:w-auto
"/>
<button
className="
bg-green-500
text-white
px-6
py-3
rounded-lg
w-full
md:w-auto
hover:bg-green-600
">
Search Cars
</button>
</div>
</div>
</div>
</section>

{/* FEATURED CARS */}
<section className="
container
py-12
">
<h2 className="
text-2xl
sm:text-3xl
font-bold
">
Explore Featured Luxury Rentals
</h2>
<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-8
">
<CarCard
image={toyota}
name="Apex RS Ghost"
price="450"
/>
<CarCard
image={mahindra_XUV70}
name="Executive One"
price="320"
/>
<CarCard
image={hyundai_creta}
name="Titan X Terrain"
price="580"
/>
</div>
</section>

{/* TESTIMONIAL */}
<section className="
bg-gray-100
py-12
px-4
sm:px-6
lg:px-10
">
<h2 className="
text-center
text-2xl
sm:text-3xl
font-bold
">
The DriveEase Experience
</h2>
<div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-8
">
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

{/* CTA SECTION */}
<section className="
mx-4
sm:mx-6
lg:mx-10
my-10
bg-slate-950
text-white
rounded-xl
p-6
sm:p-10
lg:p-12
">
<h1 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
">
Ready for the
<span className="
text-green-500
">
 Ultimate Drive?
</span>
</h1>
<button
className="
bg-green-500
mt-6
px-6
py-3
rounded-lg
hover:bg-green-600
">
Book Your Car Now
</button>
</section>
<Footer/>
</div>
)
}
export default Home;