export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter text-white">
              Artcomp
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Strategy</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Company</a>
          </div>
          <a
            href="mailto:info@artcomp.net"
            className="hidden sm:inline-flex h-8 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="md:pt-48 md:pb-32 pt-32 pr-6 pb-20 pl-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute inset-0 bg-[length:40px_40px] pointer-events-none -z-10"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 mb-8 animate-fade-in">
            <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">
              Winner of AI Excellence Award
            </span>
          </div>

          <h1 className="md:text-7xl leading-[1.1] text-5xl text-white tracking-tight mb-6 font-semibold animate-fade-in-up">
            Empowering businesses with AI strategy & cloud solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Leverage Artcomp's expertise to harness AI for innovation, efficiency,
            and growth. Transform your data into actionable intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <a
              href="mailto:info@artcomp.net"
              className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              Schedule a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-24 pt-8 border-t border-white/5 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-center text-xs text-gray-500 mb-8 uppercase tracking-widest font-medium">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold tracking-tighter text-white">
              Bench
            </span>
            <span className="text-xl font-serif italic text-white">armoire</span>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              PROVEN
            </span>
            <span className="text-xl font-semibold tracking-wide text-white">
              Glossier.
            </span>
          </div>
        </div>
      </section>

      {/* Video Animation Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/video.artcom.webm" type="video/webm" />
              <source src="/video.artcom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
