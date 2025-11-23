import React from 'react';

const BannerGeneratorSection = ({ niche, onGenerateBanners }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-peach-50 to-rose-50 p-6">
        <h3 className="text-xl font-bold text-gray-800">AI Banner Generator</h3>
        <p className="text-gray-600 mt-2">
          Let Canva AI create the perfect banners for your niche. Simply enter your details and we'll generate optimized designs.
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Niche</label>
            <input 
              type="text" 
              value={niche}
              readOnly
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Purpose</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach-300">
              <option>New Product Launch</option>
              <option>Custom Orders Open</option>
              <option>Promotional Sale</option>
              <option>Workshop Announcement</option>
              <option>Portfolio Showcase</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
          <div className="flex flex-wrap gap-2">
            {['Art Collectors', 'Home Decor Lovers', 'DIY Enthusiasts', 'Gift Shoppers', 'Beginners'].map((audience) => (
              <span 
                key={audience}
                className="px-3 py-1.5 bg-lilac-100 text-lilac-700 rounded-full text-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={onGenerateBanners}
            className="px-8 py-4 bg-gradient-to-r from-peach-500 to-rose-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Generate AI Banners with Canva
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-800">How It Works</h4>
              <p className="text-sm text-blue-700 mt-1">
                Our AI analyzes your niche, audience, and purpose to create optimized banners using Canva's design intelligence. 
                You'll receive professionally designed templates ready to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGeneratorSection;