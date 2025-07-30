import React from 'react';
import { Button } from './ui/button';
import futuristicGridBg from 'figma:asset/786b2edd90fb7c442fd48c06dd1bf64e76e93d29.png';
import irlLogo from 'figma:asset/38fa0196a5ea80f9bb15d87ae8274ad85a5694a7.png';

interface LayoutProps {
  children: React.ReactNode;
  navigateTo: (page: string, options?: any) => void;
}

export function Layout({ children, navigateTo }: LayoutProps) {
  const openChat = () => {
    // This would integrate with a chat system like Intercom, Zendesk, etc.
    console.log('Opening chat...');
  };

  const openTelegram = () => {
    // Open Telegram bot
    window.open('https://t.me/Irleventsbot', '_blank');
  };

  const bookCall = () => {
    // This would integrate with Calendly or similar booking system
    window.open('https://calendly.com/irl-events', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:jason@irlevents.fun?subject=Event Inquiry - IRL Interactive Events', '_self');
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${futuristicGridBg}')`
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={irlLogo}
                alt="IRL Interactive Events - Bring People Back to Reality"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden md:block ml-3">
                <div className="text-cyan-300 text-sm font-semibold">@irleventsfun</div>
              </div>
            </button>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => navigateTo('home')} 
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('services')} 
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => navigateTo('programs')} 
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Programs
              </button>
              <button 
                onClick={() => navigateTo('gallery')} 
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => navigateTo('contact')} 
                className="text-white hover:text-cyan-300 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Global CTAs */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                onClick={bookCall}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 md:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                📅 <span className="hidden sm:inline ml-1">Book Call</span>
              </Button>
              
              <Button 
                onClick={() => navigateTo('custom-quote')}
                className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-3 md:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                📝 <span className="hidden sm:inline ml-1">Quote</span>
              </Button>
              
              <Button 
                onClick={openChat}
                className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-3 md:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                💬 <span className="hidden sm:inline ml-1">Chat</span>
              </Button>
              
              <Button 
                onClick={openTelegram}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-3 md:px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                ✈️ <span className="hidden sm:inline ml-1">Telegram</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-cyan-500/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={irlLogo}
                  alt="IRL Interactive Events"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-white font-bold">IRL Interactive Events</span>
              </div>
              <p className="text-cyan-300 text-sm mb-4">
                Creating unforgettable interactive experiences for over 100,000 hours and counting.
              </p>
              <p className="text-white text-sm font-semibold mb-2">@irleventsfun</p>
              <p className="text-cyan-300 text-sm">jason@irlevents.fun</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Experiences</h4>
              <div className="space-y-2">
                <button onClick={() => navigateTo('restaurant-start')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Restaurant &amp; Venue</button>
                <button onClick={() => navigateTo('private-event-start')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Private Events</button>
                <button onClick={() => navigateTo('workplace-start')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Corporate &amp; Healthcare</button>
                <button onClick={() => navigateTo('custom-quote')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Custom Quote</button>
              </div>
            </div>

            {/* Featured Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Popular Packages</h4>
              <div className="space-y-2">
                <button onClick={() => navigateTo('wedding-in-a-box')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Wedding In-A-Box</button>
                <button onClick={() => navigateTo('birthday-in-a-box')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Birthday In-A-Box</button>
                <button onClick={() => navigateTo('reunion-in-a-box')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Reunion In-A-Box</button>
                <div className="text-cyan-300 text-sm">Corporate Marketing</div>
                <div className="text-cyan-300 text-sm">Senior Programs</div>
              </div>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <button onClick={() => navigateTo('contact')} className="block text-cyan-300 hover:text-white text-sm transition-colors">Contact Us</button>
                <button onClick={bookCall} className="block text-cyan-300 hover:text-white text-sm transition-colors">Book a Call</button>
                <button onClick={openTelegram} className="block text-cyan-300 hover:text-white text-sm transition-colors">Message on Telegram</button>
                <button onClick={sendEmail} className="block text-cyan-300 hover:text-white text-sm transition-colors">Email Us</button>
                <div className="text-cyan-300 text-sm">Terms &amp; Privacy</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cyan-500/30 mt-8 pt-8 text-center">
            <p className="text-cyan-300 text-sm">
              © 2024 IRL Interactive Events. Creating experiences that connect people.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="text-white text-sm">🏥 Healthcare</span>
              <span className="text-white text-sm">🏢 Corporate</span>
              <span className="text-white text-sm">🍽️ Restaurants</span>
              <span className="text-white text-sm">💍 Weddings</span>
              <span className="text-white text-sm">🎉 Private Events</span>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <button 
                onClick={openTelegram}
                className="text-cyan-300 hover:text-white text-sm transition-colors flex items-center gap-1"
              >
                ✈️ Chat via Telegram
              </button>
              <button 
                onClick={sendEmail}
                className="text-cyan-300 hover:text-white text-sm transition-colors flex items-center gap-1"
              >
                ✉️ jason@irlevents.fun
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}