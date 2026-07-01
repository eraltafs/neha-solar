"use client";

import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12">
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-40" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-50 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-8 text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Contact Us
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Let's Build Your Solar Future
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}

          <div className="space-y-6">
            {/* Phone */}

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <div className="flex gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <Phone />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">Call Us</h3>

                  <a
                    href="tel:+919717838367"
                    className="block text-slate-600 hover:text-green-600"
                  >
                    +91 97178 38367
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <div className="flex gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <Mail />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email</h3>

                  <a
                    href="mailto:info@nehasolar.in"
                    className=" block text-slate-600 hover:text-green-600"
                  >
                    info@nehasolar.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <div className="flex gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <MapPin />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Visit Us</h3>

                  <p className="text-slate-600">
                    Azad Nagar, Motor Market, Sardarshahar, Rajasthan, 331403
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919717838367"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-green-600 p-6 text-white shadow-xl transition hover:bg-green-700"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={34} />

                <div>
                  <h3 className="text-xl font-bold">WhatsApp Support</h3>

                  <p className="mt-1 text-green-100">
                    Chat with our solar experts instantly.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT */}

          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900">
              Get Free Quote
            </h3>

            <p className="mt-3 text-slate-500">
              Fill out the form and our team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
              />

              <Button className="h-12 w-full bg-green-600 text-base hover:bg-green-700">
                <Send className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
