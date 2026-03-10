export default function Footer({ navigate }) {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <button onClick={() => navigate("home")} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00d4ff] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="font-bold text-xl">Unity<span className="text-[#00d4ff]">Metrix</span></span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert cybersecurity services protecting UK SMEs. Guarding your data, reputation, compliance & peace of mind.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-[#ffffff15] rounded-full flex items-center justify-center hover:bg-[#00d4ff] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#ffffff15] rounded-full flex items-center justify-center hover:bg-[#00d4ff] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00d4ff]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[["Home","home"],["Pricing","pricing"],["About Us","about-us"],["What We Do","what-we-do"],["Who We Help","who-we-help"],["Contact","contact"],["Knowledge Centre","knowledge-centre"],["Case Studies","case-studies"]].map(([label,page]) => (
                <li key={page}><button onClick={() => navigate(page)} className="hover:text-[#00d4ff] transition-colors">{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00d4ff]">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Cyber Essentials","Cyber Essentials Plus","Penetration Testing","Vulnerability Scanning","GDPR Compliance","SIEM/SOC Services","Phishing Testing","Security Auditing"].map(s => (
                <li key={s}><button onClick={() => navigate("what-we-do")} className="hover:text-[#00d4ff] transition-colors">{s}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00d4ff]">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <a href="tel:+442039304300" className="hover:text-[#00d4ff] transition-colors">+44 203 9304300</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <a href="mailto:infosec@unitymetrix.com" className="hover:text-[#00d4ff] transition-colors">infosec@unitymetrix.com</a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>167-169 Great Portland Street, 5th Floor, London, W1W 5PF</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Partner & Certifications</p>
              <div className="flex gap-2 flex-wrap">
                {["IASME","NCSC","Cyber Essentials"].map(c => (
                  <span key={c} className="text-xs bg-[#ffffff10] px-2 py-1 rounded text-gray-400">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ffffff15] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>Copyright © 2026 Unity Metrix. All rights reserved</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00d4ff] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
