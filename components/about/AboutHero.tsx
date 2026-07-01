import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-8">

      {/* Background Image */}

      <Image
        src="/images/about.png"
        alt="Neha Solar Suppliers"
        fill
        priority
        className="object-cover object-center opacity-100"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-green-900/60" />

      {/* Blur */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-green-300 backdrop-blur">

            <BadgeCheck className="mr-2 h-4 w-4" />

            About Neha Solar Suppliers

          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Powering India
            <span className="block text-green-400">
              With Clean Energy
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

            Neha Solar Suppliers is your trusted destination for
            premium rooftop solar systems, lithium batteries,
            solar panels, inverters and complete solar energy
            solutions for residential, commercial and agricultural
            projects.

          </p>

          {/* Trust Points */}

          <div className="mt-10 flex flex-wrap gap-6 text-white">

            <div className="flex items-center gap-2">

              <BadgeCheck className="text-green-400" />

              <span>Premium Brands</span>

            </div>

            <div className="flex items-center gap-2">

              <BadgeCheck className="text-green-400" />

              <span>Expert Installation</span>

            </div>

            <div className="flex items-center gap-2">

              <BadgeCheck className="text-green-400" />

              <span>After Sales Support</span>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Link href="/contact">

              <Button
                size="lg"
                className="rounded-full bg-green-600 px-8 hover:bg-green-700"
              >
                Contact Us

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </Link>

            <a href="tel:+919717838367">

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900"
              >
                <Phone className="mr-2 h-4 w-4" />

                Call Now

              </Button>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}