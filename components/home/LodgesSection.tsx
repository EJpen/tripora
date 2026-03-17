"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const lodges = [
  {
    title: "Villa Pondok Indah",
    description:
      "A spacious home with three cozy bedrooms and two bathrooms, ideal for family.",
    price: "$640-$950",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Villa Pondok Tanjung",
    description:
      "A spacious home with three cozy bedrooms and two bathrooms, ideal for family.",
    price: "$840-$850",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Bali Patriot Residence",
    description:
      "A spacious home with three cozy bedrooms and two bathrooms, ideal for family.",
    price: "$840-$890",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    title: "Uluwatu Cliff Residence",
    description:
      "A spacious home with three cozy bedrooms and two bathrooms, ideal for family.",
    price: "$790-$890",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
];

export function LodgesSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Most Popular Lodges Around the World
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Explore our travel packages this month, with options for every
              traveler.
            </motion.p>
          </div>
          <Link
            href="/results"
            className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-50 transition-colors shrink-0 group shadow-sm"
          >
            See All{" "}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {lodges.map((lodge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col border border-gray-100"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={lodge.image}
                    alt={lodge.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {lodge.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                  {lodge.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-lg font-bold text-gray-900">
                    {lodge.price}
                  </span>
                  <Link
                    href="/results"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 group/btn"
                  >
                    Book Now{" "}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
