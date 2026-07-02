import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  if (!car) return null;

  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      border-gray-200
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={
            car.image?.length > 0
              ? `http://localhost:5000/uploads/${car.image[0]}`
              : "https://placehold.co/600x400"
          }
          alt={car.carName}
          className="
          w-full
          h-56
          object-cover
          hover:scale-105
          transition-transform
          duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Car Name */}
        <h2 className="text-xl font-bold text-gray-900">
          {car.carName}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Luxury SUV
        </p>

        {/* Details */}
        <div className="flex justify-between mt-5 text-sm text-gray-500">
          <span>👥 4 Seats</span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom */}
        <div className="flex justify-between items-center">

          <div>
            <p className="text-xs text-gray-400 uppercase">
              Price
            </p>

            <h3 className="text-2xl font-bold text-green-600">
              ₹{car.pricePerDay}
              <span className="text-sm text-gray-500 font-normal">
                /day
              </span>
            </h3>
          </div>

          <Link to={`/cars/${car._id}`}>
            <button
              className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              "
            >
              Rent Now
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CarCard;