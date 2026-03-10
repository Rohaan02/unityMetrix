import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";

export default function Contact({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Get in Touch</p>
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Have questions? Our friendly team of cybersecurity experts is ready to help.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Send Us a Message" subtitle="Contact" centered={false} />
              <p className="text-gray-500 mb-8">Fill out the form and one of our helpful and friendly cyber security experts will get back to you promptly.</p>
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <ContactForm />
              </div>
            </div>
            <div>
              <SectionHeader title="Get in Touch Directly" subtitle="Contact Info" centered={false} />
              <div className="space-y-6">
                {[
                  { icon: "📞", label: "Phone", value: "+44 203 9304300", href: "tel:+442039304300" },
                  { icon: "📧", label: "Email", value: "hello@unitymetrix.com", href: "mailto:hello@unitymetrix.com" },
                  { icon: "📧", label: "Info Security", value: "infosec@unitymetrix.com", href: "mailto:infosec@unitymetrix.com" },
                  { icon: "📍", label: "Address", value: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF", href: null },
                ].map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#f0fbff] rounded-xl flex items-center justify-center text-xl shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">{c.label}</p>
                      {c.href ? <a href={c.href} className="font-semibold text-[#1a1a2e] hover:text-[#00d4ff] transition-colors">{c.value}</a> : <p className="font-semibold text-[#1a1a2e]">{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] rounded-2xl p-8 mt-6 text-white">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-[#00d4ff] font-semibold">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#ffffff15]">
                  <div className="flex items-center gap-2 text-sm text-[#00d4ff]">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse"></span>
                    24/7 SOC monitoring available for clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00d4ff] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Urgent Response?</h2>
          <p className="text-white/80 mb-6">If you've experienced a cyber incident or need urgent assistance, call us directly.</p>
          <a href="tel:+442039304300" className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d0d1a] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            +44 203 9304300
          </a>
        </div>
      </section>
    </div>
  );
}
