import mainCar from "../assets/images/audi.jpg";
import img1 from "../assets/images/audi1.jpg";
import img2 from "../assets/images/audi2.jpg";
import img3 from "../assets/images/audi3.jpg";

const CarGallery =()=>{
return(
<div>
    <div className="relative">
        <img
        src={mainCar}
        className="
        w-full
        h-[300px]
        md:h-[450px]
        object-cover
        rounded-2xl
        "/>
        <div className="
        absolute
        bottom-5
        left-5
        text-white
        ">
            <p className="
            bg-green-500
            inline
            px-3
            py-1
            rounded-full
            text-xs
            ">
            Premium Selection
            </p>
            <h1 className="
            text-3xl
            md:text-5xl
            font-bold
            mt-3
            ">
            Porsche 911 Turbo S
            </h1>
        </div>
    </div>

    <div className="
    grid
    grid-cols-4
    gap-3
    mt-4
    ">
        {
        [img1,img2,img3].map((img,index)=>(
        <img
        key={index}
        src={img}
        className="
        h-24
        md:h-32
        w-full
        object-cover
        rounded-xl
        "/>
        ))
        }
        <div className="
        h-24
        md:h-32
        bg-black
        rounded-xl
        flex
        items-center
        justify-center
        text-white
        ">
            +12 Photos
        </div>
    </div>
</div>
)}
export default CarGallery;