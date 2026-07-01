import {useNavigate} from "react-router-dom";
import StatCard from "./StatCard";

const UserDashboardContent = ({
data=[]
})=>{

const navigate=
useNavigate();

const activeBooking=
data?.[0];

return(

<>

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"
>

<StatCard
title="Total Trips"
value={data.length}
/>

<StatCard
title="Miles Driven"
value="1402"
/>

<StatCard
title="Loyalty Tier"
value="Elite"
/>

</div>



<div
className="
bg-white
rounded-xl
p-8
mt-8
"
>

<h2
className="
text-2xl
font-bold
"
>

Active Rental

</h2>

{

data.length===0

?

(

<h1 className="text-xl mt-5">

No Active Booking

</h1>

)

:

(

<>

<h1
className="
text-3xl
mt-5
"
>

{
activeBooking?.car?.carName
||
"No Car"
}

</h1>

<p className="mt-3">

Pickup:
{" "}
{
activeBooking?.pickupDate
?.slice(0,10)
}

</p>

<p>

Return:
{" "}
{
activeBooking?.returnDate
?.slice(0,10)
}

</p>

<p>

Amount:
₹
{
activeBooking?.totalAmount
}

</p>

<button
onClick={()=>
navigate(
`/cars/${activeBooking?.car?._id}`
)
}
className="
bg-green-500
text-white
px-5
py-3
rounded-xl
mt-5
hover:bg-green-600
"
>

Track Car

</button>

</>

)

}

</div>

</>

)

}

export default UserDashboardContent;