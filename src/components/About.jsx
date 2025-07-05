import { motion } from 'framer-motion';
import { HiCode, HiDesktopComputer, HiDeviceMobile, HiGlobeAlt } from 'react-icons/hi';

const About = () => {
  const services = [

    {
      icon: HiDesktopComputer,
      title: 'Cybersecurity',
      description: 'Exploring Ethical Hacking and SOC while doing hand-on practice and courses on TryhackMe',
    },

    {
      icon: HiCode,
      title: 'Frontend Development',
      description: 'Building beautiful and interactive user interfaces with React',
    },

    {
      icon: HiDeviceMobile,
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile apps with Flutter',
    },

    {
      icon: HiGlobeAlt,
      title: 'CodeCurio',
      description: 'Learning different programming languages and exploring the world of Computer and IT',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6">
              Wanna Know About <span className="gradient-text">Me?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-6 leading-relaxed">
             I am a dedicated Computer & Information Systems Engineering student with a growing passion for cybersecurity and software development. Combining strong technical foundations with practical project experience, I aim to build secure, efficient solutions.

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies or sharing my knowledge with the developer community.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-slate-400 text-lg mb-8 leading-relaxed">
              Now a days I am passionate to gain knowledge in the field of cybersecurity especially Ethical Hacking. Alongside I am learning and practicing app development using Flutter and Dart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 text-center">

              <div className="glass rounded-lg p-4">
                <div className="text-2xl font-bold gradient-text">Multiple</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>

              <div className="glass rounded-lg p-4">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6">

            {services.map((service, index) => (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">

                <div className="text-3xl text-cyan-400 mb-4">
                  <service.icon />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            ))}

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;