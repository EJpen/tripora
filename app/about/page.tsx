import { Compass, Shield, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About Tripora</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a premium travel agency dedicated to crafting unforgettable journeys. 
            Our mission is to help you explore the world safely, cost-effectively, and with a touch of luxury.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="h-80 rounded-3xl overflow-hidden relative col-span-1 border border-gray-100 shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')"}} />
          </div>
          <div className="h-80 rounded-3xl overflow-hidden relative col-span-1 md:col-span-2 border border-gray-100 shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop')"}} />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We have partnered with top resorts and guides worldwide to ensure you get the most authentic premium experience.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Trips</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No two travelers are the same. We tailor every itinerary to match your specific preferences, pace, and passions.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your safety is our priority. We thoroughly vet all our partners and provide 24/7 support while you are on your trip.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed">From booking to your flight back home, we handle all the logistics so you can simply focus on enjoying the journey.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
