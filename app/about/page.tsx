"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Compass, Shield, Users, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const features = [
  {
    id: "01",
    title: "Global Expertise",
    description:
      "We have partnered with top resorts and guides worldwide to ensure you get the most authentic premium experience.",
    icon: Globe,
  },
  {
    id: "02",
    title: "Personalized Trips",
    description:
      "No two travelers are the same. We tailor every itinerary to match your specific preferences, pace, and passions.",
    icon: Users,
  },
  {
    id: "03",
    title: "Safe & Secure",
    description:
      "Your safety is our priority. We thoroughly vet all our partners and provide 24/7 support while you are on your trip.",
    icon: Shield,
  },
  {
    id: "04",
    title: "Seamless Process",
    description:
      "From booking to your flight back home, we handle all the logistics so you can simply focus on enjoying the journey.",
    icon: Compass,
  },
];

export default function AboutPage() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const horizontalSection = horizontalSectionRef.current;

      if (!horizontalSection) return;

      const itemsCount = features.length;
      const totalWidth = horizontalSection.scrollWidth;

      // Horizontal scroll animation
      let scrollTween = gsap.to(horizontalSection, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.parentElement,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: horizontalSectionRef.current?.parentElement || undefined },
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Travel Background */}
      <section className="relative h-screen flex border-none items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=2069&auto=format&fit=crop"
            alt="Beautiful travel destination"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-transparent"></div>
        </div>

        {/* Content on the left */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-bold text-[#0B2136] tracking-tight mb-8">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              We are a premium travel agency dedicated to crafting unforgettable
              journeys. Our mission is to help you explore the world safely,
              cost-effectively, and with a touch of luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section - Why Choose Us */}
      <div
        className="h-screen bg-[#f9f9f9] text-[#0B2136] overflow-hidden relative"
        id="why-choose-us-pin"
      >
        <div className="absolute top-10 left-8 md:left-24 lg:left-32 z-10 pt-20">
          <h2 className="text-4xl md:text-5xl font-light text-[#0B2136] mb-12 tracking-tight">
            Why Choose Us
          </h2>
        </div>

        <div
          ref={horizontalSectionRef}
          className="flex h-full items-center pt-24"
          style={{ width: `${features.length * 100}vw` }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-screen shrink-0 flex items-center justify-center px-8 md:px-24 container mx-auto"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full max-w-6xl">
                {/* Number */}
                <div className="text-[120px] md:text-[250px] font-medium text-gray-400 leading-none md:mr-8">
                  {feature.id}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 ml-auto flex flex-col items-start border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-4 md:pl-16">
                  <div className="mb-4 md:mb-8">
                    <feature.icon className="w-14 h-14 text-[#0B2136] stroke-1" />
                  </div>
                  <h3 className="text-3xl font-light text-[#0B2136] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-light max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End spacing */}
      <div className="h-64 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">More details coming soon...</p>
      </div>
    </div>
  );
}
