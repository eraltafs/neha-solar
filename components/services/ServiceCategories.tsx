import Image from "next/image";
import {
  Home,
  Building2,
  Tractor,
  Battery,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    description:
      "Complete rooftop solar solutions for homes with subsidy assistance and professional installation.",
    image: "/services/rooftop.png",
    icon: Home,
    features: [
      "Rooftop Solar",
      "Subsidy Assistance",
      "Net Metering",
    ],
  },
  {
    title: "Commercial Solar",
    description:
      "High-performance solar systems for offices, shops, factories and commercial buildings.",
    image: "/services/commercial.png",
    icon: Building2,
    features: [
      "Lower Electricity Bills",
      "High ROI",
      "Scalable Systems",
    ],
  },
  {
    title: "Agriculture Solar",
    description:
      "Solar water pumps and agricultural solar solutions for farms and rural applications.",
    image: "/services/agriculture.png",
    icon: Tractor,
    features: [
      "Solar Pumps",
      "Government Schemes",
      "Reliable Operation",
    ],
  },
  {
    title: "Battery Solutions",
    description:
      "Lithium and tubular batteries for backup power and solar energy storage.",
    image: "/services/battery.png",
    icon: Battery,
    features: [
      "Lithium Battery",
      "Tubular Battery",
      "Long Backup",
    ],
  },
  {
    title: "Solar Inverters",
    description:
      "On-grid, hybrid and off-grid inverters from trusted brands for maximum efficiency.",
    image: "/services/inverters.png",
    icon: Zap,
    features: [
      "On Grid",
      "Hybrid",
      "Off Grid",
    ],
  },
  {
    title: "AMC & Maintenance",
    description:
      "Preventive maintenance, troubleshooting and after-sales support for solar systems.",
    image: "/services/maintenance.png",
    icon: Wrench,
    features: [
      "System Health Check",
      "Repair Support",
      "AMC Plans",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Solutions For Every Requirement
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-500">
            From residential rooftop solar systems to commercial installations,
            agricultural solutions and maintenance services.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="
                  group
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
                  hover:shadow-xl
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
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Features */}

                  <ul className="mt-6 space-y-3">

                    {service.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <span className="h-2 w-2 rounded-full bg-green-600" />

                        {feature}

                      </li>

                    ))}

                  </ul>

                  {/* Button */}

                  <button
                    className="
                      mt-8
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