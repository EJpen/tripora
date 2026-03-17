"use client";

import { MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Chat with us</h3>
                <p className="text-primary-100 text-sm">
                  We typically reply in a few minutes.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-primary-700 p-1 rounded-md transition-colors"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-gray-50 min-h-50 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <MessageSquare className="h-8 w-8 text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Send us a message and we&apos;ll get right back to you!
              </p>
              <Link
                href="/contact"
                className="w-full bg-gray-800 text-white font-medium py-3 px-4 rounded-md hover:bg-gray-900 transition-colors text-center shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Go to Contact Form
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gray-800 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-primary-700 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary-200"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
