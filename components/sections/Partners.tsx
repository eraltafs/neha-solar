import Image from "next/image";
import { partners } from "@/lib/partners";

export default function Partners() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Our Partners
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Trusted Brand Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We deal with India's leading solar brands to deliver reliable,
            high-quality products and long-term performance.
          </p>
        </div>

        {/* Logo Grid */}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                group
                flex
                h-36
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-500
                hover:shadow-xl
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={170}
                height={80}
                className="
                  object-contain
                  transition-all
                  duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
