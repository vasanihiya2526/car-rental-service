const FilterSidebar = ({cars}) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        w-full
        border
      "
    >
      {/* Heading */}
      <h2 className="text-lg font-bold text-gray-800">
        SEARCH FLEET
      </h2>

      {/* Brand */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800">
          BRAND
        </h3>

        <div className="space-y-3 mt-4">
          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="brand"
              className="accent-green-600"
            />
            Mercedes-Benz
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="brand"
              defaultChecked
              className="accent-green-600"
            />
            Porsche
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="brand"
              className="accent-green-600"
            />
            Tesla
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="brand"
              className="accent-green-600"
            />
            BMW
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800">
          PRICE RANGE
        </h3>

        <div className="space-y-3 mt-4">
          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="price"
              className="accent-green-600"
            />
            Below ₹2,000
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-green-600 font-medium">
            <input
              type="radio"
              name="price"
              defaultChecked
              className="accent-green-600"
            />
            ₹2,000 - ₹5,000
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="price"
              className="accent-green-600"
            />
            ₹5,000 - ₹8,000
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="price"
              className="accent-green-600"
            />
            ₹8,000 - ₹10,000
          </label>

          <label className="flex items-center gap-3 cursor-pointer text-gray-700">
            <input
              type="radio"
              name="price"
              className="accent-green-600"
            />
            Above ₹10,000
          </label>
        </div>
      </div>

      {/* Fuel Type */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800">
          FUEL TYPE
        </h3>

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            className="
              border
              rounded-full
              px-4
              py-2
              hover:bg-gray-100
            "
          >
            Electric
          </button>

          <button
            className="
              border
              border-green-500
              text-green-600
              rounded-full
              px-4
              py-2
            "
          >
            Hybrid
          </button>
        </div>
      </div>

      {/* Seats */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-800">
          SEATS
        </h3>

        <div className="flex flex-wrap gap-3 mt-4">
          <button className="border rounded-lg px-4 py-2 hover:bg-gray-100">
            2
          </button>

          <button className="bg-green-500 text-white rounded-lg px-4 py-2">
            4
          </button>

          <button className="border rounded-lg px-4 py-2 hover:bg-gray-100">
            5
          </button>

          <button className="border rounded-lg px-4 py-2 hover:bg-gray-100">
            7+
          </button>
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          font-semibold
          py-3
          rounded-xl
          mt-10
          transition
        "
      >
        APPLY FILTERS
      </button>

      {/* Clear */}
      <button
        className="
          w-full
          mt-4
          text-gray-500
          hover:text-green-600
          text-sm
          underline
        "
      >
        Clear All
      </button>
    </div>
  );
};

export default FilterSidebar;