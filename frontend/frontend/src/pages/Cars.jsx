import {useEffect,useState} from "react";
import api from "../services/api";
import CarCard from "../components/CarCard";
import Navbar from "../components/Navbar";
function Cars(){
const [cars,setCars]=useState([]);
useEffect(()=>{
api.get("/cars")
.then(res=>{
setCars(res.data)
})
},[]);
return(
<>
<Navbar/>
<div className="grid grid-cols-3 gap-5 p-10">
{
cars.map(car=>(
<CarCard
key={car._id}
car={car}
/>
))
}
</div>
</>
)
}
export default Cars;