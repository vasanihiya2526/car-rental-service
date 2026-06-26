import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CarGallery from "../components/CarGallery";
import BookingCard from "../components/BookingCard";
import CarFeature from "../components/CarFeature";
import SimilarCar from "../components/SimilarCar";

import honda_city from "../assets/images/honda_city.jpg";
import toyota from "../assets/images/toyota.jpg";
import maruti_suzuki from "../assets/images/maruti_suzuki.jpg";

const CarDetails=()=>{
return(
<div className="bg-gray-50">
    <Navbar/>
    <div className="
    max-w-7xl
    mx-auto
    p-5
    md:p-10
    ">
        <p className="text-sm mb-5">
        Fleet › Premium › Porsche 911 Turbo S
        </p>
        <div className="
        grid
        lg:grid-cols-3
        gap-8
        ">
            <div className="lg:col-span-2">
                <CarGallery/>
                <div className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
                mt-5
                ">
                    <CarFeature
                    icon="⛽"
                    title="Fuel"
                    value="Hybrid"
                    />
                    <CarFeature
                    icon="💺"
                    title="Seats"
                    value="2+2"
                    />
                    <CarFeature
                    icon="⚙"
                    title="Transmission"
                    value="PDK"
                    />
                    <CarFeature
                    icon="◉"
                    title="Mileage"
                    value="12k"
                    />
                </div>
                <div className="
                bg-white
                border
                rounded-xl
                p-8
                mt-6
                ">
                    <h2 className="text-2xl font-bold">
                    Engineering Excellence
                    </h2>
                    <p className="
                    text-gray-600
                    mt-4
                    leading-7
                    ">
                    Experience the pinnacle of German engineering with the Porsche 911 Turbo S.
                    This masterpiece combines everyday usability with supercar performance.
                    </p>
                </div>
            </div>
            <div>
                <BookingCard/>
            </div>
        </div>
        <h2 className="
        text-3xl
        font-bold
        mt-20
        ">
        Similar High-Performance Vehicles
        </h2>
        <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-8
        ">
            <SimilarCar
            image={honda_city}
            name="Ferrari F8 Tributo"
            price="$1400/day"
            />
            <SimilarCar
            image={toyota}
            name="Lamborghini Huracan"
            price="$1150/day"
            />
            <SimilarCar
            image={maruti_suzuki}
            name="Aston Martin DBS"
            price="$1300/day"
            />
        </div>
    </div>
    <Footer/>
</div>
)}
export default CarDetails;