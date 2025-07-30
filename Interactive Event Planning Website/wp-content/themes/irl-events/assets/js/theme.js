/**
 * IRL Interactive Events Theme JavaScript
 * 
 * @package IRL_Events
 * @version 1.0.0
 */

(function($) {
    'use strict';

    /**
     * Document Ready Functions
     */
    $(document).ready(function() {
        initMobileMenu();
        initScrollAnimations();
        initContactForms();
        initProgramFilters();
        initSmoothScrolling();
        initParallaxEffects();
        initNeonEffects();
    });

    /**
     * Mobile Menu Functionality
     */
    function initMobileMenu() {
        const $mobileToggle = $('#mobile-menu-toggle');
        const $mobileMenu = $('#mobile-menu');
        
        if ($mobileToggle.length && $mobileMenu.length) {
            // Toggle mobile menu
            $mobileToggle.on('click', function(e) {
                e.preventDefault();
                $mobileMenu.toggleClass('active');
                $(this).toggleClass('active');
            });
            
            // Close mobile menu when clicking on links
            $('.mobile-menu-item').on('click', function() {
                $mobileMenu.removeClass('active');
                $mobileToggle.removeClass('active');
            });
            
            // Close mobile menu when clicking outside
            $(document).on('click', function(e) {
                if (!$mobileMenu.is(e.target) && 
                    !$mobileMenu.has(e.target).length && 
                    !$mobileToggle.is(e.target) && 
                    !$mobileToggle.has(e.target).length) {
                    $mobileMenu.removeClass('active');
                    $mobileToggle.removeClass('active');
                }
            });
        }
    }

    /**
     * Scroll-triggered Animations
     */
    function initScrollAnimations() {
        if (typeof IntersectionObserver === 'undefined') {
            // Fallback for older browsers
            $('.fade-in-up, .fade-in-left, .fade-in-right').addClass('animated');
            return;
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Contact Form Handling
     */
    function initContactForms() {
        // Main contact form
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            submitContactForm(this, '#form-message');
        });

        // Quick contact forms
        $('#quick-contact-form').on('submit', function(e) {
            e.preventDefault();
            submitContactForm(this, '#quick-form-message');
        });
    }

    /**
     * Submit Contact Form via AJAX
     */
    function submitContactForm(form, messageContainer) {
        const $form = $(form);
        const $messageDiv = $(messageContainer);
        const $submitButton = $form.find('button[type="submit"]');
        const originalText = $submitButton.text();

        // Disable submit button and show loading state
        $submitButton.text('SENDING...').prop('disabled', true);
        $messageDiv.empty();

        // Prepare form data
        const formData = new FormData(form);
        formData.append('action', 'contact_form');
        formData.append('nonce', irl_ajax.nonce);

        // Submit form
        $.ajax({
            url: irl_ajax.ajax_url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    $messageDiv.html('<div class="message message-success">' + response.message + '</div>');
                    $form[0].reset();
                    
                    // Scroll to message
                    $('html, body').animate({
                        scrollTop: $messageDiv.offset().top - 100
                    }, 500);
                } else {
                    $messageDiv.html('<div class="message message-error">' + response.message + '</div>');
                }
            },
            error: function(xhr, status, error) {
                console.error('Contact form error:', error);
                $messageDiv.html('<div class="message message-error">Sorry, there was an error sending your message. Please try again or contact us directly.</div>');
            },
            complete: function() {
                // Re-enable submit button
                $submitButton.text(originalText).prop('disabled', false);
            }
        });
    }

    /**
     * Program Category Filters
     */
    function initProgramFilters() {
        $('.filter-btn').on('click', function(e) {
            e.preventDefault();
            
            const category = $(this).data('category');
            const $filterButtons = $('.filter-btn');
            const $programCategories = $('.program-category');
            
            // Update active button
            $filterButtons.removeClass('active');
            $(this).addClass('active');
            
            // Show/hide program categories with animation
            $programCategories.each(function() {
                const $section = $(this);
                const sectionCategory = $section.data('category');
                
                if (category === 'all' || sectionCategory === category) {
                    $section.fadeIn(300).removeClass('hidden');
                } else {
                    $section.fadeOut(300, function() {
                        $(this).addClass('hidden');
                    });
                }
            });
        });
    }

    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 600, 'swing');
            }
        });
    }

    /**
     * Parallax Effects for Background Elements
     */
    function initParallaxEffects() {
        $(window).on('scroll', function() {
            const scrolled = $(this).scrollTop();
            const rate = scrolled * -0.5;
            
            // Apply parallax to background elements
            $('.grid-background').css('transform', 'translateY(' + rate + 'px)');
        });
    }

    /**
     * Enhanced Neon Effects
     */
    function initNeonEffects() {
        // Add random flicker delays to neon text elements
        $('.neon-text').each(function(index) {
            const delay = Math.random() * 2; // Random delay between 0-2 seconds
            $(this).css('animation-delay', delay + 's');
        });

        // Hover effects for neon borders
        $('.neon-border').on('mouseenter', function() {
            $(this).addClass('neon-hover');
        }).on('mouseleave', function() {
            $(this).removeClass('neon-hover');
        });

        // Pulsing effect for CTA buttons
        $('.futuristic-btn').each(function() {
            const $button = $(this);
            setInterval(function() {
                $button.addClass('pulse-glow');
                setTimeout(function() {
                    $button.removeClass('pulse-glow');
                }, 1000);
            }, 5000 + Math.random() * 3000); // Random interval between 5-8 seconds
        });
    }

    /**
     * Loading Animation for Dynamic Content
     */
    function showLoadingSpinner(container) {
        $(container).html('<div class="loading-spinner"></div>');
    }

    function hideLoadingSpinner(container) {
        $(container).find('.loading-spinner').remove();
    }

    /**
     * Form Validation Helper
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\+]?[1-9][\d]{0,15}$/;
        return re.test(phone.replace(/[\s\(\)\-\.]/g, ''));
    }

    /**
     * Utility Functions
     */
    
    // Debounce function for performance
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            
            if (callNow) func.apply(context, args);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Page-specific Initializations
     */
    
    // Programs archive page
    if ($('body').hasClass('post-type-archive-irl_program')) {
        initProgramArchiveFeatures();
    }
    
    // Services archive page
    if ($('body').hasClass('post-type-archive-irl_service')) {
        initServiceArchiveFeatures();
    }
    
    // Single program page
    if ($('body').hasClass('single-irl_program')) {
        initSingleProgramFeatures();
    }
    
    // Single service page
    if ($('body').hasClass('single-irl_service')) {
        initSingleServiceFeatures();
    }

    /**
     * Program Archive Features
     */
    function initProgramArchiveFeatures() {
        // Add masonry layout for program cards
        if (typeof Masonry !== 'undefined') {
            $('.programs-grid').masonry({
                itemSelector: '.program-card',
                gutter: 20,
                fitWidth: true
            });
        }
    }

    /**
     * Service Archive Features
     */
    function initServiceArchiveFeatures() {
        // Add stagger animation to service cards
        $('.service-card').each(function(index) {
            const $card = $(this);
            setTimeout(function() {
                $card.addClass('fade-in-up animated');
            }, index * 100);
        });
    }

    /**
     * Single Program Features
     */
    function initSingleProgramFeatures() {
        // Program image gallery
        if ($('.program-gallery').length) {
            initImageGallery('.program-gallery');
        }
        
        // Related programs carousel
        if ($('.related-programs').length) {
            initRelatedProgramsCarousel();
        }
    }

    /**
     * Single Service Features
     */
    function initSingleServiceFeatures() {
        // Service features animation
        $('.service-feature').each(function(index) {
            const $feature = $(this);
            setTimeout(function() {
                $feature.addClass('fade-in-left animated');
            }, index * 150);
        });
    }

    /**
     * Image Gallery
     */
    function initImageGallery(selector) {
        $(selector).on('click', 'img', function() {
            const src = $(this).attr('src');
            const alt = $(this).attr('alt');
            
            // Create modal
            const modal = $('<div class="image-modal">').html(
                '<div class="modal-backdrop"></div>' +
                '<div class="modal-content">' +
                    '<img src="' + src + '" alt="' + alt + '">' +
                    '<button class="modal-close">×</button>' +
                '</div>'
            );
            
            $('body').append(modal);
            modal.fadeIn(300);
            
            // Close modal
            modal.on('click', '.modal-close, .modal-backdrop', function() {
                modal.fadeOut(300, function() {
                    $(this).remove();
                });
            });
        });
    }

    /**
     * Related Programs Carousel
     */
    function initRelatedProgramsCarousel() {
        $('.related-programs').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    /**
     * Performance Monitoring
     */
    function logPerformance(eventName, startTime) {
        if (performance && performance.mark) {
            performance.mark(eventName + '-end');
            performance.measure(eventName, eventName + '-start', eventName + '-end');
            
            const measure = performance.getEntriesByName(eventName)[0];
            console.log(eventName + ' took ' + measure.duration + ' milliseconds');
        }
    }

    /**
     * Error Handling
     */
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', {
            message: e.message,
            source: e.filename,
            line: e.lineno,
            column: e.colno,
            error: e.error
        });
        
        // Optionally send error to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                'description': e.message,
                'fatal': false
            });
        }
    });

    /**
     * Accessibility Enhancements
     */
    function initAccessibilityFeatures() {
        // Focus management for mobile menu
        $('#mobile-menu-toggle').on('keydown', function(e) {
            if (e.keyCode === 13 || e.keyCode === 32) { // Enter or Space
                e.preventDefault();
                $(this).click();
            }
        });
        
        // Skip to main content link
        $('body').prepend('<a href="#main" class="skip-link">Skip to main content</a>');
        
        // High contrast mode detection
        if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
            $('body').addClass('high-contrast');
        }
        
        // Reduced motion detection
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            $('body').addClass('reduced-motion');
            // Disable animations for users who prefer reduced motion
            $('.fade-in-up, .fade-in-left, .fade-in-right').addClass('animated');
        }
    }

    // Initialize accessibility features
    initAccessibilityFeatures();

    /**
     * Funnel Tracking Function
     * Tracks user selections in the funnel flow
     */
    function irlTrackEvent(eventType, pageName, selection) {
        // Console log for debugging
        console.log('IRL Event Tracked:', {
            eventType: eventType,
            pageName: pageName,
            selection: selection,
            timestamp: new Date().toISOString(),
            url: window.location.href
        });

        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', eventType, {
                'event_category': 'funnel',
                'event_label': pageName + ' - ' + selection,
                'custom_parameter': selection
            });
        }

        // Send to Facebook Pixel if available
        if (typeof fbq !== 'undefined') {
            fbq('track', 'CustomEvent', {
                event_type: eventType,
                page_name: pageName,
                selection: selection
            });
        }

        // Store in localStorage for session tracking
        const trackingData = {
            eventType: eventType,
            pageName: pageName,
            selection: selection,
            timestamp: new Date().toISOString(),
            sessionId: getSessionId()
        };

        // Get existing tracking data
        let existingData = localStorage.getItem('irl_tracking_data');
        if (existingData) {
            existingData = JSON.parse(existingData);
        } else {
            existingData = [];
        }

        // Add new tracking data
        existingData.push(trackingData);

        // Keep only last 50 events to prevent localStorage overflow
        if (existingData.length > 50) {
            existingData = existingData.slice(-50);
        }

        // Save back to localStorage
        localStorage.setItem('irl_tracking_data', JSON.stringify(existingData));

        // Send to server via AJAX if needed
        if (typeof irl_ajax !== 'undefined') {
            $.ajax({
                url: irl_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'irl_track_event',
                    nonce: irl_ajax.nonce,
                    event_type: eventType,
                    page_name: pageName,
                    selection: selection
                },
                success: function(response) {
                    console.log('Event tracked successfully');
                },
                error: function(xhr, status, error) {
                    console.log('Event tracking failed:', error);
                }
            });
        }
    }

    /**
     * Generate or retrieve session ID
     */
    function getSessionId() {
        let sessionId = localStorage.getItem('irl_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('irl_session_id', sessionId);
        }
        return sessionId;
    }

})(jQuery);

/**
 * Vanilla JavaScript for critical functionality
 * (in case jQuery fails to load)
 */
document.addEventListener('DOMContentLoaded', function() {
    // Basic mobile menu fallback
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Basic form validation fallback
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const message = this.querySelector('[name="message"]').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return false;
            }
        });
    }
});