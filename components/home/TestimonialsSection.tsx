"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials1 = [
  {
    name: "Gabrielle",
    text: "Amazing experience! Everything from booking to the actual trip was smooth. The tour package was well organized and the destinations were absolutely stunning.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Samantha",
    text: "One of the best trips I've ever had. The itinerary was perfect and the support team was very responsive whenever we had questions.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Isabella",
    text: "Beautiful destinations and hassle-free booking. Everything was clearly explained and the travel experience exceeded our expectations.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "John",
    text: "Highly recommended. The trip package was affordable and the service was excellent from start to finish.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Natalie",
    text: "Our vacation was unforgettable. The planning was seamless and we were able to fully enjoy every moment of the journey.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const testimonials2 = [
  {
    name: "Victoria",
    text: "Fantastic travel service. The destinations were breathtaking and everything was organized perfectly.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Michael",
    text: "Booking our trip was incredibly easy and the entire travel experience was smooth and stress-free.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Olivia",
    text: "The tour package was amazing and the itinerary covered the best spots. Definitely booking with them again.",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "William",
    text: "Great service and amazing destinations. Everything was well planned and the trip was worth every penny.",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Emma",
    text: "An unforgettable travel experience. The booking process was simple and the trip itself exceeded expectations.",
    image: "https://i.pravatar.cc/150?img=10",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; text: string; image: string };
}) => (
  <div className="bg-gray-50/50 border border-gray-100 p-8 rounded-3xl w-87.5 sm:w-100 shrink-0 flex flex-col justify-between">
    <div>
      <span className="text-4xl text-gray-600 font-serif leading-none">“</span>
      <p className="text-gray-700 mt-4 mb-8 text-base/relaxed">
        {testimonial.text}
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full relative overflow-hidden shrink-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
      </div>
    </div>
  </div>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden flex flex-col mb-16 relative">
      <div className="text-center mb-16 max-w-3xl mx-auto p-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600"
        >
          Hear from our happy travelers who have experienced unforgettable
          journeys and seamless travel planning with our services.
        </motion.p>
      </div>

      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden">
        {/* Left/Right fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Top Row: Right to Left */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80,
          }}
        >
          {/* Duplicate the array twice to ensure smooth looping */}
          {[...testimonials1, ...testimonials1, ...testimonials1].map(
            (testimonial, i) => (
              <TestimonialCard key={`top-${i}`} testimonial={testimonial} />
            ),
          )}
        </motion.div>

        {/* Bottom Row: Left to Right */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: [-2000, 0] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80,
          }}
        >
          {/* Duplicate the array twice to ensure smooth looping */}
          {[...testimonials2, ...testimonials2, ...testimonials2].map(
            (testimonial, i) => (
              <TestimonialCard key={`bottom-${i}`} testimonial={testimonial} />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
