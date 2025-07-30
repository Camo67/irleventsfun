import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';
import b2bImage from 'figma:asset/757b3ca0f0ea5192a3c81bd2e4a20c2daae2c7c5.png';
import badaImage from 'figma:asset/37fddedcae190271a16c067f7655ef55b3b1d580.png';
import hybridImage from 'figma:asset/2d8c92cf383b6b666bba972a50d5187ab8a235e6.png';
import gsnlImage from 'figma:asset/a7e78a630d3bebd4ba175a25be08a9f1ac4bf01b.png';
import funnelsImage from 'figma:asset/bbbdba7ce25a5ab4b04f3359688615e2ce014ec0.png';
import irlMarketingImage from 'figma:asset/2f3979ec1604aa655b659aebf58bbd76fd4f68f8.png';
import weddingImage from 'figma:asset/0940d7163f9da1c09d9ea1b6f0a18bce659a4ec9.png';
import waterCoolerImage from 'figma:asset/0c9c27791182ae842852ce03cffa40eae8dc4452.png';
import restaurantIcon from 'figma:asset/067acb0839ed5c3345a0aca57f701ec622a6d388.png';
import privateEventIcon from 'figma:asset/a9be4c9c16581bf146c1dae526c65716635bc724.png';
import corporateIcon from 'figma:asset/bb0fb6afeec718fa37445320b2b898a55f760cbf.png';

interface HomepageProps {
  navigateTo: (page: string, options?: { service?: string; program?: string }) => void;
}

export function Homepage({ navigateTo }: HomepageProps) {
  return (
    <Layout navigateTo={navigateTo}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent leading-tight">
            OUTSIDE-THE-BOX
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent leading-tight">
            EVENTS IN A BOX
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-white text-lg md:text-xl mb-12 max-w-2xl">
          <p>WE HAVE EVENTS TO MAKE ANY OCCASION</p>
          <p>ONE YOUR GUESTS WILL NEVER FORGET!</p>
        </div>

        {/* WHO ARE YOU Section */}
        <div className="mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">WHO ARE YOU?</h2>
          <p className="text-cyan-300 text-lg mb-8">SELECT YOUR EXPERIENCE</p>
          
          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Corporate Healthcare */}
            <button 
              onClick={() => navigateTo('workplace-start')}
              className="group flex flex-col items-center p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={corporateIcon}
                  alt="Corporate Healthcare - Meeting Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white font-semibold text-center">
                <div>CORPORATE</div>
                <div>HEALTHCARE</div>
              </div>
            </button>

            {/* Restaurant Venue */}
            <button 
              onClick={() => navigateTo('restaurant-start')}
              className="group flex flex-col items-center p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={restaurantIcon}
                  alt="Restaurant Venue - Fork and Knife"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white font-semibold text-center">
                <div>RESTAURANT</div>
                <div>VENUE</div>
              </div>
            </button>

            {/* Private Event */}
            <button 
              onClick={() => navigateTo('private-event-start')}
              className="group flex flex-col items-center p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-black/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={privateEventIcon}
                  alt="Private Event - Person Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white font-semibold text-center">
                <div>PRIVATE</div>
                <div>EVENT</div>
              </div>
            </button>
          </div>

          {/* See Full Menu Button */}
          <Button 
            onClick={() => navigateTo('custom-quote')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            SEE OUR FULL MENU
          </Button>
        </div>

        {/* All Programs Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">ALL PROGRAMS</h2>
          
          {/* Top 4 Programs */}
          <h3 className="text-cyan-300 text-xl font-semibold mb-6">TOP PROGRAMS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* GSNL */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'gsnl' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={gsnlImage}
                  alt="GSNL Game Show Night Live"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white h-20 flex flex-col justify-center">
                <div className="font-bold text-lg">GSNL</div>
                <div className="text-sm text-cyan-300 mt-1">FUN | FUN | FANTASTIC PRIZES</div>
              </div>
            </button>

            {/* BADA Brunch */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'brunch' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={badaImage}
                  alt="BADA Brunch In-A-Box"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white h-20 flex flex-col justify-center">
                <div className="font-bold text-lg">BADA BRUNCH</div>
                <div className="text-sm text-cyan-300 mt-1">THEMED EVENTS &amp; PRIVATE PARTIES</div>
              </div>
            </button>

            {/* Hybrid Events */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'hybrid' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={hybridImage}
                  alt="Hybrid Events"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white h-20 flex flex-col justify-center">
                <div className="font-bold text-lg">HYBRID EVENTS</div>
                <div className="text-sm text-cyan-300 mt-1">NOT JUST A SHOW. AN EXPERIENCE.</div>
              </div>
            </button>

            {/* Water Cooler Sports */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'watercooler' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={waterCoolerImage}
                  alt="Water Cooler Sports"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white h-20 flex flex-col justify-center">
                <div className="font-bold text-lg">WATER COOLER SPORTS</div>
                <div className="text-sm text-cyan-300 mt-1">CORPORATE GAME SHOWS &amp; TEAM BUILDING</div>
              </div>
            </button>
          </div>

          {/* Additional Programs - B2B and Event Funnels Side by Side */}
          <h3 className="text-cyan-300 text-xl font-semibold mb-6">FEATURED BUSINESS PROGRAMS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* B2B Speed Dating */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'b2b' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={b2bImage}
                  alt="B2B Speed Dating"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white">
                <div className="font-bold text-lg">B2B SPEED DATING</div>
                <div className="text-sm text-cyan-300 mt-1">BUSINESS NETWORKING EVENTS</div>
              </div>
            </button>

            {/* Event Funnels Workshop */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'funnels' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={funnelsImage}
                  alt="Event Funnels Workshop"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white">
                <div className="font-bold text-lg">EVENT FUNNELS WORKSHOP</div>
                <div className="text-sm text-cyan-300 mt-1">LEARN TO BUILD SUCCESSFUL EVENT STRATEGIES</div>
              </div>
            </button>
          </div>

          {/* Other Specialty Programs */}
          <h3 className="text-cyan-300 text-xl font-semibold mb-6">OTHER SPECIALTY PROGRAMS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* IRL Direct Marketing */}
            <button 
              onClick={() => navigateTo('program-detail', { program: 'irl-marketing' })}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={irlMarketingImage}
                  alt="IRL Direct Marketing"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white">
                <div className="font-bold text-lg">IRL DIRECT MARKETING</div>
                <div className="text-sm text-cyan-300 mt-1">IN-PERSON MARKETING EXPERIENCES</div>
              </div>
            </button>

            {/* Wedding Outside the Box */}
            <button 
              onClick={() => navigateTo('wedding-in-a-box')}
              className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105 h-full"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={weddingImage}
                  alt="Wedding Outside the Box"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-white">
                <div className="font-bold text-lg">WEDDING OUTSIDE THE BOX</div>
                <div className="text-sm text-cyan-300 mt-1">ALL-IN-ONE WEDDING PRODUCTION</div>
              </div>
            </button>
          </div>

          {/* DJ, Hosts, Games, Bands text */}
          <div className="text-center mb-8">
            <p className="text-white text-lg md:text-xl font-semibold">
              DJ | HOSTS | GAMES | BANDS
            </p>
            <p className="text-white text-lg md:text-xl font-semibold">
              &amp; MORE!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigateTo('custom-quote')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                CUSTOM QUOTE
              </Button>
              <Button 
                onClick={() => navigateTo('gallery')}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                VIEW GALLERY
              </Button>
            </div>
            <p className="text-cyan-300 text-sm">
              Check out our latest events on social media!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}