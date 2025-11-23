import React from 'react';

const YouTubeShortSample = ({ short }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h2a1 1 0 100-2H5zm4 0a1 1 0 000 2h2a1 1 0 100-2H9z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{short.channel}</div>
            <div className="text-xs text-gray-500">
              {short.subscribers} subscribers
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
        <h3 className="font-bold text-gray-800 mb-2">{short.title}</h3>
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{short.views} views</span>
          <span className="mx-1">•</span>
          <span>{short.timestamp}</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-2">⏯️</div>
          <p className="text-gray-500 text-sm">Short Video Preview</p>
        </div>
      </div>
      <div className="p-3 flex items-center border-t border-gray-100">
        <div className="flex space-x-4 text-gray-600">
          <button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>{short.likes}</span>
          </button>
          <button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            <span>{short.comments}</span>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-600">Shorts</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubeShortSample;

