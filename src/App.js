import React, { useState } from 'react';
import './App.css';
import { FaHome, FaUser, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
}

function Header({ activeSection, setActiveSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => handleNavClick(section)}
              >
                {/* Add icons for each section */}
                {section === 'home' && <FaHome />}
                {section === 'about' && <FaUser />}
                {section === 'education' && <FaGraduationCap />}
                {section === 'projects' && <FaProjectDiagram />}
                {section === 'contact' && <FaEnvelope />}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MainContent({ setActiveSection }) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using React.js, hosted on GitHub with responsive design.",
      technologies: ["React", "CSS", "GitHub Pages"]
    },
    {
      title: "CCS112 Activities, Case Studies, and Projects",
      description: "A collection of activities, case studies, and various projects for the course CCS112, showcasing practical application of learned concepts.",
      technologies: ["Java", "MySQL", "CSS", "Laravel"]
    },
    {
      title: "Lab Exams",
      description: "A series of lab exams for CCS112 to test practical knowledge and skills on various topics.",
      technologies: ["Java", "PHP", "SQL", "Laravel"]
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <main className="main-content">
      <section id="home" className="section hero-section">
        <div className="hero-content">
          <h1><FaHome /> Welcome!</h1>
          <p className="intro-text">
            Hello, I am <span className="highlight">Marlon C. Inocencio</span>, a 3rd year Information Technology student at Pamantasan ng Cabuyao under the College of Computing Studies.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">
          <FaUser className="section-icon" /> About Me
        </h2>
        <div className="about-content">
          <p>
            I'm a passionate tech enthusiast with a strong interest in web development and problem-solving. My journey in technology began when I built my first website, and since then, I've been continuously learning new technologies and frameworks to sharpen my skills.

            Although I’m not yet where I want to be in my chosen program, I’m committed to improving every day and pushing myself to grow. I believe that consistent effort and curiosity are the keys to progress.
          </p>
          <p>
            While studying, I was also actively involved in cheerleading, which taught me discipline, teamwork, and how to balance multiple commitments with enthusiasm. Outside of coding, I have a deep love for children and cherish spending time with my friends. I'm an outgoing person who thrives on social energy and new challenges—staying still for too long just isn't my style! Whether it's diving into a new strategy game, exploring tech blogs, or tackling a fresh personal project, I'm always looking for the next thing to keep my mind engaged.
          </p>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title flex items-center gap-2">
          <FaGraduationCap className="section-icon" />
          Education
        </h2>
        <div className="education-section space-y-6">
          <div className="education-item bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Pamantasan ng Cabuyao</h3>
            <p className="text-sm text-gray-600 italic">Bachelor of Science in Information Technology</p>
            <p className="text-sm text-gray-500">2022 – Present</p>
            <p className="text-sm text-gray-700">Specialization: Web Development and Software Engineering</p>
          </div>

          <div className="education-item bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Southville 1 Integrated National High School</h3>
            <p className="text-sm text-gray-600 italic">Senior High School – STEM Strand</p>
            <p className="text-sm text-gray-500">2019 – 2021</p>
          </div>

          <div className="education-item bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Southville 1 Integrated National High School</h3>
            <p className="text-sm text-gray-600 italic">Junior High School</p>
            <p className="text-sm text-gray-500">2015 – 2019</p>
          </div>

          <div className="education-item bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Southville 1 Elementary School</h3>
            <p className="text-sm text-gray-600 italic">Elementary & Pre-School</p>
            <p className="text-sm text-gray-500">2008 – 2015</p>
          </div>

          <div className="education-item bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Responsive Web Design – FreeCodeCamp</li>
              <li>Introduction to Programming – Coursera</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">
          <FaProjectDiagram className="section-icon" /> Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p className="tech-used">
                Technology used: {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">
          <FaEnvelope className="section-icon" /> Contact Me
        </h2>
        <div className="contact-content">
          <p className="contact-email">Email: marlon.inocencio@example.com</p>
          <div className="social-links">
            <a href="https://github.com/marlon-inocencio" target="_blank" rel="noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/marlon-inocencio" target="_blank" rel="noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Marlon C. Inocencio. All rights reserved.</p>
    </footer>
  );
}

export default App;
