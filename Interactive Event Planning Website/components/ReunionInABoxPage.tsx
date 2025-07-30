import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';

interface ReunionInABoxPageProps {
  navigateTo: (page: string, options?: any) => void;
}

export function ReunionInABoxPage({ navigateTo }: ReunionInABoxPageProps) {
  const bookCall = () => {
    window.open('https://calendly.com/irl-events/reunion', '_blank');
  };

  return (
    <Layout navigateTo={navigateTo}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">👪</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent mb-6">
            Reunion In-A-Box
          </h1>
          <p className="text-white text-xl mb-4">
            Bringing Families &amp; Groups Together with Unforgettable Experiences
          </p>
          <div className="text-green-300 text-lg">
            Starting at $3,000
          </div>
        </div>

        {/* Reunion Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Family Reunion</h3>
            <div className="text-green-300 font-bold text-lg mb-4">$3,000</div>
            <ul className="text-white text-sm space-y-2">
              <li>• Multi-generational games</li>
              <li>• Family trivia &amp; memory sharing</li>
              <li>• Photo booth with family props</li>
              <li>• Music from every era</li>
              <li>• Up to 75 family members</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Class Reunion</h3>
            <div className="text-blue-300 font-bold text-lg mb-4">$4,000</div>
            <ul className="text-white text-sm space-y-2">
              <li>• Decade-themed entertainment</li>
              <li>• "Then &amp; Now" showcases</li>
              <li>• Memory lane presentations</li>
              <li>• Awards &amp; recognition ceremony</li>
              <li>• Up to 100 classmates</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Group Reunion</h3>
            <div className="text-purple-300 font-bold text-lg mb-4">$5,000+</div>
            <ul className="text-white text-sm space-y-2">
              <li>• Custom group activities</li>
              <li>• Shared history celebrations</li>
              <li>• Interactive storytelling</li>
              <li>• Professional documentation</li>
              <li>• Unlimited group size</li>
            </ul>
          </div>
        </div>

        {/* What Makes Our Reunions Special */}
        <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">What Makes Our Reunions Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">🎮</div>
                <div>
                  <h4 className="text-white font-semibold">All-Ages Entertainment</h4>
                  <p className="text-gray-300 text-sm">Activities that bring together all generations and create shared memories</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">📚</div>
                <div>
                  <h4 className="text-white font-semibold">Memory Sharing</h4>
                  <p className="text-gray-300 text-sm">Interactive ways to share stories, photos, and memories from the past</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">🎵</div>
                <div>
                  <h4 className="text-white font-semibold">Era-Specific Music</h4>
                  <p className="text-gray-300 text-sm">Curated playlists that transport everyone back to the good times</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">📸</div>
                <div>
                  <h4 className="text-white font-semibold">Memory Documentation</h4>
                  <p className="text-gray-300 text-sm">Professional photo and video capture to preserve the reunion forever</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">🏆</div>
                <div>
                  <h4 className="text-white font-semibold">Recognition Moments</h4>
                  <p className="text-gray-300 text-sm">Special ceremonies to honor achievements and milestones</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl mt-1">🤝</div>
                <div>
                  <h4 className="text-white font-semibold">Connection Activities</h4>
                  <p className="text-gray-300 text-sm">Structured activities that help people reconnect and catch up</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Planning Timeline */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold text-center mb-8">Reunion Planning Made Easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-black/30 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-white font-semibold mb-2">Planning Call</h4>
              <p className="text-gray-300 text-sm">Discuss your vision, guest count, and special requirements</p>
            </div>
            
            <div className="bg-black/30 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-white font-semibold mb-2">Custom Proposal</h4>
              <p className="text-gray-300 text-sm">Receive detailed plan with timeline, activities, and pricing</p>
            </div>
            
            <div className="bg-black/30 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="text-white font-semibold mb-2">Event Coordination</h4>
              <p className="text-gray-300 text-sm">We handle all details leading up to your reunion</p>
            </div>
            
            <div className="bg-black/30 border border-green-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="text-white font-semibold mb-2">Reunion Day</h4>
              <p className="text-gray-300 text-sm">Enjoy your reunion while we manage everything</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-12">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Bring Everyone Together?</h2>
          <p className="text-white text-lg mb-8">
            Let's create a reunion that strengthens bonds and creates new memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={bookCall}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📅 Start Planning Today
            </Button>
            
            <Button 
              onClick={() => navigateTo('custom-quote', { source: 'reunion' })}
              className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              📝 Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}