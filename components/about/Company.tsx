import Image from "next/image";
import {
  ShieldCheck,
  Users,
  BadgeCheck,
  Headphones,
  Target,
  Eye,
  Gem,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
  },
  {
    icon: Users,
    title: "Certified Engineers",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Brands",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
  },
];

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide reliable, affordable and high-performance solar solutions that help customers save energy, reduce costs and build a sustainable future.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become one of India's most trusted solar energy companies by delivering innovative products and exceptional customer service.",
  },
  {
    icon: Gem,
    title: "Our Values",
    description:
      "Quality, honesty, transparency and long-term relationships are at the heart of everything we do.",
  },
];

export default function Company() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
              Who We Are
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              Complete Solar Energy
              <span className="block text-green-600">
                Solutions Under One Roof
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Neha Solar Suppliers provides premium rooftop solar systems,
              lithium batteries, tall tubular batteries, solar panels,
              inverters, agricultural solar solutions and electrical
              accessories for residential, commercial and industrial projects.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work with India's leading brands to deliver reliable,
              energy-efficient and long-lasting solar solutions backed by
              professional installation and responsive after-sales support.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                      <Icon size={28} />
                    </div>

                    <span className="font-semibold text-slate-800">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/company.jpg"
                alt="Neha Solar Suppliers"
                width={800}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute right-6 top-1/2 -translate-y-1/2 rounded-3xl bg-white p-8 shadow-2xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="text-green-600" />
              </div>

              <h3 className="mt-5 text-center text-5xl font-extrabold text-slate-900">
                500+
              </h3>

              <p className="mt-2 text-center font-semibold text-slate-700">
                Happy Customers
              </p>

              <p className="text-center text-sm text-slate-500">
                Across Rajasthan
              </p>

              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-green-600" />
            </div>
          </div>
        </div>

        {/* Mission Vision */}

        <div className="mt-24 rounded-[32px] border border-slate-200 bg-slate-50 p-10">
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 shadow">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}

        <div className="mt-16 rounded-[32px] bg-green-600 py-10 text-white">
          <div className="grid text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-extrabold">500+</h3>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold">1000+</h3>
              <p className="mt-2">Products Delivered</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold">10+</h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold">24×7</h3>
              <p className="mt-2">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}