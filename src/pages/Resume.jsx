/* eslint-disable no-unused-vars */
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
  h2: ({ children, className = '', ...props }) => (
    <motion.h2
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.h2>
  ),
  h3: ({ children, className = '', ...props }) => (
    <motion.h3
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.h3>
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

function Resume({ isDark }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'KCC Institute of Technology and Management, Greater Noida',
      year: '2021 - 2025',
      achievements: ['Graduated with First Class (CGPA: 7.56/10)'],
    },
    {
      degree: '12th Grade',
      institution: 'D.A.V Public School, Gevra',
      year: '2020-2021',
      achievements: ['Completed with First Division (Percentage: 90%)'],
    },
    {
      degree: '10th Grade',
      institution: 'D.A.V Public School, Gevra',
      year: '2018-2019',
      achievements: ['Completed with First Division (Percentage: 87%)'],
    },
  ];

  const experience = [
    {
      title: 'IT Intern',
      company: 'Invest India',
      location: 'New Delhi, India',
      duration: 'December 2024 - May 2025',
      responsibilities: [
        'Help in managing the CRM and ERP portal for the organization.',
        'Develop the face recognition system for the organization.',
      ],
    },
  ];

  const skills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'CPP', level: 85 },
    { name: 'React.js', level: 50 },
    { name: 'C', level: 70 },
    { name: 'JavaScript', level: 60 },
    { name: 'Python', level: 30 },
  ];

  const certifications = [
    // {
    //   title: 'AWS Certified Solutions Architect – Associate',
    //   issuer: 'Amazon Web Services',
    //   year: '2022',
    // },
    // {
    //   title: 'Certified Kubernetes Administrator (CKA)',
    //   issuer: 'Cloud Native Computing Foundation',
    //   year: '2021',
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

      {/* Main Content */}
      <motionComponents.section
        className="relative z-10 py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
          {/* Hero Section */}
          <motionComponents.div className="text-center mb-12">
            <motionComponents.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  Professional Resume
                </span>
              </div>
            </motionComponents.div>
            <motionComponents.h2
              className={`text-3xl md:text-4xl font-bold transition-colors duration-700 ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My Professional Journey
            </motionComponents.h2>
            <motionComponents.p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-700 mt-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am a passionate and driven developer currently pursuing a B.Tech
              in Computer Science. With a strong interest in building scalable
              and impactful digital solutions, I’ve honed my skills as a Full
              Stack Developer, working across the entire web development
              stack—from front-end interfaces to robust back-end APIs. My core
              technical expertise lies in C++, JavaScript, Node.js, Express.js,
              MongoDB, and React. I've consistently strengthened my
              problem-solving capabilities by solving 100+ problems on LeetCode
              and earning a 5-star rating on HackerRank in C++. During my
              academic journey, I gained valuable industry exposure as an IT
              Intern at Invest India, where I worked on real-world projects,
              collaborated with experienced professionals, and deepened my
              understanding of enterprise-level systems and development
              practices. I continuously seek opportunities to learn, grow, and
              contribute to innovative projects that push the boundaries of
              technology.
            </motionComponents.p>
            <motionComponents.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motionComponents.button
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
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="relative z-10 flex items-center space-x-2"
                >
                  <span>Download Resume</span>
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
                </a>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </motionComponents.button>
            </motionComponents.div>
          </motionComponents.div>

          {/* Education Section */}
          <motionComponents.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motionComponents.h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Education
            </motionComponents.h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motionComponents.div
                  key={edu.degree}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
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
                  <motionComponents.h3
                    className={`text-xl font-semibold transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {edu.degree}
                  </motionComponents.h3>
                  <motionComponents.p
                    className={`text-sm transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {edu.institution} | {edu.year}
                  </motionComponents.p>
                  <ul className="mt-2 list-disc list-inside">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`text-sm transition-colors duration-700 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motionComponents.div>
              ))}
            </div>
          </motionComponents.section>

          {/* Experience Section */}
          <motionComponents.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motionComponents.h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motionComponents.h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motionComponents.div
                  key={job.title}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
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
                  <motionComponents.h3
                    className={`text-xl font-semibold transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {job.title}
                  </motionComponents.h3>
                  <motionComponents.p
                    className={`text-sm transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {job.company} | {job.location} | {job.duration}
                  </motionComponents.p>
                  <ul className="mt-2 list-disc list-inside">
                    {job.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className={`text-sm transition-colors duration-700 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </motionComponents.div>
              ))}
            </div>
          </motionComponents.section>

          {/* Skills Section */}
          <motionComponents.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motionComponents.h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motionComponents.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motionComponents.div
                  key={skill.name}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
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
                  <motionComponents.h3
                    className={`text-lg font-semibold transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {skill.name}
                  </motionComponents.h3>
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
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <motionComponents.p
                    className={`text-sm mt-2 transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Proficiency: {skill.level}%
                  </motionComponents.p>
                </motionComponents.div>
              ))}
            </div>
          </motionComponents.section>

          {/* Certifications Section */}
          <motionComponents.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motionComponents.h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Certifications
            </motionComponents.h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motionComponents.div
                  key={cert.title}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
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
                  <motionComponents.h3
                    className={`text-lg font-semibold transition-colors duration-700 ${
                      isDark ? 'text-blue-300' : 'text-blue-700'
                    }`}
                  >
                    {cert.title}
                  </motionComponents.h3>
                  <motionComponents.p
                    className={`text-sm transition-colors duration-700 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {cert.issuer} | {cert.year}
                  </motionComponents.p>
                </motionComponents.div>
              ))}
            </div>
          </motionComponents.section>
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

export default Resume;
