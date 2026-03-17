"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DateRangeDropdownProps {
  icon: React.ReactNode;
  title: string;
  placeholder: string;
  departureDate: string;
  arrivalDate: string;
  onDepartureChange: (value: string) => void;
  onArrivalChange: (value: string) => void;
}

export function DateRangeDropdown({
  icon,
  title,
  placeholder,
  departureDate,
  arrivalDate,
  onDepartureChange,
  onArrivalChange,
}: DateRangeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasDates = departureDate || arrivalDate;
  const displayValue = hasDates
    ? `${departureDate || "TBD"} - ${arrivalDate || "TBD"}`
    : placeholder;

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 w-full text-left py-2 px-4 rounded-2xl transition-colors cursor-pointer"
      >
        <div className="text-gray-800 shrink-0">{icon}</div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg truncate">
              {title}
            </span>
            <ChevronDown
              className="w-4 h-4 text-white shrink-0"
              strokeWidth={3}
            />
          </div>
          <span className="text-gray-700 text-sm truncate">{displayValue}</span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 overflow-hidden min-w-[340px] md:min-w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => onDepartureChange(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => onArrivalChange(e.target.value)}
                    min={departureDate || undefined}
                    className="w-full border border-gray-200 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full bg-gray-900 text-white rounded-lg py-2 font-semibold transition-colors"
              >
                Apply Dates
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
