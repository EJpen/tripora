"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about a trip or want to request a callback? <br className="hidden sm:block"/> Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-10 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">123 Travel Boulevard, Suite 500<br/>San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+1 (800) 123-4567<br/>Mon-Fri 9am to 6pm PST</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">inquiries@tripora.com<br/>support@tripora.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-primary-50 rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center border border-primary-100 min-h-[500px]">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Sent Successfully!</h3>
                <p className="text-gray-600 max-w-md">Thank you for reaching out. One of our travel experts will contact you within 24 hours.</p>
                <Button 
                  className="mt-8"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input required placeholder="Jane Doe" className="bg-gray-50 border-gray-100 focus-visible:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input required type="email" placeholder="jane@example.com" className="bg-gray-50 border-gray-100 focus-visible:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-gray-50 border-gray-100 focus-visible:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Inquiry</label>
                    <Textarea required placeholder="Tell us about the trip you're interested in..." className="bg-gray-50 border-gray-100 focus-visible:bg-white text-base" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-14 mt-4 shadow-md bg-gray-900 hover:bg-gray-800 transition-all active:scale-95">
                    Send Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
