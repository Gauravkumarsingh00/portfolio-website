/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';

// Simple motion utilities for animations
const motion = {
  div: ({
    children,
    className,
    style,
    initial,
    animate,
    transition,
    variants,
    whileHover,
    ...props
  }) => (
    <div
      className={`${className} transition-all duration-500 ease-out`}
      style={style}
      {...props}
    >
      {children}
    </div>
  ),
  section: ({
    children,
    className,
    style,
    initial,
    animate,
    transition,
    variants,
    ...props
  }) => (
    <section
      className={`${className} transition-all duration-500 ease-out`}
      style={style}
      {...props}
    >
      {children}
    </section>
  ),
  h1: ({
    children,
    className,
    style,
    initial,
    animate,
    transition,
    variants,
    ...props
  }) => (
    <h1
      className={`${className} transition-all duration-500 ease-out`}
      style={style}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    className,
    style,
    initial,
    animate,
    transition,
    variants,
    ...props
  }) => (
    <h2
      className={`${className} transition-all duration-500 ease-out`}
      style={style}
      {...props}
    >
      {children}
    </h2>
  ),
  p: ({
    children,
    className,
    style,
    initial,
    animate,
    transition,
    variants,
    ...props
  }) => (
    <p
      className={`${className} transition-all duration-500 ease-out`}
      style={style}
      {...props}
    >
      {children}
    </p>
  ),
};

function About({ isDark = true }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [currentSkill, setCurrentSkill] = useState(0);
  const observerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
      el.id = `animate-${index}`;
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-rotate skills
  const skills = [
    'Node.js Architecture',
    'System Design',
    'Database Optimization',
    'Frontend Development',
    'API Development',
    'Cpp Problem Solving',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const experience = [
    {
      year: 'December 2024 - May 2025',
      role: 'IT Intern',
      company: 'Invest India',
      description:
        'Developed and maintained RESTful APIs using Node.js, Express.js, and MongoDB, implementing secure authentication and efficient backend logic.',
      achievements: [
        'Improved API response time by 30% by optimizing backend queries and middleware logic. ',
      ],
    },
  ];

  const expertiseAreas = [
    {
      icon: '🏗️',
      title: 'System Architecture',
      description:
        'Designing scalable, maintainable backend architectures that grow with your business needs.',
      skills: [
        'Microservices',
        'Event-Driven Architecture',
        'CQRS',
        'Domain-Driven Design',
      ],
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description:
        'Optimizing applications for speed, efficiency, and resource utilization.',
      skills: [
        'Database Tuning',
        'Caching Strategies',
        'Load Balancing',
        'Memory Management',
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description:
        'Deploying and managing applications in modern cloud environments.',
      skills: [
        'AWS/Azure',
        'Docker/Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code',
      ],
    },
    {
      icon: '🔒',
      title: 'Security & Reliability',
      description:
        'Building secure, robust systems with comprehensive monitoring and error handling.',
      skills: [
        'Authentication/Authorization',
        'Data Encryption',
        'Monitoring',
        'Error Handling',
      ],
    },
  ];

  const personalValues = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Committed to writing clean, maintainable, and tested code',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing',
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'Continuously learning and adapting to industry changes',
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
        isDark
          ? 'bg-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            ></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            ></div>
          </>
        )}
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {['{}', '<>', '()', '[]', '=>', '&&'].map((symbol, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 pt-20 pb-16">
        {/* Hero Section */}
        <motion.section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              data-animate
              className={`transform transition-all duration-1000 ${
                visibleItems.has('animate-0')
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-700 ${
                  isDark
                    ? 'bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
                }`}
              >
                About Me
              </h1>
              <div
                className={`text-2xl md:text-3xl mb-8 font-light transition-colors duration-700 ${
                  isDark ? 'text-blue-300' : 'text-blue-700'
                }`}
              >
                Passionate about{' '}
                <span className="font-bold text-gradient">
                  {skills[currentSkill]}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              data-animate
              className={`transform transition-all duration-1000 delay-200 ${
                visibleItems.has('animate-1')
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
            >
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-700 ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-black/5 border-black/10'
                }`}
              >
                <div className="text-6xl mb-6 text-center">👨‍💻</div>
                <h2
                  className={`text-3xl font-bold mb-4 transition-colors duration-700 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  Hello, I'm Gaurav
                </h2>
                <p
                  className={`text-lg leading-relaxed transition-colors duration-700 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  a passionate Full Stack Developer and B.Tech Computer Science
                  student. Skilled in C++, JavaScript, Node.js, Express.js,
                  MongoDB, and React, I enjoy building efficient and scalable
                  web applications. With 100+ LeetCode problems solved and a
                  5-star HackerRank rating in C++, I have a strong foundation in
                  problem-solving. I’ve also gained practical experience as an
                  IT Intern at Invest India, working on real-world backend
                  systems. Always eager to learn and grow in the tech world.
                </p>
              </div>
            </motion.div>

            <motion.div
              data-animate
              className={`transform transition-all duration-1000 delay-400 ${
                visibleItems.has('animate-2')
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="space-y-6">
                {personalValues.map((value, index) => (
                  <div
                    key={value.title}
                    className={`flex items-start space-x-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-700 hover:scale-105 ${
                      isDark
                        ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                        : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3
                        className={`font-semibold mb-1 transition-colors duration-700 ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-700 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Expertise Areas */}
          <motion.div
            data-animate
            className={`mb-20 transform transition-all duration-1000 delay-600 ${
              visibleItems.has('animate-3')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2
              className={`text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                      : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-700 ${
                      isDark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-2 py-1 rounded-full transition-colors duration-700 ${
                          isDark
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-500/20 text-blue-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            data-animate
            className={`mb-20 transform transition-all duration-1000 delay-800 ${
              visibleItems.has('animate-4')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h2
              className={`text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              Professional Journey
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover:scale-[1.02] ${
                    isDark
                      ? 'bg-white/5 border-white/10'
                      : 'bg-black/5 border-black/10'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`md:w-32 flex-shrink-0 text-sm font-mono transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {exp.year}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 transition-colors duration-700 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <h4
                      className={`text-lg mb-3 transition-colors duration-700 ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      {exp.company}
                    </h4>
                    <p
                      className={`mb-4 transition-colors duration-700 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className={`text-xs px-3 py-1 rounded-full transition-colors duration-700 ${
                            isDark
                              ? 'bg-green-500/20 text-green-300'
                              : 'bg-green-500/20 text-green-700'
                          }`}
                        >
                          ✓ {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            data-animate
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              visibleItems.has('animate-5')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-700 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400/20'
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-600/20'
              }`}
            >
              <h2
                className={`text-3xl font-bold mb-4 transition-colors duration-700 ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Ready to Build Something Amazing?
              </h2>
              <p
                className={`text-lg mb-8 transition-colors duration-700 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Let's discuss how I can help bring your backend vision to life
                with scalable, efficient solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = '/contact')}
                  className="group px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Let's Connect</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => (window.location.href = '/')}
                  className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm border-2 ${
                    isDark
                      ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                      : 'border-black/20 text-black hover:bg-black/10 hover:border-black/40'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Portfolio</span>
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes codeFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        .text-gradient {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981);
          background-size: 300% 300%;
          animation: gradientShift 4s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
