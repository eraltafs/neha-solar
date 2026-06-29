import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600" />

      {/* Blur Effects */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl lg:p-16">

          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_.8fr]">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">

                <BadgeCheck className="mr-2 h-4 w-4" />

                Free Consultation

              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-6xl">

                Ready To Switch
                <br />

                <span className="text-green-100">
                  To Solar Energy?
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">

                Get expert guidance for rooftop solar, agricultural solar,
                lithium batteries, solar panels and complete installation
                services. Contact our team today for the best price.

              </p>

              {/* Trust Points */}

              <div className="mt-8 flex flex-wrap gap-6 text-white">

                <div className="flex items-center gap-2">

                  <BadgeCheck className="text-green-200" />

                  Premium Brands

                </div>

                <div className="flex items-center gap-2">

                  <BadgeCheck className="text-green-200" />

                  Professional Installation

                </div>

                <div className="flex items-center gap-2">

                  <BadgeCheck className="text-green-200" />

                  Genuine Warranty

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-[32px] bg-white p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-slate-900">
                Get Free Consultation
              </h3>

              <p className="mt-3 text-slate-500">
                Talk to our solar experts and get the best solution for your
                home, business or agriculture.
              </p>

              <div className="mt-8 space-y-4">

                <a href="tel:+919717838367">

                  <Button
                    className="h-12 w-full bg-green-600 text-base hover:bg-green-700"
                  >
                    <Phone className="mr-2 h-5 w-5" />

                    Call Now

                  </Button>

                </a>

                <a
                  href="https://wa.me/919717838367"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <Button
                    variant="outline"
                    className="h-12 w-full text-base"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />

                    WhatsApp

                  </Button>

                </a>

              </div>

              <div className="mt-8 rounded-2xl bg-green-50 p-5">

                <p className="text-sm leading-7 text-slate-700">

                  ✓ Free Site Visit

                  <br />

                  ✓ Fast Installation

                  <br />

                  ✓ Best Market Price

                  <br />

                  ✓ Genuine Products

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}