import React, { useState } from 'react';
import BannerPreviewCard from './BannerPreviewCard';
import BannerGeneratorSection from './BannerGeneratorSection';

const BannerTab = ({ data={}, niche = "Your Niche" }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBanners, setGeneratedBanners] = useState(null);

  // Function to simulate AI banner generation with Canva
  const generateBannersWithCanva = async () => {
    setIsGenerating(true);
    
    // Simulate API call to Canva AI
    setTimeout(() => {
      // Create AI-optimized banners based on niche
      const aiBanners = [
        {
          id: 1,
          title: "New Collection Launch",
          type: "Product Launch",
          previewText: `Introducing my ${niche} collection – handcrafted with passion`,
          description: `AI-optimized banner for new product launches with high-conversion elements`,
          tags: ["launch", "collection", "featured"],
          downloadUrl: "#",
          canvaEditUrl: "#"
        },
        {
          id: 2,
          title: "Custom Orders Open",
          type: "Service Announcement",
          previewText: `Your custom ${niche} piece awaits – commissions now open!`,
          description: `Banner designed to increase custom order inquiries with clear CTAs`,
          tags: ["commissions", "custom", "booking"],
          downloadUrl: "#",
          canvaEditUrl: "#"
        },
        {
          id: 3,
          title: "Limited Time Offer",
          type: "Promotional",
          previewText: `Special ${niche} discount – 20% off for the next 48 hours`,
          description: `Urgency-driven banner optimized for conversion with time-sensitive elements`,
          tags: ["sale", "discount", "limited-time"],
          downloadUrl: "#",
          canvaEditUrl: "#"
        },
        {
          id: 4,
          title: "Workshop Announcement",
          type: "Event",
          previewText: `Learn ${niche} techniques in my upcoming workshop – sign up now!`,
          description: `Banner designed to increase workshop registrations with social proof elements`,
          tags: ["workshop", "event", "learning"],
          downloadUrl: "#",
          canvaEditUrl: "#"
        }
      ];
      
      setGeneratedBanners(aiBanners);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div>
      {!generatedBanners ? (
        <BannerGeneratorSection 
          niche={niche} 
          onGenerateBanners={generateBannersWithCanva} 
        />
      ) : (
        <div>
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-peach-500 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <p className="mt-6 text-xl font-medium text-gray-700">Generating banners with Canva AI…</p>
              <p className="mt-2 text-gray-500">Analyzing your niche and audience for optimal designs</p>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">AI-Generated Banners</h3>
                <button 
                  onClick={() => setGeneratedBanners(null)}
                  className="text-peach-600 hover:text-peach-700 font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Generate New Banners
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generatedBanners.map((banner) => (
                  <BannerPreviewCard 
                    key={banner.id} 
                    banner={banner} 
                    onSelect={() => {}} 
                  />
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-peach-50 to-lilac-50 rounded-2xl border border-peach-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-peach-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-peach-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">Why AI-Generated Banners Work Better</h4>
                    <p className="text-gray-600 mt-1">
                      Our Canva AI integration analyzes thousands of high-performing designs to create banners 
                      specifically optimized for your niche and audience. No design skills needed!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BannerTab;

