<?php get_header(); ?>

<div class="container mx-auto px-6 py-12">
    <!-- Services Archive Header -->
    <div class="page-hero">
        <div class="page-hero-content">
            <h1 class="page-title neon-text fade-in-up">OUR SERVICES</h1>
            <p class="page-subtitle fade-in-up">
                Transform your events with our innovative interactive experiences
            </p>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="max-w-6xl mx-auto">
        <?php if (have_posts()) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <?php 
                $service_icons = array('🏥', '🍴', '👤', '🎯', '🚀', '⭐');
                $icon_index = 0;
                
                while (have_posts()) : the_post(); 
                    $service_color = get_field('service_color') ?: '#00FFFF';
                    $service_features = get_field('service_features');
                ?>
                    <article class="service-card hover-scale fade-in-up">
                        <a href="<?php the_permalink(); ?>" class="block">
                            <!-- Service Icon -->
                            <div class="service-icon" style="background: linear-gradient(45deg, <?php echo esc_attr($service_color); ?>, #8B5CF6);">
                                <?php 
                                if (has_post_thumbnail()) :
                                    the_post_thumbnail('thumbnail', array('class' => 'w-8 h-8 rounded-full object-cover'));
                                else :
                                    echo $service_icons[$icon_index % count($service_icons)];
                                endif;
                                ?>
                            </div>
                            
                            <!-- Service Title -->
                            <h2 class="service-title"><?php the_title(); ?></h2>
                            
                            <!-- Service Description -->
                            <div class="service-description">
                                <?php 
                                if (has_excerpt()) :
                                    the_excerpt();
                                else :
                                    echo wp_trim_words(get_the_content(), 20, '...');
                                endif;
                                ?>
                            </div>
                            
                            <!-- Service Features Preview -->
                            <?php if ($service_features && is_array($service_features)) : ?>
                                <div class="mt-4 text-sm text-irl-cyan">
                                    <?php 
                                    $preview_features = array_slice($service_features, 0, 2);
                                    foreach ($preview_features as $feature) :
                                        if (isset($feature['feature_text'])) :
                                    ?>
                                        <div class="mb-1">• <?php echo esc_html($feature['feature_text']); ?></div>
                                    <?php 
                                        endif;
                                    endforeach;
                                    if (count($service_features) > 2) :
                                    ?>
                                        <div class="text-white font-semibold">+ <?php echo count($service_features) - 2; ?> more...</div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                            
                            <!-- Learn More Button -->
                            <div class="mt-6">
                                <span class="inline-block bg-irl-cyan text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors">
                                    Learn More →
                                </span>
                            </div>
                        </a>
                    </article>
                <?php 
                    $icon_index++;
                endwhile; 
                ?>
            </div>
            
            <!-- Call to Action Section -->
            <div class="text-center bg-black/60 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-12 fade-in-up">
                <h3 class="text-3xl font-bold text-white mb-4 neon-text">
                    Ready to Transform Your Event?
                </h3>
                <p class="text-irl-gray-light text-lg mb-8 max-w-2xl mx-auto">
                    Let us create an unforgettable experience tailored to your specific needs. 
                    Contact us today for a custom quote.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
                       class="futuristic-btn hover-scale">
                        GET CUSTOM QUOTE
                    </a>
                    <a href="<?php echo get_post_type_archive_link('irl_program'); ?>" 
                       class="bg-transparent border-2 border-irl-cyan text-irl-cyan hover:bg-irl-cyan hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-block">
                        VIEW ALL PROGRAMS
                    </a>
                </div>
            </div>
            
        <?php else : ?>
            <!-- No Services Found -->
            <div class="text-center py-16">
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-12">
                    <h2 class="text-3xl font-bold text-white mb-4">No Services Found</h2>
                    <p class="text-irl-gray-light text-lg mb-8">
                        We're currently updating our services. Please check back soon or contact us directly.
                    </p>
                    <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
                       class="futuristic-btn hover-scale">
                        CONTACT US
                    </a>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>

<!-- Service Categories Section -->
<div class="bg-black/80 py-16 mt-16">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h3 class="text-2xl font-bold text-white mb-8 fade-in-up">
                What Makes Our Services Different?
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="fade-in-up">
                    <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-irl-cyan to-irl-blue rounded-full flex items-center justify-center">
                        <span class="text-2xl">🎯</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Customized Approach</h4>
                    <p class="text-irl-gray-light">
                        Every event is unique. We tailor our services to match your specific goals and audience.
                    </p>
                </div>
                
                <div class="fade-in-up">
                    <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-irl-purple to-irl-pink rounded-full flex items-center justify-center">
                        <span class="text-2xl">⚡</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Interactive Technology</h4>
                    <p class="text-irl-gray-light">
                        Cutting-edge interactive elements that engage participants and create memorable experiences.
                    </p>
                </div>
                
                <div class="fade-in-up">
                    <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-irl-green to-irl-cyan rounded-full flex items-center justify-center">
                        <span class="text-2xl">🏆</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Proven Results</h4>
                    <p class="text-irl-gray-light">
                        Track record of successful events that exceed expectations and deliver measurable outcomes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>