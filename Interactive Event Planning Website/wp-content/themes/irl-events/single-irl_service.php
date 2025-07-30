<?php get_header(); ?>

<?php while (have_posts()) : the_post(); 
    $service_color = get_field('service_color') ?: '#00FFFF';
    $service_features = get_field('service_features');
?>

<div class="container mx-auto px-6 py-12">
    <!-- Service Hero Section -->
    <div class="page-hero">
        <div class="page-hero-content">
            <h1 class="page-title neon-text fade-in-up" style="color: <?php echo esc_attr($service_color); ?>;">
                <?php the_title(); ?>
            </h1>
            <?php if (has_excerpt()) : ?>
                <p class="page-subtitle fade-in-up">
                    <?php the_excerpt(); ?>
                </p>
            <?php endif; ?>
        </div>
    </div>

    <!-- Service Content -->
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2">
                <!-- Featured Image -->
                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-8 fade-in-up">
                        <div class="relative overflow-hidden rounded-lg neon-border">
                            <?php the_post_thumbnail('large', array('class' => 'w-full h-80 object-cover')); ?>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </div>
                <?php endif; ?>

                <!-- Service Description -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 mb-8 fade-in-up">
                    <div class="prose prose-invert prose-lg max-w-none">
                        <div class="text-irl-gray-light leading-relaxed">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>

                <!-- Service Features -->
                <?php if ($service_features && is_array($service_features)) : ?>
                    <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-8 mb-8 fade-in-up">
                        <h3 class="text-2xl font-bold text-white mb-6 neon-text">
                            What's Included
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <?php foreach ($service_features as $feature) : 
                                if (isset($feature['feature_text'])) :
                            ?>
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 rounded-full bg-gradient-to-r from-irl-cyan to-irl-purple flex-shrink-0"></div>
                                    <span class="text-irl-gray-light"><?php echo esc_html($feature['feature_text']); ?></span>
                                </div>
                            <?php 
                                endif;
                            endforeach; 
                            ?>
                        </div>
                    </div>
                <?php endif; ?>

                <!-- Related Programs -->
                <?php
                $related_programs = get_posts(array(
                    'post_type' => 'irl_program',
                    'posts_per_page' => 4,
                    'post__not_in' => array(get_the_ID()),
                ));
                
                if ($related_programs) :
                ?>
                    <div class="fade-in-up">
                        <h3 class="text-2xl font-bold text-white mb-6 neon-text">
                            Related Programs
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <?php foreach ($related_programs as $program) : 
                                setup_postdata($program);
                                $program_tagline = get_field('program_tagline', $program->ID);
                            ?>
                                <a href="<?php echo get_permalink($program->ID); ?>" 
                                   class="program-card hover-scale block">
                                    <?php if (has_post_thumbnail($program->ID)) : ?>
                                        <div class="aspect-[4/3] overflow-hidden">
                                            <?php echo get_the_post_thumbnail($program->ID, 'program-thumb', array('class' => 'w-full h-full object-cover')); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="program-card-content">
                                        <div class="program-card-title"><?php echo get_the_title($program->ID); ?></div>
                                        <?php if ($program_tagline) : ?>
                                            <div class="program-card-tagline"><?php echo esc_html($program_tagline); ?></div>
                                        <?php endif; ?>
                                    </div>
                                </a>
                            <?php endforeach; ?>
                        </div>
                        <?php wp_reset_postdata(); ?>
                    </div>
                <?php endif; ?>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
                <!-- Contact Card -->
                <div class="bg-black/60 backdrop-blur-sm border-2 neon-border rounded-lg p-6 mb-8 fade-in-up sticky top-32">
                    <h4 class="text-xl font-bold text-white mb-4 neon-text">
                        Ready to Get Started?
                    </h4>
                    <p class="text-irl-gray-light mb-6">
                        Contact us today for a personalized consultation and custom quote for your event.
                    </p>
                    
                    <div class="space-y-4 mb-6">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-irl-cyan rounded-full flex items-center justify-center">
                                <span class="text-black font-bold">📞</span>
                            </div>
                            <div>
                                <div class="text-white font-semibold">Call Now</div>
                                <a href="tel:<?php echo esc_attr(str_replace(array(' ', '(', ')', '-'), '', get_theme_mod('irl_phone', '(555) 123-EVENTS'))); ?>" 
                                   class="text-irl-cyan hover:text-white transition-colors">
                                    <?php echo esc_html(get_theme_mod('irl_phone', '(555) 123-EVENTS')); ?>
                                </a>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-irl-cyan rounded-full flex items-center justify-center">
                                <span class="text-black font-bold">✉️</span>
                            </div>
                            <div>
                                <div class="text-white font-semibold">Email Us</div>
                                <a href="mailto:<?php echo esc_attr(get_theme_mod('irl_email', 'info@irlevents.com')); ?>" 
                                   class="text-irl-cyan hover:text-white transition-colors">
                                    <?php echo esc_html(get_theme_mod('irl_email', 'info@irlevents.com')); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
                       class="futuristic-btn w-full text-center block">
                        GET CUSTOM QUOTE
                    </a>
                </div>

                <!-- Quick Contact Form -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-6 fade-in-up">
                    <h4 class="text-lg font-bold text-white mb-4">Quick Inquiry</h4>
                    <form id="quick-contact-form" class="space-y-4">
                        <div>
                            <input type="text" 
                                   name="name" 
                                   placeholder="Your Name" 
                                   required
                                   class="irl-form-input text-sm">
                        </div>
                        <div>
                            <input type="email" 
                                   name="email" 
                                   placeholder="Your Email" 
                                   required
                                   class="irl-form-input text-sm">
                        </div>
                        <div>
                            <input type="tel" 
                                   name="phone" 
                                   placeholder="Phone Number"
                                   class="irl-form-input text-sm">
                        </div>
                        <div>
                            <textarea name="message" 
                                     placeholder="Tell us about your event..."
                                     rows="4"
                                     required
                                     class="irl-form-textarea text-sm"></textarea>
                        </div>
                        <input type="hidden" name="service" value="<?php echo esc_attr(get_the_title()); ?>">
                        <button type="submit" 
                                class="w-full bg-gradient-to-r from-irl-purple to-irl-pink text-white py-3 px-4 rounded-lg font-semibold hover:from-irl-purple/80 hover:to-irl-pink/80 transition-all duration-300 text-sm">
                            SEND INQUIRY
                        </button>
                    </form>
                    <div id="quick-form-message"></div>
                </div>

                <!-- Service Stats -->
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-6 mt-8 fade-in-up">
                    <h4 class="text-lg font-bold text-white mb-4">Why Choose Us?</h4>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-irl-gray-light">Events Completed</span>
                            <span class="text-irl-cyan font-bold">500+</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-irl-gray-light">Client Satisfaction</span>
                            <span class="text-irl-cyan font-bold">99%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-irl-gray-light">Years Experience</span>
                            <span class="text-irl-cyan font-bold">10+</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-irl-gray-light">Repeat Clients</span>
                            <span class="text-irl-cyan font-bold">85%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <div class="max-w-6xl mx-auto mt-16 fade-in-up">
        <div class="flex flex-col sm:flex-row justify-between items-center bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-6">
            <div class="mb-4 sm:mb-0">
                <?php
                $prev_post = get_previous_post(true, '', 'irl_service');
                if ($prev_post) :
                ?>
                    <a href="<?php echo get_permalink($prev_post->ID); ?>" 
                       class="text-irl-cyan hover:text-white transition-colors flex items-center space-x-2">
                        <span>←</span>
                        <span><?php echo get_the_title($prev_post->ID); ?></span>
                    </a>
                <?php endif; ?>
            </div>
            
            <a href="<?php echo get_post_type_archive_link('irl_service'); ?>" 
               class="text-white hover:text-irl-cyan transition-colors font-semibold">
                All Services
            </a>
            
            <div class="mt-4 sm:mt-0">
                <?php
                $next_post = get_next_post(true, '', 'irl_service');
                if ($next_post) :
                ?>
                    <a href="<?php echo get_permalink($next_post->ID); ?>" 
                       class="text-irl-cyan hover:text-white transition-colors flex items-center space-x-2">
                        <span><?php echo get_the_title($next_post->ID); ?></span>
                        <span>→</span>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const quickForm = document.getElementById('quick-contact-form');
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            formData.append('action', 'contact_form');
            formData.append('nonce', irl_ajax.nonce);
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'SENDING...';
            submitButton.disabled = true;
            
            fetch(irl_ajax.ajax_url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const messageDiv = document.getElementById('quick-form-message');
                if (data.success) {
                    messageDiv.innerHTML = '<div class="message message-success mt-4">' + data.message + '</div>';
                    quickForm.reset();
                } else {
                    messageDiv.innerHTML = '<div class="message message-error mt-4">' + data.message + '</div>';
                }
                
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                const messageDiv = document.getElementById('quick-form-message');
                messageDiv.innerHTML = '<div class="message message-error mt-4">Sorry, there was an error. Please try again.</div>';
                
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});
</script>

<?php endwhile; ?>

<?php get_footer(); ?>