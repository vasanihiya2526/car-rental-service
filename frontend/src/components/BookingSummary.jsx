import car from "../assets/images/mahindra_XUV70.jpg";

const BookingSummary=()=>{
return(
<div className="
bg-white
border
rounded-2xl
overflow-hidden
sticky
top-5
">
    <img
    src={car}
    className="
    w-full
    h-56
    object-cover
    "/>
    <div className="p-6">
        <h4 className="text-sm text-blue-900">
        PORSCHE
        </h4>
        <h2 className="text-3xl font-bold">
        911 GT3 RS
        </h2>
        <div className="flex justify-between mt-4">
            <span>
            Daily Rate
            </span>
            <span className="text-blue-900 font-bold">
            $850
            </span>
        </div>
        <hr className="my-5"/>
        <div className="space-y-3">
            <div className="flex justify-between">
                <span>
                Rental Duration (3 Days)
                </span>
                <b>
                $2550
                </b>
            </div>
            <div className="flex justify-between">
                <span>
                Insurance Coverage
                </span>
                <b>
                $150
                </b>
            </div>
            <div className="flex justify-between">
                <span>
                Service Fee
                </span>
                <b>
                $45
                </b>
            </div>
        </div>
        <hr className="my-5"/>
        <div className="flex justify-between text-xl">
            <b>
            Total
            </b>
            <b className="text-blue-900">
            $2745
            </b>
        </div>
        <button
        className="
        bg-blue-900
        text-white
        w-full
        py-4
        rounded-xl
        mt-6
        ">
        Confirm Reservation →
        </button>
    </div>
</div>
)}
export default BookingSummary;