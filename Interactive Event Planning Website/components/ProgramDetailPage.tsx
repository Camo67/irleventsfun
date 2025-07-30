import React from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';

interface ProgramDetailPageProps {
  program: 'gsnl' | 'brunch' | 'hybrid' | 'b2b' | 'funnels' | 'irl-marketing' | 'wedding' | 'watercooler';
  navigateTo: (page: string) => void;
}

export function ProgramDetailPage({ program, navigateTo }: ProgramDetailPageProps) {
  const programData = {
    gsnl: {
      title: 'GSNL Game Show Night Live',
      subtitle: 'FUN | FUN | FANTASTIC PRIZES',
      description: 'Bring the excitement of a live game show to your event! Our interactive GSNL experience combines trivia, team challenges, and audience participation for an unforgettable evening of entertainment.',
      hero_color: 'from-blue-500 to-cyan-600',
      duration: '2-3 Hours',
      capacity: '20-200 People',
      pricing: 'Starting at $3,500',
      highlights: [
        'Professional game show host',
        'Interactive trivia rounds',
        'Team-based competitions',
        'Exciting prize giveaways',
        'Custom questions for your group',
        'Audio/visual equipment included'
      ],
      timeline: [
        { time: '7:00 PM', activity: 'Setup & Welcome Reception' },
        { time: '7:30 PM', activity: 'Team Formation & Rules' },
        { time: '8:00 PM', activity: 'Round 1: Trivia Lightning' },
        { time: '8:30 PM', activity: 'Round 2: Team Challenges' },
        { time: '9:00 PM', activity: 'Final Round & Prize Awards' },
        { time: '9:30 PM', activity: 'Networking & Wrap-up' }
      ],
      addons: [
        { name: 'Custom Branding', price: '$500' },
        { name: 'Premium Prize Package', price: '$1,200' },
        { name: 'Photography Service', price: '$800' },
        { name: 'Extended Time (+1 hour)', price: '$750' }
      ]
    },
    brunch: {
      title: 'BADA Brunch In-A-Box',
      subtitle: 'THEMED EVENTS & PRIVATE PARTIES',
      description: 'Sophisticated brunch experiences in exclusive private settings, perfect for business networking, client entertainment, and intimate celebrations with a gourmet twist.',
      hero_color: 'from-teal-500 to-green-600',
      duration: '3-4 Hours',
      capacity: '10-50 People',
      pricing: 'Starting at $4,200',
      highlights: [
        'Exclusive private venue access',
        'Gourmet brunch menu',
        'Premium beverage selection',
        'Professional service staff',
        'Custom menu options',
        'Elegant table settings'
      ],
      timeline: [
        { time: '10:00 AM', activity: 'Venue Setup & Arrival' },
        { time: '10:30 AM', activity: 'Welcome Mimosas & Networking' },
        { time: '11:00 AM', activity: 'Gourmet Brunch Service' },
        { time: '12:00 PM', activity: 'Business Presentations (Optional)' },
        { time: '1:00 PM', activity: 'Continued Networking' },
        { time: '1:30 PM', activity: 'Event Conclusion' }
      ],
      addons: [
        { name: 'Champagne Upgrade', price: '$400' },
        { name: 'Live Music Performance', price: '$1,000' },
        { name: 'Floral Arrangements', price: '$600' },
        { name: 'AV Equipment Setup', price: '$500' }
      ]
    },
    hybrid: {
      title: 'Hybrid Events',
      subtitle: 'NOT JUST A SHOW. AN EXPERIENCE.',
      description: 'Seamlessly blend in-person and virtual experiences to reach audiences everywhere. Our hybrid events combine the energy of live interaction with the accessibility of digital participation.',
      hero_color: 'from-purple-500 to-pink-600',
      duration: '1-8 Hours',
      capacity: '10-1000+ People',
      pricing: 'Starting at $2,800',
      highlights: [
        'Professional live streaming setup',
        'Interactive virtual participation',
        'Multi-platform compatibility',
        'Real-time audience engagement',
        'Technical support included',
        'Recording and replay options'
      ],
      timeline: [
        { time: 'Pre-Event', activity: 'Technical Setup & Testing' },
        { time: 'Event Start', activity: 'Welcome & Platform Introduction' },
        { time: '+30 mins', activity: 'Interactive Presentation' },
        { time: '+60 mins', activity: 'Live Q&A Session' },
        { time: '+90 mins', activity: 'Breakout Room Networking' },
        { time: 'Conclusion', activity: 'Wrap-up & Follow-up Planning' }
      ],
      addons: [
        { name: 'Advanced Analytics', price: '$300' },
        { name: 'Custom Virtual Backgrounds', price: '$250' },
        { name: 'Professional Video Editing', price: '$800' },
        { name: 'Additional Platform Integration', price: '$400' }
      ]
    },
    b2b: {
      title: 'B2B Speed Dating',
      subtitle: 'BUSINESS NETWORKING EVENTS',
      description: 'Fast-paced networking events designed to create meaningful business connections and partnerships. Our structured format ensures every participant meets potential collaborators, clients, or partners in an efficient and engaging environment.',
      hero_color: 'from-cyan-400 to-purple-600',
      duration: '2-3 Hours',
      capacity: '20-100 People',
      pricing: 'Starting at $2,500',
      highlights: [
        'Structured networking format',
        'Professional event facilitation',
        'Digital business card exchange',
        'Follow-up connection system',
        'Industry-specific matching',
        'Refreshments and networking breaks'
      ],
      timeline: [
        { time: '6:00 PM', activity: 'Registration & Welcome Reception' },
        { time: '6:30 PM', activity: 'Opening Presentation & Instructions' },
        { time: '7:00 PM', activity: 'Speed Dating Rounds (3 minutes each)' },
        { time: '8:00 PM', activity: 'Networking Break & Refreshments' },
        { time: '8:30 PM', activity: 'Additional Rounds & Connections' },
        { time: '9:00 PM', activity: 'Closing & Contact Exchange' }
      ],
      addons: [
        { name: 'Digital Contact Management System', price: '$350' },
        { name: 'Professional Photography', price: '$600' },
        { name: 'Industry Expert Panel', price: '$1,500' },
        { name: 'Premium Catering Upgrade', price: '$800' }
      ]
    },
    funnels: {
      title: 'Event Funnels Workshop',
      subtitle: 'LEARN TO BUILD SUCCESSFUL EVENT STRATEGIES',
      description: 'Comprehensive workshop teaching event planning, marketing funnels, and conversion optimization. Learn to create events that not only engage attendees but also drive business results and long-term customer relationships.',
      hero_color: 'from-cyan-400 to-blue-600',
      duration: '6-8 Hours',
      capacity: '15-30 People',
      pricing: 'Starting at $1,800',
      highlights: [
        'Event strategy development',
        'Marketing funnel creation',
        'Conversion optimization techniques',
        'Hands-on workshop activities',
        'Digital tools and templates',
        'Post-workshop support'
      ],
      timeline: [
        { time: '9:00 AM', activity: 'Welcome & Workshop Overview' },
        { time: '9:30 AM', activity: 'Event Planning Fundamentals' },
        { time: '11:00 AM', activity: 'Marketing Funnel Design' },
        { time: '12:30 PM', activity: 'Lunch Break & Networking' },
        { time: '1:30 PM', activity: 'Conversion Optimization' },
        { time: '3:00 PM', activity: 'Hands-on Strategy Building' },
        { time: '4:30 PM', activity: 'Presentation & Feedback' },
        { time: '5:00 PM', activity: 'Resources & Next Steps' }
      ],
      addons: [
        { name: '1-on-1 Strategy Session', price: '$300' },
        { name: 'Digital Template Package', price: '$150' },
        { name: '30-Day Email Support', price: '$200' },
        { name: 'Team Workshop (5+ people)', price: '$500' }
      ]
    },
    'irl-marketing': {
      title: 'IRL Direct Marketing',
      subtitle: 'IN-PERSON MARKETING EXPERIENCES',
      description: 'Create powerful in-real-life marketing activations that drive engagement and build authentic connections with your audience. From pop-up experiences to interactive brand activations, we make your brand unforgettable.',
      hero_color: 'from-cyan-400 to-purple-600',
      duration: '4-8 Hours',
      capacity: '50-500 People',
      pricing: 'Starting at $5,500',
      highlights: [
        'Experiential marketing campaigns',
        'Interactive brand activations',
        'Custom installation design',
        'Professional staffing',
        'Data collection and analytics',
        'Social media integration'
      ],
      timeline: [
        { time: 'Pre-Event', activity: 'Setup & Installation' },
        { time: 'Event Launch', activity: 'Grand Opening & First Interactions' },
        { time: '+2 Hours', activity: 'Peak Engagement Period' },
        { time: '+4 Hours', activity: 'Data Collection & Feedback' },
        { time: '+6 Hours', activity: 'Social Media Push' },
        { time: 'Wrap-up', activity: 'Breakdown & Analytics Review' }
      ],
      addons: [
        { name: 'Custom Branded Materials', price: '$800' },
        { name: 'Professional Photography/Video', price: '$1,200' },
        { name: 'Social Media Management', price: '$600' },
        { name: 'Advanced Analytics Package', price: '$400' }
      ]
    },
    wedding: {
      title: 'Wedding Outside the Box',
      subtitle: 'ALL-IN-ONE WEDDING PRODUCTION',
      description: 'Transform your special day with unique, creative wedding experiences that break traditional conventions. From concept to execution, we create unforgettable celebrations that reflect your personality and love story.',
      hero_color: 'from-cyan-400 to-purple-600',
      duration: '8-12 Hours',
      capacity: '50-300 People',
      pricing: 'Starting at $12,000',
      highlights: [
        'Creative concept development',
        'Full wedding production',
        'Custom entertainment options',
        'Unique venue transformation',
        'Professional coordination',
        'Complete vendor management'
      ],
      timeline: [
        { time: '2:00 PM', activity: 'Vendor Setup & Final Preparations' },
        { time: '4:00 PM', activity: 'Guest Arrival & Welcome Experience' },
        { time: '5:00 PM', activity: 'Unique Ceremony Experience' },
        { time: '6:00 PM', activity: 'Cocktail Hour with Entertainment' },
        { time: '7:30 PM', activity: 'Reception & Dinner Service' },
        { time: '9:00 PM', activity: 'Custom Entertainment Program' },
        { time: '11:00 PM', activity: 'Grand Finale & Send-off' }
      ],
      addons: [
        { name: 'Extended Reception (+2 hours)', price: '$2,000' },
        { name: 'Live Performance Package', price: '$3,500' },
        { name: 'Premium Floral Design', price: '$2,500' },
        { name: 'Professional Videography', price: '$2,800' }
      ]
    },
    watercooler: {
      title: 'Water Cooler Sports',
      subtitle: 'CORPORATE GAME SHOWS & INTERACTIVE TEAM BUILDING EVENTS',
      description: 'Engaging sports-themed corporate events that build team spirit and create memorable workplace experiences. Our interactive game shows and team building activities combine friendly competition with professional development.',
      hero_color: 'from-cyan-400 to-purple-600',
      duration: '2-4 Hours',
      capacity: '20-150 People',
      pricing: 'Starting at $3,200',
      highlights: [
        'Sports-themed team competitions',
        'Interactive game show format',
        'Professional sports host',
        'Team building activities',
        'Custom corporate challenges',
        'Awards and recognition ceremony'
      ],
      timeline: [
        { time: '1:00 PM', activity: 'Setup & Team Registration' },
        { time: '1:30 PM', activity: 'Welcome & Team Introductions' },
        { time: '2:00 PM', activity: 'Sports Trivia Competition' },
        { time: '2:45 PM', activity: 'Physical Team Challenges' },
        { time: '3:30 PM', activity: 'Skills-Based Competitions' },
        { time: '4:15 PM', activity: 'Final Championship Round' },
        { time: '4:45 PM', activity: 'Awards Ceremony & Celebration' }
      ],
      addons: [
        { name: 'Custom Team Jerseys', price: '$450' },
        { name: 'Professional Sports Commentary', price: '$600' },
        { name: 'Trophy & Medal Package', price: '$350' },
        { name: 'Team Photo Session', price: '$400' }
      ]
    }
  };

  const currentProgram = programData[program];

  return (
    <Layout 
      navigateTo={navigateTo} 
      showBackButton={true} 
      backButtonText="← Back to Programs"
      backButtonAction={() => navigateTo('programs')}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className={`inline-block px-8 py-4 bg-gradient-to-br ${currentProgram.hero_color} rounded-lg mb-6`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{currentProgram.title}</h1>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {currentProgram.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Program Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Program Highlights</h3>
                <ul className="space-y-2">
                  {currentProgram.highlights.map((highlight, index) => (
                    <li key={index} className="text-cyan-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Event Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Duration:</span>
                    <span className="text-white">{currentProgram.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Capacity:</span>
                    <span className="text-white">{currentProgram.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Starting Price:</span>
                    <span className="text-white font-semibold">{currentProgram.pricing}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4 text-center">Quick Booking</h3>
            <div className="space-y-4">
              <Button 
                onClick={() => navigateTo('contact')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
              >
                Get Custom Quote
              </Button>
              <Button 
                onClick={() => navigateTo('contact')}
                className="w-full bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Event Timeline</h2>
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
            <div className="space-y-4">
              {currentProgram.timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-20 text-cyan-300 font-semibold">{item.time}</div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="flex-1 text-white">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Optional Add-ons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentProgram.addons.map((addon, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 hover:bg-black/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold">{addon.name}</h3>
                  <span className="text-cyan-300 font-semibold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience {currentProgram.title}?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to customize this program for your event and create an unforgettable experience for your guests.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => navigateTo('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Book This Program
            </Button>
            <Button 
              onClick={() => navigateTo('programs')}
              className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-3"
            >
              View Other Programs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}