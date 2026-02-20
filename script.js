// ===== A3-ADE Project Homepage Script =====

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCounterAnimation();
    initParticles();
    initSmoothScroll();
    initAPIBarAnimation();
});

// ===== Navbar Scroll Effect =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.getElementById('nav-links');

    if (btn && links) {
        btn.addEventListener('click', () => {
            links.classList.toggle('open');
            btn.classList.toggle('active');
        });

        // Close on link click
        links.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
                btn.classList.remove('active');
            });
        });
    }
}

// ===== Scroll Animations (IntersectionObserver) =====
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.feature-card, .agent-card, .api-category, .tech-column, ' +
        '.page-card, .update-item, .link-card, .arch-layer, .section-header'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = Math.min(index * 50, 300);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== Counter Animation =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== Particle Background =====
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        const hue = Math.random() > 0.5 ? '239, 99, 241' : '6, 182, 212';

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            bottom: -10px;
            background: rgba(${hue}, 0.6);
            box-shadow: 0 0 ${size * 2}px rgba(${hue}, 0.3);
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);
    }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== API Bar Animation =====
function initAPIBarAnimation() {
    const bars = document.querySelectorAll('.api-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width || '100%';
                observer.unobserve(entry.target);
            } else {
                entry.target.style.width = '0%';
            }
        });
    }, { threshold: 0.2 });

    bars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        bar.dataset.targetWidth = targetWidth;
        observer.observe(bar);
    });

    // Re-observe with actual animation
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.width = entry.target.dataset.targetWidth || '100%';
                }, 200);
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    bars.forEach(bar => animObserver.observe(bar));
}
