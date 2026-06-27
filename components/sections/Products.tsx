import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Our Products
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Premium Solar Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We supply premium quality solar products from India's trusted brands.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => {

            const Icon = product.icon;

            return (

              <div
                key={product.title}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-green-500
                  hover:shadow-xl
                "
              >

                {/* Image */}

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}

                <div className="p-6">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition duration-500 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white">

                    <Icon size={28} />

                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {product.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <button className="flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 group-hover:gap-3">

                    View Details

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}