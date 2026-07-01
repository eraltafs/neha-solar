import {
    PhoneCall,
    MapPinned,
    Wrench,
    Headphones,
  } from "lucide-react";
  
  const process = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Free Consultation",
      description:
        "Share your requirements and get expert guidance for the right solar solution.",
    },
    {
      step: "02",
      icon: MapPinned,
      title: "Site Survey",
      description:
        "Our engineers inspect your location and design a customized solar system.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Installation",
      description:
        "Professional installation using premium products and industry standards.",
    },
    {
      step: "04",
      icon: Headphones,
      title: "Support",
      description:
        "Testing, warranty assistance and reliable after-sales service whenever needed.",
    },
  ];
  
  export default function WorkingProcess() {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
  
          <div className="mx-auto mb-16 max-w-3xl text-center">
  
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Our Process
            </span>
  
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Simple Process,
              <span className="text-green-600"> Professional Results</span>
            </h2>
  
            <p className="mt-4 text-slate-500">
              From consultation to installation and after-sales support,
              we make going solar simple and hassle-free.
            </p>
  
          </div>
  
          {/* Process */}
  
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  
            {process.map((item, index) => {
  
              const Icon = item.icon;
  
              return (
  
                <div
                  key={item.step}
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-green-500
                    hover:shadow-xl
                  "
                >
  
                  {/* Step */}
  
                  <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 transition duration-300 group-hover:text-green-100">
  
                    {item.step}
  
                  </span>
  
                  {/* Icon */}
  
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-green-100
                      text-green-600
                      transition-all
                      duration-300
                      group-hover:bg-green-600
                      group-hover:text-white
                    "
                  >
  
                    <Icon size={30} />
  
                  </div>
  
                  {/* Title */}
  
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
  
                  {/* Description */}
  
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
  
                  {/* Connector */}
  
                  {index !== process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-green-300 xl:block" />
                  )}
  
                </div>
  
              );
  
            })}
  
          </div>
  
        </div>
      </section>
    );
  }