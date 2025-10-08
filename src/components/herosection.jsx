import React from "react";
import { ExternalLink, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-9 mt-10 ">
    
      <div className="max-w-xl">
        <h1 className="text-4xl font-semibold leading-snug">
          Evaluate performance of your ads on all levels
        </h1>
        <p className="text-gray-600 mt-3">
          Ads Manager is your actionable full-funnel dashboard. 
          Analyze both Apple Search Ads stats and post-install metrics 
          to take educated actions & accelerate ROAS.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 transition">
           <ExternalLink /> How to read the metrics
          </button>
          <button className="text-gray-500 hover:text-black font-medium">
            Skip
          </button>
        </div>
      </div>

    
      <div className="bg-orange-500 rounded-2xl text-white p-6 w-full md:w-80 aspect-video flex flex-col justify-center relative ">
        <p className="text-sm opacity-80 mb-1">A Video Guide</p>
        <h2 className="text-lg font-semibold">
          AppStorys acquire with apple ads
        </h2>
        <button className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white text-orange-600 rounded-full p-3">
            <Play size={20} fill="orange" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
