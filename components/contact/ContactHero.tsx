import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-10 lg:py-10">

      {/* Background */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-70" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-50 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Contact Us
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Let's Build Your
              <span className="block text-green-600">
                Solar Future Together
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Whether you're planning a rooftop solar system,
              commercial installation, agricultural solar pump,
              inverter, lithium battery or complete solar solution,
              our experts are ready to help.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Free Consultation",
                "Site Visit Available",
                "Government Subsidy Guidance",
                "Best Market Pricing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a href="tel:+919717838367">

                <Button
                  size="lg"
                  className="rounded-full bg-green-600 px-8 hover:bg-green-700"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>

              </a>

              <Link
                href="https://wa.me/919717838367"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

              <Image
                src="/images/contact.png"
                alt="Contact Neha Solar Suppliers"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl">

              <p className="text-sm text-slate-500">
                Available
              </p>

              <h3 className="mt-1 text-3xl font-bold text-green-600">
                24×7
              </h3>

              <p className="text-slate-600">
                Customer Support
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}