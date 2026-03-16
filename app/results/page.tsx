import { MapPin, Calendar, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ResultsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Your Search Results</h1>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-64 sm:h-80 w-full relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop')" }}
            />
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Bali Adventure Package</h2>
                <div className="flex items-center text-gray-500 gap-4">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Bali, Indonesia</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 Days, 6 Nights</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Total Price</p>
                <p className="text-4xl font-bold text-primary-600 flex items-center sm:justify-end gap-1"><DollarSign className="w-6 h-6" />1,299</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Accommodation in a luxury 4-star resort with daily breakfast included.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Guided island tours including visits to historic temples and hidden beaches.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Round-trip airport transfers and premium transportation during tours.</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interested in this trip?</h3>
              <p className="text-gray-600 mb-6 max-w-md">Our travel experts are ready to finalize your booking or customize this package to fit your exact needs.</p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-md">
                  Call Back Request
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
