import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../services/api";
import BookingSummary from "../components/BookingSummary";
import SimilarCar from "../components/SimilarCar";

const CarDetails = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showAllPhotos, setShowAllPhotos] =
    useState(false);

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    try {
      const res =
        await API.get(`/cars/${id}`);

      setCar(res.data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!car) {
    return (
      <div className="p-10">
        Car Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto p-5">

        <p className="mb-6 text-gray-600">
          Fleet › {car.carName}
        </p>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-2">

            {/* MAIN IMAGE */}

            <img
              src={
                car.image?.length
                  ?
                  `http://localhost:5000/uploads/${car.image[0]}`
                  :
                  "https://placehold.co/1200x700"
              }
              alt={car.carName}
              className="
              w-full
              h-[520px]
              object-cover
              rounded-3xl
              "
            />

            {/* PHOTO GALLERY */}

            {

              car.image?.length > 1 && (

                <div
                  className="
                  grid
                  grid-cols-4
                  gap-4
                  mt-6
                  "
                >

                  {

                    (
                      showAllPhotos
                        ?
                        car.image.slice(1)
                        :
                        car.image.slice(1,5)

                    )

                    .map((img,index)=>(

                      <div
                        key={index}
                        className="relative"
                      >

                        {

                        !showAllPhotos
                        &&
                        index===3
                        &&
                        car.image.length>4

                        ?

                        <div
                          onClick={()=>
                          setShowAllPhotos(true)
                          }
                          className="
                          cursor-pointer
                          "
                        >

                          <img
                            src={`http://localhost:5000/uploads/${img}`}
                            alt="car"
                            className="
                            w-full
                            h-40
                            rounded-2xl
                            object-cover
                            "
                          />

                          <div
                            className="
                            absolute
                            inset-0
                            bg-black/40
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            text-white
                            text-3xl
                            font-bold
                            "
                          >

                            +{car.image.length - 4}

                          </div>

                        </div>

                        :

                        <img
                          src={`http://localhost:5000/uploads/${img}`}
                          alt="car"
                          className="
                          w-full
                          h-40
                          rounded-2xl
                          object-cover
                          "
                        />

                        }

                      </div>

                    ))

                  }

                </div>

              )

            }

            {/* DESCRIPTION */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              mt-8
              "
            >

              <h2 className="text-3xl font-bold">
                Description
              </h2>

              <p
                className="
                mt-4
                text-gray-600
                leading-7
                "
              >

                {
                  car.description
                  ||
                  "No description available"
                }

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <BookingSummary
              car={car}
            />

          </div>

        </div>

        <div className="mt-16">

          <h2
            className="
            text-3xl
            font-bold
            mb-6
            "
          >

            Similar Vehicles

          </h2>

          <SimilarCar/>

        </div>

      </div>

    </div>
  );
};

export default CarDetails;