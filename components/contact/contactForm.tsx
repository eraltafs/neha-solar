"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Request a
            <span className="block text-green-600">
              Free Consultation
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Fill in your details and our solar experts will contact you with
            the best solution and quotation.
          </p>
        </div>

        {/* Form */}

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl lg:p-12">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Tell Us About Your Requirement
            </h3>

            <p className="mt-2 text-slate-600">
              We'll help you choose the right solar solution for your home,
              business or agriculture.
            </p>
          </div>

          <form className="space-y-7">
            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Row 2 */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Required
                </label>

                <select className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white">
                  <option>Solar Panels</option>
                  <option>Solar Inverters</option>
                  <option>Lithium Batteries</option>
                  <option>Tubular Batteries</option>
                  <option>Commercial Solar</option>
                  <option>Agriculture Solar Pump</option>
                  <option>Solar Installation</option>
                  <option>AMC & Maintenance</option>
                </select>
              </div>
            </div>

            {/* Message */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project or requirement..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
              />
            </div>

            {/* Benefits */}

            <div className="rounded-3xl bg-green-50 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">
                    Free Site Visit
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">
                    Best Market Price
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">
                    Genuine Products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">
                    Professional Installation
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}

            <Button
              size="lg"
              className="h-14 w-full rounded-2xl bg-green-600 text-base font-semibold hover:bg-green-700"
            >
              Get Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}