import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';

interface ServicesPageProps {
  navigateTo: (page: string, options?: { service?: string; program?: string }) => void;
}

export function ServicesPage({ navigateTo }: ServicesPageProps) {
  const services = [
    {
      id: 'corporate',
      title: 'Corporate Healthcare',
      description: 'Professional events tailored for healthcare organizations and corporate wellness initiatives.',
      features: ['Team Building Activities', 'Wellness Workshops', 'Corporate Retreats', 'Medical Conferences'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'restaurant',
      title: 'Restaurant Venue',
      description: 'Unique dining experiences and restaurant event packages for memorable occasions.',
      features: ['Private Dining', 'Chef Experiences', 'Wine Tastings', 'Culinary Events'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'private',
      title: 'Private Event',
      description: 'Customized private events for personal celebrations and intimate gatherings.',
      features: ['Birthday Parties', 'Anniversary Celebrations', 'Family Gatherings', 'Special Occasions'],
      color: 'from-green-500 to-teal-600'
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
          Our Services
        </h1>
        <p className="text-white text-lg md:text-xl">
          Choose from our specialized event categories
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-105"
          >
            <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
              <h3 className="text-white font-bold text-xl text-center">{service.title}</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-cyan-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={() => navigateTo('service-detail', { service: service.id })}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Plan Your Event?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let us create an unforgettable experience for you and your guests with our innovative event solutions.
        </p>
        <div className="space-x-4">
          <Button 
            onClick={() => navigateTo('programs')}
            className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            View Programs
          </Button>
          <Button 
            onClick={() => navigateTo('contact')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </Layout>
  );
}