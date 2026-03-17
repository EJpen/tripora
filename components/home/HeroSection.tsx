"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Star, CalendarCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { CustomDropdown } from "./CustomDropdown";
import { DateRangeDropdown } from "./DateRangeDropdown";

export function HeroSection() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [location, setLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [guests, setGuests] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down for cinematic effect
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-8">
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
            Embark on your most incredible adventure filled with excitement and
            wonder, where every moment is a breathtaking spectacle.
          </p>
        </motion.div>

        {/* Dummy Booking Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-6xl mt-8 flex justify-center"
        >
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-4 md:p-6 bg-white/30 backdrop-blur-md border border-white/30 rounded-3xl w-full max-w-5xl shadow-xl"
          >
            <div className="flex flex-col md:flex-row flex-1 w-full gap-4 md:divide-x divide-white/50">
              <CustomDropdown
                icon={
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                }
                title="Location"
                placeholder="Enter your destinations"
                options={[
                  { label: "Bali, Indonesia", value: "bali" },
                  { label: "Raja Ampat, Indonesia", value: "raja-ampat" },
                  { label: "Maldives", value: "maldives" },
                  { label: "Santorini, Greece", value: "santorini" },
                ]}
                value={location}
                onChange={setLocation}
              />

              <DateRangeDropdown
                icon={
                  <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />
                }
                title="Travel Dates"
                placeholder="Select departure & arrival"
                departureDate={departureDate}
                arrivalDate={arrivalDate}
                onDepartureChange={setDepartureDate}
                onArrivalChange={setArrivalDate}
              />

              <CustomDropdown
                icon={
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                }
                title="Total Person"
                placeholder="How many peope?"
                options={[
                  { label: "1 Person", value: "1" },
                  { label: "2 Persons", value: "2" },
                  { label: "3+ Persons", value: "3" },
                ]}
                value={guests}
                onChange={setGuests}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-10 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shrink-0 uppercase tracking-wide h-15"
            >
              <CalendarCheck className="w-5 h-5 mb-1" />
              Book Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
