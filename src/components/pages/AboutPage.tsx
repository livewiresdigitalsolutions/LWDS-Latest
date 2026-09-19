"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";
import { motion, useScroll, useTransform, animate, useInView } from "framer-motion";

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

function Counter({ from, to, label }: { from: number; to: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} className="flex flex-col items-center border-r border-[#121212]/20 pr-[80px] last:border-0 last:pr-0">
      <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[80px] text-[#121212] leading-[1]"><p>{count}{to >= 10 ? "+" : ""}</p></div>
      <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#121212] text-[18px] uppercase tracking-widest"><p>{label}</p></div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="border-[#ececec] border-b border-solid content-stretch flex items-center pb-[20px] pt-[17px] px-[50px] relative shrink-0 w-full bg-white" data-name="HorizontalBorder">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[260px]">
        <Link href="/" className="content-stretch flex items-start relative shrink-0">
          <img alt="LiveWires Digital Solutions" className="h-[50px] w-auto" src={logoDark} />
        </Link>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[1300px]">
        <div className="content-start flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full">
          {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
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
        <div className="flex flex-col items-start gap-[24px] shrink-0 w-[360px]">
          <img alt="LiveWires Digital Solutions" src={logoLight} className="h-[60px] w-auto" />
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>We are a team of passionate developers, designers, and problem-solvers focused on building technology that creates real value.</p></div>
        </div>
        <div className="flex flex-col items-start gap-[16px] shrink-0 w-[200px]">
          <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[28px] uppercase leading-[1]"><p>Quick Links</p></div>
          {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Team", "/team"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={label} href={href} className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px] hover:text-[#c9f31d] transition-colors"><p>{label}</p></Link>
          ))}
        </div>
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
      <div className="border-t border-[#ffffff18] w-full max-w-[1520px] py-[30px]">
        <div className="[word-break:break-word] font-['Teko:Regular',sans-serif] text-[#666] text-[22px] uppercase text-center leading-[22px]"><p>© 2026 LiveWires Digital Solutions. All Rights Reserved.</p></div>
      </div>
    </div>
  );
}

function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  const heroText = "WHO WE ARE";

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full overflow-hidden">
      <NavBar />

      {/* ── HERO ── */}
      <div className="relative shrink-0 w-full px-[76px] pt-[120px] pb-[100px]" style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}>
        <div>
          <div className="bg-[#c9f31d] inline-flex items-center justify-center px-[24px] py-[10px] rounded-[48px] mb-[24px] sr-target">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>About LiveWires</p></div>
          </div>
          
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[190px] text-[190px] text-black uppercase flex overflow-hidden h-[190px] items-end">
            {heroText.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={char === " " ? "w-[40px]" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[24px] leading-[36px] max-w-[700px] mt-[32px]"
          >
            <p>We are a Chennai-based digital agency of passionate developers, designers, and problem-solvers. We don&apos;t just write code — we build technology that creates real value.</p>
          </motion.div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#c9f31d] content-stretch flex items-center justify-center py-[40px] px-[76px] relative shrink-0 w-full overflow-hidden">
        <div className="flex items-center gap-[80px]">
          <Counter from={0} to={13} label="Team Members" />
          <Counter from={0} to={13} label="Projects Delivered" />
          <Counter from={0} to={10} label="Happy Clients" />
          <Counter from={0} to={5} label="Global Countries" />
        </div>
      </div>

      {/* ── OUR SERVICES ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full bg-white">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Our Expertise</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">What We <span className="bg-[#c9f31d] px-[8px]">Do</span></p>
          </div>
        </div>
        <div className="grid w-full gap-[32px]" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {services.map((s, i) => (
            <div key={s.title} className="sr-target bg-[#f9f9f9] border border-[#ececec] p-[40px] rounded-[4px] hover:border-[#c9f31d] transition-colors group cursor-pointer">
              <div className="text-[48px] mb-[24px] group-hover:scale-110 transition-transform transform origin-left">{s.icon}</div>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-black text-[32px] uppercase leading-[1] mb-[12px]"><p>{s.title}</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#666] text-[16px] leading-[26px]"><p>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROCESS SECTION (SVG LINE DRAW) ── */}
      <div className="bg-[#121212] content-stretch flex flex-col items-start px-[76px] py-[120px] relative shrink-0 w-full overflow-hidden">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[80px]">
          <div className="border border-[#c9f31d30] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[14px] uppercase tracking-widest"><p>How We Work</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-white uppercase">
            <p className="leading-[60px]">Our Proven <span className="bg-[#c9f31d] text-black px-[8px]">Process</span></p>
          </div>
        </div>

        <div className="relative flex w-full justify-between items-start pt-[60px] pb-[60px]">
          {/* Animated Line */}
          <div className="absolute top-[100px] left-[10%] right-[10%] h-[4px]">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="100" y2="1" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line x1="0" y1="1" x2="100" y2="1" stroke="#c9f31d" strokeWidth="2" style={{ pathLength }} />
            </svg>
          </div>

          {[
            { step: "01", title: "Problem Analysis", desc: "We dive deep into your requirements, target audience, and business goals to fully understand the challenge." },
            { step: "02", title: "Find Solutions", desc: "Our architects and designers collaborate to prototype the most efficient, scalable, and beautiful solution." },
            { step: "03", title: "Build & Develop", desc: "We execute the plan using cutting-edge tech, followed by rigorous testing and a smooth launch." }
          ].map((p, i) => (
            <div key={p.step} className="sr-target flex flex-col items-center text-center w-[300px] relative z-10">
              <div className="w-[80px] h-[80px] rounded-full bg-[#121212] border-[4px] border-[#c9f31d] flex items-center justify-center mb-[32px] shadow-[0_0_30px_rgba(201,243,29,0.3)]">
                <span className="font-['Teko:Bold',sans-serif] text-white text-[32px] leading-none mt-[4px]">{p.step}</span>
              </div>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[32px] uppercase leading-[1] mb-[16px]"><p>{p.title}</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[16px] leading-[26px]"><p>{p.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start px-[76px] py-[100px] relative shrink-0 w-full">
        <div className="sr-target flex flex-col items-start gap-[16px] mb-[60px]">
          <div className="border border-[#ececec] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#555] text-[14px] uppercase tracking-widest"><p>Testimonials</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase">
            <p className="leading-[60px]">What Our <span className="bg-[#c9f31d] px-[8px]">Clients</span> Say</p>
          </div>
        </div>
        <div className="flex gap-[32px] w-full">
          {testimonials.map((t, i) => (
            <div key={t.name} className="sr-target flex-1 bg-white border border-[#ececec] p-[40px] rounded-[4px] shadow-sm hover:border-[#c9f31d] transition-colors">
              <img src={t.logo} alt={t.name} className="h-[40px] object-contain mb-[24px] opacity-80" />
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[18px] leading-[30px] italic mb-[32px]">
                <p>&quot;{t.quote}&quot;</p>
              </div>
              <div>
                <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-black text-[24px] uppercase leading-[1]"><p>{t.name}</p></div>
                <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[14px] mt-[4px] uppercase tracking-wider"><p>{t.type}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="content-stretch flex items-center justify-between px-[76px] py-[80px] relative shrink-0 w-full bg-[#c9f31d]">
        <div className="sr-target">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[#121212] text-[70px] uppercase leading-[1]"><p>Ready to build something great?</p></div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#121212] text-[20px] mt-[8px]"><p>Let&apos;s turn your vision into a digital reality.</p></div>
        </div>
        <div className="sr-target">
          <Link href="/contact" className="bg-[#121212] text-white px-[40px] py-[18px] rounded-[3px] font-['Kanit:Medium',sans-serif] text-[16px] uppercase tracking-widest hover:bg-white hover:text-[#121212] transition-colors flex items-center gap-[12px]">
            Start a Project →
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
