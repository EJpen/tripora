"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

export function CtaSection() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2069&auto=format&fit=crop"
            alt="CTA Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />

        <div className="relative z-10 py-24 md:py-32 px-6 text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md leading-tight">
            Get Ready Your Thrilling <br /> Journey Into Nature Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow leading-relaxed">
            Explore the beauty of the world with Tripora. Your next incredible
            adventure is just a click away!
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 h-16 rounded-full text-lg font-bold shadow-xl transition-transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
