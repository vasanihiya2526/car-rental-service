const CarCard = ({image,name,price}) => {
return (
<div className="
bg-white
rounded-xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
">
    <img
    src={image}
    alt={name}
    className="
    w-full
    h-48
    sm:h-52
    object-cover
    "/>
    <div className="p-5">
        <h2 className="
        font-bold
        text-lg
        ">
        {name}
        </h2>
        <div className="
        flex
        justify-between
        items-center
        mt-3
        ">
            <span className="
            text-gray-500
            text-sm
            ">
            Luxury
            </span>
            <span className="
            text-green-500
            font-bold
            ">
            ${price}
            </span>
        </div>
        <button
        className="
        mt-5
        border
        border-green-500
        text-green-600
        w-full
        py-2
        rounded-lg
        hover:bg-green-500
        hover:text-white
        transition
        ">
        Rent Now
        </button>
    </div>
</div>
)
}
export default CarCard;