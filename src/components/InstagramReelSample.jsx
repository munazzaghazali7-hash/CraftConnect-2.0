import React from 'react';

const InstagramReelSample = ({ reel }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach-400 to-rose-500 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">{reel.username.charAt(0)}</span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{reel.username}</div>
            <div className="text-xs text-gray-500 flex items-center">
              <span className="mr-1">•</span>
              <span>{reel.timestamp}</span>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
        <div className="text-gray-800 mb-3">{reel.caption}</div>
        <div className="text-sm text-gray-500 mb-3">
          {reel.hashtags}
        </div>
      </div>
      <div className="bg-gray-100 p-4 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-2">⏯️</div>
          <p className="text-gray-500 text-sm">Reel Video Preview</p>
        </div>
      </div>
      <div className="p-3 flex justify-between border-t border-gray-100">
        <div className="flex space-x-6 text-gray-600">
          <button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>{reel.likes}</span>
          </button>
          <button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            <span>{reel.comments}</span>
          </button>
          <button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>{reel.shares}</span>
          </button>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InstagramReelSample;
