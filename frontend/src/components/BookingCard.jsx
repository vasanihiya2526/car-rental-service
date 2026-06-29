const BookingCard=()=>{

return(
<div className="
bg-white
border
rounded-2xl
p-6
shadow-sm
">
<p className="text-gray-500">
DAILY RATE
</p>
<h1 className="text-3xl font-bold mt-2">
$1,250
<span className="text-sm font-normal">
 /day
</span>
</h1>
<div className="mt-6 border rounded-xl p-4">

<h3 className="font-semibold">
Availability
</h3>
<div className="
grid
grid-cols-7
gap-2
mt-4
text-sm
">
{
Array.from({length:14}).map((_,i)=>(
<div
key={i}
className="
text-center
p-2
rounded
hover:bg-green-500
hover:text-white
cursor-pointer
"
>
{i+1}
</div>
))
}
</div>
</div>
<select
className="
border
w-full
p-3
rounded-lg
mt-6
">
<option>
Main Luxury Hub - Beverly
</option>
</select>
<button
className="
bg-green-500
text-white
w-full
py-4
rounded-xl
mt-6
font-bold
hover:bg-green-600
"
>
Book Now →
</button>
<p className="text-xs text-center mt-3">
No credit card required until confirmation
</p>
</div>
)}
export default BookingCard;