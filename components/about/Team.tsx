import { UserRound } from "lucide-react";
import { team } from "@/lib/team";

export default function Team() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-4 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Meet The Experts Behind
            <span className="block text-green-600">
              Neha Solar Suppliers
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our experienced professionals are committed to delivering
            high-quality solar solutions with expert installation,
            transparent service and excellent customer support.
          </p>

        </div>

        {/* Team Grid */}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {team.map((member) => (

            <div
              key={member.name}
              className="
                group
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-green-500
                hover:shadow-2xl
              "
            >

              {/* Avatar */}

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-green-600 group-hover:text-white">

                <UserRound size={56} />

              </div>

              {/* Name */}

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {member.name}
              </h3>

              {/* Designation */}

              <span className="mt-3 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                {member.designation}
              </span>

              {/* Divider */}

              <div className="mx-auto my-6 h-px w-16 bg-slate-200 transition-all duration-300 group-hover:w-24 group-hover:bg-green-500" />

              {/* Bottom */}

              <p className="text-sm leading-7 text-slate-500">
                Dedicated to providing reliable solar solutions,
                quality workmanship and excellent customer service.
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}