import Button from "../components/Button";

const profiles = [
  {
    tag: "The BUSY",
    title: "SME Owner",
    icon: "💼",
    color: "from-[#00d4ff] to-[#0099bb]",
    concern: "Cybersecurity seems complex, and I'm not sure why it's crucial for my small business.",
    points: ["You don't need to be a tech expert to stay secure", "Simple steps can prevent 95% of attacks", "Compliance unlocks new contracts and clients", "We handle the complexity, you focus on business"],
    solutions: ["Cyber Essentials certification", "Vulnerability Scanning", "Staff awareness training", "24/7 monitoring support"],
  },
  {
    tag: "The Compliance Driven",
    title: "Entrepreneur",
    icon: "🚀",
    color: "from-[#1a1a2e] to-[#2d2d4e]",
    concern: "I need to be cyber essentials compliant to stay competitive, but I want to keep it straightforward.",
    points: ["Fast-track certification process", "We do the heavy lifting", "Clear roadmap to compliance", "Maintain competitive advantage"],
    solutions: ["Cyber Essentials Plus", "IASME Cyber Assurance", "GDPR Compliance", "Penetration Testing"],
  },
  {
    tag: "The Delegating",
    title: "Director",
    icon: "🏢",
    color: "from-[#00d4ff] to-[#0099bb]",
    concern: "I assumed my IT support had cybersecurity covered, and now I'm not so sure. What should I be asking them?",
    points: ["IT ≠ Cybersecurity — important distinction", "Board-level visibility of cyber risk", "Governance and compliance assurance", "Clear questions to ask your IT team"],
    solutions: ["Cyber Security Auditing", "SIEM/SOC Services", "IASME Certification", "Board-level reporting"],
  },
];

export default function WhoWeHelp({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Client Profiles</p>
          <h1 className="text-5xl font-bold mb-6">Who We Help</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Tailored cybersecurity solutions for every type of business leader.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {profiles.map((p, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i%2===1?"":""}`}>
              <div className={`${i%2===1?"lg:order-2":""}`}>
                <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-wide mb-2">{p.tag}</p>
                <h2 className="text-4xl font-black text-[#1a1a2e] mb-4">{p.title}</h2>
                <div className="bg-gray-50 border-l-4 border-[#00d4ff] rounded-r-xl p-4 mb-6 italic text-gray-600">
                  "{p.concern}"
                </div>
                <div className="space-y-2 mb-6">
                  {p.points.map(pt => (
                    <div key={pt} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      {pt}
                    </div>
                  ))}
                </div>
                <Button variant="primary" onClick={() => navigate("contact")}>Learn the Essentials</Button>
              </div>
              <div className={`${i%2===1?"lg:order-1":""}`}>
                <div className={`bg-gradient-to-br ${p.color} rounded-3xl p-10 text-white`}>
                  <div className="text-6xl mb-6 text-center">{p.icon}</div>
                  <h3 className="text-xl font-bold mb-4">Recommended Services</h3>
                  <div className="space-y-2">
                    {p.solutions.map(s => (
                      <div key={s} className="bg-[#ffffff15] rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#00d4ff] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not finding your match?</h2>
          <p className="text-white/80 mb-8">While these profiles are common, we've tailored solutions for a diverse range of professionals across legal, finance, digital sectors, and more.</p>
          <Button variant="dark" onClick={() => navigate("contact")}>Tell Us Your Unique Needs</Button>
        </div>
      </section>
    </div>
  );
}
