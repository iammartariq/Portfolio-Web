import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900"
    >
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-300/40 to-slate-300/20 rounded-full"
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Professional logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="relative">
            <div className="w-20 h-20 mx-auto rounded-sm bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl border border-slate-600/30 flex items-center justify-center backdrop-blur-sm">
              <img
                src="/me.JPG"
                alt="Logo"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-sm"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
              }}
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                  'linear-gradient(225deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                  'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Minimalist loading animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-400/60 to-slate-300/80 rounded-full"
                animate={{
                  height: [4, 16, 4],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Professional typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-200 tracking-[0.1em] mb-2">
            Hi, I'm Ammar Tariq
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mb-4" />
          <p className="text-xs font-light text-slate-400 tracking-[0.4em] uppercase">
            Undergraduate Computer and Information Systems Engineering Student
          </p>
        </motion.div>

        {/* Sophisticated progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="mx-auto mb-8"
        >
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent relative">
            <motion.div
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-blue-500/80 to-blue-400/60"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-0 w-1 h-1 bg-blue-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-blue-400/50"
              animate={{ left: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ marginLeft: '-2px' }}
            />
          </div>
        </motion.div>

        {/* Progress percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-xs font-light text-slate-500 tracking-[0.2em] tabular-nums"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>

      {/* Refined corner accents */}
      <div className="absolute top-12 left-12">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-px bg-gradient-to-r from-blue-400/40 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          className="w-px h-8 bg-gradient-to-b from-blue-400/40 to-transparent"
        />
      </div>
      
      <div className="absolute bottom-12 right-12">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="w-8 h-px bg-gradient-to-l from-blue-400/40 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          className="w-px h-8 bg-gradient-to-t from-blue-400/40 to-transparent ml-7"
        />
      </div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;