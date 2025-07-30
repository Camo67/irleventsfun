import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Layout } from '../Layout';
import { Progress } from '../ui/progress';

interface RestaurantStartPageProps {
  navigateTo: (page: string, options?: any) => void;
  funnelData: Record<string, any>;
  updateFunnelData: (data: Record<string, any>) => void;
}

const FUNNEL_QUESTIONS = [
  {
    id: 'venue-type',
    question: 'What type of venue do you operate?',
    options: [
      'Restaurant',
      'Bar/Pub',
      'Event Venue',
      'Hotel/Resort',
      'Other'
    ]
  },
  {
    id: 'events-per-month',
    question: 'How many events do you currently host per month?',
    options: [
      '0-2 events',
      '3-5 events', 
      '6-10 events',
      '11+ events',
      'Just getting started'
    ]
  },
  {
    id: 'interested-services',
    question: 'Which services interest you most?',
    options: [
      'Game Show Night Live',
      'Bada Brunch Events',
      'Hybrid DJ/Band + Games',
      'Pop-Up Bar Takeovers',
      'Marketing & Promotion'
    ]
  },
  {
    id: 'marketing-spend',
    question: 'What do you typically spend on promotion per month?',
    options: [
      'Under $500',
      '$500 - $1,500',
      '$1,500 - $5,000',
      '$5,000+',
      'Not sure yet'
    ]
  },
  {
    id: 'marketing-staff',
    question: 'Do you have dedicated marketing staff?',
    options: [
      'Yes, full marketing team',
      'Yes, one person handles marketing',
      'No, owner handles everything',
      'We outsource marketing'
    ]
  },
  {
    id: 'slowest-days',
    question: 'What are your slowest days that need a boost?',
    options: [
      'Monday & Tuesday',
      'Sunday & Monday',
      'Mid-week (Tue-Thu)',
      'We need weekend help too',
      'All days need improvement'
    ]
  },
  {
    id: 'capacity',
    question: 'What is your venue capacity?',
    options: [
      'Under 50 people',
      '50-100 people',
      '100-200 people',
      '200+ people',
      'Multiple spaces/rooms'
    ]
  },
  {
    id: 'budget',
    question: 'What was your total event budget last year?',
    options: [
      'Under $10,000',
      '$10,000 - $25,000',
      '$25,000 - $50,000',
      '$50,000+',
      'This would be our first year'
    ]
  }
];

export function RestaurantStartPage({ navigateTo, funnelData, updateFunnelData }: RestaurantStartPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(funnelData.restaurant || {});
  
  const currentQuestion = FUNNEL_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / FUNNEL_QUESTIONS.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);
    updateFunnelData({ restaurant: newAnswers });

    if (currentStep < FUNNEL_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Funnel complete, show results
      navigateTo('restaurant-calendar-quote', { funnelData: { restaurant: newAnswers } });
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigateTo('home');
    }
  };

  if (currentStep === 0 && Object.keys(answers).length === 0) {
    // Show intro screen
    return (
      <Layout navigateTo={navigateTo}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🍽️</div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-6">
              Restaurant &amp; Venue Services
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🎤</div>
                <h3 className="text-white font-bold text-lg mb-2">Game Show Night Live</h3>
                <p className="text-cyan-300 text-sm">Interactive game shows that pack your venue</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🥞</div>
                <h3 className="text-white font-bold text-lg mb-2">Bada Brunch Events</h3>
                <p className="text-cyan-300 text-sm">Themed brunch experiences with entertainment</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🎶</div>
                <h3 className="text-white font-bold text-lg mb-2">Hybrid Events</h3>
                <p className="text-cyan-300 text-sm">DJ/Band + Game Show rotation</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🍸</div>
                <h3 className="text-white font-bold text-lg mb-2">Pop-Up Bar Takeovers</h3>
                <p className="text-cyan-300 text-sm">Special event nights that drive revenue</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-white font-bold text-lg mb-2">IRL Direct Marketing</h3>
                <p className="text-cyan-300 text-sm">QR codes, prizes, SMS funnels, CRM integration</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-white font-bold text-lg mb-2">AI Agents &amp; Analytics</h3>
                <p className="text-cyan-300 text-sm">Automated follow-up and performance tracking</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 mb-8">
              <h3 className="text-white font-bold text-xl mb-4">🎯 Our Promise to Venue Partners</h3>
              <p className="text-white text-lg mb-4">"Let Us Run Your Calendar Year-Round"</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="text-cyan-300">✅ Fill your slowest nights</div>
                <div className="text-cyan-300">✅ Increase average spend per customer</div>
                <div className="text-cyan-300">✅ Build a database of repeat customers</div>
                <div className="text-cyan-300">✅ Automated marketing systems</div>
              </div>
            </div>

            <p className="text-white text-lg mb-8">
              Ready to transform your venue into the hottest spot in town? Let's build your custom entertainment calendar.
            </p>
            
            <Button 
              onClick={() => setCurrentStep(0)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Planning My Calendar →
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout navigateTo={navigateTo}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-2xl mx-auto w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-cyan-300 text-sm">Question {currentStep + 1} of {FUNNEL_QUESTIONS.length}</span>
              <span className="text-cyan-300 text-sm">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full h-2" />
          </div>

          {/* Question */}
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 mb-8">
            <h2 className="text-white text-2xl font-bold mb-8">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-black/20 border border-cyan-500/30 rounded-lg text-white hover:border-cyan-400 hover:bg-black/30 transition-all duration-300 hover:scale-102"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              onClick={goBack}
              className="bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-6 py-2 rounded-full"
            >
              ← Back
            </Button>
            
            <div className="text-cyan-300 text-sm flex items-center">
              Press any option to continue
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}