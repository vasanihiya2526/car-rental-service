const StatCard=({title,value})=>{
return(
<div
className="
bg-white
border
rounded-2xl
p-6
shadow-sm
">
    <p className="text-gray-500">
    {title}
    </p>
    <h2
    className="
    text-3xl
    font-bold
    mt-3
    ">
    {value}
    </h2>
</div>
)}
export default StatCard;