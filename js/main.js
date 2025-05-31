// ===================================
// PORTFOLIO DATA
// ===================================

const portfolioData = {
  name: "Bhabishya Shrestha",
  title: "Computer Engineering Graduate Student",
  about:
    "Master's student at UT Dallas with a passion for building scalable software solutions. Experienced in full-stack development, mobile engineering, and cloud technologies.",

  education: {
    school: "The University of Texas at Dallas",
    location: "Richardson, TX",
    degrees: [
      {
        degree: "Master of Science in Computer Engineering (Fast Track)",
        date: "May 2025",
      },
      {
        degree: "Bachelor of Science in Computer Engineering (Cum Laude)",
        gpa: "3.78",
        date: "May 2024",
      },
    ],
  },

  experience: [
    {
      title: "Mobile Engineer Intern — Accessibility Team",
      company: "Fidelity Investments",
      location: "Westlake, TX",
      date: "Jun 2024 - Aug 2024",
      achievements: [
        "Produced reusable Jetpack Compose components and automated accessibility lint rules, improving UI consistency and secure-coding standards across five Android apps",
        "Drove Agile story refinement with product, design, and QA; led peer reviews emphasizing performance, accessibility, and WCAG compliance",
        "Delivered features to production on a bi-weekly cadence using Git, Jenkins, and Maven-based pipelines",
      ],
    },
    {
      title: "Software Engineer Intern — Enterprise Technology Platform",
      company: "Southern Glazer's Wine & Spirits",
      location: "Richardson, TX",
      date: "May 2023 - Aug 2023",
      achievements: [
        "Diagnosed and resolved REST API defects in Java microservices, reducing 500-error incidents by 35% across nationwide distributor platforms",
        "Authored JUnit suites following BDD patterns; increased backend code coverage from 65% to 88% and enabled reliable CI gate checks in Jenkins",
        "Implemented SQL performance tuning on MySQL and PostgreSQL schemas, cutting average query latency by 28%",
      ],
    },
    {
      title: "Co-Founder & Full Stack Developer",
      company: "Hidden Gems (Startup)",
      location: "Remote",
      date: "Aug 2022 - Mar 2024",
      achievements: [
        "Architected a cloud-native marketplace that matches local restaurants with businesses for catering, handling full lifecycle from concept to launch",
        "Designed GraphQL schema and REST endpoints, implemented order management flows, and enforced role-based access with AWS Cognito",
        "Integrated AWS Lambda, API Gateway, and SNS for event-driven order processing and notifications; instrumented CloudWatch dashboards to monitor latency and error rates",
      ],
    },
  ],

  projects: [
    {
      title: "Motherboard Identifier",
      description:
        "Engineered an automated inspection tool in Python using OpenCV and Tesseract, achieving 100% text-recognition accuracy on 300+ motherboard images. Packaged pipeline into a cross-platform CLI for batch processing.",
      technologies: ["Python", "OpenCV", "Tesseract", "CLI"],
      link: "https://tinyurl.com/motherboard-inspector",
      icon: "🖥️",
    },
    {
      title: "Breast Cancer Research RAG Chatbot",
      description:
        "Developed a serverless FastAPI backend with OpenAI embeddings hosted on AWS Lambda. Built a secure React front end with AWS Amplify Hosting and Auth for researchers to query literature.",
      technologies: ["FastAPI", "OpenAI", "AWS Lambda", "React", "AWS Amplify"],
      link: "https://qoltbot.netlify.app/",
      icon: "🤖",
    },
  ],

  skills: {
    "Languages & Frameworks": [
      "Python",
      "JavaScript/TypeScript",
      "Kotlin",
      "RESTful API",
      "GraphQL",
      "Jetpack Compose",
      "React Native",
    ],
    "Cloud & DevOps": [
      "AWS (Amplify, Lambda, API Gateway, DynamoDB, Cognito, CloudWatch, S3)",
      "Docker",
      "Git",
      "Jenkins",
      "CI/CD",
    ],
    Databases: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"],
    "Testing & Methodologies": [
      "Agile/Scrum",
      "TDD/BDD",
      "JUnit",
      "Postman",
      "Tosca",
      "Object-Oriented Design",
    ],
    Certifications: ["AWS Cloud Practitioner", "Agile Foundations (AFC-AICI)"],
  },

  contact: {
    email: "bhabishya.k.shrestha@gmail.com",
    github: "https://github.com/bhabishya-shrestha",
    linkedin: "https://linkedin.com/in/shrestha-bhabishya",
  },
};

// ===================================
// COMPONENT DEFINITIONS
// ===================================

const components = {
  // Header Component
  header: () => `
        <div class="header" id="main-header">
            <div class="container">
                <nav class="nav">
                    <div class="logo">BS</div>
                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="#hero-component" class="nav-link">Home</a></li>
                        <li><a href="#about-component" class="nav-link">About</a></li>
                        <li><a href="#experience-component" class="nav-link">Experience</a></li>
                        <li><a href="#projects-component" class="nav-link">Projects</a></li>
                        <li><a href="#skills-component" class="nav-link">Skills</a></li>
                        <li><a href="#contact-component" class="nav-link">Contact</a></li>
                    </ul>
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                        <span>☰</span>
                    </button>
                </nav>
            </div>
        </div>
    `,

  // Hero Component
  hero: () => `
        <div class="hero">
            <div class="container">
                <h1 class="hero-title">${portfolioData.name}</h1>
                <p class="hero-subtitle">${portfolioData.title}</p>
                             <div class="hero-links">
                    <a href="#contact-component" class="btn">Get In Touch</a>
                    <a href="${portfolioData.contact.github}" target="_blank" class="btn btn-outline">View GitHub</a>
                </div>
            </div>
        </div>
    `,

  // About Component
  about: () => `
        <div class="section">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="about-content">
                    <p class="about-text">${portfolioData.about}</p>
                    <div class="education-card">
                        <h3>Education</h3>
                        <h4>${portfolioData.education.school}</h4>
                        <p>${portfolioData.education.location}</p>
                        ${portfolioData.education.degrees
                          .map(
                            (degree) => `
                            <div style="margin-top: 1rem;">
                                <strong>${degree.degree}</strong>
                                ${
                                  degree.gpa
                                    ? `<span style="color: var(--primary-color);"> • GPA: ${degree.gpa}</span>`
                                    : ""
                                }
                                <br>
                                <span style="color: var(--gray-dark);">${
                                  degree.date
                                }</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `,

  // Experience Component
  experience: () => `
        <div class="section">
            <div class="container">
                <h2 class="section-title">Professional Experience</h2>
                <div class="timeline">
                    ${portfolioData.experience
                      .map(
                        (exp, index) => `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="experience-card">
                                <div class="experience-header">
                                    <h3 class="experience-title">${
                                      exp.title
                                    }</h3>
                                    <p class="experience-company">${
                                      exp.company
                                    } • ${exp.location}</p>
                                    <p class="experience-date">${exp.date}</p>
                                </div>
                                <ul class="experience-list">
                                    ${exp.achievements
                                      .map(
                                        (achievement) => `
                                        <li>${achievement}</li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,

  // Projects Component
  projects: () => `
        <div class="section projects">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid">
                    ${portfolioData.projects
                      .map(
                        (project) => `
                        <div class="project-card">
                            <div class="project-image">
                                ${project.icon}
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">${project.title}</h3>
                                <p class="project-description">${
                                  project.description
                                }</p>
                                <div class="project-tech">
                                    ${project.technologies
                                      .map(
                                        (tech) => `
                                        <span class="tech-tag">${tech}</span>
                                    `
                                      )
                                      .join("")}
                                </div>
                                <div class="project-links">
                                    <a href="${
                                      project.link
                                    }" target="_blank" class="btn btn-outline">View Project</a>
                                </div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,

  // Skills Component
  skills: () => `
        <div class="section">
            <div class="container">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-grid">
                    ${Object.entries(portfolioData.skills)
                      .map(
                        ([category, skills]) => `
                        <div class="skill-category">
                            <h3>${category}</h3>
                            <div class="skill-tags">
                                ${skills
                                  .map(
                                    (skill) => `
                                    <span class="skill-tag">${skill}</span>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,

  // Contact Component
  contact: () => `
        <div class="section">
            <div class="container">
                <h2 class="section-title">Let's Connect</h2>
                <div class="contact-content">
                    <p class="about-text">I'm always interested in discussing new opportunities and innovative projects. Feel free to reach out!</p>
                    <div class="contact-links">
                        <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                            <span>📧</span>
                            <span>Email</span>
                        </a>
                        <a href="${portfolioData.contact.github}" target="_blank" class="contact-link">
                            <span>💻</span>
                            <span>GitHub</span>
                        </a>
                        <a href="${portfolioData.contact.linkedin}" target="_blank" class="contact-link">
                            <span>💼</span>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,

  // Footer Component
  footer: () => `
        <div class="footer">
            <div class="container">
                <p>&copy; 2024 ${portfolioData.name}. Built with passion and clean code.</p>
            </div>
        </div>
    `,
};

// ===================================
// RENDER FUNCTIONS
// ===================================

function renderComponent(componentId, componentFunction) {
  const element = document.getElementById(componentId);
  if (element) {
    element.innerHTML = componentFunction();
  }
}

function renderAllComponents() {
  renderComponent("header-component", components.header);
  renderComponent("hero-component", components.hero);
  renderComponent("about-component", components.about);
  renderComponent("experience-component", components.experience);
  renderComponent("projects-component", components.projects);
  renderComponent("skills-component", components.skills);
  renderComponent("contact-component", components.contact);
  renderComponent("footer-component", components.footer);
}

// ===================================
// EVENT HANDLERS
// ===================================

function initializeEventListeners() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenuToggle.innerHTML = navMenu.classList.contains("active")
        ? "<span>✕</span>"
        : "<span>☰</span>";
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        navMenu?.classList.remove("active");
        if (mobileMenuToggle) {
          mobileMenuToggle.innerHTML = "<span>☰</span>";
        }
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    const currentScroll = window.pageYOffset;

    if (header) {
      if (currentScroll > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    lastScroll = currentScroll;
  });

  // Add active nav link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function addExperience(title, company, location, date, achievements) {
  portfolioData.experience.unshift({
    title,
    company,
    location,
    date,
    achievements,
  });
  renderComponent("experience-component", components.experience);
}

function addProject(title, description, technologies, link, icon = "🚀") {
  portfolioData.projects.push({
    title,
    description,
    technologies,
    link,
    icon,
  });
  renderComponent("projects-component", components.projects);
}

function updateContactInfo(type, value) {
  if (portfolioData.contact.hasOwnProperty(type)) {
    portfolioData.contact[type] = value;
    renderComponent("contact-component", components.contact);
  }
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  // Render all components
  renderAllComponents();

  // Initialize event listeners after components are rendered
  setTimeout(() => {
    initializeEventListeners();
  }, 100);

  // Optional: Add loading animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 50);
});

// ===================================
// PUBLIC API (for console testing)
// ===================================

window.portfolioAPI = {
  addExperience,
  addProject,
  updateContactInfo,
  data: portfolioData,
  rerender: renderAllComponents,
};

// Console instructions
console.log(
  "%c Portfolio API Available! ",
  "background: #2563eb; color: white; padding: 5px 10px; border-radius: 3px;"
);
console.log("Try these commands:");
console.log("- portfolioAPI.data (view all data)");
console.log(
  "- portfolioAPI.addProject(title, description, [technologies], link)"
);
console.log(
  '- portfolioAPI.updateContactInfo("email", "newemail@example.com")'
);
