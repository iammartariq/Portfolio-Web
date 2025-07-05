import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/iammartariq', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https;//linkedin.com/in/ammartariq24', label: 'LinkedIn' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700/50">

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>

            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">

              {quickLinks.map((link, index) => (

                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}>

                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">

                    {link.name}

                  </button>

                </motion.li>

              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>

            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>

            <div className="flex space-x-3">

              {socialLinks.map((social, index) => (
                
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}>

                  <social.icon className="text-lg" />
                </motion.a>

              ))}
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-400 text-sm flex items-center">
            © 2025 - Made by Ammar
          </p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-slate-600">•</span>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              className="text-slate-400 hover:text-white text-sm transition-all duration-200 flex items-center space-x-1">
              <span>Back to Top</span>
              <span>↑</span>
            </motion.button>

          </div>
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;