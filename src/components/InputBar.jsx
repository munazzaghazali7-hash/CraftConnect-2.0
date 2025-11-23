import React, { useState } from 'react';

const InputBar = ({ onGenerate, isLoading }) => {
  const [niche, setNiche] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (niche.trim()) {
      onGenerate(niche.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Enter your niche… (e.g., ceramics, embroidery, wood carving)"
          className="flex-1 px-6 py-5 text-lg rounded-xl border border-gray-200 focus:outline-none focus:ring-3 focus:ring-peach-300 focus:border-transparent shadow-sm transition-all"
        />
        <button
          type="submit"
          disabled={isLoading || !niche.trim()}
          className={`px-8 py-5 rounded-xl font-semibold text-white text-lg transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-xl ${
            isLoading || !niche.trim()
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-peach-500 to-rose-500 hover:from-peach-600 hover:to-rose-600'
          }`}
        >
          {isLoading ? 'Generating...' : 'Generate AI Insights'}
        </button>
      </div>
    </form>
  );
};

export default InputBar;



