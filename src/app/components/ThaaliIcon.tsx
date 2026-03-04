import { LucideProps } from "lucide-react";

const ThaaliIcon = ({ size = 24, className, strokeWidth = 1.5, color, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "currentColor"}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Kerala Thaali"
    {...props}
  >
    {/* Long V-chain */}
    <path d="M1.5 0.5 Q6 5.5, 12 9.5" strokeWidth="0.85" />
    <path d="M22.5 0.5 Q18 5.5, 12 9.5" strokeWidth="0.85" />
    <path d="M2 0.8 Q6.3 5.8, 11.6 9.7" strokeWidth="0.25" strokeDasharray="0.5 0.6" />
    <path d="M22 0.8 Q17.7 5.8, 12.4 9.7" strokeWidth="0.25" strokeDasharray="0.5 0.6" />

    {/* Granule beads */}
    <circle cx="10.9" cy="10.5" r="0.38" fill="currentColor" stroke="none" />
    <circle cx="12"   cy="10.9" r="0.38" fill="currentColor" stroke="none" />
    <circle cx="13.1" cy="10.5" r="0.38" fill="currentColor" stroke="none" />

    {/* Bail ring */}
    <ellipse cx="12" cy="11.8" rx="0.75" ry="0.65" strokeWidth="0.85" />

    {/* Paisley pendant body */}
    <path
      d="M12 12.8 C 9.8 12.8, 8 14.2, 7.8 16.2 C 7.5 18.5, 9 20.5, 10.8 21.6
         C 11.4 22, 12.1 22.2, 12.7 21.9 C 14.4 21.1, 16.1 19.2, 16.3 17
         C 16.6 14.6, 15.1 13, 13.3 12.85 C 12.9 12.8, 12.4 12.8, 12 12.8 Z"
      strokeWidth="1.1"
    />

    {/* Rope border detail */}
    <path
      d="M12 13.65 C 10.3 13.65, 8.85 14.8, 8.65 16.4 C 8.45 18.35, 9.75 20, 11.1 20.9
         C 11.6 21.2, 12.1 21.4, 12.5 21.2 C 13.85 20.55, 15.2 19, 15.4 17.1
         C 15.65 15.2, 14.5 13.9, 13.1 13.7 C 12.8 13.66, 12.4 13.65, 12 13.65 Z"
      strokeWidth="0.3"
      strokeDasharray="0.42 0.32"
    />

    {/* Ruby ring */}
    <circle cx="12" cy="17.3" r="2.2" strokeWidth="0.65" />
    <circle cx="12" cy="17.3" r="1.55" strokeWidth="0.28" strokeDasharray="0.38 0.28" />

    {/* Om symbol */}
    <path d="M10.8 16.6 C 10.1 16.6, 9.7 17.0, 9.75 17.55 C 9.8 18.1, 10.35 18.45, 11.1 18.45" strokeWidth="0.52" />
    <path d="M11.1 17.1 C 10.75 17.1, 10.55 17.3, 10.6 17.6 C 10.65 17.9, 10.95 18.05, 11.3 18.05" strokeWidth="0.42" />
    <path d="M11.1 18.45 C 12.1 18.45, 13 17.95, 13.3 17.1 C 13.55 16.4, 13.1 15.75, 12.4 15.6" strokeWidth="0.52" />
    <line x1="10.3" y1="15.45" x2="13.3" y2="15.45" strokeWidth="0.38" />
    <path d="M12.8 14.95 Q13.3 14.75, 13.1 14.4" strokeWidth="0.35" />
    <circle cx="12.95" cy="14.3" r="0.18" fill="currentColor" stroke="none" />
    <path d="M11.1 18.45 C 11 19, 10.55 19.4, 10 19.2" strokeWidth="0.44" />

    {/* Bottom dangles */}
    <line x1="10.7" y1="21.9" x2="10.4" y2="22.9" strokeWidth="0.45" />
    <circle cx="10.4" cy="23.1" r="0.22" fill="currentColor" stroke="none" />
    <line x1="12.2" y1="22.2" x2="12.2" y2="23.2" strokeWidth="0.45" />
    <circle cx="12.2" cy="23.4" r="0.22" fill="currentColor" stroke="none" />
  </svg>
);

export default ThaaliIcon;