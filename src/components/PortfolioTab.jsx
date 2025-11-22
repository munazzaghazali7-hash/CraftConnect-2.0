import React from 'react';

const PortfolioTab = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Layout Samples */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-lilac-50 to-purple-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Portfolio Layout Ideas</h3>
        </div>
        <div className="p-5">
          {data.portfolio.layouts.map((layout, index) => (
            <div key={index} className="mb-5 last:mb-0 p-4 border border-gray-200 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-2">{layout.name}</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {layout.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lilac-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Structure */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-peach-50 to-rose-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Profile Structure</h3>
        </div>
        <div className="p-5">
          <div className="space-y-4">
            {data.portfolio.structure.map((section, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-1">{section.title}</h4>
                <p className="text-gray-600 text-sm">{section.description}</p>
                {section.cta && (
                  <div className="mt-2 text-peach-600 font-medium text-sm">→ {section.cta}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Examples */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden lg:col-span-2">
        <div className="bg-gradient-to-r from-mint-50 to-teal-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Call-to-Action Examples</h3>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.portfolio.ctas.map((cta, index) => (
              <div key={index} className="p-4 border-2 border-dashed border-teal-200 rounded-xl text-center">
                <div className="font-medium text-gray-800 mb-1">{cta.text}</div>
                <div className="text-xs text-teal-600">{cta.context}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Options */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden lg:col-span-2">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Export Options</h3>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-4">
            <button className="px-5 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors">
              Download as PDF
            </button>
            <button className="px-5 py-3 bg-lilac-50 text-lilac-700 rounded-xl font-medium hover:bg-lilac-100 transition-colors">
              Export JSON
            </button>
            <button className="px-5 py-3 bg-gray-50 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Edit in Canva
            </button>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Export your portfolio structure and customize it with your own content
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
