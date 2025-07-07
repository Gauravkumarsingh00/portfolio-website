import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const motion = {
  nav: ({ children, className = '', ...props }) => (
    <nav
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </nav>
  ),
  div: ({ children, className = '', ...props }) => (
    <div
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </div>
  ),
  h1: ({ children, className = '', ...props }) => (
    <h1
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </h1>
  ),
  li: ({ children, className = '', ...props }) => (
    <li
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </li>
  ),
  button: ({ children, className = '', ...props }) => (
    <button
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </button>
  ),
};

function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/resume', label: 'Resume', icon: '📄' },
    { path: '/contact', label: 'Contact', icon: '📬' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl'
              : 'bg-white/90 backdrop-blur-lg border-b border-black/10 shadow-2xl'
            : isDark
            ? 'bg-transparent'
            : 'bg-transparent'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          {isDark ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-blue-900/20 opacity-80"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-5 right-1/3 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/20 to-blue-50/30"></div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-5 right-1/3 w-16 h-16 bg-purple-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </>
          )}
        </div>

        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            <motion.div className="flex items-center space-x-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'bg-gradient-to-br from-blue-600 to-purple-700 shadow-lg shadow-blue-600/25'
                }`}
              >
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <motion.h1
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
                }`}
              >
                Gaurav Kumar Singh
              </motion.h1>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.li key={item.path} className="relative">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                          isActive
                            ? isDark
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                            : isDark
                            ? 'text-gray-300 hover:text-white hover:bg-white/10'
                            : 'text-gray-700 hover:text-black hover:bg-black/10'
                        }`
                      }
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-300 hover-scale ${
                  isDark
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40'
                    : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40'
                }`}
              >
                {isDark ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover-scale ${
                  isDark
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
                }`}
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-black hover:bg-black/10'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <motion.div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900'
              : 'bg-gradient-to-b from-white via-gray-50 to-white'
          } backdrop-blur-lg border-l ${
            isDark ? 'border-white/10' : 'border-black/10'
          } shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover-scale ${
                        isActive
                          ? isDark
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-black hover:bg-black/10'
                      }`
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200/20">
              <p
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Backend Developer & System Architect
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
