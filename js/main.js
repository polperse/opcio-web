// Enhanced OPCIO Group Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeParallaxEffects();
    initializeScrollAnimations();
    initializeTiltEffects();
    initializeAOSAnimations();
    initializeParallax();
    initializeHeroAnimations();
    initializeCounters();
    initializeVideoControls();
    initializeForms();
    initializeParticles();
    initializePerformanceMonitoring();
    initializeAccessibility();
    initializeAnalytics();
    initializeCookieConsent();
    initializeSuccessCasesSlider();
    initializeLogoCarousel();
});

// Enhanced Navigation with Scroll Effects
function initializeNavigation() {
    const header = document.querySelector('.header-v2') || document.querySelector('.header-glass');
    const navToggle = document.querySelector('.nav-toggle') || document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu') || document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!header) return;
    
    // Header scroll effects
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleScroll();
    
    // Function to determine if background is light or dark
    function updateHeaderTextColor() {
        if (!header) return;
        
        const headerRect = header.getBoundingClientRect();
        const centerX = headerRect.left + headerRect.width / 2;
        const centerY = headerRect.top + headerRect.height / 2;
        
        // Get the element behind the header
        const elementBelow = document.elementFromPoint(centerX, centerY + headerRect.height);
        
        if (elementBelow) {
            const computedStyle = window.getComputedStyle(elementBelow);
            const bgColor = computedStyle.backgroundColor;
            const bgImage = computedStyle.backgroundImage;
            
            // Check if background is dark
            const isDark = isBackgroundDark(bgColor, bgImage, elementBelow);
            
            // Remove existing classes
            header.classList.remove('dark-bg', 'light-bg');
            
            // Add appropriate class if not scrolled
            if (window.scrollY <= 50) {
                header.classList.add(isDark ? 'dark-bg' : 'light-bg');
            }
        }
    }
    
    // Function to determine if background is dark
    function isBackgroundDark(bgColor, bgImage, element) {
        // Check for specific dark sections
        const darkSections = [
            'hero-section', 'gradient-section', 'cta-section', 
            'hero-gradient', 'service-hero', 'parallax-section'
        ];
        
        // Check if element has dark class names
        const elementClasses = element.className.toLowerCase();
        if (darkSections.some(cls => elementClasses.includes(cls))) {
            return true;
        }
        
        // Check parent elements for dark backgrounds
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
            const parentClasses = parent.className.toLowerCase();
            if (darkSections.some(cls => parentClasses.includes(cls))) {
                return true;
            }
            parent = parent.parentElement;
        }
        
        // Check for gradient backgrounds
        if (bgImage && bgImage.includes('gradient')) {
            return true;
        }
        
        // Parse RGB values if available
        if (bgColor && bgColor.startsWith('rgb')) {
            const rgb = bgColor.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
                const r = parseInt(rgb[0]);
                const g = parseInt(rgb[1]);
                const b = parseInt(rgb[2]);
                
                // Calculate relative luminance
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                return luminance < 0.5;
            }
        }
        
        // Default to light background
        return false;
    }
    
    // Simple and direct scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scroll navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// Enhanced Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.metric-number[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Enhanced Form Handling
function initializeFormHandling() {
    const leadForm = document.querySelector('.lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
                submitBtn.style.background = '#10b981';
                
                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 2000);
                
                // Track conversion (replace with actual analytics)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'event_category': 'Lead Generation',
                        'event_label': 'Guide Download'
                    });
                }
            }, 1500);
        });
    }
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .story-card, .insight-card, .metodo-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delays
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.transform = 'translateY(30px)';
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

// Enhanced Parallax Effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-speed]');
    
    if (parallaxElements.length === 0) return;
    
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const handleParallax = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed) || 0.5;
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + scrollTop;
            const elementHeight = elementRect.height;
            
            // Only apply parallax if element is in or near viewport
            if (elementRect.bottom >= -200 && elementRect.top <= windowHeight + 200) {
                let yPos = -(scrollTop * speed);
                
                // Apply bounds checking for hero video layer to prevent gaps
                if (element.classList.contains('hero-video-layer')) {
                    const maxOffset = elementHeight * 0.1; // Limit to 10% of element height
                    yPos = Math.max(-maxOffset, Math.min(maxOffset, yPos));
                    element.style.transform = `translateY(${yPos}px)`;
                } else if (element.classList.contains('parallax-image')) {
                    // For parallax background images
                    element.style.transform = `translateY(${yPos}px)`;
                } else {
                    // For other parallax elements
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        });
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledParallax = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', throttledParallax, { passive: true });
    
    // Initial call
    handleParallax();
    
    // Initial header color update
    setTimeout(() => {
        updateHeaderTextColor();
    }, 100);
}

// Logo Carousel
function initializeLogoCarousel() {
    const carouselTrack = document.querySelector('.logo-carousel-track');
    if (carouselTrack && carouselTrack.children.length > 0) {
        // Pause animation on hover
        const carousel = carouselTrack.parentElement;
        carousel.addEventListener('mouseenter', () => carouselTrack.style.animationPlayState = 'paused');
        carousel.addEventListener('mouseleave', () => carouselTrack.style.animationPlayState = 'running');

        // Duplicate logos for seamless loop
        const logos = carouselTrack.innerHTML;
        carouselTrack.innerHTML += logos;
    }
}

// Service Card Interactions
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Story Card Interactions
function initializeStoryCards() {
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach(card => {
        const image = card.querySelector('.story-image img');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
}

// Insight Card Interactions
function initializeInsightCards() {
    const insightCards = document.querySelectorAll('.insight-card');
    
    insightCards.forEach(card => {
        const image = card.querySelector('.insight-image img');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
}

// Enhanced Analytics Tracking
function initializeAnalytics() {
    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track milestones
            if ([25, 50, 75, 90].includes(scrollPercent)) {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'Engagement',
                        'event_label': `${scrollPercent}%`,
                        'value': scrollPercent
                    });
                }
            }
        }
    };
    
    window.addEventListener('scroll', debounce(trackScrollDepth, 1000), { passive: true });
    
    // Track service card clicks
    document.querySelectorAll('.service-cta').forEach(link => {
        link.addEventListener('click', function() {
            const serviceName = this.closest('.service-card').querySelector('.service-title').textContent;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'service_click', {
                    'event_category': 'Services',
                    'event_label': serviceName
                });
            }
        });
    });
    
    // Track story card clicks
    document.querySelectorAll('.story-link').forEach(link => {
        link.addEventListener('click', function() {
            const storyTitle = this.closest('.story-card').querySelector('.story-title').textContent;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'case_study_click', {
                    'event_category': 'Case Studies',
                    'event_label': storyTitle
                });
            }
        });
    });
    
    // Track insight card clicks
    document.querySelectorAll('.insight-link').forEach(link => {
        link.addEventListener('click', function() {
            const insightTitle = this.closest('.insight-card').querySelector('.insight-title').textContent;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'article_click', {
                    'event_category': 'Content',
                    'event_label': insightTitle
                });
            }
        });
    });
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        const vitalsCallback = (metric) => {
            if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                    'event_category': 'Web Vitals',
                    'value': Math.round(metric.value),
                    'custom_parameter_1': metric.id
                });
            }
        };
        
        // Monitor LCP, FID, CLS
        webVitals.getLCP(vitalsCallback);
        webVitals.getFID(vitalsCallback);
        webVitals.getCLS(vitalsCallback);
    }
    
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'event_category': 'Performance',
                'value': Math.round(loadTime)
            });
        }
    });
}

// Enhanced Hero Animations
function initializeHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const titleLines = document.querySelectorAll('.title-line');
    const heroMetrics = document.querySelectorAll('.metric-item');
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    
    // Animate hero elements on load
    setTimeout(() => {
        titleLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('animate-in');
            }, index * 200);
        });
    }, 300);
    
    // Scroll indicator interaction
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.immersive-video-section');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Metric hover effects
    heroMetrics.forEach(metric => {
        metric.addEventListener('mouseenter', () => {
            metric.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        metric.addEventListener('mouseleave', () => {
            metric.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Video Controls and Optimization
function initializeVideoControls() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Optimize video loading
        video.addEventListener('loadstart', () => {
            video.classList.add('loading');
        });
        
        video.addEventListener('canplay', () => {
            video.classList.remove('loading');
            video.classList.add('loaded');
        });
        
        // Pause videos when not in view for performance
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(console.log);
                } else {
                    entry.target.pause();
                }
            });
        }, {
            threshold: 0.25
        });
        
        videoObserver.observe(video);
        
        // Handle video errors gracefully
        video.addEventListener('error', () => {
            console.warn('Video failed to load:', video.src);
            video.style.display = 'none';
        });
    });
}

// Enhanced Form Handling
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
        
        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                await submitForm(form);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.required;
        
        let isValid = true;
        let errorMessage = '';
        
        if (required && !value) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        } else if (type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Email no válido';
        } else if (type === 'tel' && value && !isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Teléfono no válido';
        }
        
        updateFieldValidation(field, isValid, errorMessage);
        return isValid;
    }
    
    function updateFieldValidation(field, isValid, errorMessage) {
        field.classList.toggle('error', !isValid);
        field.classList.toggle('valid', isValid);
        
        let errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        
        if (!isValid && errorMessage) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function isValidPhone(phone) {
        return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
    }
    
    async function submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            const formData = new FormData(form);
            const response = await fetch(form.action || '/submit', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                showNotification('Formulario enviado correctamente', 'success');
                form.reset();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            showNotification('Error al enviar el formulario', 'error');
            console.error('Form submission error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }
}

// Animated Particles System
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;
    
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 25000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 1000);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 3000);
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Monitor FPS
    let fps = 0;
    let lastTime = performance.now();
    
    function measureFPS() {
        const now = performance.now();
        fps = Math.round(1000 / (now - lastTime));
        lastTime = now;
        
        if (fps < 30) {
            console.warn('Low FPS detected:', fps);
            // Reduce animation complexity if needed
            document.body.classList.add('reduce-motion');
        }
        
        requestAnimationFrame(measureFPS);
    }
    
    requestAnimationFrame(measureFPS);
    
    // Monitor memory usage
    if (performance.memory) {
        setInterval(() => {
            const memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024;
            if (memoryUsage > 50) {
                console.warn('High memory usage:', memoryUsage.toFixed(2) + 'MB');
            }
        }, 10000);
    }
}

// Enhanced Accessibility
function initializeAccessibility() {
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Saltar al contenido principal';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Announce dynamic content changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    
    window.announceToScreenReader = (message) => {
        announcer.textContent = message;
        setTimeout(() => announcer.textContent = '', 1000);
    };
}

// Analytics and Tracking
function initializeAnalytics() {
    // Track scroll depth
    let maxScrollDepth = 0;
    
    window.addEventListener('scroll', () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            // Track milestones
            if (scrollDepth === 25 || scrollDepth === 50 || scrollDepth === 75 || scrollDepth === 100) {
                trackEvent('scroll_depth', scrollDepth);
            }
        }
    });
    
    // Track video interactions
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', () => trackEvent('video_play', video.src));
        video.addEventListener('pause', () => trackEvent('video_pause', video.src));
    });
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('button_click', button.textContent);
        });
    });
    
    function trackEvent(eventName, eventData) {
        // Send to analytics service
        if (window.gtag) {
            gtag('event', eventName, {
                custom_parameter: eventData
            });
        }
        
        console.log('Analytics Event:', eventName, eventData);
    }
}

// Cookie Consent
function initializeCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (!cookieConsent) return;
    
    // Check if consent was already given
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieConsent.style.display = 'none';
        return;
    }
    
    const acceptBtn = cookieConsent.querySelector('button');
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        
        // Enable analytics cookies
        if (window.gtag) {
            gtag('consent', 'update', {
                analytics_storage: 'granted'
            });
        }
    });
    
    // Auto-show after 2 seconds
    setTimeout(() => {
        cookieConsent.style.display = 'block';
    }, 2000);
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

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

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'images/hero-background.jpg',
        'images/parallax-background.jpg',
        'images/contact-background.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Send to error tracking service
});

// Mark page as loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    document.querySelectorAll('.hero-content').forEach(el => {
        el.classList.add('animate-in');
    });
});

// Initialize Success Cases Slider
function initializeSuccessCasesSlider() {
    const slider = document.querySelector('.casos-exito-slider');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    const slides = document.querySelectorAll('.caso-card');
    
    if (!slider) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth + (2 * 16); // width + margin
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    });

    window.addEventListener('resize', debounce(updateSliderPosition, 250));
} 

// Handle Missing Images
function initializeImageHandling() {
    const images = document.querySelectorAll('img[src*="images/"]');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder based on the image context
            const alt = this.alt || 'Placeholder';
            const width = this.offsetWidth || 400;
            const height = this.offsetHeight || 300;
            
            // Generate a placeholder URL with proper dimensions
            const placeholderUrl = `https://via.placeholder.com/${width}x${height}/2563eb/ffffff?text=${encodeURIComponent(alt)}`;
            
            this.src = placeholderUrl;
            this.style.backgroundColor = '#f8fafc';
            this.style.border = '2px dashed #e2e8f0';
        });
    });
}

// Main initialization function
function initializeWebsite() {
    // Initialize all components
    initializeNavigation();
    initializeCounters();
    initializeFormHandling();
    initializeScrollAnimations();
    initializeParallaxEffects();
    initializeServiceCards();
    initializeStoryCards();
    initializeInsightCards();
    initializeImageHandling();
    initializeAnalytics();
    initializePerformanceMonitoring();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    // Initialize cookie consent
    initializeCookieConsent();
    
    console.log('🚀 OPCIO Group website initialized successfully');
} 

// FIRST_EDIT: Add implementation of initializeTiltEffects
function initializeTiltEffects() {
    const tiltElements = document.querySelectorAll('.service-card, .service-card-modern, .metric-card, .metodo-card, .metodo-card-modern, .story-card, .story-card-modern, .insight-card, .insight-card-modern, .testimonial-card');
    if (tiltElements.length === 0) return;

    // If VanillaTilt library is available use it, otherwise fallback to a simple custom tilt.
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(tiltElements, {
            max: 12,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
            perspective: 1000,
        });
    } else {
        // Lightweight fallback
        tiltElements.forEach((el) => {
            el.style.transformStyle = 'preserve-3d';
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 8; // tilt intensity
                const rotateY = ((x - centerX) / centerX) * -8;
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }
} 

// SECOND_EDIT: Add initializeAOSAnimations function
function initializeAOSAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
} 

// THIRD_EDIT: Update parallax effect to prevent breaking at end of scroll
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-background');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScroll = documentHeight - windowHeight;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            
            // Check if element is in viewport
            if (rect.bottom >= 0 && rect.top <= windowHeight) {
                // Calculate parallax offset with bounds checking
                const parallaxOffset = (scrolled - elementTop) * speed;
                
                // Prevent parallax from going too far
                const maxOffset = elementHeight * 0.3; // Limit to 30% of element height
                const boundedOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxOffset));
                
                const parallaxImage = element.querySelector('.parallax-image');
                if (parallaxImage) {
                    parallaxImage.style.transform = `translateY(${boundedOffset}px)`;
                }
            }
        });
    });
} 