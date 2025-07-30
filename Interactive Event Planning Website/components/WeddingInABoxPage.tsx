import React, { useState } from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WeddingInABoxPageProps {
  navigateTo: (page: string, options?: any) => void;
}

export function WeddingInABoxPage({ navigateTo }: WeddingInABoxPageProps) {
  const [showBonusOffer, setShowBonusOffer] = useState(true);

  const bookDiscoveryCall = () => {
    window.open('https://calendly.com/irl-events/wedding-discovery', '_blank');
  };

  const downloadLookbook = () => {
    // This would trigger a download or open a PDF
    console.log('Downloading wedding lookbook...');
  };

  const openWeddingChat = () => {
    console.log('Opening wedding-specific chat...');
  };

  const callNow = () => {
    window.open('tel:+1-555-IRL-EVENTS', '_self');
  };

  return (
    <Layout navigateTo={navigateTo}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">💍</div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-6">
            Wedding In-A-Box
          </h1>
          <p className="text-white text-xl mb-4">
            Your Complete Wedding Entertainment Package
          </p>
          <div className="text-pink-300 text-2xl font-bold">
            $6,000 Flat Rate*
          </div>
          <p className="text-gray-300 text-sm mt-2">
            *Excludes food, drinks, staff, and venue
          </p>
        </div>

        {/* Bonus Offer Banner */}
        {showBonusOffer && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-12 relative">
            <button 
              onClick={() => setShowBonusOffer(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-white font-bold text-xl mb-2">🎁 LIMITED TIME BONUS OFFER</h3>
              <p className="text-white text-lg mb-2">
                Book within 7 days and receive a FREE 4-day/3-night honeymoon stay!
              </p>
              <p className="text-pink-200 text-sm">
                Choose Vegas or Nashville • Valid for 18 months • $1,200+ value
              </p>
            </div>
          </div>
        )}

        {/* What's Included */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-white text-3xl font-bold mb-6">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">🎵</div>
                <div>
                  <h4 className="text-white font-semibold">DJ, Sound &amp; Reception Music</h4>
                  <p className="text-gray-300 text-sm">Professional DJ with premium sound system and music for ceremony, cocktail hour, and reception</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">🎙️</div>
                <div>
                  <h4 className="text-white font-semibold">Ceremony Sound + Script</h4>
                  <p className="text-gray-300 text-sm">Wireless microphones, ceremony sound setup, and customized ceremony script</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">👨‍💼</div>
                <div>
                  <h4 className="text-white font-semibold">Professional Officiant</h4>
                  <p className="text-gray-300 text-sm">Licensed officiant to perform your ceremony with personalized vows and readings</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">💡</div>
                <div>
                  <h4 className="text-white font-semibold">Uplighting + Dance Floor Lighting</h4>
                  <p className="text-gray-300 text-sm">Ambient uplighting in your colors plus dynamic dance floor lighting effects</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">📸</div>
                <div>
                  <h4 className="text-white font-semibold">Photo Booth + Props + Attendant</h4>
                  <p className="text-gray-300 text-sm">Professional photo booth with custom backdrop, props, and dedicated attendant</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">📋</div>
                <div>
                  <h4 className="text-white font-semibold">Day-Of Coordinator</h4>
                  <p className="text-gray-300 text-sm">Professional coordinator to manage timeline, vendors, and ensure everything runs smoothly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 text-xl mt-1">🎮</div>
                <div>
                  <h4 className="text-white font-semibold">Wedding Shower Game Show</h4>
                  <p className="text-gray-300 text-sm">Interactive game show entertainment for your wedding shower or rehearsal dinner</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-lg p-8">
              <h3 className="text-white font-bold text-xl mb-6">Why Choose Wedding In-A-Box?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-green-400">✅</div>
                  <span className="text-white">One vendor, one contract, one payment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400">✅</div>
                  <span className="text-white">No hidden fees or surprise costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400">✅</div>
                  <span className="text-white">Experienced team works together seamlessly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400">✅</div>
                  <span className="text-white">Interactive entertainment that engages guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400">✅</div>
                  <span className="text-white">Professional coordination from start to finish</span>
                </div>
              </div>

              <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 mb-6">
                <h4 className="text-pink-300 font-semibold mb-2">Package Value Comparison</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>DJ Services:</span>
                    <span>$1,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sound System &amp; Setup:</span>
                    <span>$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Officiant:</span>
                    <span>$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lighting Package:</span>
                    <span>$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Photo Booth:</span>
                    <span>$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Day-Of Coordinator:</span>
                    <span>$1,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Game Show Entertainment:</span>
                    <span>$800</span>
                  </div>
                  <div className="border-t border-pink-500/30 pt-2 mt-2 flex justify-between font-semibold">
                    <span>Individual Total:</span>
                    <span>$6,300</span>
                  </div>
                  <div className="flex justify-between text-pink-300 font-bold">
                    <span>Wedding In-A-Box:</span>
                    <span>$6,000</span>
                  </div>
                  <div className="text-green-400 text-center font-semibold">
                    You Save $300!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold text-center mb-8">What Couples Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-4">"The Wedding In-A-Box package was perfect! Everything was coordinated seamlessly, and our guests are still talking about the photo booth and game show."</p>
              <div className="text-pink-300 font-semibold">- Sarah & Mike</div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-4">"We saved so much time and stress having one team handle everything. The coordinator made our day absolutely perfect!"</p>
              <div className="text-pink-300 font-semibold">- Jessica & David</div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-white mb-4">"The interactive entertainment was a huge hit! Our wedding felt like a fun party that everyone enjoyed from start to finish."</p>
              <div className="text-pink-300 font-semibold">- Amanda & Chris</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">What's not included in the $6,000 package?</h4>
              <p className="text-gray-300">The package excludes food, drinks, venue rental, and additional staff beyond what's provided. You'll handle catering and venue separately.</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">How far in advance should we book?</h4>
              <p className="text-gray-300">We recommend booking 6-12 months in advance, especially for peak wedding season (May-October). However, we can accommodate shorter timelines based on availability.</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">Can we customize the package?</h4>
              <p className="text-gray-300">Yes! We can add or modify services based on your needs. Additional services are priced separately and added to the base package.</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">Do you travel for weddings?</h4>
              <p className="text-gray-300">Yes, we travel throughout the region. Travel fees may apply for weddings more than 50 miles from our base location.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-lg p-12">
          <h2 className="text-white text-3xl font-bold mb-4">Ready to Create Your Perfect Wedding?</h2>
          <p className="text-white text-lg mb-8">
            Let's schedule a discovery call to discuss your vision and customize your Wedding In-A-Box experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              onClick={bookDiscoveryCall}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📅 Book a Discovery Call
            </Button>
            
            <Button 
              onClick={downloadLookbook}
              className="bg-transparent border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              📖 Download the Lookbook
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openWeddingChat}
              className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 Wedding Chat Agent
            </Button>
            
            <Button 
              onClick={callNow}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              📞 Tap to Call
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}