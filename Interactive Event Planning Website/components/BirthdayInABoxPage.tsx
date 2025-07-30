import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';

interface BirthdayInABoxPageProps {
  navigateTo: (page: string, options?: any) => void;
}

export function BirthdayInABoxPage({ navigateTo }: BirthdayInABoxPageProps) {
  const bookCall = () => {
    window.open('https://calendly.com/irl-events/birthday', '_blank');
  };

  return (
    <Layout navigateTo={navigateTo}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎈</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-6">
            Birthday In-A-Box
          </h1>
          <p className="text-white text-xl mb-4">
            Unforgettable Birthday Celebrations for All Ages
          </p>
          <div className="text-yellow-300 text-lg">
            Starting at $2,500
          </div>
        </div>

        {/* Package Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Kids Birthday Bash</h3>
            <div className="text-yellow-300 font-bold text-lg mb-4">$2,500</div>
            <ul className="text-white text-sm space-y-2">
              <li>• Interactive game show host</li>
              <li>• Age-appropriate games &amp; prizes</li>
              <li>• Photo booth with props</li>
              <li>• Music &amp; sound system</li>
              <li>• Up to 25 kids + adults</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Teen/Adult Party</h3>
            <div className="text-orange-300 font-bold text-lg mb-4">$3,500</div>
            <ul className="text-white text-sm space-y-2">
              <li>• DJ with lighting effects</li>
              <li>• Interactive party games</li>
              <li>• Professional photo booth</li>
              <li>• Karaoke &amp; entertainment</li>
              <li>• Up to 50 guests</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-8">
            <h3 className="text-white font-bold text-xl mb-4">Milestone Celebration</h3>
            <div className="text-pink-300 font-bold text-lg mb-4">$5,000+</div>
            <ul className="text-white text-sm space-y-2">
              <li>• Custom themed experience</li>
              <li>• Professional coordination</li>
              <li>• Enhanced entertainment</li>
              <li>• Memory capture &amp; sharing</li>
              <li>• Unlimited guests</li>
            </ul>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">Every Birthday In-A-Box Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">🎮</div>
                <div>
                  <h4 className="text-white font-semibold">Interactive Entertainment</h4>
                  <p className="text-gray-300 text-sm">Age-appropriate games, activities, and prizes that get everyone involved</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">📸</div>
                <div>
                  <h4 className="text-white font-semibold">Photo Booth Experience</h4>
                  <p className="text-gray-300 text-sm">Professional photo booth with themed props and instant prints</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">🎵</div>
                <div>
                  <h4 className="text-white font-semibold">Music &amp; Sound</h4>
                  <p className="text-gray-300 text-sm">Professional sound system with age-appropriate playlist</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">🎁</div>
                <div>
                  <h4 className="text-white font-semibold">Prizes &amp; Giveaways</h4>
                  <p className="text-gray-300 text-sm">Fun prizes for all participants, not just winners</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">👨‍🎤</div>
                <div>
                  <h4 className="text-white font-semibold">Professional Host</h4>
                  <p className="text-gray-300 text-sm">Experienced entertainer who keeps the energy high and everyone engaged</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 text-xl mt-1">⚡</div>
                <div>
                  <h4 className="text-white font-semibold">Full Setup &amp; Cleanup</h4>
                  <p className="text-gray-300 text-sm">We handle all the setup and breakdown so you can enjoy the party</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Add-Ons */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold text-center mb-8">Popular Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-black/30 border border-yellow-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎂</div>
              <h4 className="text-white font-semibold mb-2">Custom Cake Ceremony</h4>
              <div className="text-yellow-300 font-bold">+$200</div>
            </div>
            
            <div className="bg-black/30 border border-yellow-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="text-white font-semibold mb-2">Face Painting Station</h4>
              <div className="text-yellow-300 font-bold">+$300</div>
            </div>
            
            <div className="bg-black/30 border border-yellow-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎪</div>
              <h4 className="text-white font-semibold mb-2">Themed Decorations</h4>
              <div className="text-yellow-300 font-bold">+$400</div>
            </div>
            
            <div className="bg-black/30 border border-yellow-500/30 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📹</div>
              <h4 className="text-white font-semibold mb-2">Video Highlights Reel</h4>
              <div className="text-yellow-300 font-bold">+$500</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-12">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Plan the Perfect Birthday?</h2>
          <p className="text-white text-lg mb-8">
            Let's create a birthday celebration that will be remembered for years to come.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={bookCall}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📅 Book a Planning Call
            </Button>
            
            <Button 
              onClick={() => navigateTo('custom-quote', { source: 'birthday' })}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              📝 Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}