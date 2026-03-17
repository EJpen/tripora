import { Globe, MonitorPlay, Zap, Triangle, Aperture, Command } from "lucide-react";

export function TrustedBySection() {
  const companies = [
    { name: "Goodwell", icon: Globe },
    { name: "FocalPoint", icon: MonitorPlay },
    { name: "Screentime", icon: Zap },
    { name: "Segment", icon: Triangle },
    { name: "Shutterframe", icon: Aperture },
    { name: "Master", icon: Command },
  ];

  return (
    <section className="py-16 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by 300+ Companies
        </p>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          {/* Gradient Masks for smooth fading on edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>
          
          <div className="animate-marquee flex whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Original Items */}
            <div className="flex gap-16 lg:gap-24 px-8 lg:px-12 items-center">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer shrink-0">
                  <company.icon className="w-7 h-7" />
                  <span className="text-2xl font-bold tracking-tight">{company.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicated Items for continuous effect */}
            <div className="flex gap-16 lg:gap-24 px-8 lg:px-12 items-center">
              {companies.map((company, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer shrink-0">
                  <company.icon className="w-7 h-7" />
                  <span className="text-2xl font-bold tracking-tight">{company.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicated Items for continuous effect (extra for wider screens) */}
            <div className="flex gap-16 lg:gap-24 px-8 lg:px-12 items-center">
              {companies.map((company, index) => (
                <div key={`dup2-${index}`} className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer shrink-0">
                  <company.icon className="w-7 h-7" />
                  <span className="text-2xl font-bold tracking-tight">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
