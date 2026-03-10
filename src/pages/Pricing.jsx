import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const plans = [
  {
    name: "Cyber Essentials",
    price: "£300",
    period: "one-time",
    color: "border-gray-200",
    badge: "",
    features: ["Self-assessment questionnaire","NCSC-backed certification","5 key security controls","Digital certificate","Annual renewal","Email support"],
    cta: "Get Started",
  },
  {
    name: "Cyber Essentials Plus",
    price: "£800",
    period: "one-time",
    color: "border-[#00d4ff]",
    badge: "Most Popular",
    features: ["Everything in Cyber Essentials","Independent technical verification","Vulnerability scanning","On-site/remote assessment","Detailed report","Priority support"],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "IASME Cyber Assurance",
    price: "£1,200",
    period: "one-time",
    color: "border-gray-200",
    badge: "",
    features: ["Includes Cyber Essentials","GDPR requirements","Full governance framework","Supply chain assurance","Comprehensive report","Dedicated account manager"],
    cta: "Get Started",
  },
  {
    name: "Penetration Testing",
    price: "£1,500",
    period: "per test",
    color: "border-gray-200",
    badge: "",
    features: ["Infrastructure testing","Web application testing","Detailed findings report","Risk-rated vulnerabilities","Remediation guidance","Re-test included"],
    cta: "Get a Quote",
  },
  {
    name: "SIEM/SOC",
    price: "£500",
    period: "/month",
    color: "border-gray-200",
    badge: "",
    features: ["24/7 monitoring","Real-time threat detection","Incident response","Log management","Monthly reporting","Dedicated SOC team"],
    cta: "Get a Quote",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    color: "border-gray-200",
    badge: "",
    features: ["All services included","Dedicated account team","Bespoke SLA","On-site support","Quarterly reviews","Custom integrations"],
    cta: "Contact Us",
  },
];

export default function Pricing({ navigate }) {
  return (
    <div>
      <section className="bg-[#1a1a2e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#00d4ff] font-semibold uppercase tracking-widest text-sm mb-3">Transparent Pricing</p>
          <h1 className="text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Clear, transparent pricing with no hidden fees. All prices exclude VAT. Contact us for a tailored quote.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl border-2 ${plan.highlighted ? "border-[#00d4ff] shadow-2xl shadow-[#00d4ff20] scale-105" : "border-gray-100 shadow-md"} overflow-hidden relative`}>
                {plan.badge && <div className="absolute top-0 right-0 bg-[#00d4ff] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">{plan.badge}</div>}
                <div className={`p-8 ${plan.highlighted ? "bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e] text-white" : ""}`}>
                  <h3 className={`font-bold text-xl mb-3 ${plan.highlighted ? "text-white" : "text-[#1a1a2e]"}`}>{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`text-4xl font-black ${plan.highlighted ? "text-[#00d4ff]" : "text-[#1a1a2e]"}`}>{plan.price}</span>
                    {plan.period && <span className={`text-sm mb-2 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>{plan.period}</span>}
                  </div>
                  <p className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>+ VAT where applicable</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.highlighted ? "primary" : "outline"} className="w-full" onClick={() => navigate("contact")}>{plan.cta}</Button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">All prices are indicative. Final pricing depends on business size, complexity, and specific requirements. <button onClick={() => navigate("contact")} className="text-[#00d4ff] font-semibold hover:underline">Contact us</button> for a tailored quote.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="Why Choose Unity Metrix?" subtitle="Our Value" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[["🔍","Transparent Pricing","No hidden fees or surprises"],["🏆","Certified Experts","IASME accredited assessors"],["🤝","SME Focused","Built for businesses like yours"],["⚡","Fast Turnaround","Quick, efficient process"]].map(([icon, title, desc]) => (
              <div key={title} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-1">{title}</h3>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
