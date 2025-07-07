import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
  p: ({ children, className = '', ...props }) => (
    <motion.p
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.p>
  ),
  form: ({ children, className = '', ...props }) => (
    <motion.form
      className={`${className} transition-all duration-500 ease-out`}
      {...props}
    >
      {children}
    </motion.form>
  ),
  button: ({ children, className = '', ...props }) => (
    <motion.button
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </motion.button>
  ),
  a: ({ children, className = '', ...props }) => (
    <motion.a
      className={`${className} transition-all duration-300 ease-out hover-scale`}
      {...props}
    >
      {children}
    </motion.a>
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

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
  },
};

const statusVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 120,
    },
  },
};

function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: null, error: null });
  const [isPending, setIsPending] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      emailjs.init('afd51c2FNOVy8h7U1'); // Replace with your EmailJS Public Key
    } catch (err) {
      console.error('EmailJS init error:', err);
      setError('Failed to initialize email service');
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setStatus({ message: null, error: null });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: null, error: 'Please fill in all required fields' });
      setIsPending(false);
      return;
    }

    try {
      await emailjs.send(
        'service_2nkuntu', // Replace with your EmailJS Service ID
        'template_hravyqf', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'afd51c2FNOVy8h7U1' // Replace with your EmailJS Public Key
      );
      setStatus({ message: 'Message sent successfully!', error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        message: null,
        error: 'Error sending message. Please try again.',
      });
    } finally {
      setIsPending(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'gks2282003@gmail.com',
      href: 'mailto:gks2282003@gmail.com',
      description: 'Send me an email',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 7587244146',
      href: 'tel:+917587244146',
      description: 'Call me directly',
    },
    {
      icon: '🌐',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/gaurav-kumar-s-33a39b210/',
      description: 'Professional network',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'Check my code',
      href: 'https://github.com/Gauravkumarsingh00',
      description: 'View my projects',
    },
  ];

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Error: {error}. Please check your configuration and try again.</p>
      </div>
    );
  }

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
        className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container max-w-6xl mx-auto">
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
                  Let's Work Together
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
              Let's Connect!
            </motionComponents.h2>
            <motionComponents.p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-700 mt-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to bring your next project to life? Let's discuss how I can
              help you build scalable, high-performance solutions.
            </motionComponents.p>
          </motionComponents.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motionComponents.div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motionComponents.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={
                    method.href.startsWith('http') ? 'noopener noreferrer' : ''
                  }
                  className={`flex items-center p-4 rounded-2xl backdrop-blur-sm border transition-all duration-700 hover-scale ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                      : 'bg-black/5 border-black/10 hover:border-blue-600/30'
                  }`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: isDark
                      ? '0 0 15px rgba(59, 130, 246, 0.3)'
                      : '0 0 15px rgba(30, 64, 175, 0.3)',
                  }}
                >
                  <div
                    className={`text-2xl mr-4 p-2 rounded-full transition-all duration-300 ${
                      isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                    }`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-lg transition-colors duration-700 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {method.label}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-700 ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      {method.value}
                    </p>
                    <p
                      className={`text-sm transition-colors duration-700 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {method.description}
                    </p>
                  </div>
                </motionComponents.a>
              ))}
            </motionComponents.div>

            {/* Contact Form */}
            <motionComponents.form
              onSubmit={handleSubmit}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-700 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-blue-400/30'
                  : 'bg-black/5 border-black/10 hover:border-blue-600/30'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={formVariants}
            >
              <div className="space-y-4">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50'
                      : 'bg-white/50 border-black/20 text-gray-900 placeholder-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50'
                  }`}
                  whileFocus={{
                    scale: 1.02,
                    borderColor: isDark ? '#60A5FA' : '#2563EB',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50'
                      : 'bg-white/50 border-black/20 text-gray-900 placeholder-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50'
                  }`}
                  whileFocus={{
                    scale: 1.02,
                    borderColor: isDark ? '#60A5FA' : '#2563EB',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-300 resize-none ${
                    isDark
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50'
                      : 'bg-white/50 border-black/20 text-gray-900 placeholder-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50'
                  }`}
                  whileFocus={{
                    scale: 1.02,
                    borderColor: isDark ? '#60A5FA' : '#2563EB',
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.textarea>
                <motionComponents.button
                  type="submit"
                  disabled={isPending}
                  className={`w-full p-3 rounded-lg font-semibold text-lg transition-all duration-300 hover-scale ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={{
                    scale: isPending ? 1 : 1.05,
                    boxShadow: isDark
                      ? '0 0 15px rgba(59, 130, 246, 0.3)'
                      : '0 0 15px rgba(30, 64, 175, 0.3)',
                  }}
                  whileTap={{ scale: isPending ? 1 : 0.95 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isPending ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </motionComponents.button>
              </div>
              {status.message && (
                <motionComponents.div
                  className={`mt-4 p-3 rounded-lg bg-green-500/20 border border-green-400/30 transition-all duration-700`}
                  initial="hidden"
                  animate="visible"
                  variants={statusVariants}
                >
                  <p className="text-green-300 text-center font-medium">
                    {status.message}
                  </p>
                </motionComponents.div>
              )}
              {status.error && (
                <motionComponents.div
                  className={`mt-4 p-3 rounded-lg bg-red-500/20 border border-red-400/30 transition-all duration-700`}
                  initial="hidden"
                  animate="visible"
                  variants={statusVariants}
                >
                  <p className="text-red-300 text-center font-medium">
                    {status.error}
                  </p>
                </motionComponents.div>
              )}
            </motionComponents.form>
          </div>
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

export default Contact;
