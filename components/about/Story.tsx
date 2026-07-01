import {
    CalendarDays,
    Building2,
    SunMedium,
    Users,
  } from "lucide-react";
  
  const timeline = [
    {
      icon: CalendarDays,
      year: "2020",
      title: "Our Journey Started",
      description:
        "Neha Solar Suppliers was established with a vision to provide reliable and affordable solar energy solutions.",
    },
    {
      icon: Building2,
      year: "2021",
      title: "Expanded Product Range",
      description:
        "Added premium solar panels, inverters, batteries and electrical accessories from India's leading brands.",
    },
    {
      icon: SunMedium,
      year: "2023",
      title: "Complete Solar Solutions",
      description:
        "Started providing end-to-end rooftop solar installation for homes, businesses and agriculture.",
    },
    {
      icon: Users,
      year: "Today",
      title: "Trusted By Hundreds",
      description:
        "Serving customers across Rajasthan with quality products, professional installation and reliable after-sales support.",
    },
  ];
  
  export default function Story() {
    return (
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
  
          <div className="mx-auto max-w-3xl text-center">
  
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
              Our Story
            </span>
  
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Our Journey Towards
              <span className="block text-green-600">
                Sustainable Energy
              </span>
            </h2>
  
            <p className="mt-3 text-lg leading-8 text-slate-600">
              From a small beginning to becoming a trusted solar solution
              provider, our journey has always focused on quality,
              innovation and customer satisfaction.
            </p>
  
          </div>
  
          {/* Timeline */}
  
          <div className="relative mt-4">
  
            {/* Vertical Line */}
  
            <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-green-200 lg:block" />
  
            <div className="space-y-4">
  
              {timeline.map((item) => {
  
                const Icon = item.icon;
  
                return (
  
                  <div
                    key={item.title}
                    className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl lg:ml-16"
                  >
  
                    {/* Icon */}
  
                    <div className="absolute -left-16 top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg lg:flex">
  
                      <Icon size={22} />
  
                    </div>
  
                    <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
  
                      {item.year}
  
                    </span>
  
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
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
  
        </div>
      </section>
    );
  }