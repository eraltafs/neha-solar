import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Complete Solar Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We provide complete solar solutions for homes, businesses and
            agriculture with premium products and professional installation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
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
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition duration-500" />
                </div>

                {/* Content */}
                <div className="relative px-8 pb-8 pt-12">
                  {/* Floating Icon */}
                  <div
                    className="
                      absolute
                      -top-8
                      left-8
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

                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-green-600
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >
                    Learn More
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
