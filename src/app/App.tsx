import "../styles/fonts.css";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Itinerary from "./components/Itinerary";
import Footer from "./components/Footer";
import backgroundImage from "@/assets/61ce1e0b21b85f986abd9ef85e3bca6364cfb74b.png";

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 font-['Lato'] selection:bg-rose-200 relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="relative z-10">
        <Hero />
        
        <main className="max-w-7xl mx-auto">
          <Countdown />
          <Itinerary />
        </main>

        <Footer />
      </div>
      
      {/* Global font style override for Playfair Display since we can't edit tailwind config */}
      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}
