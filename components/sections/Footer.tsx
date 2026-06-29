import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* Top */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/logos/logo.png"
                alt="Neha Solar Suppliers"
                width={52}
                height={52}
              />

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Neha Solar
                </h3>

                <p className="text-sm text-green-500">
                  Suppliers
                </p>

              </div>

            </Link>

            <p className="mt-6 leading-8 text-slate-400">

              Neha Solar Suppliers provides premium rooftop solar systems,
              lithium batteries, tubular batteries, inverters, solar panels,
              electrical accessories and professional installation services.

            </p>

            {/* Social */}

            <div className="mt-8 flex gap-3">

              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-4">

              {[
                "Home",
                "About",
                "Services",
                "Products",
                "Contact",
              ].map((item) => (

                <Link
                  key={item}
                  href="/"
                  className="group flex items-center gap-2 transition hover:text-green-500"
                >

                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                  {item}

                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Our Services
            </h4>

            <div className="space-y-4">

              {[
                "Solar Panels",
                "Solar Inverters",
                "Lithium Batteries",
                "Tubular Batteries",
                "Solar Installation",
                "Electrical Accessories",
              ].map((item) => (

                <p
                  key={item}
                  className="transition hover:text-green-500"
                >
                  {item}
                </p>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-xl font-semibold text-white">
              Contact Us
            </h4>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <Phone
                  size={22}
                  className="mt-1 text-green-500"
                />

                <div>

                  <p className="font-medium text-white">
                    Call Us
                  </p>

                  <a
                    href="tel:+919717838367"
                    className="text-slate-400 hover:text-green-500"
                  >
                    +91 97178 38367
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail
                  size={22}
                  className="mt-1 text-green-500"
                />

                <div>

                  <p className="font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@nehasolar.in"
                    className="text-slate-400 hover:text-green-500"
                  >
                    info@nehasolar.in
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin
                  size={22}
                  className="mt-1 text-green-500"
                />

                <div>

                  <p className="font-medium text-white">
                    Address
                  </p>

                  <p className="leading-7 text-slate-400">
                    Azad Nagar,
                    <br />
                    Motor Market,
                    <br />
                    Sardarshahar,
                    Rajasthan
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Neha Solar Suppliers. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-green-500">
              Eraltafs
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}