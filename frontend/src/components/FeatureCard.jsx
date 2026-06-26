const FeatureCard = ({icon,title,text})=>{
return (

<div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="text-2xl">
    {icon}
    </div>

    <h3 className="font-semibold mt-3">
    {title}
    </h3>

    <p className="text-gray-500 text-sm mt-2">
    {text}
    </p>
</div>
)
}
export default FeatureCard;