import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const cases = [
  { icon: "📢", industry: "Digital Marketing", company: "Aura Media", challenge: "Needed to achieve Cyber Essentials and IASME Cyber Assurance certification to bid for larger contracts.", solution: "Unity Metrix guided the team through the full certification process, including vulnerability scanning and system hardening.", outcome: "Achieved both Cyber Essentials and IASME Cyber Assurance certification within 6 weeks.", name: "Chris Hadland", role: "Director" },
  { icon: "⚖️", industry: "Legal Services", company: "Meridian Law", challenge: "Law firm handling sensitive client data needed GDPR compliance and Cyber Essentials to satisfy insurers.", solution: "Comprehensive GDPR gap analysis, policy development, staff training, and Cyber Essentials certification.", outcome: "Full GDPR compliance achieved, insurance premium reduced by 20%.", name: "Sarah Mitchell", role: "Managing Partner" },
  { icon: "🏥", industry: "Healthcare", company: "MedTech Solutions", challenge: "Medical software company required penetration testing and vulnerability scanning as part of NHS supplier requirements.", solution: "Full infrastructure penetration test, web application testing, and ongoing monthly vulnerability scanning.", outcome: "Passed NHS supplier security review. Zero critical vulnerabilities found on re-test.", name: "James Cooper", role: "CTO" },
  { icon: "🛒", industry: "E-commerce", company: "StyleBoutique", challenge: "Online retailer processing card payments needed to understand their attack surface and improve security posture.", solution: "Vulnerability scanning, phishing simulation campaign, and staff awareness training programme.", outcome: "0% phishing click rate after training (down from 34%). All critical vulnerabilities remediated.", name: "Emma Williams", role: "CEO" },
];

export default function CaseStudies({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Success Stories</p>
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Real businesses, real results. See how we've helped UK SMEs strengthen their cybersecurity.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid lg:grid-cols-4">
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] p-8 flex flex-col justify-center items-center text-white text-center">
                  <span className="text-5xl mb-3">{c.icon}</span>
                  <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-1">{c.industry}</span>
                  <h3 className="text-xl font-bold">{c.company}</h3>
                </div>
                <div className="lg:col-span-3 p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[["Challenge",c.challenge,"🔴"],["Solution",c.solution,"🟡"],["Outcome",c.outcome,"🟢"]].map(([label,text,dot]) => (
                      <div key={label}>
                        <div className="flex items-center gap-2 mb-2">
                          <span>{dot}</span>
                          <span className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wide">{label}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#00d4ff] rounded-full flex items-center justify-center text-white font-bold text-sm">{c.name[0]}</div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e] text-sm">{c.name}</p>
                      <p className="text-gray-500 text-xs">{c.role}, {c.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#00d4ff] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-white/80 mb-8">Join the growing list of UK SMEs who've strengthened their cybersecurity with Unity Metrix.</p>
          <Button variant="dark" onClick={() => navigate("contact")}>Get a Free Assessment</Button>
        </div>
      </section>
    </div>
  );
}
