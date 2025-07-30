<?php
/**
 * The main template file - Homepage
 * 
 * @package IRL_Events
 */

get_header(); ?>

<div class="irl-homepage">
    <!-- Main Heading -->
    <div class="irl-mb-8">
        <h1 class="irl-hero-title">
            OUTSIDE-THE-BOX<br>
            EVENTS IN A BOX
        </h1>
        <div class="irl-hero-subtitle">
            <p>WE HAVE EVENTS TO MAKE ANY OCCASION</p>
            <p>ONE YOUR GUESTS WILL NEVER FORGET!</p>
        </div>
    </div>

    <!-- WHO ARE YOU Section -->
    <div class="irl-mb-12">
        <h2 class="irl-section-title">WHO ARE YOU?</h2>
        <p class="irl-section-subtitle">SELECT YOUR EXPERIENCE</p>
        
        <!-- Service Categories -->
        <div class="irl-service-grid">
            <!-- Corporate Healthcare -->
            <a href="<?php echo home_url('/workplace-start/'); ?>" class="irl-service-button">
                <div class="irl-service-icon">
                    <?php 
                    $corporate_icon = get_template_directory_uri() . '/assets/images/corporate-icon.png';
                    if (file_exists(get_template_directory() . '/assets/images/corporate-icon.png')):
                    ?>
                        <img src="<?php echo esc_url($corporate_icon); ?>" alt="Corporate Healthcare - Meeting Icon" />
                    <?php else: ?>
                        <div style="font-size: 3rem;">🧠</div>
                    <?php endif; ?>
                </div>
                <div class="irl-service-title">
                    <div>CORPORATE</div>
                    <div>HEALTHCARE</div>
                </div>
            </a>

            <!-- Restaurant Venue -->
            <a href="<?php echo home_url('/restaurant-start/'); ?>" class="irl-service-button">
                <div class="irl-service-icon">
                    <?php 
                    $restaurant_icon = get_template_directory_uri() . '/assets/images/restaurant-icon.png';
                    if (file_exists(get_template_directory() . '/assets/images/restaurant-icon.png')):
                    ?>
                        <img src="<?php echo esc_url($restaurant_icon); ?>" alt="Restaurant Venue - Fork and Knife" />
                    <?php else: ?>
                        <div style="font-size: 3rem;">🍽️</div>
                    <?php endif; ?>
                </div>
                <div class="irl-service-title">
                    <div>RESTAURANT</div>
                    <div>VENUE</div>
                </div>
            </a>

            <!-- Private Event -->
            <a href="<?php echo home_url('/private-event-start/'); ?>" class="irl-service-button">
                <div class="irl-service-icon">
                    <?php 
                    $private_icon = get_template_directory_uri() . '/assets/images/private-event-icon.png';
                    if (file_exists(get_template_directory() . '/assets/images/private-event-icon.png')):
                    ?>
                        <img src="<?php echo esc_url($private_icon); ?>" alt="Private Event - Person Icon" />
                    <?php else: ?>
                        <div style="font-size: 3rem;">🎉</div>
                    <?php endif; ?>
                </div>
                <div class="irl-service-title">
                    <div>PRIVATE</div>
                    <div>EVENT</div>
                </div>
            </a>
        </div>

        <!-- See Full Menu Button -->
        <a href="<?php echo home_url('/custom-quote/'); ?>" class="irl-btn irl-btn-primary" style="padding: 1rem 3rem; font-size: 1.125rem;">
            SEE OUR FULL MENU
        </a>
    </div>

    <!-- All Programs Section -->
    <div class="irl-programs-section">
        <h2 class="irl-section-title irl-mb-8">ALL PROGRAMS</h2>
        
        <!-- Top 4 Programs -->
        <div class="irl-program-category">
            <h3 class="irl-program-category-title">TOP PROGRAMS</h3>
            <div class="irl-program-grid">
                <?php
                $top_programs = irl_events_get_programs('top');
                if ($top_programs):
                    foreach ($top_programs as $program):
                        $thumbnail = get_the_post_thumbnail_url($program->ID, 'large');
                        $tagline = get_post_meta($program->ID, '_program_tagline', true);
                ?>
                    <a href="<?php echo get_permalink($program->ID); ?>" class="irl-program-card">
                        <div class="irl-program-image">
                            <?php if ($thumbnail): ?>
                                <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr($program->post_title); ?>" />
                            <?php endif; ?>
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program->post_title); ?></div>
                            <?php if ($tagline): ?>
                                <div class="irl-program-tagline"><?php echo esc_html($tagline); ?></div>
                            <?php endif; ?>
                        </div>
                    </a>
                <?php
                    endforeach;
                else:
                    // Fallback static programs if none exist in database
                    $static_programs = array(
                        array('title' => 'GSNL', 'tagline' => 'FUN | FUN | FANTASTIC PRIZES', 'image' => 'gsnl.jpg'),
                        array('title' => 'BADA BRUNCH', 'tagline' => 'THEMED EVENTS & PRIVATE PARTIES', 'image' => 'brunch.jpg'),
                        array('title' => 'HYBRID EVENTS', 'tagline' => 'NOT JUST A SHOW. AN EXPERIENCE.', 'image' => 'hybrid.jpg'),
                        array('title' => 'WATER COOLER SPORTS', 'tagline' => 'CORPORATE GAME SHOWS & TEAM BUILDING', 'image' => 'watercooler.jpg'),
                    );
                    
                    foreach ($static_programs as $program):
                ?>
                    <a href="<?php echo home_url('/programs/'); ?>" class="irl-program-card">
                        <div class="irl-program-image">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/' . $program['image']; ?>" alt="<?php echo esc_attr($program['title']); ?>" />
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program['title']); ?></div>
                            <div class="irl-program-tagline"><?php echo esc_html($program['tagline']); ?></div>
                        </div>
                    </a>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>

        <!-- Featured Business Programs -->
        <div class="irl-program-category">
            <h3 class="irl-program-category-title">FEATURED BUSINESS PROGRAMS</h3>
            <div class="irl-program-grid-2">
                <?php
                $business_programs = irl_events_get_programs('business');
                if ($business_programs):
                    foreach ($business_programs as $program):
                        $thumbnail = get_the_post_thumbnail_url($program->ID, 'large');
                        $tagline = get_post_meta($program->ID, '_program_tagline', true);
                ?>
                    <a href="<?php echo get_permalink($program->ID); ?>" class="irl-program-card">
                        <div class="irl-program-image" style="aspect-ratio: 4/3;">
                            <?php if ($thumbnail): ?>
                                <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr($program->post_title); ?>" />
                            <?php endif; ?>
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program->post_title); ?></div>
                            <?php if ($tagline): ?>
                                <div class="irl-program-tagline"><?php echo esc_html($tagline); ?></div>
                            <?php endif; ?>
                        </div>
                    </a>
                <?php
                    endforeach;
                else:
                    // Fallback static business programs
                    $static_business = array(
                        array('title' => 'B2B SPEED DATING', 'tagline' => 'BUSINESS NETWORKING EVENTS', 'image' => 'b2b.jpg'),
                        array('title' => 'EVENT FUNNELS WORKSHOP', 'tagline' => 'LEARN TO BUILD SUCCESSFUL EVENT STRATEGIES', 'image' => 'funnels.jpg'),
                    );
                    
                    foreach ($static_business as $program):
                ?>
                    <a href="<?php echo home_url('/programs/'); ?>" class="irl-program-card">
                        <div class="irl-program-image" style="aspect-ratio: 4/3;">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/' . $program['image']; ?>" alt="<?php echo esc_attr($program['title']); ?>" />
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program['title']); ?></div>
                            <div class="irl-program-tagline"><?php echo esc_html($program['tagline']); ?></div>
                        </div>
                    </a>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>

        <!-- Other Specialty Programs -->
        <div class="irl-program-category">
            <h3 class="irl-program-category-title">OTHER SPECIALTY PROGRAMS</h3>
            <div class="irl-program-grid-2">
                <?php
                $specialty_programs = irl_events_get_programs('specialty');
                if ($specialty_programs):
                    foreach ($specialty_programs as $program):
                        $thumbnail = get_the_post_thumbnail_url($program->ID, 'large');
                        $tagline = get_post_meta($program->ID, '_program_tagline', true);
                ?>
                    <a href="<?php echo get_permalink($program->ID); ?>" class="irl-program-card">
                        <div class="irl-program-image" style="aspect-ratio: 4/3;">
                            <?php if ($thumbnail): ?>
                                <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr($program->post_title); ?>" />
                            <?php endif; ?>
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program->post_title); ?></div>
                            <?php if ($tagline): ?>
                                <div class="irl-program-tagline"><?php echo esc_html($tagline); ?></div>
                            <?php endif; ?>
                        </div>
                    </a>
                <?php
                    endforeach;
                else:
                    // Fallback static specialty programs
                    $static_specialty = array(
                        array('title' => 'IRL DIRECT MARKETING', 'tagline' => 'IN-PERSON MARKETING EXPERIENCES', 'image' => 'marketing.jpg'),
                        array('title' => 'WEDDING OUTSIDE THE BOX', 'tagline' => 'ALL-IN-ONE WEDDING PRODUCTION', 'image' => 'wedding.jpg', 'link' => '/wedding-in-a-box/'),
                    );
                    
                    foreach ($static_specialty as $program):
                        $link = isset($program['link']) ? home_url($program['link']) : home_url('/programs/');
                ?>
                    <a href="<?php echo esc_url($link); ?>" class="irl-program-card">
                        <div class="irl-program-image" style="aspect-ratio: 4/3;">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/' . $program['image']; ?>" alt="<?php echo esc_attr($program['title']); ?>" />
                        </div>
                        <div class="irl-program-content">
                            <div class="irl-program-title"><?php echo esc_html($program['title']); ?></div>
                            <div class="irl-program-tagline"><?php echo esc_html($program['tagline']); ?></div>
                        </div>
                    </a>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>

        <!-- DJ, Hosts, Games, Bands text -->
        <div class="irl-text-center irl-mb-8">
            <p style="color: white; font-size: 1.125rem; font-weight: 600;">
                DJ | HOSTS | GAMES | BANDS
            </p>
            <p style="color: white; font-size: 1.125rem; font-weight: 600;">
                & MORE!
            </p>
        </div>

        <!-- Action Buttons -->
        <div class="irl-text-center">
            <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
                <a href="<?php echo home_url('/custom-quote/'); ?>" class="irl-btn irl-btn-primary" style="padding: 1rem 3rem; font-size: 1.125rem;">
                    CUSTOM QUOTE
                </a>
                <a href="<?php echo home_url('/gallery/'); ?>" class="irl-btn irl-btn-secondary" style="padding: 1rem 3rem; font-size: 1.125rem;">
                    VIEW GALLERY
                </a>
            </div>
            <p class="irl-section-subtitle" style="font-size: 0.875rem; margin-bottom: 0;">
                Check out our latest events on social media!
            </p>
        </div>
    </div>
</div>

<script>
// Add some interactive behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to program cards
    const programCards = document.querySelectorAll('.irl-program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effects to service buttons
    const serviceButtons = document.querySelectorAll('.irl-service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
</script>

<?php get_footer(); ?>