import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home(){
return(
<>
<Navbar/>
<div className="p-10 text-center">
<h1 className="text-5xl font-bold">
Rent Your Dream Car
</h1>
<p className="mt-5">
Fast , Safe and Affordable Car Rental
</p>
</div>
<Footer/>
</>
)
}
export default Home;