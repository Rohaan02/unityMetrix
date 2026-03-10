import { useState } from "react";

const services = [
  { label: "Cyber Essentials & Cyber Essentials Plus", page: "what-we-do" },
  { label: "Cyber Security Auditing", page: "what-we-do" },
  { label: "IASME Cyber Assurance Certification", page: "what-we-do" },
  { label: "IASME Cyber Baseline Certification", page: "what-we-do" },
  { label: "Penetration Testing", page: "what-we-do" },
  { label: "Vulnerability Scanning & DAST", page: "what-we-do" },
  { label: "GDPR Compliance", page: "what-we-do" },
  { label: "SIEM/SOC Services", page: "what-we-do" },
  { label: "Phishing Testing", page: "what-we-do" },
  { label: "Training", page: "what-we-do" },
];

const whoWeHelp = [
  { label: "SME Owners", page: "who-we-help" },
  { label: "Driven Entrepreneurs", page: "who-we-help" },
  { label: "Directors", page: "who-we-help" },
];

/* Radar-ring logo matching the original Unity Metrix SVG logo style */
function UnityMetrixLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Radar / concentric circles icon */}
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#f5a623] opacity-30"></div>
        {/* Mid ring */}
        <div className="absolute inset-[5px] rounded-full border-2 border-[#f5a623] opacity-50"></div>
        {/* Inner ring */}
        <div className="absolute inset-[10px] rounded-full border-2 border-[#f5a623] opacity-80"></div>
        {/* Center dot */}
        <div className="absolute inset-[15px] rounded-full bg-[#f5a623]"></div>
        {/* Sweep line */}
        <div
          className="absolute top-1/2 left-1/2 w-[44%] h-[2px] bg-[#f5a623] opacity-70 origin-left"
          style={{ transform: "rotate(-40deg)" }}
        ></div>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-black text-2xl tracking-widest uppercase">
          UNITY
        </span>
        <span className="text-[#f5a623] font-bold text-xs tracking-[0.3em] uppercase">
          METRIX
        </span>
      </div>
    </div>
  );
}

export default function Navbar({ currentPage, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhoOpen, setMobileWhoOpen] = useState(false);

  const navLinkClass = (page) =>
    `px-4 py-2 font-semibold text-sm transition-colors flex items-center gap-1 ${
      currentPage === page
        ? "text-[#f5a623]"
        : "text-white hover:text-[#f5a623]"
    }`;

  return (
    <nav className="bg-[#0d1b2a] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* ── Logo ── */}
        <button onClick={() => navigate("home")} className="flex-shrink-0">
          <UnityMetrixLogo />
        </button>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-1 ml-8">

          {/* Home icon */}
          <button
            onClick={() => navigate("home")}
            className={`p-2 transition-colors ${
              currentPage === "home" ? "text-[#f5a623]" : "text-white hover:text-[#f5a623]"
            }`}
            title="Home"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>

          {/* What We Do dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={navLinkClass("what-we-do")}>
              What We Do
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-[#0d1b2a] border border-[#ffffff15] shadow-2xl rounded-lg py-2 w-72 z-50">
                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { navigate(s.page); setServicesOpen(false); }}
                    className="block w-full text-left px-5 py-2.5 text-sm text-gray-300 hover:text-[#f5a623] hover:bg-[#ffffff08] transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Who We Help dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setWhoOpen(true)}
            onMouseLeave={() => setWhoOpen(false)}
          >
            <button className={navLinkClass("who-we-help")}>
              Who We Help
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {whoOpen && (
              <div className="absolute top-full left-0 bg-[#0d1b2a] border border-[#ffffff15] shadow-2xl rounded-lg py-2 w-52 z-50">
                {whoWeHelp.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { navigate(s.page); setWhoOpen(false); }}
                    className="block w-full text-left px-5 py-2.5 text-sm text-gray-300 hover:text-[#f5a623] hover:bg-[#ffffff08] transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <button onClick={() => navigate("pricing")} className={navLinkClass("pricing")}>
            Pricing
          </button>

          {/* Orange CTA button */}
          <button
            onClick={() => navigate("contact")}
            className="ml-4 bg-[#f5a623] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e09415] transition-colors shadow-lg shadow-[#f5a62330]"
          >
            Get a Free Assessment
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1b2a] border-t border-[#ffffff10] px-4 py-4 space-y-1">
          <button
            onClick={() => { navigate("home"); setMobileOpen(false); }}
            className="block w-full text-left px-3 py-2 text-white font-semibold hover:text-[#f5a623] transition-colors"
          >
            Home
          </button>

          {/* What We Do accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-white font-semibold hover:text-[#f5a623] transition-colors"
            >
              What We Do
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={mobileServicesOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 pb-1">
                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { navigate(s.page); setMobileOpen(false); }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-[#f5a623] transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Who We Help accordion */}
          <div>
            <button
              onClick={() => setMobileWhoOpen(!mobileWhoOpen)}
              className="flex items-center justify-between w-full px-3 py-2 text-white font-semibold hover:text-[#f5a623] transition-colors"
            >
              Who We Help
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={mobileWhoOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
            {mobileWhoOpen && (
              <div className="pl-4 space-y-1 pb-1">
                {whoWeHelp.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { navigate(s.page); setMobileOpen(false); }}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-[#f5a623] transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other links */}
          {[["pricing", "Pricing"], ["case-studies", "Case Studies"], ["about-us", "About Us"], ["knowledge-centre", "Knowledge Centre"], ["contact", "Contact"]].map(([page, label]) => (
            <button
              key={page}
              onClick={() => { navigate(page); setMobileOpen(false); }}
              className="block w-full text-left px-3 py-2 text-white font-semibold hover:text-[#f5a623] transition-colors"
            >
              {label}
            </button>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => { navigate("contact"); setMobileOpen(false); }}
            className="w-full mt-2 bg-[#f5a623] text-white py-3 rounded-full font-bold hover:bg-[#e09415] transition-colors"
          >
            Get a Free Assessment
          </button>
        </div>
      )}
    </nav>
  );
}
