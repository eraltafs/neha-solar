"use client";

import Link from "next/link";
import { Menu, Phone, MessageCircle } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger,
  SheetClose
 } from "@/components/ui/sheet";


import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logos/logo.png"
            alt="Neha Solar Suppliers"
            width={100}
            height={100}
            priority
            className="h-12 w-12"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-green-700">
              Neha Solar Suppliers
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a href={`tel:+919717838367`}>
            <Button variant="outline" size="sm">
              <Phone className="mr-1 h-4 w-4" />
              Call
            </Button>
          </a>

          <a
            href="https://wa.me/919717838367?text=Hi%20Neha%20Solar,%20I%20want%20to%20know%20about%20your%20solar%20products."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-1 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <a href="tel:+919717838367" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>

              <a
                href="https://wa.me/919717838367?text=Hi%20Neha%20Solar,%20I%20want%20to%20know%20about%20your%20solar%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
