"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
        setErrors({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };
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
            <span className="block text-green-600">Free Consultation</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Fill in your details and our solar experts will contact you with the
            best solution and quotation.
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

          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Row 1 */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>

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
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number *
                </label>

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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border p-4 outline-none transition focus:border-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

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
            </div>

            {/* Message */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>

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
            </div>

            {/* Benefits */}

            <div className="rounded-3xl bg-green-50 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600" />

                  <span className="font-medium text-slate-700">
                    Free Site Visit
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600" />

                  <span className="font-medium text-slate-700">
                    Best Market Price
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600" />

                  <span className="font-medium text-slate-700">
                    Genuine Products
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600" />

                  <span className="font-medium text-slate-700">
                    Professional Installation
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}

            <Button
              size="lg"
              type="submit"
              disabled={loading}
              className="h-14 w-full rounded-2xl bg-green-600 text-base font-semibold hover:bg-green-700"
            >
              {loading ? "Submitting..." : "Get Free Consultation"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
