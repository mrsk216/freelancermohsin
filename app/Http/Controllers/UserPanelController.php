<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserPanelController extends Controller
{
    private function projectData()
    {
        $projectArray = [
            [
                "category" => "fullstack",
                "image" => "assets/images/project/ticketbae.png",
                "name" => "Ticketbae",
                "title" => "A platform for discovering and purchasing event tickets across concerts, sports, and theater.",
                "clientImg" => "assets/images/clients/nickolas.jpg",
                "clientName" => "Nicholas Singh",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "This is the first project we are working on and he has been excellent. He is always trying his best to get the job done to my needs! I am happy to work with him on many more projects.",
                "description" => '
                    <p>I built Ticketbae.com from the ground up as the lead full-stack developer for a Trinidad-based startup. This is the region’s only all-in-one platform that combines low-fee event ticketing, crowdfunding, and virtual race tracking.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: React.js + Tailwind CSS for a fast, mobile-first SPA</li>
                        <li>Backend: Laravel (PHP) with Eloquent ORM</li>
                        <li>Database: MySQL</li>
                        <li>Payments: Stripe + local gateway (WiPay) integration</li>
                        <li>Hosting: AWS with Docker & CI/CD</li>
                    </ul>
                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Complete event creation wizard for organizers</li>
                        <li>Multi-tier ticketing & crowdfunding with real-time progress bars</li>
                        <li>GPS-based virtual race tracking</li>
                        <li>Secure checkout with PCI-compliant payments</li>
                        <li>Organizer dashboard with analytics, attendee management & automated emails</li>
                        <li>Fully responsive design optimized for Caribbean mobile users</li>
                    </ul>
                    <p>A clean, high-performance Laravel + React solution that turned a local idea into the Caribbean’s go-to event platform.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/theimagescientist.jpg",
                "name" => "PIQ Assessment",
                "title" => "A specialized frontend interface for image forensics and quality assessment within The Image Scientist platform.",
                "clientImg" => "assets/images/clients/pankajpanwar.webp",
                "clientName" => "Pankaj Panwar",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Excellent person with great knowledge , hardworking must hire him.",
                "description" => '
                    <p>As the frontend developer for The PIQ module, I crafted an intuitive interface, enabling seamless analysis workflows.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Vanilla JavaScript + HTML5/CSS3 for lightweight, secure file handling</li>
                        <li>Security: .htaccess for restricted access and lazy-loading for performance</li>
                        <li>Design: Responsive layout optimized for desktop analysis sessions</li>
                    </ul>
                    <p>A streamlined frontend solution that prioritizes privacy and efficiency.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/yakuza.png",
                "name" => "Yakuza Origin",
                "title" => "A bold NFT collection landing page on Cardano blockchain with Yakuza-themed storytelling and community-driven DAO features.",
                "clientImg" => "assets/images/clients/user_avatar.jpg",
                "clientName" => "Pupsi",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Delivered on time, very professional.",
                "description" => '
                    <p>I designed and developed the official website for Yakuza Origins — a high-energy Cardano-based NFT project featuring 10,000 unique anime-style Yakuza characters. The site serves as the main hub for the community, mint info, roadmap, and DAO governance.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 5 + custom SCSS for dark cyber-Yakuza aesthetic</li>
                        <li>Interactivity: jQuery for smooth scroll animations, mobile menu, and section reveals</li>
                        <li>Animations: AOS (Animate On Scroll) + custom CSS keyframes for dramatic entrances</li>
                        <li>Responsive: Fully mobile-optimized with off-canvas navigation and touch-friendly gallery</li>
                        <li>Performance: Optimized images, lazy loading, and clean semantic markup</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Striking dark hero section with large Japanese calligraphy and character artwork</li>
                        <li>Lore-rich "Story of Yakuza" section with immersive storytelling</li>
                        <li>Navigation with Team, DAO, Roadmap, and FAQ sections (ready for future content)</li>
                        <li>Fully responsive layout that looks aggressive and polished on all devices</li>
                        <li>Fast-loading, SEO-friendly structure for maximum pre-mint hype</li>
                    </ul>

                    <p>A powerful, atmosphere-driven frontend built with Bootstrap 5 and jQuery that perfectly captures the dangerous and stylish world of Yakuza Origins — helping the project stand out in the competitive Cardano NFT space.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/mirmi.png",
                "name" => "MIRMI – NFT Marketplace & Launchpad",
                "title" => "A high-energy NFT marketplace and minting platform featuring Spartan-themed collectibles, live auctions, and wallet integration.",
                "clientImg" => "assets/images/clients/user_avatar.jpg",
                "clientName" => "Samuel",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "He did excellent work again",
                "description" => '
                    <p>I single-handedly designed and developed the complete frontend for MIRMI – a powerful, modern NFT marketplace and launchpad built for speed, visual impact, and seamless user experience in the competitive Web3 space.</p>

                    <h5>Tech Stack & Libraries</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Bootstrap 5 + custom SCSS for fully responsive, dark-mode design</li>
                        <li>jQuery as the core engine for DOM manipulation and plugin integration</li>
                        <li>Particles.js for immersive animated background effects</li>
                        <li>Swiper.js for smooth carousels and NFT galleries</li>
                        <li>Dropzone.js for drag-and-drop NFT uploads</li>
                        <li>Choices.js for beautiful select dropdowns (collections, categories)</li>
                        <li>MixItUp.js for animated filtering and sorting of NFT cards</li>
                        <li>Line Awesome icon pack for clean, scalable vector icons</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Dynamic hero with Particles.js fire-rain background and animated Spartan warrior</li>
                        <li>Live bidding feed with real-time updates and verified badges</li>
                        <li>Wallet connection modals (Connect Wallet CTA)</li>
                        <li>Advanced NFT filtering & sorting using MixItUp</li>
                        <li>Responsive navigation with sticky header and mobile off-canvas menu</li>
                        <li>Tokenomics, Pools, and Auction sections ready for dynamic content</li>
                        <li>High-performance, animation-rich UI that works flawlessly on mobile & desktop</li>
                    </ul>

                    <p>A visually explosive, plugin-powered frontend that combines Bootstrap 5 with the best modern JavaScript libraries to deliver a premium Web3 experience — perfect for NFT collectors and creators.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/schtandart.png",
                "name" => "Окна Хаус (Okna Haus)",
                "title" => "Professional corporate website for a premium window and balcony glazing company based in Russia.",
                "clientImg" => "assets/images/clients/serhii.webp",
                "clientName" => "Serhii",
                "rating" => [1, 1, 1, 1, 0.5],
                "feedback" => "it was a nice experience with Shekh. Recommended.",
                "description" => '
                    <p>I built the complete corporate website for Окна Хаус — a high-end glazing and construction company — from scratch using pure HTML, CSS, and vanilla JavaScript. No frameworks, no libraries, just clean, lightweight, and lightning-fast code.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Pure HTML5 semantic markup</li>
                        <li>Custom CSS3 with Flexbox & Grid (no Bootstrap)</li>
                        <li>Vanilla JavaScript for all interactions and form handling</li>
                        <li>Mobile-first responsive design</li>
                        <li>Hand-coded animations and smooth scroll behavior</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Fully bilingual navigation (Russian language support)</li>
                        <li>Prominent lead-capture forms with real-time validation</li>
                        <li>Sticky header with dual CTA buttons ("Заявка на замер" & "Заказать расчёт")</li>
                        <li>Elegant hero section with overlay form and measuring tape illustration</li>
                        <li>Icon-based value proposition grid with custom SVG illustrations</li>
                        <li>Fast-loading, SEO-optimized structure with perfect Lighthouse scores</li>
                        <li>Smooth mobile menu and adaptive layouts for all screen sizes</li>
                    </ul>

                    <p>A minimalist yet highly professional frontend built entirely with vanilla technologies — proving that sometimes the cleanest, fastest, and most maintainable solution needs zero dependencies.</p>
                ',
            ],
            [
                "category" => "fullstack",
                "image" => "assets/images/project/padikash.png",
                "name" => "Padikash",
                "title" => "Modern financial solutions platform empowering users in emerging markets with accessible tools for management and insights.",
                "clientImg" => "assets/images/clients/user_avatar.jpg",
                "clientName" => "Lanre T.",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Excelent guy, did a great job. I will certainly be keeping in contact with him for more work in the future.",
                "description" => '
                    <p>As the full-stack developer for Padikash.com, I built an end-to-end agricultural trading platform that connects farmers, traders, and buyers in the paddy market.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: HTML5, CSS3, JavaScript with jQuery</li>
                        <li>Backend: PHP with custom MVC architecture</li>
                        <li>Database: MySQL for agricultural data management</li>
                        <li>Payments: Integrated local payment gateways</li>
                        <li>UI Framework: Bootstrap for responsive design</li>
                    </ul>
                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>User authentication and profile management for farmers and traders</li>
                        <li>Product listing and inventory management system</li>
                        <li>Trading and negotiation platform</li>
                        <li>Order processing and payment integration</li>
                        <li>Admin dashboard for platform management</li>
                        <li>Mobile-responsive design optimized for rural users</li>
                    </ul>
                    <p>A robust agricultural marketplace that digitizes traditional paddy trading processes using PHP and modern web technologies.</p>
                ',
            ],
            [
                "category" => "wordpress",
                "image" => "assets/images/project/titan.png",
                "name" => "Titans Ventures",
                "title" => "Vietnam’s leading incubator platform showcasing team stories, investments, and startup acceleration programs.",
                "clientImg" => "assets/images/clients/user_avatar.jpg",
                "clientName" => "Samuel",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Hes very good at making a website on wordpress",
                "description" => '
                    <p>I designed and implemented the frontend for Titans.Ventures, creating a professional platform for venture capital investments and startup funding.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: WordPress with custom theme development</li>
                        <li>Page Builder: Elementor with custom widgets</li>
                        <li>Styling: Custom CSS with responsive design</li>
                        <li>JavaScript: jQuery for interactive elements</li>
                        <li>Forms: Contact Form 7 with custom styling</li>
                    </ul>
                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Custom WordPress theme from scratch</li>
                        <li>Responsive investment portfolio layouts</li>
                        <li>Startup showcase sections</li>
                        <li>Team member profiles and contact forms</li>
                        <li>SEO-optimized structure and fast loading</li>
                        <li>Professional typography and financial aesthetic</li>
                    </ul>
                    <p>A sophisticated WordPress frontend that builds trust and effectively presents venture capital services.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/lupiya.png",
                "name" => "Lupiya",
                "title" => "Zambia’s neobank for instant loans, bill payments, and digital banking services tailored to everyday users.",
                "clientImg" => "assets/images/clients/user_avatar.jpg",
                "clientName" => "Lanre T.",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "good person as well hardworking and skilled . highly recommend",
                "description" => '
                    <p>I developed the frontend for Lupiya.com, creating a user-friendly financial services platform for loan applications.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: React.js with modern hooks</li>
                        <li>Styling: Tailwind CSS for rapid UI development</li>
                        <li>State Management: React Context API</li>
                        <li>Forms: React Hook Form with validation</li>
                        <li>Routing: React Router for navigation</li>
                    </ul>
                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Multi-step loan application process</li>
                        <li>Responsive financial calculators</li>
                        <li>Secure user dashboard interface</li>
                        <li>Interactive FAQ and help sections</li>
                        <li>Mobile-optimized banking interface</li>
                        <li>Accessible financial forms with Tailwind CSS</li>
                    </ul>
                    <p>A trustworthy React frontend with Tailwind CSS that simplifies financial services for Zambian users.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/mera_laundry.png",
                "name" => "Mera Laundry",
                "title" => "On-demand laundry service app with doorstep pickup, pricing transparency, and quick booking in India.",
                "clientImg" => "assets/images/clients/pankajpanwar.webp",
                "clientName" => "Pankaj Panwar",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "good person as well hardworking and skilled . highly recommend",
                "description" => '
                    <p>I contributed as the frontend developer to MeraLaundry, building a user-friendly interface that streamlines booking and showcases services with engaging visuals and clear CTAs.</p>
                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: HTML5/CSS3 + jQuery for smooth interactions</li>
                        <li>UI Elements: Emoji-enhanced cards and numbered step flows</li>
                        <li>Forms: AJAX-powered "Book Now" modals</li>
                        <li>Responsive: Bootstrap for mobile-optimized service selection</li>
                    </ul>
                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Transparent pricing grids with service breakdowns</li>
                        <li>4-step order process visualization</li>
                        <li>Testimonials and FAQ sections with accordion toggles</li>
                        <li>Doorstep booking interface with real-time availability</li>
                        <li>Visual emojis and badges for enhanced scannability</li>
                    </ul>
                    <p>A convenient frontend that makes laundry effortless, serving 5L+ customers across 10+ cities with free pick-and-drop magic.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/optimize-foundation.png",
                "name" => "Optimizm Foundation",
                "title" => "A professional program website for building high-value skillsets in men.",
                "clientImg" => "assets/images/clients/jaderuwhiu.webp",
                "clientName" => "Jade Ruwhiu",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Thanks for great work",
                "description" => '
                    <p>I developed the frontend of the Optimizm Foundation website — a modern, professional platform that highlights their mission of transforming men with high-value personal and career skillsets.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 4 for layout, grid, and responsive components</li>
                        <li>Scripting: jQuery for UI interactions, animations, and dynamic content</li>
                        <li>Design System: Custom color themes, icon layout, and flexible card UI</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Hero section with bold messaging and CTA buttons</li>
                        <li>Dynamic “Building Blocks” feature icons with responsive grid alignment</li>
                        <li>Custom color gradient section for the motivational quote</li>
                        <li>Sticky header with mobile-friendly navigation</li>
                        <li>Fully responsive layout optimized for all screen sizes</li>
                    </ul>

                    <p>This project demonstrates my ability to build clean, professional, and conversion-focused frontend interfaces using Bootstrap and jQuery.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/we-love-pizza.png",
                "name" => "We Love Pizza",
                "title" => "A modern restaurant website for ordering fresh and delicious pizzas online.",
                "clientImg" => "assets/images/clients/mateusz.webp",
                "clientName" => "Mateusz Wen",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Very professional, diligent, smart, and precise. My sincere recommendations.",
                "description" => '
                    <p>I developed the frontend of the "We Love Pizza" website — a full promotional and menu-based platform for a pizza restaurant, designed to make browsing, ordering, and exploring menu items fast and visually appealing.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 5 for layout, responsive design, and modern UI components</li>
                        <li>Scripting: jQuery for dynamic behavior, interactive menu sliders, and UI animations</li>
                        <li>UI: Custom theme styling, menu buttons, and banner overlays</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Full-width hero slider with high-resolution food imagery</li>
                        <li>Interactive navigation menu with dropdown categories (Menu, Delivery, Sale, Ingredients, Contact)</li>
                        <li>Sticky header with quick-access “Order Online” button</li>
                        <li>Custom animated food carousel using jQuery slider plugins</li>
                        <li>Mobile-friendly layout with optimized image scaling</li>
                    </ul>

                    <p>This project showcases my ability to create engaging restaurant websites using Bootstrap 5 and jQuery, with a strong focus on visuals, responsiveness, and user interaction.</p>
                ',
            ],
            [
                "category" => "backend",
                "image" => "assets/images/project/cycle-removal.png",
                "name" => "Removal Request System",
                "title" => "A complete request management system for cycle removal, built for a Japanese municipal workflow.",
                "clientImg" => "assets/images/clients/oun.webp",
                "clientName" => "Oun T.",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Thank you for your kind attention to this matter. The video meeting facilitated the careful work. He made the impossible. possible! We had many hurdles but he conquered all of them. I am excited to work with him again in the future.",
                "description" => '
                    <p>I developed a full-stack Cycle Removal Request System for a Japanese organization. The platform allows citizens or companies to submit detailed removal requests through a fully guided multi-step application form.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 5 for a clean and responsive UI</li>
                        <li>Scripting: jQuery + AJAX for dynamic form interactions and real-time validations</li>
                        <li>Backend: Laravel with Eloquent ORM for structured data handling</li>
                        <li>Realtime Components: Laravel Livewire for dynamic form updates without page reloads</li>
                        <li>PDF: Automated PDF generation for application summaries</li>
                        <li>Email System: Verification emails for temporary registration workflow</li>
                        <li>Security: CSRF protection, validation layers, and secure token-based verification links</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Multi-step application process (Input → Confirmation → Completion)</li>
                        <li>Temporary registration system with email-based account verification</li>
                        <li>AJAX-powered form validation for fast and smooth user experience</li>
                        <li>Dynamic Japanese address fields (postal code auto-completion, prefecture selection, etc.)</li>
                        <li>PDF generation for both user and admin copies</li>
                        <li>Admin-side request management with Livewire-powered updates</li>
                        <li>Fully mobile-responsive UI following modern Japanese UX patterns</li>
                    </ul>

                    <p>A complete municipal-grade solution using Laravel, Livewire, and jQuery to deliver a smooth, secure, and scalable application process for cycle removal requests in Japan.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/egycali.png",
                "name" => "EgyCali Photography",
                "title" => "Elegant portfolio website for a professional wedding & lifestyle photographer showcasing cinematic imagery with a dark, artistic aesthetic.",
                "clientImg" => "assets/images/clients/salem.webp",
                "clientName" => "Wael Kamel Salem Ahmed",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "He is a nice guy, and very friendly. it was a pleasant experience to work with him. I would like to work more with him.",
                "description" => '
                    <p>I designed and developed the complete portfolio website for EgyCali Photography — a premium wedding and portrait photographer. Built entirely with raw, hand-written code and zero frameworks, the site delivers a luxurious, distraction-free viewing experience that puts the photography front and center.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Pure HTML5 & hand-crafted CSS3 (no frameworks, no Bootstrap)</li>
                        <li>Vanilla JavaScript for all interactions and smooth animations</li>
                        <li>EmailJS + SMTP.js for serverless contact form with instant delivery</li>
                        <li>SweetAlert2 for beautiful, custom-styled success/error notifications</li>
                        <li>Fully responsive grid gallery with hover effects and lightbox-ready structure</li>
                        <li>Custom SVG logos and decorative elements</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Minimal dark UI that dramatically highlights high-resolution photography</li>
                        <li>Elegant circular logo animation and typography-focused branding</li>
                        <li>Serverless contact form powered by EmailJS (no backend needed)</li>
                        <li>SweetAlert2 popups with branded success messages</li>
                        <li>Smooth scroll, fade-in animations, and mobile-optimized gallery</li>
                        <li>Ultra-lightweight final build — under 1-second load time</li>
                        <li>SEO-friendly semantic markup and Open Graph tags</li>
                    </ul>

                    <p>A refined, high-performance portfolio built with pure CSS and vanilla JavaScript — proving that sometimes the most beautiful and fastest results come from writing every line by hand.</p>
                ',
            ],
            [
                "category" => "frontend",
                "image" => "assets/images/project/outcastedart.png",
                "name" => "OutcastART – Digital Artist Portfolio",
                "title" => "Modern, minimalist portfolio website for a digital illustrator specializing in book covers, custom illustrations, and realistic portraits.",
                "clientImg" => "assets/images/clients/ella.jpeg",
                "clientName" => "Ella",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Very professional, it was a great experience with him. I will work again with him",
                "description" => '
                    <p>I designed and built the complete portfolio website for OutcastART — a talented digital artist — delivering a clean, image-focused experience that beautifully showcases high-quality artwork with smooth interactions and flawless responsiveness.</p>

                    <h5>Tech Stack & Libraries</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>HTML5 + custom CSS3 (hand-written, mobile-first)</li>
                        <li>jQuery as the foundation for all plugins and animations</li>
                        <li>Swiper.js for touch-enabled portfolio carousels</li>
                        <li>lightGallery for elegant full-screen lightbox experience</li>
                        <li>Isotope.js for smart masonry filtering and layout sorting</li>
                        <li>imagesLoaded.js to prevent layout jumps during image loading</li>
                        <li>Normalize.css for consistent cross-browser styling</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Responsive masonry grid with Isotope-powered filtering</li>
                        <li>Smooth Swiper carousels for featured collections</li>
                        <li>Full-screen lightGallery with zoom, share, and download options</li>
                        <li>Fast, glitch-free image loading using imagesLoaded</li>
                        <li>Clean, minimalist UI that keeps the focus on the artwork</li>
                        <li>Off-canvas mobile menu and sticky navigation</li>
                        <li>Optimized performance with lazy loading and proper asset delivery</li>
                    </ul>

                    <p>A refined, artist-centric portfolio built with the perfect blend of jQuery plugins (Swiper, Isotope, lightGallery) — delivering a premium gallery experience that loads fast and feels native on every device.</p>
                ',
            ],
            [
                "category" => "fullstack",
                "image" => "assets/images/project/younasons.png",
                "name" => "YounaSons",
                "title" => "Dynamic online shopping experience with product suggestions, daily deals, and secure checkout – currently in active development.",
                "clientImg" => "assets/images/clients/muhammad-basharat.png",
                "clientName" => "Muhammad Basharat",
                "rating" => [1, 1, 1, 1, 1],
                "feedback" => "Thanks for great work",
                "description" => '
                    <p>I’m actively building YounaSons.com as the lead full-stack developer — a modern e-commerce platform designed for seamless user engagement, product discovery, and frictionless transactions. This ongoing project features early implementations of suggestion forms, feedback systems, and deal highlights, with full catalog and payment flows in progress.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 5 + jQuery for responsive, interactive UI</li>
                        <li>Backend: Laravel (PHP) with Eloquent ORM for API endpoints and data management</li>
                        <li>Payments: Stripe integration for secure checkouts and subscriptions</li>
                        <li>Interactivity: AJAX for real-time form submissions and dynamic updates</li>
                        <li>Database: MySQL for products, users, and orders</li>
                        <li>Additional: Authentication, email notifications, admin panel, and SEO optimizations</li>
                    </ul>

                    <h5>Key Features Delivered So Far (Ongoing Development)</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Product suggestion and feedback forms with AJAX validation</li>
                        <li>Deal of the Day section with dynamic pricing and browsing</li>
                        <li>Responsive homepage layout optimized for mobile shopping</li>
                        <li>Secure user authentication and session management</li>
                        <li>Early product catalog previews with search and filtering</li>
                        <li>Stripe-powered checkout prototypes (live testing in progress)</li>
                    </ul>

                    <p>A robust, scalable e-commerce solution blending Laravel’s power with Bootstrap’s polish — evolving into a complete retail hub with real-time features and enterprise-grade security.</p>
                ',
            ],
            [
                "category" => "fullstack",
                "image" => "assets/images/project/waow-chat.png",
                "name" => "Waow Chat",
                "title" => "Modern dating app interface with real-time messaging, swipe actions, and international user onboarding – inspired by Tinder but fully custom-built.",
                "clientImg" => "assets/images/clients/muhammad-basharat.png",
                "clientName" => "Muhammad Basharat",
                "rating" => [0, 0, 0, 0, 0],
                "feedback" => "",
                "description" => '
                    <p>I developed Waow Chat, a full-stack real-time dating and social connection platform featuring swipe-based matching, instant messaging, and global user support. The app combines a sleek, mobile-first design with powerful real-time functionality to create an engaging and addictive user experience.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Backend: Laravel (PHP) + Livewire for reactive components</li>
                        <li>Real-Time Chat: Chatify package with Pusher/WebSockets integration</li>
                        <li>Frontend: Bootstrap 5 + Alpine.js for smooth interactivity</li>
                        <li>Phone Input: intl-tel-input with country flag detection & validation</li>
                        <li>Realtime Updates: Laravel Echo + Pusher for instant notifications</li>
                        <li>Database: MySQL with optimized queries for fast matching</li>
                        <li>Auth & Profiles: Custom user system with location, age, and preferences</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Tinder-style swipe interface (Like, Super Like, Nope, Rewind)</li>
                        <li>Fully functional real-time chat powered by Chatify & Pusher</li>
                        <li>International phone verification with smart country detection</li>
                        <li>Live match notifications and unread message counters</li>
                        <li>Beautiful gradient cards with hover animations and blur effects</li>
                        <li>Responsive design that feels native on both mobile and desktop</li>
                        <li>Location-based user discovery</li>
                    </ul>

                    <p>A high-performance, real-time dating platform built with Laravel and modern frontend tools — delivering instant messaging, smooth swiping, and global reach in one addictive package.</p>
                ',
            ],
            [
                "category" => "fullstack",
                "image" => "assets/images/project/frontdeskvisitor.png",
                "name" => "FrontDesk Visitor",
                "title" => "Digital visitor tracking platform for modern workplaces, enabling seamless check-ins, real-time notifications, and secure record management.",
                "clientImg" => "assets/images/clients/muhammad-basharat.png",
                "clientName" => "Muhammad Basharat",
                "rating" => [0, 0, 0, 0, 0],
                "feedback" => "",
                "description" => '
                    <p>I developed FrontDeskVisitor as the lead full-stack developer — a comprehensive visitor management system that automates check-ins, enhances workplace security, and provides real-time visibility for businesses of all sizes. The platform streamlines guest experiences while ensuring compliance and data safety through intuitive digital tools.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: Bootstrap 5 + jQuery for responsive, interactive interfaces</li>
                        <li>Backend: Laravel (PHP) with Eloquent ORM for secure data handling</li>
                        <li>Real-Time: Pusher for instant host notifications and live updates</li>
                        <li>Database: MySQL for scalable storage of visitor logs and records</li>
                        <li>Interactivity: AJAX for seamless form submissions and dynamic content</li>
                        <li>Exports: PDF/CSV generation for audit reports and data exports</li>
                        <li>Additional: Authentication, email/SMS alerts, and multi-device support</li>
                    </ul>

                    <h5>Key Features I Delivered</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Automated digital sign-in kiosks (phone/iPad/tablet compatible) in under 5 minutes</li>
                        <li>Real-time host alerts via Pusher for arrivals and check-outs</li>
                        <li>Secure digital records with export options (PDF/CSV) for audits/emergencies</li>
                        <li>Curated reception views and workplace dashboards for visibility</li>
                        <li>Flexible check-in flows: self-service or assisted for various building types</li>
                        <li>ID card printing and integration-ready for contractors/guests</li>
                        <li>Fully responsive design optimized for high-traffic environments</li>
                    </ul>

                    <p>A robust, user-friendly visitor management solution powered by Laravel and real-time tech — transforming front desks into efficient, secure hubs for hassle-free operations.</p>
                ',
            ],
            [
                "category" => "fullstack",
                "image" => "assets/images/project/workeito.png",
                "name" => "Workeito",
                "title" => "Modern HR & workforce management platform built for companies and individuals — currently in active development.",
                "clientImg" => "assets/images/clients/muhammad-basharat.png",
                "clientName" => "Muhammad Basharat",
                "rating" => [0, 0, 0, 0, 0],
                "feedback" => "",
                "description" => '
                    <p>I’m currently developing Workeito, a powerful next-generation employee management system designed to simplify HR operations, attendance tracking, payroll, and team collaboration. This ongoing full-stack project combines a sleek React frontend with a robust Laravel backend to deliver a fast, intuitive, and scalable solution for modern workplaces.</p>

                    <h5>Tech Stack</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Frontend: React.js + Vite for blazing-fast, component-driven UI</li>
                        <li>Backend: Laravel 10/11 (PHP) with Sanctum API authentication</li>
                        <li>API: RESTful architecture with JSON responses</li>
                        <li>State Management: React Context / possibly Redux in future phases</li>
                        <li>Styling: Tailwind CSS + custom components for consistent design</li>
                        <li>Database: MySQL with proper migrations and relationships</li>
                        <li>Authentication: Dual registration flows (Company & Individual accounts)</li>
                    </ul>

                    <h5>Key Features Delivered So Far (In Development)</h5>
                    <ul style="list-style:circle; padding-left:30px;">
                        <li>Beautiful dual-mode registration (Company vs Individual users)</li>
                        <li>Smart form with dynamic fields based on account type</li>
                        <li>Clean, modern UI with glassmorphism and gradient accents</li>
                        <li>Social login placeholders (Facebook, Google, Apple)</li>
                        <li>Responsive layout optimized for desktop and tablet</li>
                        <li>Secure API-driven architecture ready for dashboard expansion</li>
                        <li>Multi-role foundation (Admin, HR, Employee) in planning</li>
                    </ul>

                    <p>An ambitious, in-development HR platform combining the speed and interactivity of React with Laravel’s enterprise-grade backend — poised to become a complete workforce empowerment tool.</p>
                ',
            ],
        ];

        return $projectArray;
    }

    public function index()
    {
        $projectOfFrontend = collect($this->projectData())->where('category', 'frontend')->reverse()->take(6);
        $projectOfBackend = collect($this->projectData())->where('category', 'backend')->reverse()->take(6);
        $projectOfWordpress = collect($this->projectData())->where('category', 'wordpress')->reverse()->take(6);
        $projectOfFullStack = collect($this->projectData())->where('category', 'fullstack')->reverse()->take(6);
        $projects = $projectOfFrontend->merge($projectOfBackend)->merge($projectOfWordpress)->merge($projectOfFullStack);
        $whyBestArray = [
            [
                'icon' => '<Layers/>',
                'title' => 'Full-Stack Expertise',
                'description' => 'I handle every layer of your web project with mastery in JavaScript, React, AJAX for dynamic fronts, and PHP, Laravel, MySQL for secure backs—delivering seamless, scalable sites without third-party dependencies.',
            ],
            [
                'icon' => '<Trophy/>',
                'title' => 'Proven Impact',
                'description' => "My builds drive results: e-commerce sites with 40% higher conversions via React's speed and Laravel's efficiency, plus optimized MySQL queries that slash load times—turning your site into a growth engine.",
            ],
            [
                'icon' => '<Handshake/>',
                'title' => 'Direct Collaboration',
                'description' => "You work straight with me—no handoffs or delays. Expect daily updates and my full attention to your vision, ensuring custom solutions in React and Laravel that perfectly match your goals.",
            ],
            [
                'icon' => '<Lightbulb/>',
                'title' => 'Innovative Edge',
                'description' => "I integrate cutting-edge features like AJAX real-time interactions and future-proof MySQL scalability, keeping your site ahead in a fast-changing web—affordable innovation without agency markups.",
            ],
            [
                'icon' => '<ShieldCheck />',
                'title' => 'Cost-Effective Reliability',
                'description' => "As an indie developer, I offer enterprise quality at lower costs, with jQuery quick-prototypes and rigorous PHP testing for 20-30% savings—reliable code, fast delivery, and ongoing support included.",
            ],
        ];

        return Inertia::render('home', [
            'projects' => $projects,
            'whyBestArray' => $whyBestArray,
        ]);
    }

    public function about()
    {
        $skills = [
            ['name' => 'HTML', 'icon' => '/assets/images/skills/html-5.png', 'percentage' => '95'],
            ['name' => 'CSS', 'icon' => '/assets/images/skills/css-3.png', 'percentage' => '92'],
            ['name' => 'Bootstrap', 'icon' => '/assets/images/skills/bootstrap.png', 'percentage' => '95'],
            ['name' => 'Tailwind CSS', 'icon' => '/assets/images/skills/tailwindcss.png', 'percentage' => '90'],
            ['name' => 'SASS/SCSS', 'icon' => '/assets/images/skills/sass.png', 'percentage' => '85'],
            ['name' => 'JavaScript', 'icon' => '/assets/images/skills/js.png', 'percentage' => '72'],
            ['name' => 'ES6', 'icon' => '/assets/images/skills/es6.png', 'percentage' => '95'],
            ['name' => 'Jquery', 'icon' => '/assets/images/skills/jquery.png', 'percentage' => '80'],
            ['name' => 'Ajax', 'icon' => '/assets/images/skills/ajax.png', 'percentage' => '85'],
            ['name' => 'React JS', 'icon' => '/assets/images/skills/reactjs.png', 'percentage' => '85'],
            ['name' => 'Next JS', 'icon' => '/assets/images/skills/nextjs.png', 'percentage' => '85'],
            ['name' => 'Node JS', 'icon' => '/assets/images/skills/node-js.png', 'percentage' => '75'],
            ['name' => 'Express JS', 'icon' => '/assets/images/skills/expressjs.png', 'percentage' => '82'],
            ['name' => 'PHP', 'icon' => '/assets/images/skills/php.png', 'percentage' => '80'],
            ['name' => 'Laravel', 'icon' => '/assets/images/skills/laravel.png', 'percentage' => '90'],
            ['name' => 'MySQL', 'icon' => '/assets/images/skills/mysql.png', 'percentage' => '78'],
            ['name' => 'MongoDB', 'icon' => '/assets/images/skills/mongodb.png', 'percentage' => '70'],
            ['name' => 'Git', 'icon' => '/assets/images/skills/git.png', 'percentage' => '95'],
            ['name' => 'Github', 'icon' => '/assets/images/skills/github.png', 'percentage' => '95'],
            ['name' => 'Wordpress', 'icon' => '/assets/images/skills/wordpress.png', 'percentage' => '60'],
        ];
        return Inertia::render('about', [
            'skills' => $skills
        ]);
    }
}
