import {useParams} from "react-router-dom";
import api from "../services/api";
function Booking(){
const {id}=useParams();
const book=()=>{
api.post("/booking",{
carId:id
})
.then(()=>alert("Booking Done"))
}
return(
<div className="p-10">
<h1>
Confirm Booking
</h1>
<button
onClick={book}
className="bg-green-600 text-white p-3"
>
Confirm
</button>
</div>
)
}
export default Booking;