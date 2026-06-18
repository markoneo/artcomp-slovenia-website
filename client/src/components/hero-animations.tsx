function TurbineBlades({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`absolute w-8 h-8 md:w-10 md:h-10 ${className}`}>
      <g className={className.includes("turbine-1") ? "animate-turbine-1" : className.includes("turbine-2") ? "animate-turbine-2" : "animate-turbine-3"}>
        <line x1="20" y1="20" x2="20" y2="2" stroke="#4aba8a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="20" y1="20" x2="35" y2="28" stroke="#4aba8a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="20" y1="20" x2="5" y2="28" stroke="#4aba8a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}

function FloatingLeaf({ className, animClass }: { className: string; animClass: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={`absolute w-4 h-4 md:w-5 md:h-5 ${animClass} ${className}`}>
      <path d="M10 2C6 2 2 6 2 10C6 10 10 6 10 2Z" fill="#5ec48e" opacity="0.5" />
      <path d="M10 2C14 2 18 6 18 10C14 10 10 6 10 2Z" fill="#45a86e" opacity="0.45" />
    </svg>
  );
}

function Butterfly({ className, animClass }: { className: string; animClass: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`absolute w-4 h-4 md:w-5 md:h-5 ${animClass} ${className}`}>
      <path d="M12 12C9 8 4 7 4 10C4 13 9 14 12 12Z" fill="#e8943a" opacity="0.55" />
      <path d="M12 12C15 8 20 7 20 10C20 13 15 14 12 12Z" fill="#e8943a" opacity="0.55" />
      <path d="M12 12C10 15 8 18 10 18C12 18 12 15 12 12Z" fill="#d4832f" opacity="0.45" />
      <path d="M12 12C14 15 16 18 14 18C12 18 12 15 12 12Z" fill="#d4832f" opacity="0.45" />
    </svg>
  );
}

function Cloud({ className, animClass }: { className: string; animClass: string }) {
  return (
    <svg viewBox="0 0 60 30" fill="none" className={`absolute w-12 h-6 md:w-16 md:h-8 ${animClass} ${className}`}>
      <ellipse cx="30" cy="18" rx="20" ry="10" fill="#c5ddd0" opacity="0.25" />
      <ellipse cx="22" cy="14" rx="14" ry="9" fill="#c5ddd0" opacity="0.2" />
      <ellipse cx="38" cy="15" rx="12" ry="8" fill="#c5ddd0" opacity="0.22" />
    </svg>
  );
}

export default function HeroAnimations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Wind turbines - positioned to overlay the illustration turbines */}
      <TurbineBlades className="turbine-1 left-[12%] top-[38%] md:left-[14%] md:top-[36%]" />
      <TurbineBlades className="turbine-2 left-[38%] top-[30%] md:left-[40%] md:top-[28%]" />
      <TurbineBlades className="turbine-3 right-[28%] top-[32%] md:right-[30%] md:top-[30%]" />

      {/* Floating leaves */}
      <FloatingLeaf className="left-[8%] top-[50%]" animClass="animate-leaf-1" />
      <FloatingLeaf className="left-[25%] top-[28%]" animClass="animate-leaf-2" />
      <FloatingLeaf className="right-[22%] top-[35%]" animClass="animate-leaf-3" />
      <FloatingLeaf className="right-[12%] top-[48%]" animClass="animate-leaf-4" />
      <FloatingLeaf className="left-[45%] top-[25%]" animClass="animate-leaf-1" />
      <FloatingLeaf className="right-[38%] top-[42%]" animClass="animate-leaf-2" />

      {/* Butterflies */}
      <Butterfly className="right-[25%] top-[30%]" animClass="animate-butterfly-1" />
      <Butterfly className="left-[55%] top-[35%]" animClass="animate-butterfly-2" />

      {/* Clouds */}
      <Cloud className="left-[5%] top-[18%]" animClass="animate-cloud-1" />
      <Cloud className="right-[15%] top-[14%]" animClass="animate-cloud-2" />
      <Cloud className="left-[35%] top-[12%]" animClass="animate-cloud-3" />
    </div>
  );
}
