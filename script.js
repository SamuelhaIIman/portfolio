function initializeTailwind() {
    document.documentElement.style.setProperty('--accent', '#6366f1');
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
    
    const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= scrollPos) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    });
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        });
    });
}

function initHeroParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    let particles = [];
    let animationFrame;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.2 + 0.6;
            this.speedX = (Math.random() * 0.6 - 0.3);
            this.speedY = (Math.random() * 0.6 - 0.3);
            this.opacity = Math.random() * 0.6 + 0.25;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            
            this.x += Math.sin(Date.now() / 4000) * 0.15;
        }
        
        draw() {
            ctx.fillStyle = `rgba(163, 163, 172, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function connectParticles() {
        const maxDistance = 140;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const alpha = (1 - distance / maxDistance) * 0.18;
                    ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        connectParticles();
        animationFrame = requestAnimationFrame(animate);
    }
    
    function initParticles() {
        particles = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 8500), 85);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    resizeCanvas();
    initParticles();
    animate();
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
            initParticles();
        }, 120);
    });
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrame);
        } else {
            animate();
        }
    });
}

const projectsData = [
    {
        id: 1,
        title: "3D Interactive Portfolio",
        shortDesc: "Immersive 3D web portfolio experience built with Three.js featuring interactive models, camera controls, and dynamic lighting.",
        longDesc: "A fully interactive 3D portfolio website showcasing creative work. Users can explore a virtual space, rotate 3D objects, trigger particle effects, and enjoy smooth camera transitions powered by Three.js and GSAP. Built to push the boundaries of what's possible in the browser.",
        category: "web",
        tech: ["JavaScript", "Three.js", "WebGL", "GSAP", "HTML5", "CSS3"],
        icon: "fa-cube",
        impact: "Demonstrated advanced front-end capabilities and creative coding skills. Served as a strong portfolio piece highlighting WebGL performance tuning.",
        github: "https://github.com/SamuelhaIIman",
        demo: "#",
        type: "Personal Project"
    },
    {
        id: 2,
        title: "Face Recognition & Tracking System",
        shortDesc: "Real-time computer vision app that detects, recognizes, and tracks faces in live video streams using Python and OpenCV.",
        longDesc: "Built a complete face recognition pipeline including face detection, encoding generation, matching against known faces, and smooth multi-face tracking across video frames. Integrated with webcam input and achieved reliable performance on consumer hardware.",
        category: "ml",
        tech: ["Python", "OpenCV", "NumPy", "face_recognition", "Matplotlib"],
        icon: "fa-user-check",
        impact: "Successfully detected and tracked multiple faces in real time. Great learning experience in computer vision fundamentals and optimization techniques.",
        github: "https://github.com/SamuelhaIIman",
        demo: "#",
        type: "Personal Project"
    },
    {
        id: 3,
        title: "Neural Network from Scratch",
        shortDesc: "Complete multi-layer neural network implemented in pure Python and NumPy, featuring backpropagation, multiple activation functions, and training visualization.",
        longDesc: "Hand-built neural network without relying on TensorFlow or PyTorch. Includes dense layers, ReLU / Sigmoid / Softmax activations, cross-entropy loss, mini-batch gradient descent, and live training curve visualizations. Trained successfully on classification datasets.",
        category: "ml",
        tech: ["Python", "NumPy", "Matplotlib", "Pandas"],
        icon: "fa-brain",
        impact: "Deepened understanding of neural network internals. Excellent for technical interviews and teaching core machine learning concepts.",
        github: "https://github.com/SamuelhaIIman",
        demo: "#",
        type: "Personal Project"
    },
    {
        id: 4,
        title: "Ridesolutions Android App Modernization",
        shortDesc: "Resolved critical Google Play compliance issues and dramatically improved performance for a legacy Android application (Android 15+).",
        longDesc: "Led the technical resolution of 16KB page size compliance by analyzing native .so libraries with APK Analyzer, fixing alignment problems, restricting ABIs, and enabling legacy packaging. Also modernized legacy Java code to Kotlin and implemented Cloudflare security rules that eliminated fake account creation spam.",
        category: "mobile",
        tech: ["Kotlin", "Java", "Android Studio", "Gradle", "APK Analyzer", "Cloudflare"],
        icon: "fa-mobile-alt",
        impact: "App startup time cut from ~1200ms to ~600ms. Completely stopped weekly fake account spam. App successfully passed Google Play review for Android 15.",
        github: "#",
        demo: "#",
        type: "Professional Work @ Ridesolutions Oy"
    },
    {
        id: 5,
        title: "ARKHALTIA WordPress Performance & SEO Overhaul",
        shortDesc: "Transformed a slow architecture firm website into a fast, SEO-optimized platform. Achieved massive improvements in load time and organic visibility.",
        longDesc: "Performed deep performance audit and optimization on a WordPress site: aggressive image compression, caching layers, database optimization, code minification, and Core Web Vitals improvements. Also executed comprehensive on-page SEO strategy and built beautiful responsive interfaces using Elementor.",
        category: "web",
        tech: ["WordPress", "Elementor", "PHP", "SEO", "PageSpeed Insights", "GTmetrix"],
        icon: "fa-globe",
        impact: "Load time reduced from 5 seconds to 1 second. Organic traffic increased ~40%. Achieved #1 rankings for three important search terms and received strong positive feedback from management.",
        github: "#",
        demo: "#",
        type: "Professional Work @ ARKHALTIA Oy"
    }
];

function renderProjects(filteredProjects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer group`;
        
        card.innerHTML = `
            <div class="h-2.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"></div>
            
            <div class="p-7 flex-1 flex flex-col">
                <!-- Icon + Type -->
                <div class="flex items-center justify-between mb-5">
                    <div class="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        <i class="fas ${project.icon} text-3xl"></i>
                    </div>
                    <div class="text-[10px] px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 font-medium tracking-wider">${project.type.split(' @ ')[0]}</div>
                </div>
                
                <h3 class="font-semibold text-2xl tracking-tight leading-none mb-3 pr-2">${project.title}</h3>
                
                <p class="text-sm text-zinc-400 line-clamp-3 flex-1">${project.shortDesc}</p>
                
                <!-- Tech pills -->
                <div class="flex flex-wrap gap-1.5 mt-5 mb-2">
                    ${project.tech.slice(0, 4).map(tech => 
                        `<span class="tech-pill">${tech}</span>`
                    ).join('')}
                    ${project.tech.length > 4 ? `<span class="tech-pill">+${project.tech.length - 4}</span>` : ''}
                </div>
                
                <div class="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                    <button onclick="event.stopImmediatePropagation(); showProjectModal(${project.id});" 
                            class="font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-x-1.5 group-hover:gap-x-2 transition-all">
                        VIEW DETAILS <i class="fas fa-arrow-right text-[10px]"></i>
                    </button>
                    
                    <div class="flex items-center gap-x-1 text-zinc-500">
                        ${project.github !== '#' ? `<i class="fab fa-github"></i>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            showProjectModal(project.id);
        });
        
        grid.appendChild(card);
    });
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('#project-filters button');
    const grid = document.getElementById('projects-grid');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            let filtered = projectsData;
            if (filter !== 'all') {
                filtered = projectsData.filter(p => p.category === filter);
            }
            
            grid.style.transition = 'opacity .15s ease';
            grid.style.opacity = '0.2';
            
            setTimeout(() => {
                renderProjects(filtered);
                grid.style.opacity = '1';
            }, 160);
        });
    });
    
    renderProjects(projectsData);
}

let currentProjectId = null;

function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    currentProjectId = projectId;
    
    document.getElementById('modal-type').textContent = project.type.toUpperCase();
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-impact').textContent = project.impact;
    document.getElementById('modal-desc').innerHTML = project.longDesc;
    
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const pill = document.createElement('span');
        pill.className = `px-4 py-1.5 text-sm rounded-2xl bg-zinc-800 text-zinc-200 border border-zinc-700`;
        pill.textContent = tech;
        techContainer.appendChild(pill);
    });
    
    const githubLink = document.getElementById('modal-github');
    const demoLink = document.getElementById('modal-demo');
    
    if (project.github && project.github !== '#') {
        githubLink.href = project.github;
        githubLink.style.display = 'flex';
    } else {
        githubLink.style.display = 'none';
    }
    
    if (project.demo && project.demo !== '#') {
        demoLink.href = project.demo;
        demoLink.style.display = 'flex';
    } else {
        demoLink.style.display = 'none';
    }
    
    document.getElementById('project-modal').classList.remove('hidden');
    document.getElementById('project-modal').classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function initModalKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            if (!modal.classList.contains('hidden')) {
                closeModal();
            }
        }
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="flex items-center justify-center gap-x-2">
                <i class="fas fa-spinner fa-spin"></i> 
                <span>SENDING...</span>
            </span>
        `;
        
        try {
            const formData = new FormData(form);
            
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitBtn.innerHTML = `
                    <span class="flex items-center justify-center gap-x-2 text-emerald-400">
                        <i class="fas fa-check-circle"></i> 
                        <span>MESSAGE SENT!</span>
                    </span>
                `;
                
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    showToastNotification();
                }, 1800);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form error:', error);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            alert('Something went wrong. Please try emailing me directly at samuel.hollman@hotmail.com');
        }
    });
}

function showToastNotification() {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] px-6 py-3.5 bg-zinc-900 border border-emerald-900 text-emerald-400 rounded-3xl text-sm flex items-center gap-x-3 shadow-xl`;
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Thank you! I'll get back to you very soon.</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'all .3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.parentNode.removeChild(toast), 300);
    }, 4200);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializePortfolio() {
    initializeTailwind();
    initNavbar();
    initHeroParticles();
    initProjectFilters();
    initModalKeyboard();
    initContactForm();
    initSmoothScroll();
    
    const logo = document.querySelector('.w-10.h-10');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    console.log('%c[Portfolio] Samuel Hållman portfolio initialized successfully.', 'color:#52525b');
    
    setTimeout(() => {
        const firstCard = document.querySelector('#projects-grid .project-card');
        if (firstCard) {
            firstCard.style.transition = 'box-shadow 0.4s ease';
        }
    }, 1200);
}

window.onload = initializePortfolio;

window.addNewProject = function(newProject) {
    projectsData.push(newProject);
    const activeFilterBtn = document.querySelector('#project-filters button.active');
    const currentFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
    
    let filtered = projectsData;
    if (currentFilter !== 'all') {
        filtered = projectsData.filter(p => p.category === currentFilter);
    }
    document.getElementById('projects-grid').innerHTML = '';
    renderProjects(filtered);
};

console.log('%c[Portfolio] Pro tip: Use window.addNewProject({ ... }) in console to test adding new projects dynamically!', 'color:#3f3f46');