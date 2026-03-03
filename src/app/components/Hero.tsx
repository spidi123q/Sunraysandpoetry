import { motion } from "motion/react";
import weddingLogo from "@/assets/WeddingLogo.png";
import MeenathilThaalikettu from "@/assets/MeenathilThaalikettu.png";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      
      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full z-10 space-y-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={MeenathilThaalikettu}
            alt="മീനത്തിൽ താലികെട്ട്"
            className="mx-auto object-contain w-64 md:w-96"
            style={{
              marginTop: "-4rem",
              marginBottom: "-4rem",
            }}
          />
        </motion.div>

        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2
            className="text-4xl md:text-6xl text-rose-800"
            style={{ fontFamily: "'Italianno', cursive" }}
          >
            Kavitha {""}
            <span className="text-2xl md:text-4xl text-rose-600"> weds {""}</span>
            {""} Suraj Kiran
          </h2>

          <p className="text-lg md:text-xl text-rose-700 font-light tracking-widest uppercase">
            March 25, 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;