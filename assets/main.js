/**
 * mtleont Developer Portfolio
 * Main JavaScript File
 */

// Configuration
const GITHUB_USERNAME = 'mtleont';
const GITHUB_REPO = 'mtleont.github.io';

// ============================================
// Cookie Manager
// ============================================
const CookieManager = {
    // Set a cookie
    set: function(name, value, days = 365) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    },

    // Get a cookie
    get: function(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length));
            }
        }
        return null;
    },

    // Delete a cookie
    delete: function(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    },

    // Check if cookie exists
    exists: function(name) {
        return this.get(name) !== null;
    }
};

// ============================================
// Cookie-Based Features
// ============================================
function initCookieFeatures() {
    // 1. Visit Counter - Track number of visits
    let visitCount = parseInt(CookieManager.get('visit_count')) || 0;
    visitCount++;
    CookieManager.set('visit_count', visitCount, 365);

    // 2. Last Visit - Store timestamp of last visit
    const now = new Date().toISOString();
    CookieManager.set('last_visit', now, 365);

    // 3. First Visit Detection - Welcome new visitors
    const isFirstVisit = !CookieManager.exists('first_visit');
    if (isFirstVisit) {
        CookieManager.set('first_visit', now, 365 * 10); // 10 years
        console.log('Welcome! This is your first visit to mtleont.github.io');
    }

    // 4. Last Viewed Section - Remember navigation position
    const lastSection = CookieManager.get('last_section');
    if (lastSection) {
        console.log(`Welcome back! Last time you viewed: ${lastSection}`);
    }

    // 5. Theme Preference (for future dark mode toggle)
    const theme = CookieManager.get('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    // 6. Cookie Consent Banner (GDPR-ish)
    if (!CookieManager.exists('cookie_consent')) {
        showCookieConsent();
    }

    // 7. Store referring source if available
    if (document.referrer && !CookieManager.exists('referrer')) {
        CookieManager.set('referrer', document.referrer, 30);
    }

    // 8. Track session (for analytics)
    const sessionId = CookieManager.get('session_id') || generateSessionId();
    CookieManager.set('session_id', sessionId, 0.5); // 12 hours

    console.log(`Visit #${visitCount} | Theme: ${theme} | Session: ${sessionId.substring(0, 8)}`);
}

function generateSessionId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function showCookieConsent() {
    // Create consent banner
    const banner = document.createElement('div');
    banner.id = 'cookie-consent';
    banner.innerHTML = `
        <div class="cookie-content">
            <p>We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button id="accept-cookies" class="btn btn-primary">Accept</button>
            <button id="reject-cookies" class="btn btn-secondary">Decline</button>
        </div>
    `;
    
    // Add styles
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1a1a1a;
        border-top: 1px solid #333;
        padding: 1rem;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    const content = banner.querySelector('.cookie-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 800px;
    `;
    
    document.body.appendChild(banner);
    
    // Handle accept
    document.getElementById('accept-cookies').addEventListener('click', () => {
        CookieManager.set('cookie_consent', 'accepted', 365);
        banner.remove();
    });
    
    // Handle decline
    document.getElementById('reject-cookies').addEventListener('click', () => {
        CookieManager.set('cookie_consent', 'declined', 365);
        banner.remove();
    });
}

function trackSectionView(sectionId) {
    CookieManager.set('last_section', sectionId, 30);
}

function getVisitStats() {
    return {
        visitCount: parseInt(CookieManager.get('visit_count')) || 0,
        lastVisit: CookieManager.get('last_visit'),
        firstVisit: CookieManager.get('first_visit'),
        theme: CookieManager.get('theme') || 'dark',
        sessionId: CookieManager.get('session_id')
    };
}

// ============================================
// Particles.js Configuration
// ============================================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#6366f1', '#ec4899', '#8b5cf6', '#06b6d4']
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ============================================
// Tippy.js Tooltips
// ============================================
function initTooltips() {
    if (typeof tippy !== 'undefined') {
        tippy('[data-tooltip]', {
            content: (reference) => reference.getAttribute('data-tooltip'),
            animation: 'shift-away',
            arrow: true,
            theme: 'dark'
        });
    }
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ============================================
// Smooth Scrolling
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// Blog Posts from GitHub Issues
// ============================================
async function fetchBlogPosts() {
    const blogGrid = document.getElementById('blog-posts');
    if (!blogGrid) return;
    
    try {
        const apiUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues?labels=blog&state=open&per_page=10`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        
        const issues = await response.json();
        
        if (issues.length === 0) {
            blogGrid.innerHTML = '<div class="blog-placeholder"><p>No posts yet. Create one via GitHub Issues!</p></div>';
            return;
        }
        
        blogGrid.innerHTML = '';
        
        issues.forEach(issue => {
            const post = createBlogPostCard(issue);
            blogGrid.appendChild(post);
        });
        
    } catch (error) {
        console.error('Error:', error);
        blogGrid.innerHTML = '<div class="blog-placeholder"><p>Could not load posts. Check GitHub configuration.</p></div>';
    }
}

function createBlogPostCard(issue) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    
    const date = new Date(issue.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    let excerpt = '';
    if (issue.body) {
        excerpt = issue.body.substring(0, 150);
        if (issue.body.length > 150) {
            excerpt += '...';
        }
    }
    
    card.innerHTML = `
        <time class="blog-date">${date}</time>
        <h3 class="blog-title">${escapeHtml(issue.title)}</h3>
        <p class="blog-excerpt">${escapeHtml(excerpt) || 'Click to read more...'}</p>
        <a href="${issue.html_url}" target="_blank" rel="noopener noreferrer" class="blog-link">Read More</a>
    `;
    
    card.addEventListener('click', () => {
        window.open(issue.html_url, '_blank');
    });
    
    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initCookieFeatures();
    initParticles();
    initTooltips();
    initMobileMenu();
    initSmoothScroll();
    fetchBlogPosts();
    
    // Track section views on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
                trackSectionView(section.getAttribute('id'));
            }
        });
    });
});
