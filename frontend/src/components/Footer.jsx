const Footer = () => {
return (
<footer className="
bg-white
px-4
sm:px-6
lg:px-10
py-10
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
">

{/* Brand */}
<div>
    <h2 className="
    font-bold
    text-xl
    ">
    DriveEase
    </h2>
    <p className="
    text-gray-500
    mt-3
    text-sm
    ">
    Premium mobility service for modern travelers.
    </p>
</div>

{/* Navigation */}
<div>
    <h3 className="font-bold mb-3">
    Navigation
    </h3>
    <p className="text-gray-600 cursor-pointer hover:text-green-500">
    Vehicle Fleet
    </p>
    <p className="text-gray-600 cursor-pointer hover:text-green-500">
    Special Offers
    </p>
</div>

{/* Support */}
<div>
    <h3 className="font-bold mb-3">
    Support
    </h3>
    <p className="text-gray-600 cursor-pointer hover:text-green-500">
    Help Center
    </p>
    <p className="text-gray-600 cursor-pointer hover:text-green-500">
    Contact
    </p>
</div>

{/* Newsletter */}
<div>
    <h3 className="font-bold mb-3">
    Newsletter
    </h3>
    <div className="flex flex-col gap-3">
        <input
        placeholder="Your email"
        className="
        border
        p-3
        rounded-lg
        w-full
        "/>
        <button
        className="
        bg-green-500
        text-white
        py-3
        rounded-lg
        hover:bg-green-600
        ">
        Subscribe
        </button>
    </div>
</div>
</footer>
)
}
export default Footer;