import React, { useState } from 'react';
import { Layout } from './Layout';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  navigateTo: (page: string) => void;
}

export function ContactPage({ navigateTo }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openTelegram = () => {
    window.open('https://t.me/Irleventsbot', '_blank');
  };

  const sendEmail = () => {
    const subject = encodeURIComponent('Event Inquiry - IRL Interactive Events');
    const body = encodeURIComponent(`Hi Jason,

I'm interested in learning more about your event services.

Event Type: ${formData.eventType || 'Not specified'}
Message: ${formData.message || 'Please contact me to discuss my event needs.'}

Best regards,
${formData.name || 'Prospective Client'}
${formData.phone ? `Phone: ${formData.phone}` : ''}
`);
    window.open(`mailto:jason@irlevents.fun?subject=${subject}&body=${body}`, '_self');
  };

  const bookCall = () => {
    window.open('https://calendly.com/irl-events', '_blank');
  };

  return (
    <Layout navigateTo={navigateTo}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Ready to create an unforgettable event experience? Let's discuss your vision and bring it to life!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Phone (Optional)
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      className="w-full px-3 py-2 bg-black/20 border border-cyan-500/30 rounded-md text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="healthcare">Healthcare Event</option>
                      <option value="restaurant">Restaurant/Venue Event</option>
                      <option value="private">Private Party</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="reunion">Reunion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Tell us about your event vision, date, location, and any specific needs..."
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2 accent-cyan-400"
                      />
                      Email
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2 accent-cyan-400"
                      />
                      Phone
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        value="telegram"
                        checked={formData.preferredContact === 'telegram'}
                        onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                        className="mr-2 accent-cyan-400"
                      />
                      Telegram
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-semibold text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact Options */}
            <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={openTelegram}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 font-semibold text-lg"
                >
                  ✈️ Message us on Telegram
                </Button>
                
                <Button
                  onClick={sendEmail}
                  className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-3 font-semibold text-lg"
                >
                  ✉️ Send Email Directly
                </Button>
                
                <Button
                  onClick={bookCall}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 font-semibold text-lg"
                >
                  📅 Schedule a Discovery Call
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 text-2xl">✉️</div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-cyan-300">jason@irlevents.fun</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-2xl">✈️</div>
                  <div>
                    <h4 className="text-white font-semibold">Telegram Bot</h4>
                    <p className="text-cyan-300">@Irleventsbot</p>
                    <p className="text-gray-400 text-sm">Instant automated responses</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-2xl">📅</div>
                  <div>
                    <h4 className="text-white font-semibold">Discovery Calls</h4>
                    <p className="text-cyan-300">Available Monday-Friday</p>
                    <p className="text-gray-400 text-sm">15-30 minute consultations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-2xl">🌐</div>
                  <div>
                    <h4 className="text-white font-semibold">Social Media</h4>
                    <p className="text-cyan-300">@irleventsfun</p>
                    <p className="text-gray-400 text-sm">Follow for event inspiration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">How quickly do you respond?</h4>
                  <p className="text-gray-300 text-sm">Telegram: Instant automated responses. Email: Within 24 hours. Discovery calls: Same day booking available.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">What's included in a discovery call?</h4>
                  <p className="text-gray-300 text-sm">We'll discuss your event vision, needs, budget, and provide customized recommendations based on our experience.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Do you travel for events?</h4>
                  <p className="text-gray-300 text-sm">Yes! We serve events nationwide. Travel fees may apply depending on location and event scope.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-cyan-300 text-xl mb-8 max-w-3xl mx-auto">
            Join the 100,000+ hours of unforgettable experiences we've created. Let's make your event the one everyone talks about!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigateTo('custom-quote')}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white px-8 py-3 font-semibold text-lg"
            >
              Get Custom Quote
            </Button>
            <Button
              onClick={() => navigateTo('home')}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 font-semibold text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}