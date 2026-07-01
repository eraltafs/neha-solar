import {
    Target,
    Eye,
    Gem,
  } from "lucide-react";
  
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide reliable, affordable and high-performance solar solutions that help customers reduce electricity costs while promoting a cleaner and greener future.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become one of India's most trusted solar energy companies by delivering innovative products, professional installation and exceptional customer service.",
    },
    {
      icon: Gem,
      title: "Our Core Values",
      description:
        "Quality, honesty, transparency and long-term customer relationships are the foundation of everything we do.",
    },
  ];
  
  export default function MissionVision() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
  
          <div className="mx-auto max-w-3xl text-center">
  
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
              Our Foundation
            </span>
  
            <h2 className="mt-5 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Mission, Vision &
              <span className="text-green-600"> Values</span>
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything we do is driven by our commitment to quality,
              innovation and customer satisfaction.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
  
            {items.map((item) => {
  
              const Icon = item.icon;
  
              return (
  
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[30px]
                    border
                    border-slate-200
                    bg-white
                    p-10
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-green-500
                    hover:shadow-2xl
                  "
                >
  
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-green-100
                      text-green-600
                      transition-all
                      duration-300
                      group-hover:bg-green-600
                      group-hover:text-white
                    "
                  >
  
                    <Icon size={40} />
  
                  </div>
  
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
  
                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
  
                </div>
  
              );
  
            })}
  
          </div>
  
        </div>
      </section>
    );
  }