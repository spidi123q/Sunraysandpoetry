import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
import { motion } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2026-03-25T10:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const secondsDiff = differenceInSeconds(targetDate, now);

      if (secondsDiff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(secondsDiff / (3600 * 24));
      const hours = Math.floor((secondsDiff % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsDiff % 3600) / 60);
      const seconds = secondsDiff % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-rose-900">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">We are getting married in...</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center bg-white/60 backdrop-blur-sm rounded-lg p-4 min-w-[100px] shadow-sm border border-rose-100"
  >
    <span className="text-4xl md:text-5xl font-bold text-rose-800">{String(value).padStart(2, '0')}</span>
    <span className="text-sm uppercase tracking-wider text-rose-600 mt-2">{label}</span>
  </motion.div>
);

export default Countdown;
