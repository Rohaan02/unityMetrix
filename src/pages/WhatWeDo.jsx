import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

const services = [
  { icon: "🛡️", title: "Cyber Essentials", desc: "The government-backed Cyber Essentials certification demonstrates your commitment to cybersecurity. It covers five key controls: firewalls, secure configuration, access control, malware protection, and patch management.", benefits: ["NCSC-backed certification","Protect against common threats","Bid for government contracts","Demonstrate security commitment"] },
  { icon: "🔒", title: "Cyber Essentials Plus", desc: "Cyber Essentials Plus goes further than Cyber Essentials with hands-on technical testing carried out by an independent, accredited assessor to verify the controls are in place and working correctly.", benefits: ["Independent technical verification","Hands-on vulnerability testing","Enhanced credibility","Insurance discounts available"] },
  { icon: "📋", title: "IASME Cyber Baseline", desc: "The IASME Cyber Baseline is an entry-level certification that helps you build solid cyber security foundations and demonstrates your commitment to protecting your business and customers.", benefits: ["Entry-level certification","GDPR-aligned framework","Quick to achieve","Cost-effective"] },
  { icon: "🏆", title: "IASME Cyber Assurance", desc: "IASME Cyber Assurance provides a comprehensive governance framework, combining technical and governance requirements including GDPR compliance into a single, affordable certification.", benefits: ["Includes GDPR requirements","Full governance framework","Supply chain confidence","Affordable for SMEs"] },
  { icon: "🔍", title: "Cyber Security Auditing", desc: "Our comprehensive cyber security audit provides an in-depth assessment of your organisation's security posture, identifying vulnerabilities and areas for improvement across people, processes, and technology.", benefits: ["Full security posture review","Gap analysis report","Prioritised recommendations","Compliance alignment"] },
  { icon: "🎯", title: "Penetration Testing", desc: "Our penetration testing service simulates real-world cyber attacks on your systems, applications, and infrastructure to identify vulnerabilities that could be exploited by malicious actors before they do.", benefits: ["Simulated real attacks","Web & network testing","Detailed findings report","Remediation guidance"] },
  { icon: "📡", title: "Vulnerability Scanning & DAST", desc: "Our automated vulnerability scanning and Dynamic Application Security Testing (DAST) provides continuous visibility into your security posture, identifying known vulnerabilities across your infrastructure.", benefits: ["Continuous monitoring","DAST for web applications","Compliance reporting","Prioritised remediation"] },
  { icon: "📜", title: "GDPR Compliance", desc: "We provide comprehensive GDPR compliance services to help your business meet its data protection obligations, from initial assessment through to policy development and staff training.", benefits: ["Gap assessment","Policy development","Staff training","Ongoing compliance support"] },
  { icon: "👁️", title: "SIEM/SOC Services", desc: "Our Security Information and Event Management (SIEM) and Security Operations Centre (SOC) services provide 24/7 monitoring of your IT environment, detecting and responding to threats in real time.", benefits: ["24/7 monitoring","Real-time threat detection","Incident response","Compliance reporting"] },
  { icon: "🎣", title: "Phishing Testing", desc: "Our phishing simulation service tests your employees' resilience against email-based attacks, providing valuable insight into your human security risk and helping to improve staff awareness.", benefits: ["Realistic simulations","Detailed reporting","Awareness training","Benchmarking"] },
  { icon: "🎓", title: "Training", desc: "Our cybersecurity training programmes are designed to educate and empower your staff, ensuring they understand the risks and know how to protect your business from cyber threats.", benefits: ["Interactive e-learning","Bespoke workshops","Phishing awareness","Certification options"] },
];

export default function WhatWeDo({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="text-5xl font-bold mb-6">What We Do</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Comprehensive cybersecurity services designed to protect UK SMEs from evolving cyber threats.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row ${i%2===1?"lg:flex-row-reverse":""}`}>
                <div className="lg:w-1/3 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] p-10 flex flex-col justify-center items-center text-white text-center">
                  <span className="text-6xl mb-4">{s.icon}</span>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                </div>
                <div className="lg:w-2/3 p-10">
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {s.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        {b}
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" onClick={() => navigate("contact")}>Get a Free Assessment</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="Get in Touch" subtitle="Contact Us" light />
          <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-2xl p-10">
            <ContactForm dark />
          </div>
        </div>
      </section>
    </div>
  );
}
