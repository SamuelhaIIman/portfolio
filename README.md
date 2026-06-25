# Samuel Hållman – Full-Stack Software Engineer Portfolio

A modern, fast, and fully responsive single-file portfolio website showcasing my work as a performance-focused full-stack developer.

**Live Demo:** (https://samuelhaiiman.github.io/portfolio/)

---

## ✨ What's New (2026 Version)

This is a complete redesign of my previous portfolio. The new version features:

- **Modern dark UI** with clean typography and smooth interactions
- **Animated hero** with canvas particle background
- **Dynamic, filterable project grid** (Web / Mobile / ML-AI)
- **Rich project detail modals** with impact metrics and tech stacks
- **Professional experience timeline**
- **Categorized technical skills**
- **Fully functional contact form** that sends real emails
- **Mobile-first responsive design**
- **Zero dependencies** – single HTML file (easy to host anywhere)

---

## 🚀 Quick Start

### Run Locally

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. That's it — no build step, no npm install required


## 🛠 Tech Stack

- **HTML5** + **Tailwind CSS** (via CDN)
- **Vanilla JavaScript** (ES6+)
- **Font Awesome 6** icons
- **Canvas API** for hero particles
- **Formsubmit.co** for the contact form (no backend needed)

---

## 📁 Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── Samuel_Hållman_CV_Eng.pdf
├── README.md 
```

---

## 🎨 Customization Guide

### 1. Adding New Projects (Easiest Way)

The projects are stored in a JavaScript array. You can add new ones in two ways:

**Option A – Edit the HTML file directly**

Find the `projectsData` array (around line ~780) and add a new object:

```js
{
    id: 6,
    title: "Your New Project Name",
    shortDesc: "One-line description for the card...",
    longDesc: "Full detailed description shown in the modal...",
    category: "web",           // "web" | "mobile" | "ml"
    tech: ["React", "Node.js", "Tailwind CSS"],
    icon: "fa-rocket",         // Font Awesome icon class
    impact: "What was the measurable result?",
    github: "https://github.com/SamuelhaIIman/your-repo",
    demo: "https://your-live-demo.com",
    type: "Personal Project"
}
```

**Option B – Use the console helper (great for testing)**

Open the portfolio in a browser → DevTools Console → paste:

```js
window.addNewProject({
    id: 6,
    title: "New Project",
    shortDesc: "...",
    longDesc: "...",
    category: "web",
    tech: ["JavaScript", "Three.js"],
    icon: "fa-cube",
    impact: "Achieved X% improvement...",
    github: "#",
    demo: "#",
    type: "Personal Project"
});
```

The new project will instantly appear in the grid.

### 2. Updating Links

- GitHub, LinkedIn, old portfolio → search for the URLs in the HTML
- CV download → already linked to `Samuel_Hållman_CV_Eng.pdf`
- Live demo links → update the `demo` field in each project object

### 3. Changing Colors / Theme

The main accent color is `#6366f1` (indigo). You can change it by editing the Tailwind classes or the CSS custom property.

### 4. Adding Your Photo

Replace the placeholder avatar (the circle with "SH") with your own photo. Look for the avatar section in the About area.

---

## 📧 Contact Form – How It Works

The contact form is connected to **Formsubmit.co** and sends real emails to `samuel.hollman@hotmail.com`.

**How it works:**
- User fills out the form and clicks "SEND MESSAGE"
- The form is submitted via AJAX (no page reload)
- You receive a nicely formatted email
- User sees a success toast and the form resets

**No signup required** for basic usage. Formsubmit.co is free and reliable for static sites.

**Optional improvements later:**
- Add your own custom thank-you page (`_next` hidden field)
- Enable captcha if you get spam
- Switch to Formspree or EmailJS if you want more features

---

## 🌍 Deployment (Recommended: GitHub Pages)

This portfolio is perfect for GitHub Pages:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch and root folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

**Alternative free hosts:**
- Vercel (drag & drop the HTML file)
- Netlify (drag & drop)
- Cloudflare Pages

---

## 📋 Sections Overview

| Section          | Description                                      |
|------------------|--------------------------------------------------|
| Hero             | Strong headline + animated particle background   |
| About            | Bio + key achievement stats                      |
| Experience       | Professional timeline with impact bullets        |
| Skills           | Categorized technical skills (Languages, Frontend, Backend, Tools) |
| Projects         | Filterable grid + detailed modals                |
| Education        | BBA in Business Information Technology           |
| Contact          | Working email form + social links                |

---

## 📜 License

This portfolio is built for personal and professional use. Feel free to use the structure as inspiration, but please credit me if you reuse large parts of the code.

---

## 🤝 Get In Touch

- **Email:** [samuel.hollman@hotmail.com](mailto:samuel.hollman@hotmail.com)
- **Phone:** +358 40 679 7988
- **GitHub:** [SamuelhaIIman](https://github.com/SamuelhaIIman)
- **LinkedIn:** [Samuel Hållman](https://www.linkedin.com/in/samuel-h%C3%A5llman-131217266/)

---

**Built with ❤️ in Lahti, Finland**  
*Last updated: June 2026*

---

*This README was generated for the new modern portfolio (2026). The previous version is archived in git history if needed.*
