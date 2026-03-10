import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const values = [
  { icon: "🔍", title: "Transparency", desc: "We operate with an open-book policy. No hidden fees, no ambiguous language. We believe informed clients are the best clients." },
  { icon: "🏆", title: "Excellence", desc: "We never compromise on quality. Our services are designed to not just meet but exceed industry standards." },
  { icon: "💡", title: "Innovation", desc: "Cyber threats evolve every day, and so do we. Continual training, research, and development keep us ahead of the curve." },
  { icon: "🤝", title: "Customer-Centric", desc: "Your security is our success. Our 24/7 availability ensures that your business operations never have to pause because of a cybersecurity concern." },
];

const team = [
  { name: "Vincent Picton", role: "Founder & CEO", icon: "👤", bio: "20+ years in cybersecurity, former government security advisor." },
  { name: "James Harrison", role: "Head of Penetration Testing", icon: "👤", bio: "CREST certified penetration tester with expertise in web and infrastructure." },
  { name: "Priya Sharma", role: "GDPR & Compliance Lead", icon: "👤", bio: "Qualified Data Protection Officer and IASME certified assessor." },
  { name: "Tom Bradley", role: "SOC Manager", icon: "👤", bio: "10+ years in security operations, specialising in threat detection." },
];

export default function AboutUs({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Passionate about making cybersecurity accessible and effective for every UK business.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Meet the Founder" subtitle="Leadership" centered={false} />
              <p className="text-gray-600 leading-relaxed mb-4">From our humble beginnings to becoming a trusted name in the cybersecurity industry, our journey is a testament to our commitment to innovation and excellence.</p>
              <p className="text-gray-600 leading-relaxed mb-4">We are a group of passionate individuals who believe that a safer digital world is not just a necessity but a right for every business out there. Our vision and hard work have propelled us into partnerships with diverse industries, from healthcare to e-commerce and everything in between.</p>
              <p className="text-gray-600 leading-relaxed mb-8">Unity Metrix was founded with a single mission: to make enterprise-grade cybersecurity accessible and affordable for UK SMEs. We believe that the size of your business shouldn't determine the quality of your security.</p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00d4ff]">500+</div>
                  <div className="text-sm text-gray-500">Clients Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00d4ff]">10+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00d4ff]">100%</div>
                  <div className="text-sm text-gray-500">UK Based</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f0fbff] to-[#e0f7ff] rounded-3xl p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">👤</div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Vincent Picton</h3>
              <p className="text-[#00d4ff] font-semibold mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">20+ years in cybersecurity, former government security advisor, CREST certified and passionate about helping UK SMEs stay safe online.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Core Values" subtitle="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow hover:border-[#00d4ff40]">
                <div className="w-14 h-14 bg-[#f0fbff] rounded-xl flex items-center justify-center mb-4 text-2xl">{v.icon}</div>
                <h3 className="font-bold text-xl text-[#1a1a2e] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Meet the Team" subtitle="Our Experts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">👤</div>
                <h3 className="font-bold text-[#1a1a2e]">{m.name}</h3>
                <p className="text-[#00d4ff] text-sm font-semibold mb-2">{m.role}</p>
                <p className="text-gray-500 text-xs">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Certifications & Partnerships</h2>
          <p className="text-gray-400 mb-8">We hold the highest accreditations in the industry, ensuring our clients receive certified, trusted expertise.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["IASME Cyber Assurance Level 2","NCSC Cyber Essentials Partner","CREST Member","ICO Registered","ISO 27001 Aligned"].map(c => (
              <span key={c} className="bg-[#ffffff10] border border-[#ffffff20] text-gray-300 px-4 py-2 rounded-xl text-sm font-medium">{c}</span>
            ))}
          </div>
          <Button variant="primary" onClick={() => navigate("contact")}>Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}
