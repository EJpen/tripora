"use client";

import { motion } from "framer-motion";
import { Accordion } from "../ui/Accordion";

const faqs = [
  {
    question: "How do I book a trip on Tripora?",
    answer: "After finding your desired flight, hotel, or activity, simply follow the on-screen prompts to select your dates, number of travelers, and any additional preferences. Then proceed to the secure payment gateway to confirm your booking."
  },
  {
    question: "Does Tripora offer travel insurance?",
    answer: "Yes, we strongly recommend travel insurance. You can either use your existing provider or add travel insurance during the checkout process for extra peace of mind."
  },
  {
    question: "Does Tripora provide travel recommendations?",
    answer: "Absolutely! Our travel experts curate personalized recommendations based on your desired destinations, budget, and travel style. Just use our live chat or contact form."
  },
  {
    question: "Do you offer discount for group bookings?",
    answer: "Yes, we offer special rates for groups of 10 or more. Please reach out to our support team and we will provide a custom quote for your party."
  },
  {
    question: "Can I cancel or reschedule my trip?",
    answer: "Cancellation and rescheduling policies vary by package and provider. You can find the specific terms and conditions on the package details page before booking."
  }
];

export function FaqSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            FAQs address common inquiries and provide essential information, helping users find solutions quickly.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Accordion items={faqs} className="max-w-4xl" />
        </motion.div>
      </div>
    </section>
  );
}
