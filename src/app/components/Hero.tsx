import { motion } from "motion/react";
import weddingLogo from "@/assets/Gemini_Generated_Image_1ysj561ysj561ysj.png";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      
      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full z-10 space-y-8">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-48 md:w-64 aspect-square relative"
        >
          <img 
            src={weddingLogo} 
            alt="Wedding Logo" 
            className="w-full h-full object-contain opacity-90"
          />
        </motion.div>

        {/* Text Section */}

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-serif text-rose-900 tracking-wide">
              മീനത്തിൽ താലികെട്ട്
            </h1>
            <h2 className="text-2xl md:text-4xl font-serif text-rose-800 py-5">
              Suraj weds Kavitha
            </h2>
          </div>
          <p className="text-lg md:text-xl text-rose-700 font-light tracking-widest uppercase">
            March 25, 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
