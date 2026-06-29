import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section className="bg-slate-50 py-12">
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
            We supply premium quality solar products from India's trusted
            brands.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="
                  group
                  relative
                  overflow-visible
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-green-500
                  hover:shadow-[0_25px_60px_rgba(34,197,94,.18)]
                "
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-black/10
                      to-transparent
                      opacity-70
                      transition
                      duration-500
                      group-hover:opacity-40
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative px-6 pb-6 pt-12">
                  {/* Floating Icon */}
                  <div
                    className="
                      absolute
                      -top-8
                      left-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-gradient-to-br
                      from-green-400
                      to-green-600
                      text-white
                      shadow-xl
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {product.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-green-600
                      transition-all
                      duration-300
                      hover:text-green-700
                      group-hover:gap-3
                    "
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
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
