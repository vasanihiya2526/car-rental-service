const CarGallery = ({ image = [], description }) => {
  const mainImage =
    image?.length > 0
      ? `http://localhost:5000/uploads/${image[0]}`
      : "https://placehold.co/1200x700";

  return (
    <div>

      {/* Main Image */}
      <img
        src={mainImage}
        alt="Car"
        className="
        w-full
        h-[500px]
        rounded-3xl
        object-cover
        "
      />

      {/* Other Photos */}
      {
        image?.length > 1 && (
          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mt-5
            "
          >
            {
              image.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/uploads/${img}`}
                  alt={`car-${index}`}
                  className="
                  h-40
                  w-full
                  rounded-xl
                  object-cover
                  "
                />
              ))
            }
          </div>
        )
      }

      {/* Description */}
      <div
        className="
        bg-white
        border
        rounded-xl
        p-8
        mt-8
        "
      >
        <h2 className="text-2xl font-bold">
          Description
        </h2>

        <p
          className="
          text-gray-600
          mt-4
          leading-7
          "
        >
          {
            description ||
            "No description available"
          }
        </p>
      </div>

    </div>
  );
};

export default CarGallery;