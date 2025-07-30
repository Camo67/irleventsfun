import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';

interface ServiceDetailPageProps {
  service: 'corporate' | 'restaurant' | 'private';
  navigateTo: (page: string) => void;
}

export function ServiceDetailPage({ service, navigateTo }: ServiceDetailPageProps) {
  const serviceData = {
    corporate: {
      title: 'Corporate Healthcare Events',
      subtitle: 'Professional wellness and team building experiences',
      description: 'Elevate your corporate culture with our specialized healthcare and wellness events designed to boost morale, improve team dynamics, and promote employee wellbeing.',
      hero_color: 'from-pink-500 to-purple-600',
      features: [
        {
          title: 'Team Building Activities',
          description: 'Interactive challenges that strengthen workplace relationships and communication.',
          icon: '🤝'
        },
        {
          title: 'Wellness Workshops',
          description: 'Educational sessions on stress management, nutrition, and mental health.',
          icon: '🧘'
        },
        {
          title: 'Corporate Retreats',
          description: 'Multi-day experiences combining business objectives with relaxation.',
          icon: '🏔️'
        },
        {
          title: 'Medical Conferences',
          description: 'Professional development events for healthcare organizations.',
          icon: '🏥'
        }
      ],
      packages: [
        {
          name: 'Wellness Workshop',
          duration: '2-3 hours',
          capacity: '10-30 people',
          price: 'Starting at $2,500'
        },
        {
          name: 'Team Building Day',
          duration: '4-6 hours',
          capacity: '20-50 people',
          price: 'Starting at $5,000'
        },
        {
          name: 'Corporate Retreat',
          duration: '1-3 days',
          capacity: '15-100 people',
          price: 'Custom pricing'
        }
      ]
    },
    restaurant: {
      title: 'Restaurant Venue Events',
      subtitle: 'Culinary experiences that delight and inspire',
      description: 'Transform your dining experience with our curated restaurant venue events featuring exceptional cuisine, intimate settings, and memorable moments.',
      hero_color: 'from-cyan-500 to-blue-600',
      features: [
        {
          title: 'Private Dining',
          description: 'Exclusive restaurant spaces for intimate gatherings and celebrations.',
          icon: '🍽️'
        },
        {
          title: 'Chef Experiences',
          description: 'Interactive cooking sessions and meet-the-chef opportunities.',
          icon: '👨‍🍳'
        },
        {
          title: 'Wine Tastings',
          description: 'Curated wine selection experiences with expert sommeliers.',
          icon: '🍷'
        },
        {
          title: 'Culinary Events',
          description: 'Themed dining experiences and food festival celebrations.',
          icon: '🎉'
        }
      ],
      packages: [
        {
          name: 'Private Dinner',
          duration: '2-3 hours',
          capacity: '6-20 people',
          price: 'Starting at $1,800'
        },
        {
          name: 'Chef Table Experience',
          duration: '3-4 hours',
          capacity: '8-16 people',
          price: 'Starting at $3,200'
        },
        {
          name: 'Wine Pairing Event',
          duration: '2-4 hours',
          capacity: '12-40 people',
          price: 'Starting at $4,500'
        }
      ]
    },
    private: {
      title: 'Private Events',
      subtitle: 'Personalized celebrations for life\'s special moments',
      description: 'Create unforgettable memories with our bespoke private event services, tailored to your unique vision and designed to exceed your expectations.',
      hero_color: 'from-green-500 to-teal-600',
      features: [
        {
          title: 'Birthday Parties',
          description: 'Customized celebrations from intimate gatherings to grand celebrations.',
          icon: '🎂'
        },
        {
          title: 'Anniversary Celebrations',
          description: 'Romantic and meaningful events to commemorate special milestones.',
          icon: '💕'
        },
        {
          title: 'Family Gatherings',
          description: 'Reunions and family events that bring loved ones together.',
          icon: '👨‍👩‍👧‍👦'
        },
        {
          title: 'Special Occasions',
          description: 'Graduations, retirements, and other life milestone celebrations.',
          icon: '🎓'
        }
      ],
      packages: [
        {
          name: 'Intimate Gathering',
          duration: '3-4 hours',
          capacity: '5-25 people',
          price: 'Starting at $1,200'
        },
        {
          name: 'Celebration Party',
          duration: '4-6 hours',
          capacity: '25-75 people',
          price: 'Starting at $3,500'
        },
        {
          name: 'Grand Event',
          duration: '5-8 hours',
          capacity: '75-200 people',
          price: 'Starting at $8,000'
        }
      ]
    }
  };

  const currentService = serviceData[service];

  return (
    <Layout 
      navigateTo={navigateTo} 
      showBackButton={true} 
      backButtonText="← Back to Services"
      backButtonAction={() => navigateTo('services')}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className={`inline-block px-8 py-4 bg-gradient-to-br ${currentService.hero_color} rounded-lg mb-6`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{currentService.title}</h1>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {currentService.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-400 hover:bg-black/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Event Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentService.packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-400 hover:bg-black/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Duration:</span>
                    <span className="text-white">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Capacity:</span>
                    <span className="text-white">{pkg.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Price:</span>
                    <span className="text-white font-semibold">{pkg.price}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigateTo('contact')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your event needs and create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => navigateTo('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Button>
            <Button 
              onClick={() => navigateTo('programs')}
              className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-3"
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}