import React, { useState, useEffect } from 'react';
import InputBar from './components/InputBar';
import Tabs from './components/Tabs';
import SocialMediaTab from './components/SocialMediaTab';
import PortfolioTab from './components/PortfolioTab';
import BannerTab from './components/BannerTab';

// Mock API function
const fetchAIData = (niche) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        socialMedia: {
          reels: [
            {
              username: "ceramicwonders",
              timestamp: "2 hours ago",
              caption: "When your glaze turns out EXACTLY how you envisioned it after 3 failed attempts 🙌 The secret? Letting the piece dry for 24 hours before bisque firing!",
              hashtags: "#Pottery #Ceramics #ClayTok #ArtistOnInstagram #Handmade",
              likes: "12.4K",
              comments: "342",
              shares: "1.2K"
            },
            {
              username: "woodwork_mastery",
              timestamp: "1 day ago",
              caption: "3 affordable tools that changed my craft in 2023! No more struggling with basic techniques - these under $20 tools will level up your woodworking game.",
              hashtags: "#Woodworking #DIY #Craft #WoodCraft #Maker",
              likes: "24.7K",
              comments: "891",
              shares: "5.3K"
            },
            {
              username: "embroidery_magic",
              timestamp: "3 days ago",
              caption: "Why beginners struggle with satin stitch (and how to fix it in 60 seconds). It's not your thread, it's your tension! Save this for your next project.",
              hashtags: "#Embroidery #StitchTok #HandEmbroidery #TextileArt #CraftTips",
              likes: "8.9K",
              comments: "217",
              shares: "942"
            }
          ],
          shorts: [
            {
              channel: "Clay Creations",
              subscribers: "127K",
              title: "How to fix wobbly pottery in 10 seconds",
              views: "245K",
              timestamp: "2 weeks ago",
              likes: "24K",
              comments: "1.2K"
            },
            {
              channel: "Woodwork Workshop",
              subscribers: "342K",
              title: "Satisfying pottery wheel restoration | Before & After",
              views: "1.2M",
              timestamp: "1 month ago",
              likes: "89K",
              comments: "3.4K"
            },
            {
              channel: "Textile Arts",
              subscribers: "89K",
              title: "3 embroidery stitches you NEED to know as a beginner",
              views: "567K",
              timestamp: "3 weeks ago",
              likes: "42K",
              comments: "2.1K"
            }
          ],
          tweets: [
            {
              content: "Just launched my new ceramic collection inspired by ocean waves. Each piece is wheel-thrown and glazed by hand in my tiny studio",
              hashtags: ['#Ceramics', '#Handmade', '#Pottery']
            },
            {
              content: "Pro tip: Always center your clay twice. First with medium pressure, then with light pressure. Game changer for beginners!",
              hashtags: ['#PotteryTips', '#CeramicArtist', '#CraftTips']
            }
          ],
          hashtags: [
            `#${niche}artist`,
            `#handmadewithlove`,
            `#craftcommunity`,
            `#${niche}craft`,
            `#supportsmallbusiness`,
            `#artisanlife`,
            `#makewithlove`
          ],
          audience: [
            { segment: 'DIY Enthusiasts', percentage: 35, color: '#FF9E80', startAngle: 0, endAngle: 126 },
            { segment: 'Home Decor Lovers', percentage: 25, color: '#B19CD9', startAngle: 126, endAngle: 216 },
            { segment: 'Collectors', percentage: 20, color: '#A2D9FF', startAngle: 216, endAngle: 288 },
            { segment: 'Beginners', percentage: 15, color: '#A8E6CF', startAngle: 288, endAngle: 342 },
            { segment: 'Gift Shoppers', percentage: 5, color: '#FFD166', startAngle: 342, endAngle: 360 }
          ],
          contentCalendar: [
            { day: 'Mon', content: 'Studio setup tour' },
            { day: 'Tue', content: 'Quick technique tutorial' },
            { day: 'Wed', content: 'Customer feature' },
            { day: 'Thu', content: 'Material deep dive' },
            { day: 'Fri', content: 'Live Q&A session' },
            { day: 'Sat', content: 'New piece reveal' },
            { day: 'Sun', content: 'Inspiration board' }
          ]
        },
        portfolio: {
          layouts: [
            {
              name: "Minimalist Showcase",
              features: [
                "Large hero image with CTA",
                "Grid gallery with filter by category",
                "Process timeline section",
                "Testimonials carousel"
              ]
            },
            {
              name: "Story-Driven Portfolio",
              features: [
                "Journey timeline from beginner to pro",
                "Project case studies with process videos",
                "Material sourcing philosophy",
                "Commission workflow explanation"
              ]
            }
          ],
          structure: [
            {
              title: "Artist Statement",
              description: "A concise 150-word philosophy about your craft and inspiration",
              cta: "Focus on your unique perspective, not technical skills"
            },
            {
              title: "Process Gallery",
              description: "Show the transformation from raw materials to finished pieces",
              cta: "Include short videos of key techniques"
            },
            {
              title: "Commission Section",
              description: "Clear pricing, process, and FAQ for custom work",
              cta: "Add a simple inquiry form with project questionnaire"
            }
          ],
          ctas: [
            { text: "Commission a Custom Piece", context: "Portfolio homepage" },
            { text: "Join My Workshop Waitlist", context: "Workshop section" },
            { text: "Download My Craft Guide", context: "Resource section" }
          ]
        }
      });
    }, 1800);
  });
};

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState('social');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [niche, setNiche] = useState('');

  const handleGenerate = async (inputNiche) => {
    setNiche(inputNiche);
    setIsLoading(true);
    try {
      const data = await fetchAIData(inputNiche);
      setResults(data);
    } catch (error) {
      console.error('Error fetching AI data', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Floating shapes background
  const renderFloatingShapes = () => {
    const shapes = [
      { type: 'circle', size: 'w-24 h-24', top: '15%', left: '5%', color: 'bg-peach-200' },
      { type: 'square', size: 'w-16 h-16', top: '70%', left: '10%', color: 'bg-lilac-200' },
      { type: 'circle', size: 'w-20 h-20', top: '40%', right: '8%', color: 'bg-blue-200' },
      { type: 'square', size: 'w-12 h-12', top: '20%', right: '15%', color: 'bg-mint-200' },
      { type: 'circle', size: 'w-14 h-14', bottom: '10%', left: '20%', color: 'bg-peach-200' },
    ];

    return shapes.map((shape, index) => (
      <div 
        key={index}
        className={`${shape.type === 'circle' ? 'rounded-full' : 'rounded-lg'} ${shape.size} ${shape.color} absolute opacity-20`}
        style={{
          top: shape.top,
          left: shape.left,
          right: shape.right,
          bottom: shape.bottom,
          transform: `rotate(${index * 15}deg)`
        }}
      ></div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-x-hidden">
      {/* Custom pastel colors */}
      <style>{`
        :root {
          --peach-50: #fff5f0;
          --peach-100: #ffe6d5;
          --peach-200: #ffccae;
          --peach-500: #ff755e;
          --peach-600: #e54e41;
          --lilac-50: #f9f7ff;
          --lilac-100: #ebe6ff;
          --lilac-200: #d4ccff;
          --lilac-500: #9a7bff;
          --blue-50: #f0f9ff;
          --blue-100: #e0f2fe;
          --blue-200: #bae6fd;
          --blue-500: #3b82f6;
          --mint-50: #f0fdfa;
          --mint-100: #ccfbf1;
          --mint-200: #99f6e4;
          --mint-500: #2dd4bf;
          --rose-500: #f43f5e;
          --rose-600: #e11d48;
          --red-50: #fef2f2;
          --red-100: #fee2e2;
          --red-500: #ef4444;
          --red-600: #dc2626;
        }
        .bg-peach-50 { background-color: var(--peach-50); }
        .bg-peach-100 { background-color: var(--peach-100); }
        .bg-peach-200 { background-color: var(--peach-200); }
        .bg-peach-500 { background-color: var(--peach-500); }
        .bg-peach-600 { background-color: var(--peach-600); }
        .bg-lilac-50 { background-color: var(--lilac-50); }
        .bg-lilac-100 { background-color: var(--lilac-100); }
        .bg-lilac-200 { background-color: var(--lilac-200); }
        .bg-lilac-500 { background-color: var(--lilac-500); }
        .bg-blue-50 { background-color: var(--blue-50); }
        .bg-blue-100 { background-color: var(--blue-100); }
        .bg-blue-200 { background-color: var(--blue-200); }
        .bg-blue-500 { background-color: var(--blue-500); }
        .bg-mint-50 { background-color: var(--mint-50); }
        .bg-mint-100 { background-color: var(--mint-100); }
        .bg-mint-200 { background-color: var(--mint-200); }
        .bg-mint-500 { background-color: var(--mint-500); }
        .bg-rose-500 { background-color: var(--rose-500); }
        .bg-rose-600 { background-color: var(--rose-600); }
        .bg-red-50 { background-color: var(--red-50); }
        .bg-red-100 { background-color: var(--red-100); }
        .bg-red-500 { background-color: var(--red-500); }
        .bg-red-600 { background-color: var(--red-600); }
        .text-peach-500 { color: var(--peach-500); }
        .text-peach-600 { color: var(--peach-600); }
        .text-lilac-500 { color: var(--lilac-500); }
        .text-lilac-700 { color: #6a47c6; }
        .text-blue-500 { color: var(--blue-500); }
        .text-blue-600 { color: #2563eb; }
        .text-mint-500 { color: var(--mint-500); }
        .text-mint-700 { color: #0d9488; }
        .text-red-500 { color: var(--red-500); }
        .text-red-600 { color: var(--red-600); }
        .from-peach-500 { background: linear-gradient(to right, var(--peach-500), var(--rose-500)); }
        .hover\\:from-peach-600:hover { background: linear-gradient(to right, var(--peach-600), var(--rose-600)); }
        .focus\\:ring-peach-300:focus { box-shadow: 0 0 0 3px rgba(255, 125, 94, 0.3); }
      `}</style>

      {/* Floating Shapes Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {renderFloatingShapes()}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Craft<span className="text-peach-500">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI Growth Engine for Niche Artists
          </p>
        </header>

        {/* Main Input Section */}
        <div className="mb-16">
          <InputBar onGenerate={handleGenerate} isLoading={isLoading} />
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Results Area */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-peach-500 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <p className="mt-6 text-xl font-medium text-gray-700">Fetching latest trends from AI…</p>
              <p className="mt-2 text-gray-500">Analyzing niche, audience, and platform trends</p>
            </div>
          ) : results ? (
            <>
              {activeTab === 'social' && <SocialMediaTab data={results} />}
              {activeTab === 'portfolio' && <PortfolioTab data={results} />}
              {activeTab === 'banner' && <BannerTab data={results} niche={niche} />}
            </>
          ) : (
            <div className="text-center py-24">
              <div className="inline-block p-6 bg-gray-100 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to grow your art business?</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Enter your niche above and click "Generate AI Insights" to get personalized growth strategies.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p className="text-sm">
            © {new Date().getFullYear()} CraftConnect. Empowering niche artists with AI-powered growth.
          </p>
        </footer>
      </div>
    </div>
  );
}

















