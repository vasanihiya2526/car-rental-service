import { useParams } from "react-router-dom";

import CarGallery from "../components/CarGallery";
import BookingCard from "../components/BookingCard";
import CarFeature from "../components/CarFeature";
import SimilarCar from "../components/SimilarCar";

import honda_city from "../assets/images/honda_city.jpg";
import toyota from "../assets/images/toyota.jpg";
import maruti_suzuki from "../assets/images/maruti_suzuki.jpg";



const CarDetails = () => {


const {id}=useParams();



return(


<div className="bg-gray-50">


<div className="
max-w-7xl
mx-auto
p-5
md:p-10
">


<p className="text-sm mb-5">

Fleet › Premium › Car {id}

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
value="Automatic"
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

Experience premium driving with DriveEase vehicles.

Book your favourite car with easy rental options.

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


</div>


)


}


export default CarDetails;