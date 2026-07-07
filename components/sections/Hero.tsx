"use client";

import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Sun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Sirf digits allow
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {
      name: "",

      phone: "",
      service: "",
      message: "",
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit mobile number";
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          email: "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        const text = `New Solar Enquiry

Name: 
${form.name}
Phone: 
${form.phone}
Requirement:
${form.message}`;

        window.open(
          `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
          "_blank",
        );

        alert("Enquiry Submitted Successfully");

        setForm({
          name: "",
          phone: "",
          message: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };
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

          <h1 className="mt-4 text-5xl font-extrabold leading-tight lg:text-7xl">
            Power Your
            <br />
            Future with
            <span className="block text-green-400">Solar Energy</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Complete Solar Solutions for Homes, Businesses and Agriculture.
            High-quality solar products, installation and after-sales support
            under one roof.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
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

          <form onSubmit={handleSubmit} className="space-y-4">
          <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                />
                  {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}

<input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Mobile Number"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                />
                 {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}

<textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirement..."
                className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
              />

              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full bg-green-600 text-lg hover:bg-green-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
