import { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const motion = {
  footer: ({ children, className, ...props }) => (
    <footer
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </footer>
  ),
  div: ({ children, className, ...props }) => (
    <div
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </div>
  ),
  p: ({ children, className, ...props }) => (
    <p
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, className, ...props }) => (
    <a
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </a>
  ),
  button: ({ children, className, ...props }) => (
    <button
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </button>
  ),
};

function Footer({ isDark }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/gaurav-kumar-s-33a39b210/',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/Gauravkumarsingh00',
      hoverColor: 'hover:text-gray-300',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: 'https://x.com/GAURAVSINGH9876',
      hoverColor: 'hover:text-blue-400',
    },
    // {
    //   name: 'Email',
    //   icon: (
    //     <svg
    //       className="w-5 h-5"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //       />
    //     </svg>
    //   ),
    //   url: 'gks2282003@gmail.com',
    //   hoverColor: 'hover:text-red-400',
    // },
  ];

  const quickLinks = [
    { name: 'About', url: '/about' },
    { name: 'Skills', url: '/skills' },
    { name: 'Projects', url: '/projects' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ];

  const techStack = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'React.js',
    'Cpp',
    'Python',
  ];

  return (
    <motion.footer
      className={`relative overflow-hidden transition-all duration-700 ${
        isDark
          ? 'bg-black border-t border-white/10'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-black/10'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>
            <div
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 128,
                top: mousePosition.y - 128,
              }}
            ></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.02),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.02),transparent_50%)]"></div>
            <div
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 blur-3xl transition-all duration-1000 ease-out"
              style={{
                left: mousePosition.x - 128,
                top: mousePosition.y - 128,
              }}
            ></div>
          </>
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-colors duration-700 ${
              isDark ? 'bg-blue-400/20' : 'bg-blue-600/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 30 + 20}s infinite linear`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg shadow-blue-600/25'
                }`}
              >
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <h3
                className={`text-xl font-bold transition-colors duration-700 ${
                  isDark
                    ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
                }`}
              >
                Gaurav Kumar Singh
              </h3>
            </div>
            <motion.p
              className={`text-base mb-6 leading-relaxed transition-colors duration-700 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              full-stack developer with a passion for building scalable web
              applications and APIs. Experienced in Node.js, Express.js,
              MongoDB, and React.js.
            </motion.p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50'
                      : 'bg-black/5 border-black/10 text-gray-700 hover:border-blue-600/50'
                  } ${social.hoverColor}`}
                  title={social.name}
                >
                  {social.icon}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div>
            <h4
              className={`text-lg font-semibold mb-4 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.url}
                    className={`text-sm transition-all duration-300 hover:translate-x-1 ${
                      isDark
                        ? 'text-gray-400 hover:text-blue-300'
                        : 'text-gray-600 hover:text-blue-700'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div>
            <h4
              className={`text-lg font-semibold mb-4 transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-2 py-1 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-gray-300'
                      : 'bg-black/5 border-black/10 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div
          className={`pt-8 border-t transition-colors duration-700 ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className={`text-sm transition-colors duration-700 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              © 2025 Gaurav Kumar Singh • FullStack Developer
            </motion.p>
            <motion.p
              className={`text-sm flex items-center space-x-2 transition-colors duration-700 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <span>Built with</span>
              <span className="text-red-500 animate-pulse">💻</span>
              <span>and</span>
              <span className="text-yellow-600">☕</span>
              <span>by me</span>
            </motion.p>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
            isDark
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-600/25'
          }`}
          title="Back to Top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </motion.footer>
  );
}

export default Footer;
