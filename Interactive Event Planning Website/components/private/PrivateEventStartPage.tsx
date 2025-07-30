import React from 'react';
import { Button } from '../ui/button';
import { Layout } from '../Layout';

interface PrivateEventStartPageProps {
  navigateTo: (page: string, options?: any) => void;
  funnelData: Record<string, any>;
  updateFunnelData: (data: Record<string, any>) => void;
}

export function PrivateEventStartPage({ navigateTo, funnelData, updateFunnelData }: PrivateEventStartPageProps) {
  return (
    <Layout navigateTo={navigateTo}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-6">
            Private Event Experiences
          </h1>
          <p className="text-white text-xl mb-12">
            SEO-Friendly Packages for Every Celebration
          </p>

          {/* Main Package Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <button 
              onClick={() => navigateTo('birthday-in-a-box')}
              className="group bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-400 hover:bg-black/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">🎈</div>
              <h3 className="text-white font-bold text-xl mb-2">Birthday In-A-Box</h3>
              <p className="text-yellow-300 text-sm mb-4">Unforgettable Birthday Celebrations</p>
              <div className="text-yellow-400 text-xs">Most Popular ✨</div>
            </button>

            <button 
              onClick={() => navigateTo('reunion-in-a-box')}
              className="group bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 hover:border-green-400 hover:bg-black/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">👪</div>
              <h3 className="text-white font-bold text-xl mb-2">Reunion In-A-Box</h3>
              <p className="text-green-300 text-sm mb-4">Family &amp; Group Reunions</p>
              <div className="text-green-400 text-xs">All Ages Fun</div>
            </button>

            <div className="group bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-white font-bold text-xl mb-2">Hybrid Galas</h3>
              <p className="text-purple-300 text-sm mb-4">&amp; Milestones</p>
              <div className="text-purple-400 text-xs">Premium Events</div>
            </div>

            <div className="group bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8">
              <div className="text-5xl mb-4">🎊</div>
              <h3 className="text-white font-bold text-xl mb-2">Anniversary</h3>
              <p className="text-blue-300 text-sm mb-4">Celebrations</p>
              <div className="text-blue-400 text-xs">Romantic &amp; Fun</div>
            </div>
          </div>

          {/* What Makes Our Private Events Special */}
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 mb-12">
            <h3 className="text-white font-bold text-2xl mb-6">What Makes Our Private Events Special?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎮</div>
                <h4 className="text-cyan-300 font-semibold mb-2">Interactive Entertainment</h4>
                <p className="text-white text-sm">Game shows, activities, and entertainment that gets everyone involved</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="text-cyan-300 font-semibold mb-2">Photo &amp; Memory Capture</h4>
                <p className="text-white text-sm">Professional photo booths, instant sharing, and digital memory books</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎭</div>
                <h4 className="text-cyan-300 font-semibold mb-2">Themed Experiences</h4>
                <p className="text-white text-sm">Custom themes, decorations, and entertainment to match your vision</p>
              </div>
            </div>
          </div>

          {/* Quick Funnel Questions */}
          <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 mb-8">
            <h3 className="text-white font-bold text-xl mb-6">Let's Plan Your Perfect Event</h3>
            <p className="text-cyan-300 text-lg mb-6">Answer a few quick questions to get your custom event plan:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-white">🎂 Event type</div>
              <div className="text-white">🏠 Indoor/outdoor</div>
              <div className="text-white">👥 Guest count</div>
              <div className="text-white">👨‍👩‍👧‍👦 Family vs Adults</div>
              <div className="text-white">💰 Budget</div>
              <div className="text-white">📍 Location</div>
              <div className="text-white">📅 Date</div>
              <div className="text-white">⭐ Special requests</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => navigateTo('custom-quote', { source: 'private-event' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📅 Book a Planning Call
            </Button>
            
            <Button 
              onClick={() => navigateTo('custom-quote', { source: 'private-event' })}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              📝 View My Custom Event Plan
            </Button>
          </div>

          {/* Footer Link to Wedding */}
          <div className="text-center p-6 border-t border-cyan-500/30">
            <p className="text-gray-300 mb-2">Planning a wedding?</p>
            <button 
              onClick={() => navigateTo('wedding-in-a-box')}
              className="text-pink-400 hover:text-pink-300 font-semibold underline"
            >
              Check out our Wedding In-A-Box package →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}