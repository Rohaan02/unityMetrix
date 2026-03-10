import { useState } from "react";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const articles = [
  { title: "Free Incident Response Plan Poster", tag: "Resource", date: "Oct 2025", icon: "📋", desc: "Download our Free Incident Response Plan for Small Businesses – a simple 6-step cyber security guide for sole traders and micro businesses. Created by Unity Metrix for Cyber Security Awareness Month 2025." },
  { title: "Marks & Spencer – What Happened & Why You Should Care", tag: "News", date: "Sep 2025", icon: "📰", desc: "In early 2025, Marks & Spencer was hit by a sophisticated cyberattack involving social engineering, SIM-swap fraud, and ransomware. Customer data was stolen, services were disrupted." },
  { title: "Why a VPN is Your #1 Priority: Advice for Expats and Remote Workers", tag: "Guide", date: "Aug 2025", icon: "🔐", desc: "Stay connected and secure as an expat or remote worker. Access geo-restricted content, protect your data on public Wi-Fi, and enjoy fast, encrypted connections anywhere in the world." },
  { title: "Do I need a penetration test?", tag: "Article", date: "Jul 2025", icon: "🎯", desc: "If you have a website that takes information about users, takes credit cards, or has an internal system that shares personal information with external bodies, you likely need one." },
  { title: "Why is penetration testing required and why is it so important?", tag: "Article", date: "Jun 2025", icon: "🔍", desc: "Penetration testing is required for two main reasons: everyone makes mistakes, and hackers actively look for those mistakes. Even Microsoft Windows has over 50 million lines of code." },
  { title: "How do you perform a vulnerability scan?", tag: "Guide", date: "May 2025", icon: "📡", desc: "A vulnerability scan is performed by a piece of software that resides either on a system inside the network, or more often on a cloud service. Modern scanners are very powerful." },
  { title: "Vulnerability scanning – what it is and why you need it", tag: "Guide", date: "Apr 2025", icon: "🛡️", desc: "Vulnerability scanning is the process of scanning software and systems for known vulnerabilities. A vulnerability scanner maintains and refers to a massive database of known vulnerabilities." },
  { title: "Datto ALTO 3 Explained", tag: "Article", date: "Mar 2025", icon: "💾", desc: "A deep dive into the Datto ALTO 3 backup and disaster recovery appliance, explaining its key features and benefits for SMEs looking for reliable business continuity solutions." },
  { title: "What is a virtual CISO? When and how to hire one", tag: "Guide", date: "Feb 2025", icon: "👔", desc: "Chief information security officers (CISOs) are in high demand, and good ones are expensive. Following high-profile data breaches, the virtual CISO model has emerged as a cost-effective alternative." },
  { title: "Penetration Testing vs Vulnerability Scanning", tag: "Article", date: "Jan 2025", icon: "⚡", desc: "Penetration testing and vulnerability scanning are often confused as the same service. This leads to business owners purchasing one when they really need the other." },
];

const tags = ["All", "Article", "Guide", "News", "Resource"];

export default function KnowledgeCentre({ navigate }) {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? articles : articles.filter(a => a.tag === activeTag);

  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Resources & Insights</p>
          <h1 className="text-5xl font-bold mb-6">Knowledge Centre</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Stay ahead of cyber threats with our expert guides, news, and resources.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTag===tag ? "bg-[#00d4ff] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#00d4ff] hover:text-[#00d4ff]"}`}>{tag}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="h-44 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] flex items-center justify-center">
                  <span className="text-6xl">{a.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-[#00d4ff15] text-[#00d4ff] font-semibold px-3 py-1 rounded-full">{a.tag}</span>
                    <span className="text-xs text-gray-400">{a.date}</span>
                  </div>
                  <h3 className="font-bold text-[#1a1a2e] mb-2 group-hover:text-[#00d4ff] transition-colors leading-snug">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{a.desc}</p>
                  <p className="text-[#00d4ff] text-sm font-semibold mt-4">Read more →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader title="Stay Informed" subtitle="Newsletter" />
          <p className="text-gray-600 mb-8">Get the latest cybersecurity news, guides, and best practices delivered directly to your inbox.</p>
          <div className="flex max-w-md mx-auto gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00d4ff] transition-colors text-sm" />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
