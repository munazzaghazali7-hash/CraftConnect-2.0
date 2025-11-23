import React from 'react';

const BannerPreviewCard = ({ banner, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group"
      onClick={() => onSelect(banner.id)}
    >
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-100">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-800">{banner.title}</h3>
          <span className="text-xs bg-peach-100 text-peach-700 px-2 py-1 rounded-full">{banner.type}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="aspect-video bg-gradient-to-br from-peach-100 to-lilac-100 rounded-lg mb-3 flex items-center justify-center border border-gray-200 overflow-hidden">
          <div className="text-center p-4">
            <div className="text-xl font-bold text-gray-700 mb-2">AI-Generated Banner</div>
            <div className="text-sm text-gray-500 italic">
              "{banner.previewText}"
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{banner.description}</p>
        <div className="flex flex-wrap gap-1">
          {banner.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Generated with Canva AI
          </div>
          <div className="flex space-x-3">
            <button className="px-3 py-1.5 bg-peach-500 text-white text-sm rounded-lg font-medium hover:bg-peach-600 transition-colors">
              Download
            </button>
            <button className="px-3 py-1.5 bg-white text-gray-700 border border-gray-300 text-sm rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Edit in Canva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPreviewCard;