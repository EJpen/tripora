"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-balance drop-shadow-lg leading-tight">
            Discover Your Next Amazing Journey Excitement and Wonder!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium drop-shadow-md">
            Embark on your most incredible adventure filled with excitement and wonder, where every moment is a breathtaking spectacle.
          </p>
        </motion.div>

        {/* Dummy Booking Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 mx-auto max-w-5xl"
        >
          <div className="flex gap-4 mb-6 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium transition-colors shrink-0">Travel</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium transition-colors shrink-0">Hotel</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium transition-colors shrink-0">Flight</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium transition-colors shrink-0">Destination</button>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-600" />
                Location
              </label>
              <Select defaultValue="" required className="h-14 border-gray-100 bg-gray-50 focus-visible:bg-white focus-visible:ring-primary-100 focus-visible:border-primary-500 rounded-xl">
                <option value="" disabled>Select destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="raja-ampat">Raja Ampat, Indonesia</option>
                <option value="maldives">Maldives</option>
                <option value="santorini">Santorini, Greece</option>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary-600" />
                Departure Month
              </label>
              <Select defaultValue="" required className="h-14 border-gray-100 bg-gray-50 focus-visible:bg-white focus-visible:ring-primary-100 focus-visible:border-primary-500 rounded-xl">
                <option value="" disabled>Select date range</option>
                <option value="jan">January 2027</option>
                <option value="feb">February 2027</option>
                <option value="mar">March 2027</option>
                <option value="apr">April 2027</option>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary-600" />
                Guests
              </label>
              <div className="flex gap-4 items-end">
                <Select defaultValue="" required className="h-14 border-gray-100 bg-gray-50 focus-visible:bg-white focus-visible:ring-primary-100 focus-visible:border-primary-500 rounded-xl flex-1">
                  <option value="" disabled>Select guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3+ Persons</option>
                </Select>
                <Button type="submit" className="h-14 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-xl shadow-md shrink-0 border border-gray-900 transition-all hover:scale-105 active:scale-95">
                  Search <Search className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
