"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const destinations = [
  {
    title: "Raja Ampat, Indonesia",
    description: "A comprehensive 10 day travel guide designed to explore the gems and attractions.",
    price: "$840-$890",
    image: "https://images.unsplash.com/photo-1544644181-1484b3f8c8b3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Nihwatu, Indonesia",
    description: "A comprehensive 8 day travel guide designed to explore the gems and attractions.",
    price: "$840-$890",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
  },
  {
    title: "Gili Islands, Indonesia",
    description: "A comprehensive 12 day travel guide designed to explore the gems and attractions.",
    price: "$1150-$1290",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Nusa Penida, Indonesia",
    description: "A comprehensive 4 day travel guide designed to explore the gems and attractions.",
    price: "$840-$890",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2080&auto=format&fit=crop",
  },
];

export function FeaturedDealsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Discover the Best Travel <br/> Deals of the Month
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Explore our travel packages for every traveler. Whether a beach getaway, mountain trek, or city exploration, we have something special!
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Nature Banner (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative rounded-3xl overflow-hidden group min-h-[500px] lg:min-h-auto"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=2000&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-4xl font-bold mb-6 leading-tight">
                Enjoy the <br/> Mesmerizing <br/> Beauty of Nature
              </h3>
              <div className="flex gap-2 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-md">
                     <img src={`https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=40&w=100&auto=format&fit=crop&sig=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid of Cards (Right Side) */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{dest.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{dest.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gray-900">{dest.price}</span>
                  <Link 
                    href="/results" 
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 group/btn"
                  >
                    Book Now <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
