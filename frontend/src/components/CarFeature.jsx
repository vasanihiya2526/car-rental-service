const CarFeature=({icon,title,value})=>{
return(
<div className="
bg-white
border
rounded-xl
p-5
text-center
">
    <div className="text-green-500 text-xl">
        {icon}
    </div>
    <p className="text-gray-500 text-sm mt-3">
        {title}
    </p>
    <h3 className="font-bold text-lg">
        {value}
    </h3>
</div>
)}
export default CarFeature;