<?php get_header(); ?>

<div class="container mx-auto px-6 py-12">
    <!-- Contact Hero Section -->
    <div class="page-hero">
        <div class="page-hero-content">
            <h1 class="page-title neon-text fade-in-up">CONTACT US</h1>
            <p class="page-subtitle fade-in-up">
                Ready to transform your event? Let's make it unforgettable together!
            </p>
        </div>
    </div>

    <!-- Contact Content -->
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="fade-in-up">
                <div class="irl-form">
                    <h2 class="text-2xl font-bold text-white mb-2 neon-text">Get Your Custom Quote</h2>
                    <p class="text-irl-gray-light mb-6">
                        Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
                    </p>
                    
                    <form id="contact-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="irl-form-field">
                                <label for="name" class="irl-form-label">Name *</label>
                                <input type="text" 
                                       id="name"
                                       name="name" 
                                       required
                                       class="irl-form-input"
                                       placeholder="Your full name">
                            </div>
                            
                            <div class="irl-form-field">
                                <label for="email" class="irl-form-label">Email *</label>
                                <input type="email" 
                                       id="email"
                                       name="email" 
                                       required
                                       class="irl-form-input"
                                       placeholder="your@email.com">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="irl-form-field">
                                <label for="phone" class="irl-form-label">Phone</label>
                                <input type="tel" 
                                       id="phone"
                                       name="phone"
                                       class="irl-form-input"
                                       placeholder="(555) 123-4567">
                            </div>
                            
                            <div class="irl-form-field">
                                <label for="service" class="irl-form-label">Service Interest</label>
                                <select id="service" name="service" class="irl-form-select">
                                    <option value="">Select a service...</option>
                                    <option value="Corporate Healthcare">Corporate Healthcare</option>
                                    <option value="Restaurant Venue">Restaurant Venue</option>
                                    <option value="Private Event">Private Event</option>
                                    <option value="GSNL Game Show">GSNL Game Show Night Live</option>
                                    <option value="BADA Brunch">BADA Brunch</option>
                                    <option value="Hybrid Events">Hybrid Events</option>
                                    <option value="Water Cooler Sports">Water Cooler Sports</option>
                                    <option value="B2B Speed Dating">B2B Speed Dating</option>
                                    <option value="Event Funnels Workshop">Event Funnels Workshop</option>
                                    <option value="IRL Direct Marketing">IRL Direct Marketing</option>
                                    <option value="Wedding Outside the Box">Wedding Outside the Box</option>
                                    <option value="Custom Event">Custom Event</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="irl-form-field">
                                <label for="event_date" class="irl-form-label">Preferred Event Date</label>
                                <input type="date" 
                                       id="event_date"
                                       name="event_date"
                                       class="irl-form-input">
                            </div>
                            
                            <div class="irl-form-field">
                                <label for="budget" class="irl-form-label">Estimated Budget</label>
                                <select id="budget" name="budget" class="irl-form-select">
                                    <option value="">Select budget range...</option>
                                    <option value="Under $5,000">Under $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                    <option value="Over $50,000">Over $50,000</option>
                                    <option value="Let's discuss">Let's discuss</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="irl-form-field">
                            <label for="guest_count" class="irl-form-label">Expected Number of Guests</label>
                            <input type="number" 
                                   id="guest_count"
                                   name="guest_count"
                                   class="irl-form-input"
                                   placeholder="e.g., 50"
                                   min="1">
                        </div>
                        
                        <div class="irl-form-field">
                            <label for="message" class="irl-form-label">Tell us about your event *</label>
                            <textarea id="message"
                                     name="message" 
                                     rows="5"
                                     required
                                     class="irl-form-textarea"
                                     placeholder="Describe your event vision, goals, and any specific requirements..."></textarea>
                        </div>
                        
                        <div class="irl-form-field">
                            <button type="submit" class="irl-form-submit">
                                SEND MY REQUEST
                            </button>
                        </div>
                    </form>
                    
                    <div id="form-message"></div>
                </div>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
                <!-- Contact Details -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 fade-in-up">
                    <h3 class="text-2xl font-bold text-white mb-6 neon-text">Get In Touch</h3>
                    
                    <div class="space-y-6">
                        <!-- Phone -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-irl-cyan rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-lg mb-1">Call Us Now</h4>
                                <p class="text-irl-gray-light mb-2">Ready to discuss your event? Give us a call!</p>
                                <a href="tel:<?php echo esc_attr(str_replace(array(' ', '(', ')', '-'), '', get_theme_mod('irl_phone', '(555) 123-EVENTS'))); ?>" 
                                   class="text-irl-cyan hover:text-white font-semibold text-lg transition-colors">
                                    <?php echo esc_html(get_theme_mod('irl_phone', '(555) 123-EVENTS')); ?>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Email -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-irl-cyan rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-lg mb-1">Email Us</h4>
                                <p class="text-irl-gray-light mb-2">Send us your questions anytime</p>
                                <a href="mailto:<?php echo esc_attr(get_theme_mod('irl_email', 'info@irlevents.com')); ?>" 
                                   class="text-irl-cyan hover:text-white font-semibold text-lg transition-colors">
                                    <?php echo esc_html(get_theme_mod('irl_email', 'info@irlevents.com')); ?>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Address -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-irl-cyan rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-lg mb-1">Visit Us</h4>
                                <p class="text-irl-gray-light mb-2">Come see our setup in person</p>
                                <address class="text-irl-cyan not-italic">
                                    <?php echo nl2br(esc_html(get_theme_mod('irl_address', '123 Future Street\nCyber City, CC 12345'))); ?>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Hours -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 fade-in-up">
                    <h3 class="text-xl font-bold text-white mb-4 neon-text">Business Hours</h3>
                    <div class="space-y-2 text-irl-gray-light">
                        <div class="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span class="text-white">9:00 AM - 7:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Saturday:</span>
                            <span class="text-white">10:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Sunday:</span>
                            <span class="text-white">12:00 PM - 5:00 PM</span>
                        </div>
                    </div>
                    <div class="mt-4 p-4 bg-irl-cyan/10 rounded-lg">
                        <p class="text-irl-cyan text-sm">
                            <strong>Emergency/Weekend Events:</strong> Available by appointment
                        </p>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 fade-in-up">
                    <h3 class="text-xl font-bold text-white mb-4 neon-text">Follow Our Events</h3>
                    <p class="text-irl-gray-light mb-6">
                        Check out our latest events and behind-the-scenes content on social media!
                    </p>
                    
                    <div class="flex space-x-4">
                        <a href="https://facebook.com/irleventsfun" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="social-icon hover-scale">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        
                        <a href="https://instagram.com/<?php echo esc_attr(ltrim(get_theme_mod('irl_instagram', '@irleventsfun'), '@')); ?>" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="social-icon hover-scale">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.807-.394-.746-.394-1.652 0-2.398.568-1.077 1.719-1.807 3.016-1.807 1.297 0 2.448.73 3.016 1.807.394.746.394 1.652 0 2.398-.568 1.077-1.719 1.807-3.016 1.807zm7.518 0c-1.297 0-2.448-.73-3.016-1.807-.394-.746-.394-1.652 0-2.398.568-1.077 1.719-1.807 3.016-1.807 1.297 0 2.448.73 3.016 1.807.394.746.394 1.652 0 2.398-.568 1.077-1.719 1.807-3.016 1.807z"/>
                            </svg>
                        </a>
                        
                        <a href="https://tiktok.com/<?php echo esc_attr(ltrim(get_theme_mod('irl_tiktok', '@irleventsfun'), '@')); ?>" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="social-icon hover-scale">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                        </a>
                    </div>
                    
                    <div class="mt-4">
                        <p class="text-irl-cyan font-semibold">
                            <?php echo esc_html(get_theme_mod('irl_instagram', '@irleventsfun')); ?>
                        </p>
                        <p class="text-sm text-irl-gray-light">
                            Follow us on all platforms for the latest updates!
                        </p>
                    </div>
                </div>

                <!-- FAQ Preview -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 fade-in-up">
                    <h3 class="text-xl font-bold text-white mb-4 neon-text">Quick FAQ</h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="text-white font-semibold mb-1">How far in advance should I book?</h4>
                            <p class="text-irl-gray-light text-sm">We recommend booking 4-6 weeks in advance for best availability.</p>
                        </div>
                        <div>
                            <h4 class="text-white font-semibold mb-1">Do you travel for events?</h4>
                            <p class="text-irl-gray-light text-sm">Yes! We service events throughout the region. Travel fees may apply.</p>
                        </div>
                        <div>
                            <h4 class="text-white font-semibold mb-1">What's included in your packages?</h4>
                            <p class="text-irl-gray-light text-sm">All packages include DJ, professional hosts, interactive games, and full setup/cleanup.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Response Time Banner -->
<div class="bg-gradient-to-r from-irl-purple to-irl-pink py-8 mt-16">
    <div class="container mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold text-white mb-2">⚡ Quick Response Guarantee</h3>
        <p class="text-white/90 text-lg">
            We respond to all inquiries within 4 hours during business hours!
        </p>
    </div>
</div>

<?php get_footer(); ?>