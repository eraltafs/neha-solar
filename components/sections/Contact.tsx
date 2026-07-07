"use client";

import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
      email: "",
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

    if (!form.service) {
      newErrors.service = "Please select a service";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
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
        email: 
        ${form.email}
        service: 
        ${form.service}
        Requirement:
        ${form.message}`;

        window.open(
          `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
          "_blank",
        );

        alert("Enquiry Submitted Successfully");

        setForm({
          name: "",
          service: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };
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

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

<input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}

<div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Service Required
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-slate-700 outline-none transition-all duration-300 focus:border-green-600 focus:bg-white"
                >
                  <option value="">Select Service</option>
                  <option value="Solar Panels">Solar Panels</option>
                  <option value="Solar Inverters">Solar Inverters</option>
                  <option value="Lithium Batteries">Lithium Batteries</option>
                  <option value="Tubular Batteries">Tubular Batteries</option>
                  <option value="Commercial Solar">Commercial Solar</option>
                  <option value="Agriculture Solar Pump">
                    Agriculture Solar Pump
                  </option>
                  <option value="Solar Installation">Solar Installation</option>
                  <option value="AMC & Maintenance">AMC & Maintenance</option>
                </select>

                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                )}
              </div>

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
      </div>
    </section>
  );
}
