"use client";

import Link from "next/link";
import { useRef } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";

const logoLight = "/Logos/logo - light(with text).png";
const logoDark = "/Logos/logo - dark(with text).png";

const services = [
  { icon: "💻", title: "Web Development", desc: "Responsive, scalable websites built with React, Next.js, and Node.js." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform apps for iOS & Android with secure backends." },
  { icon: "🤖", title: "AI Solutions", desc: "Intelligent automation, ML models, and AI-powered business tools." },
  { icon: "🎨", title: "UI/UX Design", desc: "User-centered, intuitive interfaces aligned with your brand." },
  { icon: "✏️", title: "Graphic Design", desc: "Eye-catching visuals, branding, and marketing collateral." },
  { icon: "🔌", title: "IoT Solutions", desc: "Smart IoT systems connecting devices, collecting data, enabling decisions." },
  { icon: "📣", title: "Digital Marketing", desc: "SEO, social media campaigns, and data-driven strategies." },
];

const testimonials = [
  {
    logo: "/images/agamlogo.png",
    name: "Agam Alangaram",
    type: "Interior Design Firm",
    quote: "LiveWires designed a stunning website that truly reflects our interior design philosophy. The elegant layouts and smooth visuals have helped us attract more clients.",
  },
  {
    logo: "/images/rdslogo.svg",
    name: "Raja Driving School",
    type: "Driving School",
    quote: "LiveWires delivered exactly that — a clean, professional site that has significantly increased our student enquiries. Highly recommended!",
  },
  {
    logo: "/images/ansslogo.png",
    name: "ANSS Crafters & Co",
    type: "Architecture Firm",
    quote: "LiveWires nailed the UI/UX for our brand — the interface beautifully showcases our architectural projects and has impressed every client who visits.",
  },
];

function NavBar() {
  return (
    <div className="border-[#ececec] border-b border-solid content-stretch flex items-center pb-[20px] pt-[17px] px-[50px] relative shrink-0 w-full bg-white" data-name="HorizontalBorder">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]">
        <Link href="/" className="content-stretch flex items-start relative shrink-0">
          <div className="h-[50px] max-w-[260px] relative shrink-0 w-[200px]">
            <img alt="LiveWires Digital Solutions" className="h-full w-auto" src={logoDark} />
          </div>
        </Link>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1300px]">
        <div className="content-start flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full">
          {[["Home", "/"], ["About Us", "/about"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
            <div key={label} className="h-[49.25px] min-w-[140px] relative shrink-0" data-name="Item">
              <Link href={href} className="content-stretch flex items-center pb-[9.75px] pt-[9.5px] px-[15px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Teko:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#121212] text-[22px] uppercase whitespace-nowrap">
                  <p className="leading-[29.26px]">{label}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-[260px]">
        <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[3px] shrink-0">
          <div className="[word-break:break-word] flex flex-col font-['Kanit:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#121212] text-[14px] uppercase whitespace-nowrap">
            <p className="leading-[14px]">Get In Touch</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[200px] relative shrink-0 w-full">
      <div className="content-stretch flex items-start max-w-[1520px] pb-[60px] pt-[80px] relative shrink-0 w-full gap-[80px]">
        {/* Brand */}
        <div className="flex flex-col items-start gap-[24px] shrink-0 w-[360px]">
          <img alt="LiveWires Digital Solutions" src={logoLight} className="h-[60px] w-auto" />
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]">
            <p>We are a team of passionate developers, designers, and problem-solvers focused on building technology that creates real value.</p>
          </div>
          <div className="flex gap-[12px]">
            {[["LinkedIn", "https://www.linkedin.com/company/livewires-digital-solutions"], ["GitHub", "https://github.com/livewiresdigitalsolutions"]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="bg-[#c9f31d] w-[40px] h-[40px] flex items-center justify-center rounded-[3px] text-[#121212] text-[13px] font-['Kanit:Bold',sans-serif] hover:bg-white transition-colors">
                {label[0]}
              </a>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[200px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Quick Links</p></div>
          {[["Home", "/"], ["About Us", "/about"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px] hover:text-[#c9f31d] transition-colors"><p>{label}</p></Link>
          ))}
        </div>
        {/* Services */}
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[260px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Services</p></div>
          {["Web Development", "Mobile App Development", "AI Solutions", "UI/UX Design", "Graphic Design", "IoT Solutions", "Digital Marketing"].map((s) => (
            <Link key={s} href="/about" className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px] hover:text-[#c9f31d] transition-colors"><p>{s}</p></Link>
          ))}
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[280px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Contact</p></div>
          {[["📍", "Chennai, Tamil Nadu, India"], ["📞", "+91 8925476709"], ["✉️", "contact@livewiresdigitalsolutions.com"]].map(([icon, text]) => (
            <div key={text} className="flex items-start gap-[12px]">
              <span className="text-[18px] mt-[2px]">{icon}</span>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-[#ffffff18] w-full max-w-[1520px] py-[30px]">
        <div className="[word-break:break-word] font-['Teko:Regular',sans-serif] text-[#666] text-[22px] uppercase text-center leading-[22px]">
          <p>© 2026 LiveWires Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full">
      <NavBar />

      {/* ── HERO ── */}
      <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full px-[76px] pt-[120px] pb-[80px]" style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}>
        <div className="sr-target relative shrink-0 w-full">
          <div className="bg-[#c9f31d] content-stretch flex flex-col items-center justify-center absolute left-0 top-[-30px] min-h-[80px] py-[10px] rounded-[48px] w-[160px]">
            <div className="-rotate-90 flex-none">
              <div className="[word-break:break-word] font-['Teko:Regular',sans-serif] font-normal justify-center leading-[0] text-[24px] text-black whitespace-nowrap">
                <p className="leading-[19.8px]">our story</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[190px] text-black uppercase ml-[200px]">
            <p className="leading-[144.4px]">Who</p>
            <p className="leading-[144.4px]">We Are</p>
          </div>
        </div>
        <div className="sr-target mt-[40px] max-w-[800px] ml-[200px]">
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[22px] leading-[34px]">
            <p>LiveWires Digital Solutions is a Chennai-based digital agency delivering web apps, mobile apps, AI solutions, and creative designs that solve real-world problems and elevate brands.</p>
          </div>
        </div>
      </div>

      {/* ── STORY + STATS ── */}
      <div className="content-stretch flex items-start px-[76px] pt-[100px] pb-[80px] relative shrink-0 w-full gap-[80px]">
        {/* Left text */}
        <div className="sr-target flex flex-col items-start gap-[32px] flex-1">
          <div className="bg-[#c9f31d] px-[20px] py-[8px] rounded-[4px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>Get To Know About Us</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[80px] text-black uppercase">
            <p className="leading-[72px]">We Are Here</p>
            <p className="leading-[72px]">To Give You</p>
            <p className="leading-[72px]"><span className="bg-[#c9f31d] px-[8px]">Effective Ideas</span></p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[20px] leading-[32px] max-w-[600px]">
            <p>LiveWires Digital Solutions is a Chennai-based software and digital solutions company driven by innovation, quality, and customer satisfaction. We are a team of passionate developers, designers, and problem-solvers focused on building technology that creates real value for our clients.</p>
          </div>
          <Link href="/contact" className="bg-[#121212] content-stretch flex items-center gap-[10px] px-[32px] py-[14px] relative rounded-[3px] shrink-0" data-name="Button">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-white text-[14px] uppercase"><p>Get Started Now →</p></div>
          </Link>
        </div>

        {/* Right stats */}
        <div className="sr-target flex flex-col items-start gap-[0px] shrink-0 w-[500px]">
          <div className="relative w-full h-[340px] rounded-[20px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Team working" />
            <div className="absolute top-[40px] right-[-20px] bg-[#c9f31d] w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center shadow-lg">
              <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[48px] text-black leading-[1]"><p>2+</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[14px] text-black text-center"><p>Years Of Experience</p></div>
            </div>
          </div>
          {/* Stats row */}
          <div className="flex items-center w-full mt-[40px] border-t border-[#ececec] pt-[30px] gap-[0px]">
            {[["13+", "Projects"], ["10+", "Clients"], ["7", "Services"], ["2+", "Years"]].map(([num, label], i) => (
              <div key={label} className={`flex flex-col items-center flex-1 ${i < 3 ? "border-r border-[#c9f31d]" : ""}`}>
                <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[60px] text-black leading-[1]" data-counter><p>{num}</p></div>
                <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[16px] uppercase"><p>{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div className="bg-[#121212] content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#c9f31d30] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[14px] uppercase tracking-widest"><p>Featured Services</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-white uppercase">
            <p className="leading-[60px]">The Best <span className="bg-[#c9f31d] text-black px-[8px]">Services</span></p>
          </div>
        </div>
        <div className="grid w-full" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {services.map((s, i) => (
            <div key={s.title} className="sr-target border border-white/10 hover:border-[#c9f31d] transition-all duration-300 p-[32px] flex flex-col gap-[20px] rounded-[4px] bg-white/5">
              <div className="text-[40px]">{s.icon}</div>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1.1]"><p>{s.title}</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WORK PROCESS ── */}
      <div className="content-stretch flex flex-col items-center px-[76px] py-[100px] relative shrink-0 w-full bg-white">
        <div className="sr-target flex flex-col items-center gap-[16px] mb-[80px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Our Working Process</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase text-center">
            <p className="leading-[60px]">How Do <span className="bg-[#c9f31d] px-[8px]">We Work</span> ?</p>
          </div>
        </div>
        <div className="flex items-start justify-center gap-[0px] w-full max-w-[1200px]">
          {[
            { n: "01", step: "First Step", title: "Problem Analysis", desc: "We understand your business needs and define the project scope clearly." },
            { n: "02", step: "Second Step", title: "Find Solutions", desc: "We design creative solutions tailored to your specific requirements." },
            { n: "03", step: "Third Step", title: "Build & Develop", desc: "We bring designs to life with clean, scalable code and rigorous testing." },
          ].map((p, i) => (
            <div key={p.n} className="sr-target flex items-start flex-1">
              <div className="flex flex-col items-center text-center w-full px-[40px]">
                <div className="relative w-[80px] h-[80px] border-2 border-[#ececec] flex items-center justify-center mb-[24px] rounded-[4px]">
                  <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[28px] text-[#555]"><p>0{i + 1}</p></div>
                  <div className="absolute -top-[14px] -right-[14px] w-[40px] h-[40px] bg-[#c9f31d] flex items-center justify-center rounded-[4px]">
                    <div className="[word-break:break-word] font-['Kanit:Bold',sans-serif] text-[14px] text-black"><p>{p.n}</p></div>
                  </div>
                </div>
                <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[16px] italic mb-[8px]"><p>{p.step}</p></div>
                <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-black text-[32px] uppercase mb-[12px]"><p>{p.title}</p></div>
                <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[16px] leading-[26px]"><p>{p.desc}</p></div>
              </div>
              {i < 2 && (
                <div className="shrink-0 mt-[40px] text-[#ececec] text-[40px]">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Customers Feedback</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">What Says Our <span className="bg-[#c9f31d] px-[8px]">Clients</span></p>
          </div>
        </div>
        <div className="grid w-full gap-[32px]" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {testimonials.map((t) => (
            <div key={t.name} className="sr-target border border-[#ececec] rounded-[4px] p-[40px] flex flex-col gap-[24px] bg-white hover:border-[#c9f31d] transition-colors">
              <div className="flex gap-[4px]">{[...Array(5)].map((_, i) => <span key={i} className="text-[#c9f31d] text-[20px]">★</span>)}</div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[18px] leading-[30px] flex-1"><p>"{t.quote}"</p></div>
              <div className="flex items-center gap-[16px] border-t border-[#ececec] pt-[24px]">
                <img src={t.logo} alt={t.name} className="w-[56px] h-[56px] rounded-full object-cover" />
                <div>
                  <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-black text-[24px] uppercase leading-[1]"><p>{t.name}</p></div>
                  <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[14px]"><p>{t.type}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="bg-[#121212] content-stretch flex flex-col items-center justify-center px-[76px] py-[120px] relative shrink-0 w-full">
        <div className="sr-target flex flex-col items-center gap-[24px] text-center">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[120px] text-white uppercase">
            <p className="leading-[100px]">Let&apos;s Get To</p>
            <p className="leading-[100px]">Work <span className="bg-[#c9f31d] text-black px-[8px]">Together</span></p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[22px] leading-[36px] max-w-[700px] mt-[16px]">
            <p>We are here to transform your digital presence. Let&apos;s collaborate and build something extraordinary together.</p>
          </div>
          <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center gap-[10px] mt-[20px] px-[48px] py-[18px] relative rounded-[3px] shrink-0" data-name="Button">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[16px] uppercase tracking-widest"><p>Start a Project →</p></div>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  );
}
