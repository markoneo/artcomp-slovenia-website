import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe as Globe2, MapPin, Brain as Train, Bus, Ship, ArrowRight } from "lucide-react";

const modes = [
  { icon: Train, label: "Rail", count: "180+" },
  { icon: Bus, label: "Coach & Bus", count: "300+" },
  { icon: Ship, label: "Ferry", count: "45+" },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              The Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              One platform, every sustainable mode
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our technology connects rail, coach, bus, and ferry operators into a single
              interoperable network. Travelers book seamlessly across modes while carriers
              gain visibility to a global audience committed to reducing transport emissions.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {modes.map((mode, i) => (
                <motion.div
                  key={mode.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <mode.icon size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{mode.count}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mode.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Connect to the network
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right - Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
              {/* Decorative dots representing cities */}
              <div className="absolute inset-0">
                {[
                  { top: "20%", left: "30%" },
                  { top: "35%", left: "55%" },
                  { top: "25%", left: "65%" },
                  { top: "45%", left: "40%" },
                  { top: "50%", left: "70%" },
                  { top: "30%", left: "45%" },
                  { top: "60%", left: "35%" },
                  { top: "40%", left: "25%" },
                  { top: "55%", left: "60%" },
                  { top: "65%", left: "50%" },
                  { top: "38%", left: "50%" },
                  { top: "28%", left: "38%" },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="absolute"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    </div>
                  </motion.div>
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.line
                    x1="30" y1="20" x2="55" y2="35"
                    stroke="hsl(160 84% 39% / 0.15)" strokeWidth="0.3"
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <motion.line
                    x1="55" y1="35" x2="65" y2="25"
                    stroke="hsl(160 84% 39% / 0.15)" strokeWidth="0.3"
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.1 }}
                  />
                  <motion.line
                    x1="40" y1="45" x2="70" y2="50"
                    stroke="hsl(160 84% 39% / 0.15)" strokeWidth="0.3"
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                  <motion.line
                    x1="45" y1="30" x2="40" y2="45"
                    stroke="hsl(160 84% 39% / 0.15)" strokeWidth="0.3"
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.3 }}
                  />
                  <motion.line
                    x1="35" y1="60" x2="60" y2="55"
                    stroke="hsl(160 84% 39% / 0.15)" strokeWidth="0.3"
                    initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.4 }}
                  />
                </svg>
              </div>

              <Globe2 size={48} className="text-primary/20 mb-4 relative z-10" />
              <p className="text-sm text-muted-foreground relative z-10">35+ countries connected</p>
              <p className="text-xs text-muted-foreground/60 relative z-10 mt-1">Europe, Asia, Americas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
