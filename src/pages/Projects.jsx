import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Motion utilities
const motionComponents = {
  section: ({ children, className = '', ...props }) => (
    <motion.section
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.section>
  ),
  div: ({ children, className = '', ...props }) => (
    <motion.div
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.div>
  ),
  h1: ({ children, className = '', ...props }) => (
    <motion.h1
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.h1>
  ),
  h2: ({ children, className = '', ...props }) => (
    <motion.h2
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.h2>
  ),
  p: ({ children, className = '', ...props }) => (
    <motion.p
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.p>
  ),
  button: ({ children, className = '', ...props }) => (
    <motion.button
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </motion.button>
  ),
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? 100 : -100,
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 },
  }),
};

const detailVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Projects({ isDark }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Contact Management System',
      description:
        'A scalable contact management system built with Node.js, MongoDB, and Express.js, featuring RESTful APIs, JWT authentication, and real-time updates with WebSocket integration.',
      image: '/cm_logo.png',
      url: 'https://example.com/contact-management',
      tech: ['Node.js', 'MongoDB', 'Express.js', 'JWT', 'WebSocket'],
      features: [
        'RESTful API endpoints for CRUD operations',
        'Secure JWT-based authentication',
        'Real-time contact updates',
        'MongoDB schema optimization',
      ],
      github: 'https://github.com/gauravkrsingh/contact-management',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with a React frontend, Node.js backend, and MongoDB database, featuring payment integration and inventory management.',
      image: '/ecommerce_logo.png',
      url: 'https://example.com/ecommerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      features: [
        'Responsive React-based UI',
        'Secure payment processing with Stripe',
        'Real-time inventory updates',
        'User authentication and authorization',
      ],
      github: 'https://github.com/gauravkrsingh/ecommerce',
    },
    {
      title: 'Task Automation Tool',
      description:
        'A Python-based automation tool for streamlining repetitive tasks, integrated with cloud APIs for enhanced functionality and scalability.',
      image: '/automation_logo.png',
      url: 'https://example.com/task-automation',
      tech: ['Python', 'AWS SDK', 'Docker', 'Redis'],
      features: [
        'Automated task scheduling',
        'Cloud API integration with AWS',
        'Containerized deployment with Docker',
        'Redis-based caching for performance',
      ],
      github: 'https://github.com/gauravkrsingh/task-automation',
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-700 pt-20 ${
        isDark
          ? 'bg-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            ></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            ></div>
          </>
        )}
      </div>

      {/* Floating Code Particles */}
      <motionComponents.div className="absolute inset-0 overflow-hidden">
        {['{}', '<>', '()', '[]', '=>', '&&'].map((symbol, i) => (
          <motionComponents.div
            key={i}
            className={`absolute text-2xl font-mono opacity-20 transition-colors duration-700 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `codeFloat ${
                Math.random() * 15 + 10
              }s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {symbol}
          </motionComponents.div>
        ))}
      </motionComponents.div>

      {/* Hero Section */}
      <motionComponents.section
        className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motionComponents.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${
              isDark
                ? 'bg-gradient-to-r from-white via-gray-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-black to-blue-900 bg-clip-text text-transparent'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motionComponents.h1>
          <motionComponents.p
            className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-700 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore a collection of my work showcasing innovative solutions,
            robust backend systems, and modern web applications.
          </motionComponents.p>
        </div>
      </motionComponents.section>

      {/* Projects Grid */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motionComponents.div
                key={project.title}
                className={`group rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-700 hover-scale ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                    : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? '0 0 20px rgba(59, 130, 246, 0.4)'
                    : '0 0 20px rgba(30, 64, 175, 0.4)',
                }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  ></div>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-3 transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 leading-relaxed transition-colors duration-700 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <motionComponents.div
                    className="mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={detailVariants}
                  >
                    <h4
                      className={`text-sm font-semibold mb-2 transition-colors duration-700 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-700 ${
                            isDark
                              ? 'bg-blue-500/20 text-blue-300'
                              : 'bg-blue-500/20 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motionComponents.div>
                  <motionComponents.div
                    className="mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={detailVariants}
                  >
                    <h4
                      className={`text-sm font-semibold mb-2 transition-colors duration-700 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 text-sm">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`transition-colors duration-700 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motionComponents.div>
                  <div className="flex gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                        isDark
                          ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
                          : 'bg-blue-500/20 text-blue-700 hover:bg-blue-600/30'
                      }`}
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                        isDark
                          ? 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30'
                          : 'bg-gray-500/20 text-gray-600 hover:bg-gray-600/30'
                      }`}
                    >
                      GitHub
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </motionComponents.section>

      {/* Call to Action */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto text-center">
          <motionComponents.h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-700 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Interested in Collaborating?
          </motionComponents.h2>
          <motionComponents.p
            className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-700 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's build something amazing together. Reach out to discuss your
            project ideas or explore potential opportunities.
          </motionComponents.p>
          <motionComponents.button
            onClick={() => (window.location.href = '/contact')}
            className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale backdrop-blur-sm border-2 ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                : 'border-black/20 text-black hover:bg-black/10 hover:border-black/40'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              boxShadow: isDark
                ? '0 0 20px rgba(255, 255, 255, 0.2)'
                : '0 0 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="flex items-center space-x-2">
              <span>Get In Touch</span>
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
          </motionComponents.button>
        </div>
      </motionComponents.section>

      {/* Scroll Indicator */}
      <motionComponents.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motionComponents.div
          className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-700 ${
            isDark ? 'border-white/30' : 'border-black/30'
          }`}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <motionComponents.div
            className={`w-1 h-3 rounded-full mt-2 transition-colors duration-700 ${
              isDark ? 'bg-white/50' : 'bg-black/50'
            }`}
            style={{ animation: 'pulse 2s infinite' }}
          />
        </motionComponents.div>
      </motionComponents.div>
    </div>
  );
}

export default Projects;
