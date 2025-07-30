<?php get_header(); ?>

<div class="container mx-auto px-6 py-12">
    <!-- Programs Archive Header -->
    <div class="page-hero">
        <div class="page-hero-content">
            <h1 class="page-title neon-text fade-in-up">ALL PROGRAMS</h1>
            <p class="page-subtitle fade-in-up">
                Discover our comprehensive collection of interactive event experiences
            </p>
        </div>
    </div>

    <!-- Program Categories Filter -->
    <div class="max-w-4xl mx-auto mb-12 fade-in-up">
        <div class="flex flex-wrap justify-center gap-4">
            <button class="filter-btn active" data-category="all">All Programs</button>
            <button class="filter-btn" data-category="top">Top Programs</button>
            <button class="filter-btn" data-category="business">Business Programs</button>
            <button class="filter-btn" data-category="specialty">Specialty Programs</button>
        </div>
    </div>

    <!-- Programs Grid -->
    <div class="max-w-7xl mx-auto">
        <?php if (have_posts()) : ?>
            <!-- Top Programs Section -->
            <?php
            $top_programs = get_posts(array(
                'post_type' => 'irl_program',
                'posts_per_page' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'program_category',
                        'value' => 'top',
                        'compare' => '='
                    ),
                ),
            ));
            
            if ($top_programs) :
            ?>
                <div class="mb-16 program-category" data-category="top">
                    <h2 class="text-3xl font-bold text-white mb-2 text-center neon-text fade-in-up">
                        TOP PROGRAMS
                    </h2>
                    <p class="text-irl-cyan text-center mb-8 fade-in-up">
                        Our most popular and engaging event experiences
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <?php foreach ($top_programs as $program) : 
                            setup_postdata($program);
                            $program_tagline = get_field('program_tagline', $program->ID);
                        ?>
                            <article class="program-card hover-scale fade-in-up" data-category="top all">
                                <a href="<?php echo get_permalink($program->ID); ?>" class="block">
                                    <?php if (has_post_thumbnail($program->ID)) : ?>
                                        <div class="aspect-square overflow-hidden">
                                            <?php echo get_the_post_thumbnail($program->ID, 'program-thumb', array('class' => 'w-full h-full object-cover')); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="program-card-content">
                                        <h3 class="program-card-title"><?php echo get_the_title($program->ID); ?></h3>
                                        <?php if ($program_tagline) : ?>
                                            <div class="program-card-tagline"><?php echo esc_html($program_tagline); ?></div>
                                        <?php endif; ?>
                                        <div class="text-sm text-irl-gray-light mt-2">
                                            <?php echo wp_trim_words(get_the_excerpt($program->ID), 15); ?>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        <?php endforeach; ?>
                    </div>
                    <?php wp_reset_postdata(); ?>
                </div>
            <?php endif; ?>

            <!-- Business Programs Section -->
            <?php
            $business_programs = get_posts(array(
                'post_type' => 'irl_program',
                'posts_per_page' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'program_category',
                        'value' => 'business',
                        'compare' => '='
                    ),
                ),
            ));
            
            if ($business_programs) :
            ?>
                <div class="mb-16 program-category" data-category="business">
                    <h2 class="text-3xl font-bold text-white mb-2 text-center neon-text fade-in-up">
                        FEATURED BUSINESS PROGRAMS
                    </h2>
                    <p class="text-irl-cyan text-center mb-8 fade-in-up">
                        Professional networking and corporate team building experiences
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <?php foreach ($business_programs as $program) : 
                            setup_postdata($program);
                            $program_tagline = get_field('program_tagline', $program->ID);
                        ?>
                            <article class="program-card hover-scale fade-in-up" data-category="business all">
                                <a href="<?php echo get_permalink($program->ID); ?>" class="block">
                                    <?php if (has_post_thumbnail($program->ID)) : ?>
                                        <div class="aspect-[4/3] overflow-hidden">
                                            <?php echo get_the_post_thumbnail($program->ID, 'program-large', array('class' => 'w-full h-full object-cover')); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="program-card-content">
                                        <h3 class="program-card-title"><?php echo get_the_title($program->ID); ?></h3>
                                        <?php if ($program_tagline) : ?>
                                            <div class="program-card-tagline"><?php echo esc_html($program_tagline); ?></div>
                                        <?php endif; ?>
                                        <div class="text-sm text-irl-gray-light mt-2">
                                            <?php echo wp_trim_words(get_the_excerpt($program->ID), 20); ?>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        <?php endforeach; ?>
                    </div>
                    <?php wp_reset_postdata(); ?>
                </div>
            <?php endif; ?>

            <!-- Specialty Programs Section -->
            <?php
            $specialty_programs = get_posts(array(
                'post_type' => 'irl_program',
                'posts_per_page' => -1,
                'meta_query' => array(
                    array(
                        'key' => 'program_category',
                        'value' => 'specialty',
                        'compare' => '='
                    ),
                ),
            ));
            
            if ($specialty_programs) :
            ?>
                <div class="mb-16 program-category" data-category="specialty">
                    <h2 class="text-3xl font-bold text-white mb-2 text-center neon-text fade-in-up">
                        OTHER SPECIALTY PROGRAMS
                    </h2>
                    <p class="text-irl-cyan text-center mb-8 fade-in-up">
                        Unique and specialized event experiences for specific occasions
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <?php foreach ($specialty_programs as $program) : 
                            setup_postdata($program);
                            $program_tagline = get_field('program_tagline', $program->ID);
                        ?>
                            <article class="program-card hover-scale fade-in-up" data-category="specialty all">
                                <a href="<?php echo get_permalink($program->ID); ?>" class="block">
                                    <?php if (has_post_thumbnail($program->ID)) : ?>
                                        <div class="aspect-[4/3] overflow-hidden">
                                            <?php echo get_the_post_thumbnail($program->ID, 'program-large', array('class' => 'w-full h-full object-cover')); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="program-card-content">
                                        <h3 class="program-card-title"><?php echo get_the_title($program->ID); ?></h3>
                                        <?php if ($program_tagline) : ?>
                                            <div class="program-card-tagline"><?php echo esc_html($program_tagline); ?></div>
                                        <?php endif; ?>
                                        <div class="text-sm text-irl-gray-light mt-2">
                                            <?php echo wp_trim_words(get_the_excerpt($program->ID), 20); ?>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        <?php endforeach; ?>
                    </div>
                    <?php wp_reset_postdata(); ?>
                </div>
            <?php endif; ?>

        <?php else : ?>
            <!-- No Programs Found -->
            <div class="text-center py-16">
                <div class="bg-black/40 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-12">
                    <h2 class="text-3xl font-bold text-white mb-4">No Programs Found</h2>
                    <p class="text-irl-gray-light text-lg mb-8">
                        We're currently updating our program offerings. Please check back soon or contact us directly.
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

<!-- Programs Features Section -->
<div class="bg-black/80 py-16 mt-16">
    <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
            <h3 class="text-3xl font-bold text-white text-center mb-4 neon-text fade-in-up">
                What's Included in Every Program
            </h3>
            <p class="text-irl-cyan text-center text-lg mb-12 fade-in-up">
                DJ | HOSTS | GAMES | BANDS & MORE!
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center fade-in-up">
                    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-irl-cyan to-irl-blue rounded-full flex items-center justify-center">
                        <span class="text-3xl">🎵</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Professional DJ</h4>
                    <p class="text-irl-gray-light text-sm">
                        High-quality sound system and music tailored to your event atmosphere.
                    </p>
                </div>
                
                <div class="text-center fade-in-up">
                    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-irl-purple to-irl-pink rounded-full flex items-center justify-center">
                        <span class="text-3xl">🎤</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Expert Hosts</h4>
                    <p class="text-irl-gray-light text-sm">
                        Experienced emcees who keep energy high and guests engaged throughout.
                    </p>
                </div>
                
                <div class="text-center fade-in-up">
                    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-irl-green to-irl-cyan rounded-full flex items-center justify-center">
                        <span class="text-3xl">🎮</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Interactive Games</h4>
                    <p class="text-irl-gray-light text-sm">
                        Custom games and activities designed for maximum participation and fun.
                    </p>
                </div>
                
                <div class="text-center fade-in-up">
                    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-irl-pink to-irl-purple rounded-full flex items-center justify-center">
                        <span class="text-3xl">🎭</span>
                    </div>
                    <h4 class="text-xl font-semibold text-white mb-2">Live Entertainment</h4>
                    <p class="text-irl-gray-light text-sm">
                        Professional performers and bands to create unforgettable moments.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Call to Action Section -->
<div class="container mx-auto px-6 py-16">
    <div class="max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-sm border border-irl-cyan/30 rounded-lg p-12 fade-in-up">
        <h3 class="text-4xl font-bold text-white mb-4 neon-text">
            Ready to Create Your Event?
        </h3>
        <p class="text-irl-gray-light text-lg mb-8">
            Let's discuss your vision and create a custom program that exceeds your expectations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" 
               class="futuristic-btn hover-scale">
                GET CUSTOM QUOTE
            </a>
            <a href="<?php echo get_post_type_archive_link('irl_service'); ?>" 
               class="bg-transparent border-2 border-irl-cyan text-irl-cyan hover:bg-irl-cyan hover:text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-block">
                VIEW SERVICES
            </a>
        </div>
    </div>
</div>

<style>
.filter-btn {
    @apply px-6 py-3 bg-black/40 border border-irl-cyan/30 text-irl-cyan rounded-full font-semibold transition-all duration-300 hover:border-irl-cyan hover:bg-black/60;
}

.filter-btn.active {
    @apply bg-irl-cyan text-black border-irl-cyan;
}

.program-category {
    display: block;
}

.program-category.hidden {
    display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Program Category Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const programCategories = document.querySelectorAll('.program-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide program categories
            programCategories.forEach(section => {
                const sectionCategory = section.getAttribute('data-category');
                if (category === 'all' || sectionCategory === category) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});
</script>

<?php get_footer(); ?>