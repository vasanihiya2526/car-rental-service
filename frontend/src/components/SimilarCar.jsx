const SimilarCar=({image,name,price})=>{
return(
<div className="
bg-white
rounded-xl
overflow-hidden
shadow
">
    <img
    src={image}
    className="
    h-48
    w-full
    object-cover
    "/>
    <div className="p-4">
        <h2 className="font-bold text-lg">
            {name}
        </h2>
        <div className="
        flex
        justify-between
        mt-3
        ">
            <span>
                ⚡ Auto
            </span>
            <span className="text-green-600 font-bold">
                {price}
            </span>
        </div>
    </div>
</div>
)}
export default SimilarCar;