"use client";

import Link from "next/link";
import { Compass, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-gray-900" />
              <span className="text-2xl font-bold tracking-tight text-gray-900">Tripora</span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Control your travel budget, invest, and explore the most beautiful destinations safely and cost-effectively.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Support Center</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Troubleshooting</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 mb-8">
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Tripora. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
