import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 97178 38367",
    description: "Talk directly with our solar experts.",
    href: "tel:+919717838367",
    button: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@nehasolar.in",
    description: "Send your enquiry anytime.",
    href: "mailto:info@nehasolar.in",
    button: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Office",
    value: "Azad Nagar, Motor Market",
    description: "Sardarshahar, Rajasthan",
    href: "https://www.google.com/maps/place/Neha+solar+suppliers+%7C+Solar+Panel+%7C+Solar+Inverter+%7C+Solar+Inverter+Battery+%7C+Agriculture+Solar+Pump+%7C+Solar+energy+Company/@28.4262449,74.5222473,17z/data=!3m1!4b1!4m6!3m5!1s0x3914f5130e6c93dd:0xff3bdc9132fb5952!8m2!3d28.4262402!4d74.5248222!16s%2Fg%2F11h2rw82_2?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D",
    button: "Open Map",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat",
    description: "9:00 AM - 7:00 PM",
    href: "#",
    button: "Always Available",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Contact Information
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            We're Always Ready
            <span className="block text-green-600">
              To Help You
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Reach us through phone, email or visit our office.
            Our team is always available to guide you with the
            best solar solution.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500
                  hover:shadow-2xl
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-green-600">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {item.href !== "#" && (
                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    className="mt-3 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3"
                  >
                    {item.button}

                    <ArrowUpRight size={18} />
                  </Link>
                )}

                {item.href === "#" && (
                  <span className="mt-3 inline-flex items-center gap-2 font-semibold text-green-600">
                    {item.button}
                  </span>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}