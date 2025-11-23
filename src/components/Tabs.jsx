import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'social', label: 'Social Media Ideas' },
    { id: 'portfolio', label: 'Portfolio Generator' },
    { id: 'banner', label: 'Banner Generator' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3.5 rounded-2xl font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-white text-peach-600 shadow-md border border-peach-200'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;




