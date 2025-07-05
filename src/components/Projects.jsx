import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
  const projects = [

    {
      title: "FitZone Gym 💪",
      description: 'A aesthetic and cool frontend based website for a gym which covers all essential details. Build on vite+react it uses Framer motion tool for cool transitions and animations.',
      image: '/fitzone.png',
      tags: ['React JS','CSS'],
      liveLink: 'https://fitzonegym.vercel.app',
      codeLink: 'https://github.com/iammartariq/Fitzone',
    },

    {
      title: "Parvaaz – Your All-in-One Flight Booking Platform! ✈️",
      description: 'Travel planning just got a whole lot easier. Parvaaz is a full-featured flight booking platform that aggregates multiple airlines into a single, user-friendly interface, helping users find and book flights that best match their preferences and budget.   Key Features:Universal Flight Search: Compare flights across all major airlines in one place.Smart Filtering: Filter by price, duration, stops, and airline preferences.Secure User Authentication: Simple and safe sign-up and login.Document Management: Store passport and visa information securely.Personalized Recommendations: Get suggestions tailored to your travel profile.Admin Dashboard: Easier for non-IT team members to manage the platform and records.User Profile: An ease for the users to edit their data and access their records.',
      image: '/parvaaz.jpg',
      tags: ['React JS','Express JS','MySQL','Tailwind CSS'],
      liveLink: 'https://parvaaz.vercel.app',
      codeLink: 'https://github.com/iammartariq/parvaaz',
    },

    {
      title: 'Virtual Voice Assistant',
      description: 'This virtual voice assistant works like your very own google-voice-assistant or Siri. I have used speech_recognition and pyttsx3 libraries in python to design and create a responsive and interactive voice assistant. FEATURES: • Modules/Libraries 1. speech_recognition to capture and interpret the commands of users accurately. 2. pyttsx3 implementation for clear and natural responses. 3. Webbrower allows the user to search the web directly through their voice commands. 4. datetime provides the user with current time on request. The virtual voice assistant listens the voice input and adjusts the ambient noises to ensure more accuracy. It then converts the speech (user’s command/input) into text using Google’s speech recognition. It provides the users with adjusted responds (as per now limited responses are available only) while also providing the user with current time conducts web searches and more. The virtual voice assistant is designed to gracefully manage the unrecognized commands/input and system errors.',
      image: '/chatbot.jpg',
      tags: ['Python', 'Speech Recognition', 'Pyttsx3', 'Web Browser'],
      liveLink: "https://github.com/iammartariq/Virtual-Voice-Assistant",
      codeLink: "https://github.com/iammartariq/Virtual-Voice-Assistant",
    },

    {
      title: 'Shopping Mall Management System',
      description: 'A comprehensive management system for shopping malls, allowing users to manage stores, products, and customer interactions efficiently.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python'],
      liveLink: 'https://github.com/iammartariq/Shopping-Mall-System',
      codeLink: 'https://github.com/iammartariq/Shopping-Mall-System'
    },

    {
      title: 'GUI based Calculator',
      description: 'A simple GUI-based calculator built using Python and Tkinter. It supports basic arithmetic operations and provides a user-friendly interface.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Tkinter'],
      liveLink: 'https://github.com/iammartariq/GUI-Based-Calculator',
      codeLink: 'https://github.com/iammartariq/GUI-Based-Calculator'
    },

  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <HiExternalLink className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <HiCode className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
