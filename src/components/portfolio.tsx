'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ExternalLink,
} from 'lucide-react';

export function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4">
            {['Home', 'About', 'Experience', 'Education', 'Projects'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-blue-200 transition-colors ${
                      activeSection === item.toLowerCase() ? 'font-bold' : ''
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Mikus Meikulis</h1>
            <h2 className="text-2xl text-gray-600 mb-8">Frontend Developer</h2>
            <div className="flex justify-center space-x-4">
              <SocialLink
                href="https://github.com/mikusmikus"
                icon={<Github />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/mikus-meikulis/"
                icon={<Linkedin />}
              />
              <SocialLink
                href="https://www.facebook.com/mikus.meikulis"
                icon={<Facebook />}
              />
              <SocialLink
                href="https://www.instagram.com/mikusmeikulis/"
                icon={<Instagram />}
              />
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            I'm a passionate Frontend Developer with over 3 years of experience,
            specializing in TypeScript and React.js. I enjoy creating responsive
            and user-friendly web applications, always striving to learn and
            implement the latest technologies.
          </motion.p>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExperienceItem
              company="TRY Dig Latvia"
              position="Frontend Developer"
              duration="Jul 2021 - Present · 3 yrs 5 mos"
              location="Riga, Latvia · Hybrid"
              skills={['TypeScript', 'React.js']}
            />
            <ExperienceItem
              company="BORN DIGITAL Latvia"
              position="Frontend Developer"
              duration="Mar 2021 - May 2021 · 3 mos"
              location="Riga, Latvia"
            />
            <ExperienceItem
              company="CODELEX"
              position="Frontend Developer"
              duration="Oct 2020 - Mar 2021 · 6 mos"
              location="Riga, Latvia"
            />
          </motion.div>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">
              Rīgas Tehniskā universitāte (Riga Technical University)
            </h3>
            <p className="text-gray-600">
              Bachelor's degree, Financial Engineering
            </p>
            <p className="text-gray-600">2013 - 2017</p>
          </motion.div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Card Memory Game"
              url="https://github.com/mikusmikus/Card-memory-game"
            />
            <ProjectCard
              title="Color Game"
              url="https://github.com/mikusmikus/COLOR-GAME"
            />
            <ProjectCard
              title="Blog"
              url="https://github.com/mikusmikus/BLOG"
            />
            <ProjectCard
              title="Snake Game"
              url="https://github.com/mikusmikus/SNAKE"
            />
            <ProjectCard
              title="Drag and Drop"
              url="https://github.com/mikusmikus/drag-drop"
            />
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Mikus Meikulis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      {icon}
    </a>
  );
}

function ExperienceItem({
  company,
  position,
  duration,
  location,
  skills = [],
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold">{company}</h3>
      <p className="text-gray-600">{position}</p>
      <p className="text-gray-500">{duration}</p>
      <p className="text-gray-500">{location}</p>
      {skills.length > 0 && (
        <div className="mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mt-2"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ title, url }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
      >
        View on GitHub
        <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </motion.div>
  );
}
