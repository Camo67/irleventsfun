import React from 'react';
import { Button } from '../ui/button';
import { Layout } from '../Layout';

interface WorkplaceStartPageProps {
  navigateTo: (page: string, options?: any) => void;
}

export function WorkplaceStartPage({ navigateTo }: WorkplaceStartPageProps) {
  return (
    <Layout navigateTo={navigateTo}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🧠</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-6">
            Corporate &amp; Healthcare
          </h1>
          <p className="text-white text-xl mb-12">
            Which best describes you?
          </p>

          {/* Main Choice Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Healthcare */}
            <button 
              onClick={() => navigateTo('workplace-healthcare-start')}
              className="group bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-12 hover:border-cyan-400 hover:bg-black/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-6">🏥</div>
              <h3 className="text-white font-bold text-2xl mb-4">Healthcare Organization</h3>
              <p className="text-cyan-300 mb-6">Senior care facilities, health providers, wellness programs</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Senior Care Facilities</div>
                <div>• Health Brand Services</div>
                <div>• Wellness Programs</div>
                <div>• Preventative Care</div>
              </div>
            </button>

            {/* Corporate */}
            <button 
              onClick={() => navigateTo('workplace-corporate-start')}
              className="group bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-12 hover:border-purple-400 hover:bg-black/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-white font-bold text-2xl mb-4">Corporate Team</h3>
              <p className="text-purple-300 mb-6">Team building, conferences, marketing events</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Team Building Events</div>
                <div>• Conference Services</div>
                <div>• Marketing Campaigns</div>
                <div>• Awards Shows</div>
              </div>
            </button>
          </div>

          {/* Back Button */}
          <Button 
            onClick={() => navigateTo('home')}
            className="bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-8 py-3 rounded-full"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
}