"use client";

import Link from "next/link";
import { useRef } from "react";
import PageWrapper, { useScrollReveal } from "@/components/PageWrapper";
import { motion, Variants } from "framer-motion";

const logoLight = "/Logos/logo - light(with text).png";
const logoDark = "/Logos/logo - dark(with text).png";

const services = [
  { icon: "💻", title: "Web Development", desc: "Responsive, scalable websites built with React, Next.js, and Node.js. We focus on performance and flawless user experience." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform apps for iOS & Android with secure backends, utilizing frameworks like Flutter." },
  { icon: "🤖", title: "AI/ML Solutions", desc: "Intelligent automation, machine learning models, and AI-powered business tools tailored to your needs." },
  { icon: "🎨", title: "UI/UX Design", desc: "User-centered, intuitive interfaces aligned with your brand identity and optimized for conversion." },
  { icon: "🔌", title: "IoT Development", desc: "Smart IoT systems connecting devices, collecting data, and enabling real-time decisions." },
  { icon: "📣", title: "Digital Marketing", desc: "SEO optimization, social media campaigns, and data-driven growth strategies." },
];

function NavBar() {
  return (
    <div className="border-[#ececec] border-b border-solid content-stretch flex items-center pb-[20px] pt-[17px] px-[50px] relative shrink-0 w-full bg-white z-[100]" data-name="HorizontalBorder">
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
        <Link href="/contact" className="bg-[#c9f31d] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[3px] shrink-0 hover:bg-[#121212] hover:text-white transition-colors">
          <div className="[word-break:break-word] flex flex-col font-['Kanit:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-inherit text-[14px] uppercase whitespace-nowrap">
            <p className="leading-[14px]">Get In Touch</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col items-center justify-center px-[200px] relative shrink-0 w-full z-50">
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

function ServicesContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef as React.RefObject<HTMLDivElement>);

  // 3D Perspective Grid Animation Variants
  const gridVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative size-full">
      <NavBar />

      {/* ── HERO ── */}
      <div className="relative shrink-0 w-full px-[76px] pt-[120px] pb-[100px]" style={{ background: "linear-gradient(135deg,#f8fce8 0%,#f0f5d6 40%,#eef7c2 60%,#f5f9e0 100%)" }}>
        <div className="sr-target">
          <div className="bg-[#c9f31d] inline-flex items-center justify-center px-[24px] py-[10px] rounded-[48px] mb-[24px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#121212] text-[14px] uppercase tracking-widest"><p>What We Do</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[190px] text-black uppercase">
            <p className="leading-[144.4px]">Our</p>
            <p className="leading-[144.4px]">Services</p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[24px] leading-[36px] max-w-[700px] mt-[32px]">
            <p>From startups to established brands, we build scalable technology and beautiful designs that solve real problems.</p>
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ── */}
      <div className="content-stretch flex flex-col items-start px-[76px] py-[120px] relative shrink-0 w-full bg-[#f9f9f9]">
        <div className="sr-target mb-[60px] flex justify-between items-end w-full">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[70px] text-black uppercase max-w-[600px]">
            <p className="leading-[60px]">Solutions that <span className="bg-[#c9f31d] px-[8px]">Scale</span> With You</p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[20px] leading-[32px] max-w-[500px]">
            <p>We combine strategic thinking, technical excellence, and beautiful design to deliver digital products that stand out.</p>
          </div>
        </div>
        
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full gap-[32px]" 
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="bg-white p-[48px] rounded-[4px] shadow-sm border border-[#ececec] group hover:border-[#c9f31d] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#c9f31d] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="w-[80px] h-[80px] bg-[#f8fce8] group-hover:bg-[#c9f31d] transition-colors duration-300 rounded-full flex items-center justify-center text-[40px] mb-[32px]">
                {s.icon}
              </div>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-[#121212] text-[36px] uppercase leading-[1.2] mb-[16px]">
                <p>{s.title}</p>
              </div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[18px] leading-[28px]">
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── PROCESS SECTION ── */}
      <div className="bg-[#121212] content-stretch flex flex-col items-center justify-center px-[76px] py-[120px] relative shrink-0 w-full z-10">
        <div className="sr-target flex flex-col items-center gap-[24px] text-center mb-[80px]">
          <div className="border border-[#c9f31d30] px-[16px] py-[8px] rounded-[3px]">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-[#c9f31d] text-[14px] uppercase tracking-widest"><p>Our Process</p></div>
          </div>
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[80px] text-white uppercase">
            <p className="leading-[70px]">How We Bring Ideas to Life</p>
          </div>
        </div>

        <div className="grid w-full max-w-[1400px] gap-[40px]" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { step: "01", title: "Discovery", desc: "Understanding your vision, business goals, and technical requirements." },
            { step: "02", title: "Design", desc: "Creating intuitive wireframes, UI designs, and interactive prototypes." },
            { step: "03", title: "Development", desc: "Writing clean, scalable code using modern frameworks and best practices." },
            { step: "04", title: "Launch", desc: "Rigorous testing, deployment, and ongoing maintenance." },
          ].map((process, i) => (
            <div key={i} className="sr-target flex flex-col items-start relative">
              {i < 3 && <div className="hidden md:block absolute top-[40px] left-[100px] right-[-40px] h-[1px] bg-gradient-to-r from-[#c9f31d] to-transparent opacity-30"></div>}
              <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] text-[#c9f31d] text-[100px] opacity-20 leading-[1] mb-[-40px] z-0"><p>{process.step}</p></div>
              <div className="[word-break:break-word] font-['Teko:SemiBold',sans-serif] text-white text-[32px] uppercase leading-[1.2] mb-[16px] z-10"><p>{process.title}</p></div>
              <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#999] text-[18px] leading-[28px]"><p>{process.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[76px] py-[120px] relative shrink-0 w-full z-10">
        <div className="sr-target flex flex-col items-center gap-[24px] text-center">
          <div className="[word-break:break-word] font-['Teko:Bold',sans-serif] font-bold leading-[0] text-[120px] text-black uppercase">
            <p className="leading-[100px]">Ready to</p>
            <p className="leading-[100px]"><span className="bg-[#c9f31d] px-[8px]">Start?</span></p>
          </div>
          <div className="[word-break:break-word] font-['Kanit:Regular',sans-serif] text-[#555] text-[22px] leading-[36px] max-w-[600px] mt-[16px]">
            <p>Have a project in mind? Let&apos;s discuss how we can bring your vision to life.</p>
          </div>
          <Link href="/contact" className="bg-[#121212] content-stretch flex items-center gap-[10px] mt-[20px] px-[48px] py-[18px] relative rounded-[3px] shrink-0 hover:bg-[#c9f31d] hover:text-[#121212] transition-colors text-white">
            <div className="[word-break:break-word] font-['Kanit:Medium',sans-serif] text-inherit text-[16px] uppercase tracking-widest"><p>Get In Touch →</p></div>
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesContent />
    </PageWrapper>
  );
}
