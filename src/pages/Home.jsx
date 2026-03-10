import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import StatCard from "../components/StatCard";
import ProcessStep from "../components/ProcessStep";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

const services = [
  { icon: "🛡️", title: "Cyber Essentials", desc: "Government-backed certification protecting your business from common cyber threats." },
  { icon: "🔒", title: "Cyber Essentials Plus", desc: "Hands-on verification of your cyber security controls by certified experts." },
  { icon: "📋", title: "IASME Cyber Baseline", desc: "Entry-level certification building your cyber security foundation." },
  { icon: "🏆", title: "IASME Cyber Assurance", desc: "Comprehensive governance framework with GDPR requirements included." },
  { icon: "🔍", title: "Cyber Security Auditing", desc: "In-depth assessment of your security posture and vulnerabilities." },
  { icon: "🎯", title: "Penetration Testing", desc: "Simulated cyber attacks to find weaknesses before hackers do." },
  { icon: "📡", title: "Vulnerability Scanning & DAST", desc: "Continuous scanning to detect and remediate security vulnerabilities." },
  { icon: "📜", title: "GDPR Compliance", desc: "Expert guidance ensuring your business meets all data protection obligations." },
  { icon: "👁️", title: "SIEM/SOC Services", desc: "24/7 security monitoring and incident response capabilities." },
  { icon: "🎣", title: "Phishing Testing", desc: "Test your staff's resilience against email phishing attacks." },
  { icon: "🎓", title: "Training", desc: "Empower your team with practical cybersecurity knowledge and skills." },
];

const faqs = [
  { q: "How much do cyber security services cost?", a: "The cost of cybersecurity services varies based on your business's size, complexity, and specific needs. We offer transparent pricing — contact us for a tailored quote." },
  { q: "How does Unity Metrix compare to other providers?", a: "Unity Metrix stands out by offering comprehensive, customised cybersecurity solutions tailored specifically for SMEs. We combine technical measures with governance and compliance." },
  { q: "What are the top cyber security risks for SMEs today?", a: "Top cybersecurity risks for SMEs include phishing attacks, ransomware, data breaches, and weak password practices. Staying informed and implementing robust security measures can mitigate these risks." },
  { q: "What happens if a cyber breach occurs?", a: "In the event of a cyber breach, Unity Metrix provides immediate support to contain and mitigate the impact. We also help you develop and implement a recovery plan." },
  { q: "Doesn't my existing IT company handle my cyber security?", a: "While your IT company may provide some security measures, specialised cybersecurity services offer a deeper focus on protecting against sophisticated threats and ensuring compliance." },
  { q: "Can Unity Metrix ensure my company is compliant with GDPR?", a: "Yes, Unity Metrix helps your business comply with regulations like GDPR by implementing comprehensive cybersecurity measures and governance frameworks." },
];

const news = [
  { title: "Free Incident Response Plan Poster", desc: "Download our Free Incident Response Plan for Small Businesses – a simple 6-step cyber security guide for sole traders and micro businesses.", date: "Oct 2025", tag: "Resource" },
  { title: "Marks & Spencer – What Happened & Why You Should Care", desc: "In early 2025, Marks & Spencer was hit by a sophisticated cyberattack involving social engineering, SIM-swap fraud, and ransomware.", date: "Sep 2025", tag: "News" },
  { title: "Why a VPN is Your #1 Priority for Remote Workers", desc: "Stay connected and secure as an expat or remote worker. Access geo-restricted content, protect your data on public Wi-Fi.", date: "Aug 2025", tag: "Guide" },
  { title: "Do I need a penetration test?", desc: "If you have a website that takes information about users, takes credit cards, or shares personal information with external bodies...", date: "Jul 2025", tag: "Article" },
];

export default function Home({ navigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1a1a2e] text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d4ff10] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00d4ff08] rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize:"40px 40px"}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00d4ff20] text-[#00d4ff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse"></span>
              UK's Trusted Cybersecurity Partner
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cyber Security<br /><span className="text-[#00d4ff]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 font-medium">Guarding Your Data, Reputation, Compliance & Peace of Mind</p>
            <p className="text-gray-400 mb-8 leading-relaxed">Expert cybersecurity solutions tailored for UK SMEs. From Cyber Essentials certification to penetration testing and GDPR compliance — we've got you covered.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => navigate("contact")}>Get A Free Consultation</Button>
              <Button variant="outline" size="lg" onClick={() => navigate("what-we-do")}>See Services</Button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              {["IASME Certified","NCSC Partner","Cyber Essentials","ISO 27001"].map(b => (
                <span key={b} className="bg-[#ffffff10] text-gray-300 text-xs px-3 py-1.5 rounded-lg border border-[#ffffff15]">{b}</span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-[#00d4ff15] rounded-full mx-auto flex items-center justify-center border border-[#00d4ff30]">
                <div className="w-60 h-60 bg-[#00d4ff20] rounded-full flex items-center justify-center border border-[#00d4ff40]">
                  <div className="w-40 h-40 bg-[#00d4ff30] rounded-full flex items-center justify-center border border-[#00d4ff60]">
                    <svg className="w-20 h-20 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              {[
                { label: "24/7 Support", pos: "top-4 right-0", icon: "🌐" },
                { label: "Risk Reduction", pos: "bottom-8 right-4", icon: "📉" },
                { label: "Pain-Free Compliance", pos: "bottom-4 left-0", icon: "✅" },
                { label: "Trusted Expertise", pos: "top-16 left-0", icon: "🏅" },
              ].map(b => (
                <div key={b.label} className={`absolute ${b.pos} bg-white text-[#1a1a2e] px-3 py-2 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-1.5`}>
                  <span>{b.icon}</span>{b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature pills */}
      <section className="bg-[#00d4ff] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          {[["🛡️","Risk Reduction"],["🏅","Trusted Expertise"],["🕐","24/7 Support"],["✅","Pain-Free Compliance"]].map(([icon,label]) => (
            <div key={label} className="flex items-center gap-2 text-white font-semibold">
              <span className="text-2xl">{icon}</span>{label}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Cyber Security Services" subtitle="What We Do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.desc} onClick={() => navigate("what-we-do")} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button onClick={() => navigate("contact")} variant="outline">Contact Us About Services</Button>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Who We Help" subtitle="Our Clients" light />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "The BUSY", title: "SME OWNER", quote: "Cybersecurity seems complex, and I'm not sure why it's crucial for my small business.", color: "from-[#00d4ff] to-[#0099bb]" },
              { tag: "The Compliance Driven", title: "Entrepreneur", quote: "I need to be cyber essentials compliant to stay competitive, but I want to keep it straightforward.", color: "from-[#1a1a2e] to-[#2d2d4e]" },
              { tag: "The Delegating", title: "Director", quote: "I assumed my IT support had cybersecurity covered, and now I'm not so sure. What should I be asking them?", color: "from-[#00d4ff] to-[#0099bb]" },
            ].map((c, i) => (
              <div key={i} className={`bg-gradient-to-br ${c.color} rounded-2xl p-8 border border-[#ffffff15]`}>
                <p className="text-sm font-medium text-white/70 mb-1">{c.tag}</p>
                <h3 className="text-2xl font-black mb-4 text-white">{c.title}</h3>
                <p className="text-white/80 italic mb-6">"{c.quote}"</p>
                <Button variant="white" size="sm" onClick={() => navigate("who-we-help")}>Learn the Essentials</Button>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto">
              <strong className="text-white">Not finding your match?</strong> Worry not! We've tailored solutions for a diverse range of professionals across legal, finance, digital sectors, and more.
              <button onClick={() => navigate("contact")} className="text-[#00d4ff] ml-1 hover:underline">Click here to tell us how we can assist.</button>
            </p>
          </div>
        </div>
      </section>

      {/* Risk Assessment CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4e] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Will Your Staff Get You Hacked?</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">With more than <strong className="text-[#00d4ff]">80% of data breaches</strong> being attributable to a member of staff, how safe is YOUR business?</p>
                <p className="text-gray-400 mb-8 text-sm">This completely catch-free quiz will take less than 5 minutes and help you understand how likely your staff are to be your downfall.</p>
                <Button variant="primary" size="lg">Start My Quick Risk Assessment</Button>
              </div>
              <div className="relative hidden lg:flex items-end justify-center bg-[#00d4ff10] p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4">🔐</div>
                  <div className="text-white font-bold text-lg">Free Assessment</div>
                  <div className="text-gray-400 text-sm">Takes less than 5 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Don't Become a Cyber Statistic" subtitle="The Threat Is Real" centered={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>It's a startling truth — nearly half of all UK SMEs experienced a cyber attack last year, as per the latest findings from government reports.</p>
                <p>The cyber threat landscape is evolving faster than ever, and there's a growing gap in cyber defense skills globally. A majority of UK businesses acknowledge a critical shortage in cybersecurity expertise internally.</p>
                <p>Reacting after a breach is costly and stressful. Unity Metrix stands ready to help you take proactive steps now, fortifying your business's defenses.</p>
              </div>
              <div className="mt-6">
                <Button onClick={() => navigate("contact")} variant="primary">Get Protected Now</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <StatCard number={65} label="of medium-sized businesses were hit by a cyber attack in the latest UK government survey" />
              <StatCard number={71} label="of breaches are financially motivated" />
              <StatCard number={95} label="of incidents can be prevented with the right measures in place" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader title="Our Process" subtitle="How It Works" centered={false} />
              <ProcessStep number="1" title="Assessment & Planning" description="We start with a cyber health check to understand your current security posture and identify vulnerabilities." sub="Pinpointing your cyber strengths and weaknesses" />
              <ProcessStep number="2" title="Customised Solution Design" description="Our experts craft a cybersecurity strategy tailored to your business's unique needs and compliance requirements." sub="A tailor-made defense for your digital assets" />
              <ProcessStep number="3" title="Implementation & Training" description="We put our plan into action, bolstering your defenses and providing training to empower your team." sub="Elevate your team's cyber savvy" />
              <ProcessStep number="4" title="Monitoring & Ongoing Support" description="With continuous monitoring and support, we ensure your defences stay robust against evolving threats." sub="Keeping watch, keeping you secure" />
            </div>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-gray-400 mb-6">Fill out the form below and one of our cybersecurity experts will get back to you promptly.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="What Our Customers Say" subtitle="Testimonials" />
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="As a small business in digital marketing, we were looking for a partner to help us shore up our cybersecurity. Unity Metrix made the whole process smooth and easy. Their team guided us through the steps to get Cyber Essentials and IASME Cyber Assurance certified, scanning for vulnerabilities and making sure our systems were protected."
              name="Chris Hadland"
              role="Director"
              company="Aura Media"
            />
            <TestimonialCard
              quote="Unity Metrix walked us through each part of the process and made sure we were equipped to handle future risks. Thanks to their friendly, knowledgeable team, we now have solid cybersecurity and peace of mind. If you're looking to secure your business, I can't recommend them enough!"
              name="Sarah Johnson"
              role="CEO"
              company="TechStart Ltd"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="Frequently Asked Questions" subtitle="FAQ" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1a1a2e]">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#00d4ff] transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500">Not Found What You're Looking For? <button onClick={() => navigate("contact")} className="text-[#00d4ff] font-semibold hover:underline">Contact us</button></p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Latest News" subtitle="Knowledge Centre" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((n, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer" onClick={() => navigate("knowledge-centre")}>
                <div className="h-40 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] flex items-center justify-center">
                  <span className="text-5xl">🔒</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-[#00d4ff15] text-[#00d4ff] font-semibold px-2 py-1 rounded-full">{n.tag}</span>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                  <h3 className="font-bold text-[#1a1a2e] mb-2 text-sm group-hover:text-[#00d4ff] transition-colors line-clamp-2">{n.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{n.desc}</p>
                  <p className="text-[#00d4ff] text-xs font-semibold mt-3">Read more →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Meet the Founder" subtitle="Our Story" centered={false} />
              <p className="text-gray-600 leading-relaxed mb-6">From our humble beginnings to becoming a trusted name in the cybersecurity industry, our journey is a testament to our commitment to innovation and excellence. But we're not just tech geeks huddled around computer screens all day!</p>
              <p className="text-gray-600 leading-relaxed mb-8">We are a group of passionate individuals who believe that a safer digital world is not just a necessity but a right for every business out there. Our vision and hard work have propelled us into partnerships with diverse industries, from healthcare to e-commerce and everything in between.</p>
              <Button onClick={() => navigate("about-us")} variant="primary">Learn More About Us</Button>
            </div>
            <div className="bg-gradient-to-br from-[#f0fbff] to-[#e0f7ff] rounded-3xl p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">👤</div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Vincent Picton</h3>
              <p className="text-[#00d4ff] font-semibold mb-4">Founder & CEO</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[["🛡️","Transparency"],["🏆","Excellence"],["💡","Innovation"],["🤝","Customer-Centric"]].map(([icon, val]) => (
                  <div key={val} className="bg-white rounded-xl p-3 shadow-sm text-sm font-semibold text-[#1a1a2e]">
                    <div className="text-xl mb-1">{icon}</div>{val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00d4ff] to-[#0099bb] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Business?</h2>
          <p className="text-white/80 mb-8 text-lg">Join hundreds of UK SMEs who trust Unity Metrix with their cybersecurity. Get started with a free, no-obligation assessment today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="dark" size="lg" onClick={() => navigate("contact")}>Get a Free Assessment</Button>
            <Button variant="white" size="lg" onClick={() => navigate("pricing")}>View Pricing</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
