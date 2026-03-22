# Modern Developer Portfolio - Implementation Plan

## Project Overview
- **Project Name:** mtleont Developer Portfolio
- **Domain:** mtleont.github.io
- **Type:** Single-page developer portfolio website with blog
- **Goal:** Showcase developer skills, projects, blog posts via GitHub Issues, and contact options

---

## External Libraries

| Library | Purpose | CDN |
|---------|---------|-----|
| **Tippy.js** | Beautiful tooltips on hover | https://unpkg.com/tippy.js@6 |
| **Prism.js** | Syntax highlighting for code blocks | https://unpkg.com/prismjs@1 |
| **Particles.js** | Animated particle background | https://cdn.jsdelivr.net/npm/particles.js |

---

## Page Structure

```
index.html (main entry)
├── assets/
│   ├── styles.css (main styles)
│   ├── blog.js (GitHub Issues API fetch)
│   └── images/
├── blog/
│   └── index.html (blog posts page)
└── plans/
    └── developer-portfolio-plan.md
```

---

## Section Breakdown

### 1. Navigation Bar (Fixed)
- Logo/Name on left
- Navigation: Home, About, Projects, Skills, Blog, Contact
- Tippy.js tooltips on nav items
- Mobile: Hamburger menu

### 2. Hero Section
- Name and title with gradient text
- Animated particle background (Particles.js)
- Brief tagline
- CTA buttons: View Projects, Contact Me

### 3. About Section
- Personal bio (placeholder)
- Developer background
- Current focus

### 4. Projects Section
- Grid of project cards
- Each card: thumbnail, name, description, tech tags, demo/github links
- Tippy.js tooltips on tech tags

### 5. Skills Section
- Categorized skills with icons
- Visual skill bars or tag clouds

### 6. Blog Section
- **GitHub Issues Integration:**
  - Fetch issues from GitHub repository labeled "blog"
  - Display as post cards (title, date, excerpt)
  - Click to view full post (opens GitHub Issue)
- Fallback: Static blog posts if API fails

### 7. Contact Section
- Contact form ( Netlify Forms or Formspree)
- Social links with Tippy.js tooltips
- Email display

### 8. Footer
- Copyright
- Social icons

---

## Design System

### Color Palette
```css
--bg-primary: #0a0a0a (near black)
--bg-secondary: #141414
--bg-tertiary: #1e1e1e
--text-primary: #ffffff
--text-secondary: #a0a0a0
--accent-primary: #6366f1 (indigo)
--accent-secondary: #ec4899 (pink)
--accent-gradient: linear-gradient(135deg, #6366f1, #ec4899)
```

### Typography
- **Headings:** Inter Bold (800)
- **Body:** Inter Regular (400)
- **Code:** JetBrains Mono

### Visual Effects
- Particles.js background in hero
- Glassmorphism on cards
- Gradient text
- Smooth hover transitions
- Prism.js for code blocks in blog

---

## GitHub Issues Blog Setup

### How It Works
1. Create a GitHub repository (or use existing)
2. Create issues with label "blog"
3. Issue title = post title
4. Issue body = post content (supports Markdown)
5. Website fetches issues via GitHub API and displays them

### API Endpoint
```
GET https://api.github.com/repos/{username}/{repo}/issues?labels=blog&state=open
```

### JavaScript Implementation
```javascript
// Fetch blog posts from GitHub Issues
async function fetchBlogPosts() {
  const response = await fetch(
    'https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/issues?labels=blog&state=open'
  );
  const issues = await response.json();
  return issues.map(issue => ({
    title: issue.title,
    date: new Date(issue.created_at).toLocaleDateString(),
    url: issue.html_url,
    body: issue.body
  }));
}
```

---

## Placeholder Content

### Hero
- Name: [Your Name]
- Title: [Your Title - e.g., Full Stack Developer]
- Tagline: [Your tagline]

### Projects (3 placeholders)
- Project 1: Name, description, tech stack, links
- Project 2: Name, description, tech stack, links
- Project 3: Name, description, tech stack, links

### Skills
- Frontend: [list]
- Backend: [list]
- Tools: [list]

### Blog
- Initial posts fetched from GitHub Issues
- Placeholder: "Create your first blog post by opening a GitHub Issue"

---

## Implementation Steps

1. **Set up project structure**
   - Create folders: assets/, blog/
   - Create main HTML and CSS files

2. **Build index.html**
   - All sections with placeholders
   - Include library CDN links
   - Initialize libraries

3. **Create CSS styles**
   - Design system
   - Responsive layout
   - Animations

4. **Implement JavaScript**
   - Particles.js config
   - Tippy.js initialization
   - GitHub Issues API fetch for blog

5. **Create blog page**
   - Blog listing page
   - Post detail (redirects to GitHub Issue)

6. **Test and deploy**
   - Verify GitHub API works
   - Test responsiveness
   - Deploy to GitHub Pages

---

## Acceptance Criteria

- [ ] All 7 sections implemented
- [ ] Particles.js background animated
- [ ] Tippy.js tooltips working on nav and links
- [ ] Prism.js code highlighting in blog
- [ ] Blog fetches from GitHub Issues
- [ ] Mobile responsive
- [ ] Placeholders clearly marked
- [ ] Fast loading
