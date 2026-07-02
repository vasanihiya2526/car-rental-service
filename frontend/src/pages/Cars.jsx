import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/CarCard";
import API from "../services/api";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const res = await API.get("/cars");

      setCars(res.data.cars || res.data);
    } catch (err) {
      console.log("Cars Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="w-full lg:w-[300px]">
            <FilterSidebar cars={cars} />
          </div>

          {/* Cars */}
          <div className="flex-1">

            {loading ? (
              <div className="flex justify-center items-center h-72 text-lg font-semibold">
                Loading Cars...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.isArray(cars) &&
                  cars.map((car) => (
                    <CarCard
                      key={car._id}
                      car={car}
                    />
                  ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Cars;