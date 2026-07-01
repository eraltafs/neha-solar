import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-12">

      {/* Background */}

      <Image
        src="/services/rooftop.png"
        alt="Solar Services"
        fill
        priority
        className="object-cover opacity-30"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-green-900/60" />

      {/* Blur */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          {/* Badge */}

          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-green-300 backdrop-blur">

            Complete Solar Services

          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Complete Solar
            <span className="block text-green-400">

              Energy Solutions

            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

            We provide end-to-end solar services including
            rooftop solar installation, agricultural solar
            solutions, lithium batteries, inverters,
            maintenance and after-sales support for homes,
            businesses and industries.

          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-white">
                Residential Solar
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-white">
                Commercial Solar
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-white">
                Agriculture Solar
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-green-400" />

              <span className="text-white">
                Installation & Support
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Link href="/contact">

              <Button
                size="lg"
                className="rounded-full bg-green-600 px-8 hover:bg-green-700"
              >
                Get Free Quote

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </Link>

            <a href="tel:+919717838367">

              <Button
                size="lg"
                variant="outline"
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