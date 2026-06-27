"use client";

import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Sun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Solar Panels"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-green-900/30" />
      </div>

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-6 pt-24 pb-20 lg:grid-cols-2">

        {/* Left Side */}
        <div className="text-white">

          <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur">
            ☀ Trusted Solar Solution Provider
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Power Your
            <br />
            Future with
            <span className="block text-green-400">
              Solar Energy
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Complete Solar Solutions for Homes, Businesses and Agriculture.
            High-quality solar products, installation and after-sales support
            under one roof.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <a href="tel:+919717838367">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>

          </div>

          {/* Features */}
          <div className="mt-14 grid grid-cols-3 gap-6">

            <div className="flex items-center gap-3">
              <Sun className="h-9 w-9 text-green-400" />
              <div>
                <p className="font-semibold">Premium</p>
                <p className="text-sm text-gray-300">Solar Products</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Leaf className="h-9 w-9 text-green-400" />
              <div>
                <p className="font-semibold">Eco</p>
                <p className="text-sm text-gray-300">Friendly</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="h-9 w-9 text-green-400" />
              <div>
                <p className="font-semibold">Trusted</p>
                <p className="text-sm text-gray-300">Support</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Form */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl backdrop-blur">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Get a Free Quote
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
            />

            <textarea
              rows={4}
              placeholder="Tell us your requirement..."
              className="w-full rounded-xl border p-4 outline-none focus:border-green-600"
            />

            <Button className="h-12 w-full bg-green-600 text-lg hover:bg-green-700">
              Submit Enquiry
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}