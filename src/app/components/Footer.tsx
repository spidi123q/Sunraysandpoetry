import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-rose-50/80 backdrop-blur-sm py-12 text-center text-rose-800 relative z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-lg tracking-wide">For more wedding related updates</p>
        <a 
          href="https://www.instagram.com/sunraysandpoetry" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-rose-100 rounded-full shadow-sm border border-rose-200 transition-colors duration-300 font-medium"
        >
          <Instagram className="w-5 h-5" />
          <span>@sunraysandpoetry</span>
        </a>
        <p className="mt-8 text-xs text-rose-400 uppercase tracking-widest">
          With Love
        </p>
      </div>
    </footer>
  );
};

export default Footer;
