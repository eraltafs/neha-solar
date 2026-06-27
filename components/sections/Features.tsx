import {
    Wallet,
    BadgeCheck,
    ShieldCheck,
    Headphones,
  } from "lucide-react";
  
  const features = [
    {
      icon: Wallet,
      title: "Save Electricity Bills",
      desc: "Reduce your electricity bill by up to 90%",
    },
    {
      icon: BadgeCheck,
      title: "Government Subsidy",
      desc: "Complete subsidy assistance",
    },
    {
      icon: ShieldCheck,
      title: "25 Years Warranty",
      desc: "Premium solar panel warranty",
    },
    {
      icon: Headphones,
      title: "24×7 Support",
      desc: "Always here to help you",
    },
  ];
  
  export default function Features() {
    return (
      <section className="relative -mt-12 z-20">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="grid gap-5 rounded-3xl bg-white p-6 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl p-4 transition duration-300 hover:bg-green-50"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                    <Icon className="h-7 w-7 text-green-600" />
                  </div>
  
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {feature.title}
                    </h3>
  
                    <p className="mt-1 text-sm text-slate-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }