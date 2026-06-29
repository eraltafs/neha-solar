import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whyChoose } from "@/lib/whyChoose";

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Image */}

        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/why-choose.png"
            alt="Solar Installation"
            width={700}
            height={700}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Right */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Why Homeowners Trust Neha Solar
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide complete solar solutions with premium products,
            professional installation and reliable after-sales support.
          </p>

          {/* Features */}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Button */}

          <button className="mt-10 flex items-center gap-2 rounded-full bg-green-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:gap-3">
            Get Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}