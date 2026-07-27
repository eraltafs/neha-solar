import { Star, ArrowUpRight, BadgeCheck } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { Button } from "@/components/ui/button";

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

              <p className="mb-8 leading-8 text-slate-600">"{item.review}"</p>

              {/* User */}

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{item.name}</h4>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[32px] border border-slate-200 bg-gradient-to-r from-green-600 to-green-700 p-6 text-white shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
            <div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>

              <h3 className="mt-4 text-5xl font-bold">
                4.9<span className="text-3xl">/5</span>
              </h3>

              <p className="mt-3 text-green-100">
                Rated by 500+ Happy Customers
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5" />
                  Genuine Products
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5" />
                  Professional Installation
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5" />
                  Trusted Support
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/eG4ZpDBam8W3WgTg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full bg-white px-8 py-7 text-lg font-semibold text-green-700 hover:bg-slate-100"
              >
                Write a Google Review
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
