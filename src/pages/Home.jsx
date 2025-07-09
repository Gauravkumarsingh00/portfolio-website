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

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.1 },
  }),
};

const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 },
  }),
};

function Home({ isDark }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Software Engineer | Full Stack Developer | Tech Enthusiast';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: 'Node.js', icon: '⚡', level: 80 },
    { name: 'Express.js', icon: '🚀', level: 80 },
    { name: 'MongoDB', icon: '🍃', level: 70 },
    { name: 'React', icon: '⚛️', level: 50 },
    { name: 'Cpp', icon: '💻', level: 90 },
    { name: 'C', icon: '🅲', level: 70 },
    { name: 'Python', icon: '🐍', level: 30 },
    { name: 'JavaScript', icon: '🟡', level: 60 },
  ];

  const projects = [
    {
      title: 'Contact Management System',
      description:
        'A role-based contact management system built using Node.js, Express.js, and MongoDB. It allows users to create, update, delete, and view contacts with proper authentication and authorization. Ensures data privacy and efficient contact handling through RESTful APIs.',
      image: '/cm_logo.png',
      url: 'https://github.com/Gauravkumarsingh00/contact_manager',
    },
    {
      title: 'Amazona',
      description:
        'A full-featured Amazon-like eCommerce platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implements a role-based system for admins and users, supporting product browsing, cart management, checkout, and order tracking.',
      image: '/am_logo.png',
      url: 'https://github.com/Gauravkumarsingh00/amazona',
    },
    {
      title: 'Personal Portfoio',
      description:
        'A responsive portfolio website built with React.js and Tailwind CSS, featuring light/dark theme toggle and smooth scrolling animations for enhanced user experience. Deployed on Render to ensure fast and reliableaccess.Built a scalable contact management system with Node.js, MongoDB, and Express.js, featuring RESTful APIs and JWT authentication.',
      image: '/cm_logo.png',
      url: 'https://portfolio-website-cg7i.onrender.com/',
    },
  ];

  const testimonials = [
    // {
    //   quote:
    //     'Gaurav delivered an exceptional backend solution that significantly improved our platform’s performance.',
    //   author: 'John Doe, CTO at TechCorp',
    // },
    // {
    //   quote:
    //     'His expertise in system architecture transformed our application’s scalability and reliability.',
    //   author: 'Jane Smith, Product Manager at InnovateX',
    // },
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
          {/* Status Badge */}
          <motionComponents.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div
              className={`inline-block p-2 rounded-full backdrop-blur-sm border transition-all duration-700 ${
                isDark
                  ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30'
                  : 'bg-gradient-to-r from-green-100/80 to-blue-100/80 border-green-400/50'
              }`}
            >
              <span
                className={`text-sm font-medium px-4 py-2 transition-colors duration-700 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                🟢 Available for New Opportunities
              </span>
            </div>
          </motionComponents.div>

          {/* Main Heading */}
          <motionComponents.h1
            className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight transition-all duration-700 ${
              isDark
                ? 'bg-gradient-to-r from-white via-gray-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-black to-blue-900 bg-clip-text text-transparent'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gaurav Kumar Singh
          </motionComponents.h1>

          {/* Subtitle */}
          <motionComponents.p
            className={`text-xl md:text-2xl lg:text-3xl mb-6 font-light transition-colors duration-700 ${
              isDark ? 'text-blue-300' : 'text-blue-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </motionComponents.p>

          {/* Tagline */}
          <motionComponents.p
            className={`text-base md:text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed transition-colors duration-700 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting robust, scalable backend architectures to power
            next-generation applications with high-performance APIs and
            cloud-native solutions.
          </motionComponents.p>

          {/* Social Links */}
          <motionComponents.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="https://github.com/Gauravkumarsingh00"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover-scale ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                  : 'bg-black/5 border-black/10 hover:border-blue-600/30'
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-kumar-s-33a39b210/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover-scale ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                  : 'bg-black/5 border-black/10 hover:border-blue-600/30'
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motionComponents.div>

          {/* CTA Buttons */}
          <motionComponents.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motionComponents.button
              onClick={() => (window.location.href = '/resume')}
              className={`group relative px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
              }`}
              whileHover={{
                scale: 1.1,
                boxShadow: isDark
                  ? '0 0 20px rgba(59, 130, 246, 0.4)'
                  : '0 0 20px rgba(30, 64, 175, 0.4)',
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Resume</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </motionComponents.button>

            <motionComponents.button
              onClick={() => (window.location.href = '/contact')}
              className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale backdrop-blur-sm border-2 ${
                isDark
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                  : 'border-black/20 text-black hover:bg-black/10 hover:border-black/40'
              }`}
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
          </motionComponents.div>
        </div>
      </motionComponents.section>

      {/* Skills Spotlight */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          <motionComponents.h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Core Technologies
          </motionComponents.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motionComponents.div
                key={tech.name}
                className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                    : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? '0 0 15px rgba(59, 130, 246, 0.3)'
                    : '0 0 15px rgba(30, 64, 175, 0.3)',
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-700 ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}
                >
                  {tech.name}
                </h3>
                <div
                  className={`h-2 rounded-full overflow-hidden transition-colors duration-700 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <motionComponents.div
                    className={`h-full rounded-full bg-gradient-to-r ${
                      isDark
                        ? 'from-blue-500 to-purple-500'
                        : 'from-blue-600 to-purple-700'
                    }`}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  />
                </div>
                <p
                  className={`text-sm mt-2 transition-colors duration-700 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Proficiency: {tech.level}%
                </p>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </motionComponents.section>

      {/* Featured Projects */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          <motionComponents.h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motionComponents.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    ? '0 0 15px rgba(59, 130, 246, 0.3)'
                    : '0 0 15px rgba(30, 64, 175, 0.3)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
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
                </div>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </motionComponents.section>

      {/* Testimonials */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          <motionComponents.h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* What Clients Say */}
          </motionComponents.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motionComponents.div
                key={testimonial.author}
                className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                    : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={testimonialVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? '0 0 15px rgba(59, 130, 246, 0.3)'
                    : '0 0 15px rgba(30, 64, 175, 0.3)',
                }}
              >
                <p
                  className={`text-base mb-4 italic transition-colors duration-700 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  "{testimonial.quote}"
                </p>
                <p
                  className={`text-sm font-semibold transition-colors duration-700 ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}
                >
                  — {testimonial.author}
                </p>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </motionComponents.section>

      {/* Stats Section */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          <motionComponents.h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Achievements
          </motionComponents.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '2+', label: 'Projects Completed', icon: '🚀' },
              { number: '1+', label: 'Years Experience', icon: '⚡' },
              { number: '99%', label: 'Project Satisfaction', icon: '⭐' },
            ].map((stat, index) => (
              <motionComponents.div
                key={stat.label}
                className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                    : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? '0 0 15px rgba(59, 130, 246, 0.3)'
                    : '0 0 15px rgba(30, 64, 175, 0.3)',
                }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div
                  className={`text-3xl font-bold mb-2 transition-colors duration-700 ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm uppercase tracking-wider transition-colors duration-700 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {stat.label}
                </div>
              </motionComponents.div>
            ))}
          </div>
        </div>
      </motionComponents.section>
    </div>
  );
}

export default Home;
