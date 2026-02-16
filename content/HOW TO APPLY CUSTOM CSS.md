# Custom CSS for Obsidian Publish

Copy the CSS code below and paste it into your Obsidian Publish settings under "Custom CSS".

## How to Apply:
1. Go to **Settings** → **Publish** in Obsidian
2. Scroll to **"Site customization"** section
3. Find the **"Custom CSS"** text area
4. Copy all the CSS code below and paste it there
5. Click **"Publish"** to apply the changes

---

## CSS Code:

```css
/* ============================================
   GARTH SCHWER DIGITAL GARDEN - CUSTOM CSS
   Professional Executive Aesthetic
   ============================================ */

/* === ROOT VARIABLES === */
:root {
  /* Professional Color Palette */
  --primary-blue: #1e3a8a;
  --accent-cyan: #06b6d4;
  --dark-bg: #0f172a;
  --card-bg: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --border-subtle: #334155;
  
  /* Typography */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Roboto Mono', 'Fira Code', monospace;
}

/* === DARK MODE BASE === */
body.theme-dark {
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1a1f2e 100%);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
}

/* === TYPOGRAPHY === */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--accent-cyan), var(--primary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: 1.875rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--border-subtle);
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--accent-cyan);
}

/* === LINKS === */
a {
  color: var(--accent-cyan);
  text-decoration: none;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
}

a:hover {
  color: #22d3ee;
  border-bottom-color: var(--accent-cyan);
}

/* Internal links (wiki-style) */
.internal-link {
  color: var(--accent-cyan);
  font-weight: 500;
}

.internal-link:hover {
  background: rgba(6, 182, 212, 0.1);
  padding: 2px 4px;
  border-radius: 3px;
}

/* === CONTENT CONTAINER === */
.published-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* === CARDS & BLOCKS === */
.markdown-preview-view blockquote {
  background: var(--card-bg);
  border-left: 4px solid var(--accent-cyan);
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* === CODE BLOCKS === */
code {
  font-family: var(--font-mono);
  background: var(--card-bg);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
  color: #22d3ee;
}

pre code {
  display: block;
  padding: 1.5rem;
  overflow-x: auto;
  background: #0a0f1e;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  line-height: 1.5;
}

/* === TAGS === */
.tag {
  background: linear-gradient(135deg, var(--primary-blue), #1e40af);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin: 0.25rem;
  transition: transform 0.2s ease;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(6, 182, 212, 0.3);
}

/* === NAVIGATION === */
.site-header {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.site-header a {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.site-header a:hover {
  color: var(--accent-cyan);
}

/* === GRAPH VIEW === */
.graph-view {
  background: var(--dark-bg);
}

.graph-view .node {
  fill: var(--accent-cyan);
}

.graph-view .link {
  stroke: var(--border-subtle);
}

/* === LISTS === */
ul, ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

li {
  margin: 0.5rem 0;
}

li::marker {
  color: var(--accent-cyan);
}

/* === TABLES === */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
}

th {
  background: var(--primary-blue);
  color: var(--text-primary);
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

tr:hover {
  background: rgba(6, 182, 212, 0.05);
}

/* === HORIZONTAL RULE === */
hr {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
  margin: 2rem 0;
}

/* === METADATA (Frontmatter) === */
.frontmatter {
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  border-left: 3px solid var(--accent-cyan);
}

/* === MOBILE RESPONSIVENESS === */
@media (max-width: 768px) {
  .published-container {
    padding: 2rem 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}

/* === PREMIUM TOUCHES === */
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection styling */
::selection {
  background: var(--accent-cyan);
  color: var(--dark-bg);
}

/* Focus states for accessibility */
a:focus, button:focus {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

/* Subtle animations */
.markdown-preview-view {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
