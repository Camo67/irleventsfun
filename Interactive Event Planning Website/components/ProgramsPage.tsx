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

interface ProgramsPageProps {
  navigateTo: (page: string, options?: { service?: string; program?: string }) => void;
}

export function ProgramsPage({ navigateTo }: ProgramsPageProps) {
  const programs = [
    {
      id: 'gsnl',
      title: 'GSNL Game Show Night Live',
      subtitle: 'FUN | FUN | FANTASTIC PRIZES',
      description: 'An interactive game show experience that brings excitement and competition to your event.',
      features: ['Interactive Trivia', 'Team Competitions', 'Prize Giveaways', 'Professional Host'],
      duration: '2-3 Hours',
      capacity: '20-200 People',
      color: 'from-blue-500 to-cyan-600',
      thumbnail: gsnlImage
    },
    {
      id: 'brunch',
      title: 'BADA Brunch In-A-Box',
      subtitle: 'THEMED EVENTS & PRIVATE PARTIES',
      description: 'Elevated brunch experiences in exclusive private settings for business networking.',
      features: ['Gourmet Brunch Menu', 'Private Venue', 'Networking Opportunities', 'Premium Service'],
      duration: '3-4 Hours',
      capacity: '10-50 People',
      color: 'from-teal-500 to-green-600',
      thumbnail: badaImage
    },
    {
      id: 'hybrid',
      title: 'Hybrid Events',
      subtitle: 'NOT JUST A SHOW. AN EXPERIENCE.',
      description: 'Flexible event formats combining in-person and virtual elements for maximum reach.',
      features: ['Virtual Integration', 'Live Streaming', 'Interactive Elements', 'Multi-Platform Access'],
      duration: '1-8 Hours',
      capacity: '10-1000+ People',
      color: 'from-purple-500 to-pink-600',
      thumbnail: hybridImage
    },
    {
      id: 'b2b',
      title: 'B2B Speed Dating',
      subtitle: 'BUSINESS NETWORKING EVENTS',
      description: 'Fast-paced networking events designed to create meaningful business connections and partnerships.',
      features: ['Structured Networking', 'Business Card Exchange', 'Follow-up System', 'Professional Facilitation'],
      duration: '2-3 Hours',
      capacity: '20-100 People',
      color: 'from-cyan-400 to-purple-600',
      thumbnail: b2bImage
    },
    {
      id: 'funnels',
      title: 'Event Funnels Workshop',
      subtitle: 'LEARN TO BUILD SUCCESSFUL EVENT STRATEGIES',
      description: 'Comprehensive workshop teaching event planning, marketing funnels, and conversion optimization for successful events.',
      features: ['Event Strategy Planning', 'Marketing Funnel Creation', 'Conversion Optimization', 'Hands-on Training'],
      duration: '6-8 Hours',
      capacity: '15-30 People',
      color: 'from-cyan-400 to-blue-600',
      thumbnail: funnelsImage
    },
    {
      id: 'irl-marketing',
      title: 'IRL Direct Marketing',
      subtitle: 'IN-PERSON MARKETING EXPERIENCES',
      description: 'Create powerful in-real-life marketing activations that drive engagement and build authentic connections with your audience.',
      features: ['Experiential Marketing', 'Brand Activations', 'Interactive Displays', 'Customer Engagement'],
      duration: '4-8 Hours',
      capacity: '50-500 People',
      color: 'from-cyan-400 to-purple-600',
      thumbnail: irlMarketingImage
    },
    {
      id: 'wedding',
      title: 'Wedding Outside the Box',
      subtitle: 'ALL-IN-ONE WEDDING PRODUCTION',
      description: 'Transform your special day with unique, creative wedding experiences that break traditional conventions.',
      features: ['Creative Concepts', 'Full Production', 'Custom Entertainment', 'Unique Venues'],
      duration: '8-12 Hours',
      capacity: '50-300 People',
      color: 'from-cyan-400 to-purple-600',
      thumbnail: weddingImage
    },
    {
      id: 'watercooler',
      title: 'Water Cooler Sports',
      subtitle: 'CORPORATE GAME SHOWS & INTERACTIVE TEAM BUILDING EVENTS',
      description: 'Engaging sports-themed corporate events that build team spirit and create memorable workplace experiences through interactive game shows and team building activities.',
      features: ['Sports-Themed Competitions', 'Team Building Activities', 'Corporate Game Shows', 'Interactive Challenges'],
      duration: '2-4 Hours',
      capacity: '20-150 People',
      color: 'from-cyan-400 to-purple-600',
      thumbnail: waterCoolerImage
    }
  ];

  return (
    <Layout 
      navigateTo={navigateTo} 
      showBackButton={true} 
      backButtonText="← Back to Home"
      backButtonAction={() => navigateTo('home')}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-4">
          All Programs
        </h1>
        <p className="text-white text-lg md:text-xl">
          Complete collection of our event experiences
        </p>
      </div>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto space-y-8 mb-16">
        {programs.map((program, index) => (
          <div 
            key={program.id}
            className={`bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-[1.02] ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:flex h-full">
              <div className="md:w-1/3 h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={program.thumbnail}
                  alt={program.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-cyan-300 text-sm mb-4">{program.subtitle}</p>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-cyan-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Event Details:</h4>
                    <div className="space-y-2">
                      <div className="text-gray-300">
                        <span className="text-cyan-300">Duration:</span> {program.duration}
                      </div>
                      <div className="text-gray-300">
                        <span className="text-cyan-300">Capacity:</span> {program.capacity}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => navigateTo('program-detail', { program: program.id })}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
                  >
                    View Details
                  </Button>
                  <Button 
                    onClick={() => navigateTo('contact')}
                    className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          We specialize in creating custom events tailored to your specific needs and vision.
        </p>
        <Button 
          onClick={() => navigateTo('contact')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
        >
          Let's Create Something Amazing
        </Button>
      </div>
    </Layout>
  );
}