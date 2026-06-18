import { Leaf } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: ["Booking Engine", "AI Assistant", "Seat Selector", "After-Sales Tools"],
  },
  {
    title: "Solutions",
    links: ["For Partners", "For Carriers", "For Governments", "EU Green Transition"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "News", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Case Studies", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/90494.jpg" alt="Artcomp Technologies" className="h-9 w-auto object-contain" />
              <span className="text-lg font-bold text-foreground">Artcomp</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Powering the shift to sustainable ground transportation across 35+ countries. An Artcomp Technologies initiative.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-primary">
              <Leaf size={12} />
              <span>Carbon-negative company</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 Artcomp Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
