// src/components/home/FeaturedProperties.jsx

import properties from "../../data/properties";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 lg:py-28">

      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="flex items-end justify-between gap-6">

          {/* Text content */}

          <div className="max-w-2xl">

            <h2
              className="
                text-4xl
                font-semibold
                tracking-tight
                text-gray-900
                md:text-5xl
              "
            >
              Top Pick Villas
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-gray-500
                md:text-lg
              "
            >
              Discover our handpicked collection of beautiful
              villas, carefully selected to give you an
              unforgettable stay.
            </p>

          </div>


          {/* ==========================================
              CAROUSEL ARROWS
          ========================================== */}

          <div className="hidden items-center gap-3 md:flex">

            {/* Previous button */}

            <button
              type="button"
              aria-label="Previous properties"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-xl
                text-gray-700
                transition
                hover:bg-gray-900
                hover:text-white
              "
            >
              ←
            </button>

            {/* Next button */}

            <button
              type="button"
              aria-label="Next properties"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-xl
                text-gray-700
                transition
                hover:bg-gray-900
                hover:text-white
              "
            >
              →
            </button>

          </div>

        </div>


        {/* ==========================================
            PROPERTY CARDS
        ========================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {properties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProperties;