import React from 'react';
import InstagramReelSample from './InstagramReelSample';
import YouTubeShortSample from './YouTubeShortSample';

const SocialMediaTab = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Instagram Reel Samples */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-peach-50 to-rose-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">
            Instagram Reel Samples
          </h3>
          <p className="text-sm text-gray-600 mt-1">Real examples pulled from Instagram</p>
        </div>
        <div className="p-5 space-y-5">
          {data.socialMedia.reels.map((reel, index) => (
            <InstagramReelSample key={index} reel={reel} />
          ))}
        </div>
      </div>

      {/* YouTube Shorts */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-red-50 to-red-100 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">
            YouTube Shorts Samples
          </h3>
          <p className="text-sm text-gray-600 mt-1">Real examples pulled from YouTube</p>
        </div>
        <div className="p-5 space-y-5">
          {data.socialMedia.shorts.map((short, index) => (
            <YouTubeShortSample key={index} short={short} />
          ))}
        </div>
      </div>

      {/* Tweets */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-lilac-50 to-purple-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">
            Tweet Samples
          </h3>
        </div>
        <div className="p-5">
          {data.socialMedia.tweets.map((tweet, index) => (
            <div key={index} className="mb-5 last:mb-0 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-800 mb-2">"{tweet.content}"</p>
              <div className="flex flex-wrap gap-1">
                {tweet.hashtags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-lilac-100 text-lilac-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-mint-50 to-teal-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">
            Trending Hashtags
          </h3>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {data.socialMedia.hashtags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-2 bg-mint-100 text-teal-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden lg:col-span-2">
        <div className="bg-gradient-to-r from-peach-50 to-lilac-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">Target Audience Breakdown</h3>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {data.socialMedia.audience.map((segment, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="flex-1 font-medium text-gray-800">{segment.segment}</span>
                  <span className="font-semibold text-gray-700">{segment.percentage}%</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <div 
                  className="absolute inset-0 rounded-full" 
                  style={{
                    background: `conic-gradient(
                      ${data.socialMedia.audience.map((seg, i) => 
                        `${seg.color} ${seg.startAngle}deg ${seg.endAngle}deg`
                      ).join(', ')}
                    )`
                  }}
                ></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm text-center">Audience<br/>Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Content Calendar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden lg:col-span-2">
        <div className="bg-gradient-to-r from-blue-50 to-mint-50 p-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800">7-Day Content Calendar</h3>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {data.socialMedia.contentCalendar.map((day, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-3 text-center bg-gray-50 hover:bg-white transition-colors"
              >
                <div className="font-semibold text-gray-700 mb-1">{day.day}</div>
                <div className="text-sm text-gray-600">{day.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTab;

