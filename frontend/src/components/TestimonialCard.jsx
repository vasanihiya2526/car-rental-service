const TestimonialCard=({name,text})=>{
return(
<div className="bg-white p-6 rounded-xl shadow">

    <div className="text-green-500">
    ★★★★★
    </div>

    <p className="text-gray-600 mt-3">
    {text}
    </p>

    <h4 className="mt-4 font-bold">
    {name}
    </h4>

</div>
)
}
export default TestimonialCard;