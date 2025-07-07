import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Code,
  Database,
  Server,
  Cloud,
  Wrench,
  Star,
  TrendingUp,
  Award,
  Target,
} from 'lucide-react';

const Skills = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      id: 'all',
      name: 'All Skills',
      icon: Target,
      count: 28,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      count: 8,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      count: 6,
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 'database',
      name: 'Database',
      icon: Database,
      count: 4,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'tools',
      name: 'DevOps',
      icon: Wrench,
      count: 6,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'cloud',
      name: 'Cloud',
      icon: Cloud,
      count: 4,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const skillsData = [
    // Backend Skills
    {
      name: 'Node.js',
      level: 95,
      category: 'backend',
      icon: '🟢',
      color: 'from-green-400 to-green-600',
      description:
        'Server-side JavaScript runtime with advanced API development',
      years: '4+',
    },
    {
      name: 'Express.js',
      level: 92,
      category: 'backend',
      icon: '🚂',
      color: 'from-gray-400 to-gray-600',
      description: 'Fast, unopinionated web framework for Node.js',
      years: '4+',
    },
    {
      name: 'Python',
      level: 90,
      category: 'backend',
      icon: '🐍',
      color: 'from-blue-400 to-blue-600',
      description: 'High-level programming language with extensive libraries',
      years: '3+',
    },
    {
      name: 'Django',
      level: 85,
      category: 'backend',
      icon: '🎸',
      color: 'from-green-500 to-green-700',
      description: 'High-level Python web framework for rapid development',
      years: '3+',
    },
    {
      name: 'FastAPI',
      level: 88,
      category: 'backend',
      icon: '⚡',
      color: 'from-teal-400 to-teal-600',
      description: 'Modern, fast web framework for building APIs with Python',
      years: '2+',
    },
    {
      name: 'C++',
      level: 82,
      category: 'backend',
      icon: '💻',
      color: 'from-blue-500 to-blue-700',
      description: 'General-purpose programming language for system software',
      years: '3+',
    },
    {
      name: 'Java',
      level: 80,
      category: 'backend',
      icon: '☕',
      color: 'from-red-400 to-red-600',
      description:
        'Object-oriented programming language for enterprise applications',
      years: '2+',
    },
    {
      name: 'GraphQL',
      level: 75,
      category: 'backend',
      icon: '🔗',
      color: 'from-pink-400 to-pink-600',
      description: 'Query language for APIs and runtime for executing queries',
      years: '2+',
    },
    // Frontend Skills
    {
      name: 'React',
      level: 93,
      category: 'frontend',
      icon: '⚛️',
      color: 'from-cyan-400 to-cyan-600',
      description: 'JavaScript library for building user interfaces',
      years: '4+',
    },
    {
      name: 'Next.js',
      level: 88,
      category: 'frontend',
      icon: '▲',
      color: 'from-gray-700 to-gray-900',
      description: 'React framework for production-grade applications',
      years: '3+',
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'frontend',
      icon: '🔷',
      color: 'from-blue-400 to-blue-600',
      description:
        'Typed superset of JavaScript that compiles to plain JavaScript',
      years: '3+',
    },
    {
      name: 'Tailwind CSS',
      level: 92,
      category: 'frontend',
      icon: '🌊',
      color: 'from-teal-400 to-teal-600',
      description: 'Utility-first CSS framework for rapid UI development',
      years: '3+',
    },
    {
      name: 'Vue.js',
      level: 78,
      category: 'frontend',
      icon: '💚',
      color: 'from-green-400 to-green-600',
      description:
        'Progressive JavaScript framework for building user interfaces',
      years: '2+',
    },
    {
      name: 'Three.js',
      level: 70,
      category: 'frontend',
      icon: '🎮',
      color: 'from-purple-400 to-purple-600',
      description:
        '3D graphics library for creating interactive web experiences',
      years: '1+',
    },
    // Database Skills
    {
      name: 'MongoDB',
      level: 90,
      category: 'database',
      icon: '🍃',
      color: 'from-green-400 to-green-600',
      description: 'NoSQL document database for modern applications',
      years: '4+',
    },
    {
      name: 'PostgreSQL',
      level: 85,
      category: 'database',
      icon: '🐘',
      color: 'from-blue-400 to-blue-600',
      description: 'Advanced open-source relational database',
      years: '3+',
    },
    {
      name: 'Redis',
      level: 82,
      category: 'database',
      icon: '🔴',
      color: 'from-red-400 to-red-600',
      description: 'In-memory data structure store for caching and queues',
      years: '2+',
    },
    {
      name: 'MySQL',
      level: 80,
      category: 'database',
      icon: '🐬',
      color: 'from-orange-400 to-orange-600',
      description: 'Popular open-source relational database management system',
      years: '3+',
    },
    // Tools & DevOps
    {
      name: 'Docker',
      level: 88,
      category: 'tools',
      icon: '🐳',
      color: 'from-blue-400 to-blue-600',
      description:
        'Platform for developing, shipping, and running applications',
      years: '3+',
    },
    {
      name: 'Kubernetes',
      level: 75,
      category: 'tools',
      icon: '⚓',
      color: 'from-purple-400 to-purple-600',
      description: 'Container orchestration platform for automating deployment',
      years: '2+',
    },
    {
      name: 'Git',
      level: 95,
      category: 'tools',
      icon: '🔧',
      color: 'from-orange-400 to-orange-600',
      description: 'Distributed version control system for tracking changes',
      years: '5+',
    },
    {
      name: 'Jenkins',
      level: 78,
      category: 'tools',
      icon: '🔨',
      color: 'from-blue-500 to-blue-700',
      description: 'Open-source automation server for CI/CD pipelines',
      years: '2+',
    },
    {
      name: 'Linux',
      level: 85,
      category: 'tools',
      icon: '🐧',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Unix-like operating system for servers and development',
      years: '4+',
    },
    {
      name: 'Nginx',
      level: 80,
      category: 'tools',
      icon: '🌐',
      color: 'from-green-400 to-green-600',
      description: 'High-performance web server and reverse proxy',
      years: '3+',
    },
    // Cloud Skills
    {
      name: 'AWS',
      level: 82,
      category: 'cloud',
      icon: '☁️',
      color: 'from-orange-400 to-orange-600',
      description: 'Amazon Web Services cloud computing platform',
      years: '3+',
    },
    {
      name: 'Google Cloud',
      level: 75,
      category: 'cloud',
      icon: '🌤️',
      color: 'from-blue-400 to-blue-600',
      description: 'Google Cloud Platform for scalable applications',
      years: '2+',
    },
    {
      name: 'Azure',
      level: 70,
      category: 'cloud',
      icon: '☁️',
      color: 'from-blue-500 to-blue-700',
      description: 'Microsoft Azure cloud computing services',
      years: '1+',
    },
    {
      name: 'Vercel',
      level: 85,
      category: 'cloud',
      icon: '🚀',
      color: 'from-gray-700 to-gray-900',
      description: 'Cloud platform for static sites and serverless functions',
      years: '2+',
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const getSkillLevelInfo = (level) => {
    if (level >= 90)
      return {
        label: 'Expert',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/20',
      };
    if (level >= 80)
      return {
        label: 'Advanced',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20',
      };
    if (level >= 70)
      return {
        label: 'Intermediate',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/20',
      };
    return {
      label: 'Beginner',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
    };
  };

  const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = value;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}</span>;
  };

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
          <div
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
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-sm mb-8 ${
              isDark
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30'
                : 'bg-gradient-to-r from-purple-200/20 to-pink-200/20 border-purple-300/50'
            }`}
          >
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span
              className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Professional Skills & Expertise
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent'
            }`}
          >
            Technical Excellence
          </h1>

          <p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Mastering cutting-edge technologies to build scalable, robust, and
            innovative solutions that drive business success and user
            satisfaction.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              { label: 'Years Experience', value: 5, suffix: '+' },
              { label: 'Technologies', value: 28, suffix: '+' },
              { label: 'Projects Completed', value: 50, suffix: '+' },
              { label: 'Happy Clients', value: 25, suffix: '+' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div
                  className={`text-3xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div
                  className={`text-sm uppercase tracking-wider ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-500 backdrop-blur-sm border-2 hover-scale ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-purple-500/25`
                      : isDark
                      ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                      : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? 'bg-white/20'
                          : isDark
                          ? 'bg-white/10'
                          : 'bg-black/10'
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => {
              const skillLevel = getSkillLevelInfo(skill.level);

              return (
                <div
                  key={skill.name}
                  className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer hover-scale ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                      : 'bg-white/80 border-gray-200 hover:bg-white hover:border-purple-500/30'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-bold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {skill.name}
                        </h3>
                        <div
                          className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {skill.years} years
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${skillLevel.color} ${skillLevel.bgColor}`}
                    >
                      {skillLevel.label}
                    </div>
                  </div>

                  {/* Skill Description */}
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Proficiency Level
                      </span>
                      <span className={`text-xs font-bold ${skillLevel.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width:
                            hoveredSkill === skill.name
                              ? `${skill.level}%`
                              : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Skills Overview
            </h2>
            <p
              className={`text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              A comprehensive breakdown of my technical expertise across
              different domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: 'Backend',
                count: 8,
                icon: Server,
                color: 'from-blue-400 to-blue-600',
                description: 'Server-side development',
              },
              {
                category: 'Frontend',
                count: 6,
                icon: Code,
                color: 'from-green-400 to-green-600',
                description: 'User interface design',
              },
              {
                category: 'Database',
                count: 4,
                icon: Database,
                color: 'from-orange-400 to-orange-600',
                description: 'Data management',
              },
              {
                category: 'DevOps',
                count: 6,
                icon: Wrench,
                color: 'from-purple-400 to-purple-600',
                description: 'Deployment & automation',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.category}
                  className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover-scale ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white/80 border-gray-200 hover:bg-white'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    <AnimatedCounter value={item.count} />+
                  </div>
                  <div
                    className={`text-sm font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.category} Skills
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`p-8 rounded-3xl backdrop-blur-sm border ${
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-white/80 border-gray-200'
            }`}
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-6 text-purple-500" />
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Ready to Build Something Amazing?
            </h2>
            <p
              className={`text-lg mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Let's collaborate and bring your ideas to life with cutting-edge
              technology and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <a
                  href="/projects"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>View My Projects</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
              <button
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 hover-scale ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <a
                  href="/contact"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <Award className="w-5 h-5" />
                </a>
              </button>
            </div>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default Skills;
