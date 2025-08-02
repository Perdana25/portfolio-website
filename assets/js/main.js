/**
 * Portfolio Website - Main JavaScript
 * Author: Muhammad Anugrah Perdana
 * Version: 1.0.0
 */

// ===================================================================
// Utility Functions
// ===================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
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
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================================================
// Theme Management
// ===================================================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    bindEvents() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        const icon = this.themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// ===================================================================
// Navigation Management
// ===================================================================

class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveLink();
    }

    bindEvents() {
        // Mobile menu toggle
        this.navToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close mobile menu when clicking on links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                this.closeMobileMenu();
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', throttle(() => {
            this.handleScroll();
        }, 10));

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        // Add/remove navbar background
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Update active navigation link
        this.updateActiveLink();
    }

    updateActiveLink() {
        let current = '';
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===================================================================
// Animation Manager
// ===================================================================

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }

        this.animateCounters();
        this.animateSkillBars();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    startCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress[data-width]');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillBars.forEach(bar => observer.observe(bar));
    }
}

// ===================================================================
// Project Filter Manager
// ===================================================================

class ProjectFilterManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
                this.updateActiveFilter(button);
            });
        });
    }

    filterProjects(filter) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-in-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    updateActiveFilter(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// ===================================================================
// Gallery Manager
// ===================================================================

class GalleryManager {
    constructor() {
        this.galleryGrid = document.querySelector('.gallery-grid');
        this.certificatesGrid = document.querySelector('.certificates-grid');
        this.init();
    }

    init() {
        this.loadGalleryImages();
        this.loadCertificates();
        this.bindEvents();
    }

    bindEvents() {
        // Add click events for lightbox functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.gallery-item') || e.target.closest('.certificate-item')) {
                this.openLightbox(e.target);
            }
        });
    }

    loadGalleryImages() {
        // This would typically load from a data source
        // For now, we'll create placeholder items
        const galleryItems = [
            { src: './assets/images/gallery/gallery-1.jpg', title: 'Kegiatan Workshop', description: 'Workshop pengembangan web' },
            { src: './assets/images/gallery/gallery-2.jpg', title: 'Presentasi Proyek', description: 'Presentasi proyek akhir' },
            { src: './assets/images/gallery/gallery-3.jpg', title: 'Team Building', description: 'Kegiatan team building' },
            { src: './assets/images/gallery/gallery-4.jpg', title: 'Seminar Teknologi', description: 'Menghadiri seminar teknologi' },
            { src: './assets/images/gallery/gallery-5.jpg', title: 'Hackathon', description: 'Partisipasi dalam hackathon' },
            { src: './assets/images/gallery/gallery-6.jpg', title: 'Networking Event', description: 'Event networking developer' }
        ];

        this.renderGalleryItems(galleryItems);
    }

    loadCertificates() {
        // This would typically load from a data source
        const certificates = [
            { src: './assets/images/certificates/cert-1.jpg', title: 'Web Development Certificate', issuer: 'Tech Academy' },
            { src: './assets/images/certificates/cert-2.jpg', title: 'JavaScript Advanced', issuer: 'Code Institute' },
            { src: './assets/images/certificates/cert-3.jpg', title: 'React.js Certification', issuer: 'React Academy' },
            { src: './assets/images/certificates/cert-4.jpg', title: 'Node.js Backend', issuer: 'Backend Masters' },
            { src: './assets/images/certificates/cert-5.jpg', title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
            { src: './assets/images/certificates/cert-6.jpg', title: 'UI/UX Design', issuer: 'Design School' }
        ];

        this.renderCertificates(certificates);
    }

    renderGalleryItems(items) {
        if (!this.galleryGrid) return;

        this.galleryGrid.innerHTML = items.map(item => `
            <div class="gallery-item" data-aos="fade-up">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-info">
                    <h3 class="gallery-title">${item.title}</h3>
                    <p class="gallery-description">${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderCertificates(certificates) {
        if (!this.certificatesGrid) return;

        this.certificatesGrid.innerHTML = certificates.map(cert => `
            <div class="certificate-item" data-aos="fade-up">
                <img src="${cert.src}" alt="${cert.title}" loading="lazy">
                <div class="certificate-info">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                </div>
            </div>
        `).join('');
    }

    openLightbox(target) {
        // Simple lightbox implementation
        const img = target.querySelector('img') || target;
        if (img && img.tagName === 'IMG') {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox events
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    this.closeLightbox(lightbox);
                }
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeLightbox(lightbox);
                }
            });
        }
    }

    closeLightbox(lightbox) {
        lightbox.remove();
        document.body.style.overflow = '';
    }
}

// ===================================================================
// Contact Form Manager
// ===================================================================

class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showNotification('Pesan berhasil dikirim! Terima kasih atas pesan Anda.', 'success');
            this.form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// ===================================================================
// Back to Top Manager
// ===================================================================

class BackToTopManager {
    constructor() {
        this.backToTopBtn = document.getElementById('backToTop');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', throttle(() => {
            this.toggleVisibility();
        }, 100));

        this.backToTopBtn.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    toggleVisibility() {
        if (window.scrollY > 300) {
            this.backToTopBtn.classList.add('show');
        } else {
            this.backToTopBtn.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ===================================================================
// Performance Manager
// ===================================================================

class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    preloadCriticalResources() {
        // Preload critical images
        const criticalImages = [
            './assets/images/profile.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// ===================================================================
// Main Application
// ===================================================================

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialize all managers
        this.themeManager = new ThemeManager();
        this.navigationManager = new NavigationManager();
        this.animationManager = new AnimationManager();
        this.projectFilterManager = new ProjectFilterManager();
        this.galleryManager = new GalleryManager();
        this.contactFormManager = new ContactFormManager();
        this.backToTopManager = new BackToTopManager();
        this.performanceManager = new PerformanceManager();

        // Add custom styles for dynamic elements
        this.addCustomStyles();
        
        console.log('Portfolio website initialized successfully!');
    }

    addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Lightbox Styles */
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                animation: fadeIn 0.3s ease-in-out forwards;
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            
            .lightbox-content img {
                width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .lightbox-close {
                position: absolute;
                top: -15px;
                right: -15px;
                width: 40px;
                height: 40px;
                background: white;
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            
            /* Notification Styles */
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease-in-out;
                max-width: 300px;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                background: #10b981;
            }
            
            .notification-error {
                background: #ef4444;
            }
            
            .notification-info {
                background: #3b82f6;
            }
            
            /* Animation Keyframes */
            @keyframes fadeIn {
                to { opacity: 1; }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the application
new PortfolioApp();

