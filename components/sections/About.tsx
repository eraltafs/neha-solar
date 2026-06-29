import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutFeatures } from "@/lib/aboutFeatures";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-32">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              About Neha Solar
            </span>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Complete Solar Energy
              <span className="block text-green-600">
                Solutions Under One Roof
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
            Neha Solar Suppliers is a trusted provider of complete solar energy solutions for residential, commercial and agricultural projects. We supply premium solar panels, inverters, lithium batteries, tubular batteries and all essential accessories.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
            With trusted brands, expert installation and dependable after-sales support, we help customers reduce electricity costs while embracing clean energy.
            </p>

            {/* Small Highlights */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />

                <span className="font-medium text-slate-700">
                  Premium Solar Brands
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />

                <span className="font-medium text-slate-700">
                  Professional Installation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />

                <span className="font-medium text-slate-700">
                  Genuine Warranty
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />

                <span className="font-medium text-slate-700">
                  After Sales Support
                </span>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="rounded-full bg-green-600 px-8 hover:bg-green-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <a href="tel:+919717838367">
                <Button size="lg" variant="outline" className="rounded-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
          group
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
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

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium Stats */}
      </div>
    </section>
  );
}
