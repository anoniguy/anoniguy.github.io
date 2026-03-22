/**
 * mtleont Developer Portfolio
 * Main JavaScript File
 */

// Configuration
const GITHUB_USERNAME = 'mtleont';
const GITHUB_REPO = 'mtleont.github.io';

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
    initParticles();
    initTooltips();
    initMobileMenu();
    initSmoothScroll();
    fetchBlogPosts();
});
