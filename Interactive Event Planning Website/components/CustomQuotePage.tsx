import React, { useState } from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';
import { Progress } from './ui/progress';

interface CustomQuotePageProps {
  navigateTo: (page: string, options?: any) => void;
  funnelData: Record<string, any>;
  updateFunnelData: (data: Record<string, any>) => void;
}

const QUOTE_QUESTIONS = [
  {
    id: 'event-category',
    question: 'What type of event are you planning?',
    options: [
      'Restaurant/Venue Event',
      'Private Celebration (Birthday, Anniversary, etc.)',
      'Wedding',
      'Corporate/Team Building',
      'Healthcare/Senior Facility',
      'Something completely custom'
    ]
  },
  {
    id: 'timeline',
    question: 'When is your event?',
    options: [
      'Within 2 weeks',
      '2 weeks - 1 month',
      '1-3 months',
      '3-6 months',
      '6+ months',
      'Still planning/flexible'
    ]
  },
  {
    id: 'guest-count',
    question: 'How many guests are you expecting?',
    options: [
      'Under 25 people',
      '25-50 people',
      '50-100 people',
      '100-200 people',
      '200+ people',
      'Multiple events/sessions'
    ]
  },
  {
    id: 'budget-range',
    question: 'What is your budget range?',
    options: [
      'Under $2,500',
      '$2,500 - $5,000',
      '$5,000 - $10,000',
      '$10,000 - $25,000',
      '$25,000+',
      'Need help determining budget'
    ]
  },
  {
    id: 'priority',
    question: 'What is most important for your event?',
    options: [
      'Interactive entertainment & engagement',
      'Professional coordination & planning',
      'Marketing & promotion support',
      'Photography & memory capture',
      'All-inclusive simplicity',
      'Custom experience design'
    ]
  },
  {
    id: 'contact-preference',
    question: 'How would you prefer we follow up?',
    options: [
      'Phone call within 24 hours',
      'Email with detailed proposal',
      'Text message first',
      'Schedule a video consultation',
      'In-person meeting',
      'Send me information first'
    ]
  }
];

export function CustomQuotePage({ navigateTo, funnelData, updateFunnelData }: CustomQuotePageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(funnelData.quote || {});
  const [showThankYou, setShowThankYou] = useState(false);
  
  const currentQuestion = QUOTE_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUOTE_QUESTIONS.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);
    updateFunnelData({ quote: newAnswers });

    if (currentStep < QUOTE_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Funnel complete, show thank you
      setShowThankYou(true);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigateTo('home');
    }
  };

  const bookCall = () => {
    window.open('https://calendly.com/irl-events', '_blank');
  };

  const emailPlan = () => {
    console.log('Emailing custom plan...');
    // This would integrate with email system
  };

  const openChat = () => {
    console.log('Opening live chat...');
    // This would integrate with chat system
  };

  if (showThankYou) {
    return (
      <Layout navigateTo={navigateTo}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent mb-6">
              Thank You!
            </h1>
            <p className="text-white text-xl mb-8">
              We've received your information and are already crafting your custom event experience.
            </p>

            <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 mb-8">
              <h3 className="text-white font-bold text-xl mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl mt-1">✅</div>
                  <div>
                    <div className="text-white font-semibold">Within 2 Hours</div>
                    <div className="text-gray-300 text-sm">We'll review your answers and prepare initial ideas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl mt-1">📞</div>
                  <div>
                    <div className="text-white font-semibold">Within 24 Hours</div>
                    <div className="text-gray-300 text-sm">Personal follow-up call to discuss your vision</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl mt-1">📧</div>
                  <div>
                    <div className="text-white font-semibold">Within 48 Hours</div>
                    <div className="text-gray-300 text-sm">Detailed custom proposal delivered to your inbox</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={bookCall}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📅 Book a Call Now
              </Button>
              
              <Button 
                onClick={emailPlan}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                📩 Email My Plan
              </Button>
              
              <Button 
                onClick={openChat}
                className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                💬 Live Chat
              </Button>
            </div>

            <p className="text-cyan-300 text-sm">
              Questions? Call us directly at <strong>555-IRL-EVENTS</strong>
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (currentStep === 0 && Object.keys(answers).length === 0) {
    // Show intro screen
    return (
      <Layout navigateTo={navigateTo}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">📝</div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
              Custom Quote Request
            </h1>
            <p className="text-white text-xl mb-12">
              Let's create something amazing together! Tell us about your vision and we'll design the perfect experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-white font-bold mb-2">Completely Custom</h3>
                <p className="text-purple-300 text-sm">Unique events designed specifically for your vision and goals</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-white font-bold mb-2">Fast Turnaround</h3>
                <p className="text-purple-300 text-sm">Proposals delivered within 48 hours, even for complex events</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
                <div className="text-3xl mb-3">💯</div>
                <h3 className="text-white font-bold mb-2">No Obligation</h3>
                <p className="text-purple-300 text-sm">Free consultation and proposal with no pressure to commit</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 mb-8">
              <h3 className="text-white font-bold text-xl mb-4">Recent Custom Events We've Created</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm">
                <div className="text-cyan-300">🏥 Healthcare facility with 500+ residents - interactive wellness programs</div>
                <div className="text-cyan-300">🏢 Corporate retreat for 200 - team building game show experience</div>
                <div className="text-cyan-300">🎭 Themed birthday party with custom game show and entertainment</div>
                <div className="text-cyan-300">🍽️ Restaurant chain marketing campaign across 15 locations</div>
                <div className="text-cyan-300">💒 Destination wedding with multi-day entertainment programming</div>
                <div className="text-cyan-300">🎓 University fundraising gala with interactive donor experiences</div>
              </div>
            </div>

            <p className="text-white text-lg mb-8">
              Ready to get started? Our quick questionnaire takes less than 2 minutes.
            </p>
            
            <Button 
              onClick={() => setCurrentStep(0)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start My Custom Quote →
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
              <span className="text-purple-300 text-sm">Question {currentStep + 1} of {QUOTE_QUESTIONS.length}</span>
              <span className="text-purple-300 text-sm">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full h-2" />
          </div>

          {/* Question */}
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 mb-8">
            <h2 className="text-white text-2xl font-bold mb-8">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-black/20 border border-purple-500/30 rounded-lg text-white hover:border-purple-400 hover:bg-black/30 transition-all duration-300 hover:scale-102"
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
            
            <div className="text-purple-300 text-sm flex items-center">
              Select any option to continue
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}