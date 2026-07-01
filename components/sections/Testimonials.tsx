import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We are proud to deliver quality solar solutions backed by excellent
            customer service and long-term support.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-green-500
                hover:shadow-[0_25px_60px_rgba(34,197,94,.15)]
              "
            >
              {/* Stars */}

              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="mb-8 leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* User */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}